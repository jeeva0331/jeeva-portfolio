import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Knot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.18;
    ref.current.rotation.y = state.clock.elapsedTime * 0.26;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.3}>
      <mesh ref={ref} scale={1.25}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={0.35}
          roughness={0.18}
          metalness={0.9}
          distort={0.28}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

function GlassIcosa() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron args={[0.7, 0]} position={[2.3, 1.1, -1]}>
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={0.4}
          roughness={0.25}
          metalness={0.8}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

function Ring() {
  return (
    <Float speed={1.1} rotationIntensity={1.4} floatIntensity={1.5}>
      <Torus args={[0.55, 0.16, 24, 80]} position={[-2.4, -1, 0]}>
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#06b6d4"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -3, 2]} intensity={0.8} color="#fbbf24" />
        <Knot />
        <GlassIcosa />
        <Ring />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
