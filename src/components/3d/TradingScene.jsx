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
    console.warn("WebGL fallback active:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// Ultra subtle floating gold atmospheric particles
function SubtleGoldDust({ mousePosition, count = 120 }) {
  const pointsRef = useRef();

  const [positions, colors] = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const goldPalette = [
      new THREE.Color('#D4AF37'),
      new THREE.Color('#F5D76E'),
      new THREE.Color('#C9A227'),
      new THREE.Color('#997D20'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const c = goldPalette[Math.floor(Math.random() * goldPalette.length)];
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
      pointsRef.current.rotation.y = time * 0.015 + (mouseX * 0.03);
      pointsRef.current.rotation.x = Math.sin(time * 0.01) * 0.02 - (mouseY * 0.03);
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
        size={0.035}
        vertexColors={true}
        transparent={true}
        opacity={0.45}
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
      {/* Ambient Gold Radial Center Backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial-gold opacity-30 pointer-events-none blur-3xl" />

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
            <ambientLight intensity={0.3} />
            <directionalLight position={[3, 3, 3]} intensity={1.2} color="#F5D76E" />
            <SubtleGoldDust mousePosition={mousePosition} count={isMobile ? 60 : 120} />
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
