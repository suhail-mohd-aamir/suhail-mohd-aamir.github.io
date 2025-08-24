// ObjViewer.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useLoader } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

function Model({ path }) {
  const obj = useLoader(OBJLoader, path);

  // Add default material if missing
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh && !child.material) {
      child.material = new THREE.MeshStandardMaterial({ color: "lightblue" });
    }
  });

  return <primitive object={obj} scale={0.5} />;
}

export default function ObjViewer({ path }) {
  return (
    <Canvas style={{ width: "100%", height: "70vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<span>Loading 3D Model...</span>}>
        <Model path={path} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}