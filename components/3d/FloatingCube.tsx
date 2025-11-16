"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingCubeProps {
  position: [number, number, number];
  color?: string;
  speed?: number;
}

export default function FloatingCube({ position, color = "#0ea5e9", speed = 1 }: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime() * speed;
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.position.y = position[1] + Math.sin(time) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
