import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type GlbViewerProps = {
    path: string;
}

function Model({ path }: {path: string}) {
  useGLTF.preload(path);
  const { scene } = useGLTF(path) as any;
  // compute bounding box and automatically scale & center the model
  const box = new THREE.Box3().setFromObject(scene);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const scaleFactor = 10 / maxDim;
  scene.scale.setScalar(scaleFactor);

  // re-center after scaling
  const center = new THREE.Vector3();
  box.getCenter(center);
  // move the object's origin so it's centered in the scene
  scene.position.sub(center).multiplyScalar(scaleFactor);

  // Add default material if missing
  scene.traverse((child: any) => {
    if (child.isMesh && !child.material) {
      child.material = new THREE.MeshStandardMaterial({ color: "lightblue" });
    }
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return <primitive object={scene} />;
}

export default function GlbViewer({ path }: GlbViewerProps) {
    if (!path) return <div>No GLB path provided.</div>;
    
    return (
        <Canvas 
        shadows
        camera={{ position: [10, 10, 10], fov: 50 }}
        style={{ width: "100%", height: "60vh" }}>
            <ambientLight intensity={0.6} />
            <hemisphereLight intensity={0.35} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <Model path={path} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}