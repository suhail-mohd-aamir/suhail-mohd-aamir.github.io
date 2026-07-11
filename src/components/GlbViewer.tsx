import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type GlbViewerProps = {
    path: string;
    height?: string;
    color?: string;
}

function Model({ path, color }: { path: string; color?: string }) {
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
    if (child.isMesh && color) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      const coloredMaterials = materials.map((material: THREE.Material) => {
        const coloredMaterial = material.clone() as THREE.MeshStandardMaterial;
        coloredMaterial.color?.set(color);
        coloredMaterial.metalness = 0.55;
        coloredMaterial.roughness = 0.35;
        return coloredMaterial;
      });
      child.material = Array.isArray(child.material) ? coloredMaterials : coloredMaterials[0];
    }
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return <primitive object={scene} />;
}

export default function GlbViewer({ path, height = "60vh", color }: GlbViewerProps) {
    if (!path) return <div>No GLB path provided.</div>;
    
    return (
        <Canvas 
        shadows
        camera={{ position: [10, 10, 10], fov: 50 }}
        style={{ width: "100%", height }}>
            <ambientLight intensity={0.6} />
            <hemisphereLight intensity={0.35} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <Model path={path} color={color} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
