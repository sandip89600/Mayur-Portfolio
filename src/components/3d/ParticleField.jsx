import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 180, mousePosition }) {
  const pointsRef = useRef();
  const barsRef = useRef();

  // Generate random particle positions & sizes
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const goldColors = [
      new THREE.Color('#00D2FF'),
      new THREE.Color('#F5D76E'),
      new THREE.Color('#3A7BD5'),
      new THREE.Color('#9B51E0'),
      new THREE.Color('#888888'),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;

      const c = goldColors[Math.floor(Math.random() * goldColors.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = mousePosition?.current?.x || 0;
    const mouseY = mousePosition?.current?.y || 0;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03 + (mouseX * 0.05);
      pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.05 - (mouseY * 0.05);
    }

    if (barsRef.current) {
      barsRef.current.rotation.y = -time * 0.02;
    }
  });

  return (
    <>
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
          size={0.045}
          vertexColors={true}
          transparent={true}
          opacity={0.75}
          blending={THREE.AdditiveBlending}
          sizeAttenuation={true}
        />
      </points>

      {/* Subtle floating 3D depth bars simulating terminal data points */}
      <group ref={barsRef} position={[0, -2, -3]}>
        {[-3, -1.5, 0, 1.5, 3].map((x, i) => (
          <mesh key={i} position={[x, (i % 2) * 0.5, 0]}>
            <boxGeometry args={[0.02, 0.6 + (i % 3) * 0.4, 0.02]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#00D2FF" : "#444444"}
              transparent={true}
              opacity={0.35}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}
