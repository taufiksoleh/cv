"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingSphereProps {
  position: [number, number, number];
  color?: string;
  speed?: number;
  size?: number;
}

export default function FloatingSphere({
  position,
  color = "#3b82f6",
  speed = 1,
  size = 0.8
}: FloatingSphereProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime() * speed;
    meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.5;
    meshRef.current.position.x = position[0] + Math.cos(time) * 0.2;
    meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        emissive={color}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}
