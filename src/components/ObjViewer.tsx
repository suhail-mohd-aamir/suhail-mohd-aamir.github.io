import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import * as THREE from "three";

type ObjViewerProps = {
    path: string;
}

function Model({ path }: {path: string}) {
  const obj = useLoader(OBJLoader, path);

  // Add default material if missing
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh && !child.material) {
      child.material = new THREE.MeshStandardMaterial({ color: "lightblue" });
    }
  });

  return <primitive object={obj} />;
}

export default function ObjViewer({ path }: ObjViewerProps) {
    if (!path) return <div>No OBJ path provided.</div>;
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <Model path={path} />
        </Bounds>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
