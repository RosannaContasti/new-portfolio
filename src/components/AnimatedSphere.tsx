// components/AnimatedSphere.tsx
"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const RotatingSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/ground_0025_normal_directx_4k.png"
  );

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1); // Podés jugar con estos valores

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.rotation.x += 0.003;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <torusKnotGeometry args={[1, 0.4, 128, 16]} />
      {/* <sphereGeometry args={[2, 64, 64]} /> */}
      <meshStandardMaterial
        map={texture}
        color={"#ffff"}
        toneMapped={false}
        emissive={"#ffffff"}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

export default function AnimatedSphere() {
  return (
    <div className="absolute right-0 top-0 w-[50%] h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <RotatingSphere />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
