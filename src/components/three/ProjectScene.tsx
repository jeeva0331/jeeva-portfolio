import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Shape({ shape }: { shape: 'box' | 'sphere' | 'octa' }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.3;
    ref.current.rotation.y += delta * 0.4;
    const target = hovered ? 1.15 : 1;
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.12);
  });

  const geometry =
    shape === 'box'
      ? <boxGeometry args={[1.4, 1.4, 1.4]} />
      : shape === 'sphere'
      ? <icosahedronGeometry args={[1, 1]} />
      : <octahedronGeometry args={[1.1, 0]} />;

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.6}>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {geometry}
        <meshStandardMaterial
          color={hovered ? '#22d3ee' : '#0e7490'}
          emissive="#06b6d4"
          emissiveIntensity={hovered ? 0.6 : 0.25}
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}

// Compact 3D scene used inside project cards as a hover-reactive centerpiece.
export default function ProjectScene({ shape = 'box' as 'box' | 'sphere' | 'octa' }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-3, -2, 1]} intensity={0.6} color="#fbbf24" />
        <Shape shape={shape} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
