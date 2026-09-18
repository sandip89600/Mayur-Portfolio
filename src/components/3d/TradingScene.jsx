import React, { Suspense, useRef, useEffect, useState, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn("WebGL fallback:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// Vibrant Colorful Market Atmosphere Particles (Gold, Cyan, Blue, Purple, Magenta, Green)
function ColorfulMarketDust({ mousePosition, count = 160 }) {
  const pointsRef = useRef();

  const [positions, colors] = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    // Multi-color vibrant palette
    const colorPalette = [
      new THREE.Color('#F5D76E'), // Luxury Gold
      new THREE.Color('#00D2FF'), // Electric Cyan
      new THREE.Color('#3A7BD5'), // Electric Blue
      new THREE.Color('#9B51E0'), // Purple
      new THREE.Color('#EC4899'), // Magenta
      new THREE.Color('#10B981'), // Green
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = mousePosition?.current?.x || 0;
    const mouseY = mousePosition?.current?.y || 0;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02 + (mouseX * 0.035);
      pointsRef.current.rotation.x = Math.sin(time * 0.015) * 0.02 - (mouseY * 0.035);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors={true}
        transparent={true}
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function TradingScene() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      {/* Multi-color Ambient Radial Backing Light Highlights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 opacity-70 pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-gradient-to-r from-gold/15 via-amber-500/10 to-transparent opacity-60 pointer-events-none blur-3xl" />

      <WebGLErrorBoundary>
        <Canvas
          dpr={[1, isMobile ? 1.2 : 1.5]}
          camera={{ position: [0, 0, 5], fov: isMobile ? 55 : 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[3, 3, 3]} intensity={1.5} color="#00D2FF" />
            <directionalLight position={[-3, -3, 2]} intensity={1.2} color="#F5D76E" />
            <ColorfulMarketDust mousePosition={mousePosition} count={isMobile ? 70 : 160} />
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
