"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#0ea5e9"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
