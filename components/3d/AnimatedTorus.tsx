"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface AnimatedTorusProps {
  position: [number, number, number];
  color?: string;
}

export default function AnimatedTorus({ position, color = "#8b5cf6" }: AnimatedTorusProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.4;
    meshRef.current.rotation.y = time * 0.6;
    meshRef.current.rotation.z = time * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.2, 0.4, 16, 100]} />
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.4}
        wireframe
      />
    </mesh>
  );
}
