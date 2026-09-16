import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FinancialOrb({ mousePosition }) {
  const groupRef = useRef();
  const coreRef = useRef();
  const wireRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const mouseX = mousePosition?.current?.x || 0;
    const mouseY = mousePosition?.current?.y || 0;

    // Subtle group mouse parallax
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        time * 0.12 + (mouseX * 0.25),
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        Math.sin(time * 0.2) * 0.08 - (mouseY * 0.15),
        0.05
      );
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.1;
    }

    // Core sphere rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.2;
    }

    // Wireframe outer cage
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.15;
      wireRef.current.rotation.z += delta * 0.08;
    }

    // Market cycle orbital rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.4) * 0.1;
      ring1Ref.current.rotation.y += delta * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -Math.PI / 4 + Math.cos(time * 0.3) * 0.1;
      ring2Ref.current.rotation.z += delta * 0.2;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = Math.PI / 6;
      ring3Ref.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -0.5]}>
      {/* 1. Inner Core Metallic Sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshPhysicalMaterial
          color="#060c18"
          emissive="#004466"
          emissiveIntensity={0.4}
          roughness={0.12}
          metalness={0.95}
          clearcoat={1.0}
          clearcoatRoughness={0.08}
          reflectivity={0.9}
          transparent={true}
          opacity={0.88}
        />
      </mesh>

      {/* 2. Concentric Geometric Lattice */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial
          color="#00D2FF"
          wireframe={true}
          transparent={true}
          opacity={0.3}
          metalness={0.9}
          roughness={0.2}
          emissive="#00D2FF"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* 3. Market Cycle Ring 1 (Cyan Glow) */}
      <group ref={ring1Ref}>
        <mesh>
          <torusGeometry args={[1.9, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#00D2FF"
            emissive="#00D2FF"
            emissiveIntensity={0.9}
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[1.9, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
      </group>

      {/* 4. Market Cycle Ring 2 (Gold/Purple Hue) */}
      <group ref={ring2Ref}>
        <mesh>
          <torusGeometry args={[2.2, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#9B51E0"
            emissive="#7F00FF"
            emissiveIntensity={0.7}
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
        <mesh position={[-2.2, 0, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#00D2FF" />
        </mesh>
      </group>

      {/* 5. Market Cycle Ring 3 */}
      <group ref={ring3Ref}>
        <mesh>
          <torusGeometry args={[2.5, 0.012, 16, 120]} />
          <meshStandardMaterial
            color="#F5D76E"
            emissive="#D4AF37"
            emissiveIntensity={0.5}
            metalness={0.85}
            roughness={0.3}
            transparent={true}
            opacity={0.65}
          />
        </mesh>
      </group>

      {/* 6. Central Point Glow Inside the Orb */}
      <pointLight color="#00D2FF" intensity={2.8} distance={6} decay={2} />
      <pointLight color="#F5D76E" intensity={1.5} distance={4} decay={2} />
    </group>
  );
}
