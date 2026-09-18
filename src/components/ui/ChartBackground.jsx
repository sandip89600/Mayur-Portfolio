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

    const candleWidth = 14;
    const candleSpacing = 24;
    const totalCandles = Math.ceil(width / candleSpacing) + 40;

    let currentPrice = height * 0.52;
    let trend = 0;
    const candles = [];

    // Initialize candle series
    for (let i = 0; i < totalCandles; i++) {
      if (Math.random() < 0.09) {
        trend = (Math.random() - 0.49) * 2.2;
      }
      
      const change = (Math.random() - 0.47 + trend * 0.15) * 18;
      const isBullish = change >= 0;
      const open = currentPrice;
      const close = open - change;
      const bodyTop = Math.min(open, close);
      const bodyHeight = Math.max(Math.abs(close - open), 3);
      
      const upperWick = Math.random() * 12;
      const lowerWick = Math.random() * 12;
      const high = bodyTop - upperWick;
      const low = bodyTop + bodyHeight + lowerWick;
      const volume = 8 + Math.random() * 30;

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
      if (currentPrice < height * 0.22) currentPrice = height * 0.32;
      if (currentPrice > height * 0.78) currentPrice = height * 0.68;
    }

    let scrollOffset = 0;
    const scrollSpeed = 0.5; // Smooth continuous glide from RIGHT to LEFT

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Pure dark backdrop
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle market grid
      const gridXSpacing = 90;
      const gridYSpacing = 60;
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.035)';
      ctx.lineWidth = 1;

      const gridOffset = scrollOffset % gridXSpacing;
      for (let x = -gridOffset; x < width + gridXSpacing; x += gridXSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridYSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Subtle dashed support/resistance price levels
      [0.3, 0.5, 0.7].forEach((ratio, idx) => {
        const y = height * ratio;
        ctx.strokeStyle = idx === 1 ? 'rgba(0, 210, 255, 0.07)' : 'rgba(212, 175, 55, 0.05)';
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // 4. Moving Average Colorful Trend Line
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
      
      // Gradient glowing trend stroke
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(0, 210, 255, 0.18)');
      gradient.addColorStop(0.5, 'rgba(245, 215, 110, 0.22)');
      gradient.addColorStop(1, 'rgba(155, 81, 224, 0.18)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(0, 210, 255, 0.35)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 5. Draw Candlesticks moving RIGHT -> LEFT
      for (let i = 0; i < candles.length; i++) {
        const x = width - (i * candleSpacing - scrollOffset);
        if (x < -candleSpacing || x > width + candleSpacing) continue;

        const c = candles[i];

        // Colorful subtle candle styling
        const bullishBody = 'rgba(245, 215, 110, 0.18)';
        const bullishWick = 'rgba(212, 175, 55, 0.25)';
        const bearishBody = 'rgba(70, 70, 80, 0.16)';
        const bearishWick = 'rgba(100, 100, 110, 0.18)';

        const bodyFill = c.isBullish ? bullishBody : bearishBody;
        const wickStroke = c.isBullish ? bullishWick : bearishWick;

        // Wick
        ctx.strokeStyle = wickStroke;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, c.high);
        ctx.lineTo(x + candleWidth / 2, c.low);
        ctx.stroke();

        // Body
        ctx.fillStyle = bodyFill;
        ctx.fillRect(x, c.bodyTop, candleWidth, c.bodyHeight);

        if (c.isBullish) {
          ctx.strokeStyle = 'rgba(245, 215, 110, 0.35)';
          ctx.lineWidth = 0.8;
          ctx.strokeRect(x, c.bodyTop, candleWidth, c.bodyHeight);
        }

        // Volume bar
        const volHeight = c.volume;
        const volY = height - 25 - volHeight;
        ctx.fillStyle = c.isBullish ? 'rgba(0, 210, 255, 0.08)' : 'rgba(70, 70, 70, 0.06)';
        ctx.fillRect(x, volY, candleWidth, volHeight);
      }

      scrollOffset += scrollSpeed;

      if (scrollOffset >= candleSpacing) {
        scrollOffset -= candleSpacing;
        
        const lastCandle = candles[0];
        const change = (Math.random() - 0.48) * 18;
        const isBullish = change >= 0;
        const open = lastCandle.close;
        const close = open - change;
        const bodyTop = Math.min(open, close);
        const bodyHeight = Math.max(Math.abs(close - open), 3);
        const upperWick = Math.random() * 12;
        const lowerWick = Math.random() * 12;

        candles.pop();
        candles.unshift({
          open,
          close,
          high: bodyTop - upperWick,
          low: bodyTop + bodyHeight + lowerWick,
          isBullish,
          volume: 8 + Math.random() * 30,
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
