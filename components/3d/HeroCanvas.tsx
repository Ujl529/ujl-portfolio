"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#38bdf8"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
