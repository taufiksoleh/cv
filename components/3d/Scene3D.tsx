"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingCube from './FloatingCube';
import FloatingSphere from './FloatingSphere';
import AnimatedTorus from './AnimatedTorus';
import ParticleField from './ParticleField';

export default function Scene3D() {
  return (
    <div className="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />

        {/* 3D Objects */}
        <ParticleField />
        <FloatingCube position={[-3, 0, 0]} color="#0ea5e9" speed={0.8} />
        <FloatingSphere position={[3, 1, -2]} color="#3b82f6" speed={1.2} size={0.7} />
        <FloatingSphere position={[0, -2, -3]} color="#06b6d4" speed={0.6} size={0.5} />
        <AnimatedTorus position={[0, 0, -5]} color="#8b5cf6" />
        <FloatingCube position={[4, -1, -4]} color="#6366f1" speed={1.5} />
      </Canvas>
    </div>
  );
}
