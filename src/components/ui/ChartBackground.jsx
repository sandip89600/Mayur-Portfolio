import React, { useEffect, useRef } from 'react';

export default function ChartBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Candlestick generator
    const candleWidth = 14;
    const candleSpacing = 22;
    const totalCandles = Math.ceil(width / candleSpacing) + 50;

    let currentPrice = height * 0.52;
    let trend = 0;
    const candles = [];

    // Pre-populate candle history
    for (let i = 0; i < totalCandles; i++) {
      if (Math.random() < 0.08) {
        trend = (Math.random() - 0.49) * 2;
      }
      
      const change = (Math.random() - 0.47 + trend * 0.15) * 16;
      const isBullish = change >= 0;
      const open = currentPrice;
      const close = open - change;
      const bodyTop = Math.min(open, close);
      const bodyHeight = Math.max(Math.abs(close - open), 3);
      
      const upperWick = Math.random() * 12;
      const lowerWick = Math.random() * 12;
      const high = bodyTop - upperWick;
      const low = bodyTop + bodyHeight + lowerWick;
      const volume = 8 + Math.random() * 32;

      candles.push({
        open,
        close,
        high,
        low,
        isBullish,
        volume,
        bodyTop,
        bodyHeight,
      });

      currentPrice = close;
      // Keep price bound in middle band
      if (currentPrice < height * 0.25) currentPrice = height * 0.35;
      if (currentPrice > height * 0.75) currentPrice = height * 0.65;
    }

    // Scroll offset (moves Right -> Left)
    let scrollOffset = 0;
    const scrollSpeed = 0.45; // Pixels per frame for smooth institutional glide

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Pure dark base
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle institutional grid
      const gridXSpacing = 90;
      const gridYSpacing = 60;
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.035)';
      ctx.lineWidth = 1;

      // Vertical grid lines
      const gridOffset = scrollOffset % gridXSpacing;
      for (let x = -gridOffset; x < width + gridXSpacing; x += gridXSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal price level grid lines
      for (let y = 0; y < height; y += gridYSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        // Very subtle price labels at right edge
        ctx.fillStyle = 'rgba(212, 175, 55, 0.12)';
        ctx.font = '9px "JetBrains Mono", monospace';
        const simulatedPrice = ((height - y) * 1.5 + 24000).toFixed(1);
        ctx.fillText(simulatedPrice, width - 48, y - 4);
      }

      // 3. Subtle horizontal Support & Resistance Key Levels
      [0.32, 0.48, 0.68].forEach((ratio, idx) => {
        const y = height * ratio;
        ctx.strokeStyle = idx === 1 ? 'rgba(245, 215, 110, 0.08)' : 'rgba(212, 175, 55, 0.05)';
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // 4. Draw continuous Moving Average & glowing chart lines
      ctx.beginPath();
      let firstPoint = true;
      for (let i = 0; i < candles.length; i++) {
        const x = width - (i * candleSpacing - scrollOffset);
        if (x < -50 || x > width + 50) continue;

        const c = candles[i];
        const avgY = (c.open + c.close) / 2;
        if (firstPoint) {
          ctx.moveTo(x, avgY);
          firstPoint = false;
        } else {
          ctx.lineTo(x, avgY);
        }
      }
      ctx.strokeStyle = 'rgba(245, 215, 110, 0.14)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 5. Draw animated Candlesticks (Moving RIGHT -> LEFT)
      for (let i = 0; i < candles.length; i++) {
        // x coordinate moves left as scrollOffset increases
        const x = width - (i * candleSpacing - scrollOffset);
        if (x < -candleSpacing || x > width + candleSpacing) continue;

        const c = candles[i];

        // Color palette: Muted gold for bullish, dark charcoal/graphite for bearish
        const bullishBody = 'rgba(245, 215, 110, 0.16)';
        const bullishWick = 'rgba(212, 175, 55, 0.22)';
        const bearishBody = 'rgba(60, 60, 60, 0.18)';
        const bearishWick = 'rgba(90, 90, 90, 0.18)';

        const bodyFill = c.isBullish ? bullishBody : bearishBody;
        const wickStroke = c.isBullish ? bullishWick : bearishWick;

        // Wick
        ctx.strokeStyle = wickStroke;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, c.high);
        ctx.lineTo(x + candleWidth / 2, c.low);
        ctx.stroke();

        // Candle Body
        ctx.fillStyle = bodyFill;
        ctx.fillRect(x, c.bodyTop, candleWidth, c.bodyHeight);

        // Thin golden highlight border on bullish candles
        if (c.isBullish) {
          ctx.strokeStyle = 'rgba(245, 215, 110, 0.28)';
          ctx.lineWidth = 0.8;
          ctx.strokeRect(x, c.bodyTop, candleWidth, c.bodyHeight);
        }

        // Faint bottom Volume Bars
        const volHeight = c.volume;
        const volY = height - 30 - volHeight;
        ctx.fillStyle = c.isBullish ? 'rgba(212, 175, 55, 0.08)' : 'rgba(50, 50, 50, 0.08)';
        ctx.fillRect(x, volY, candleWidth, volHeight);
      }

      // Advance scroll position (Right -> Left movement)
      scrollOffset += scrollSpeed;

      // When a candle moves past the left boundary, push new candle to the right
      if (scrollOffset >= candleSpacing) {
        scrollOffset -= candleSpacing;
        
        // Generate next continuous candle
        const lastCandle = candles[0];
        const change = (Math.random() - 0.48) * 16;
        const isBullish = change >= 0;
        const open = lastCandle.close;
        const close = open - change;
        const bodyTop = Math.min(open, close);
        const bodyHeight = Math.max(Math.abs(close - open), 3);
        const upperWick = Math.random() * 12;
        const lowerWick = Math.random() * 12;

        candles.pop(); // Remove oldest candle off-screen
        candles.unshift({
          open,
          close,
          high: bodyTop - upperWick,
          low: bodyTop + bodyHeight + lowerWick,
          isBullish,
          volume: 8 + Math.random() * 32,
          bodyTop,
          bodyHeight,
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
