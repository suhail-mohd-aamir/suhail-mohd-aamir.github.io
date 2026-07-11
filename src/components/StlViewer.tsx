import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Bounds, OrbitControls } from "@react-three/drei";
import { STLLoader } from "three-stdlib";

type StlViewerProps = {
  path: string;
  height?: string;
  color?: string;
};

function Model({ path, color = "#7393b3" }: StlViewerProps) {
  const geometry = useLoader(STLLoader, path);
  geometry.computeVertexNormals();

  return (
    <mesh
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={color} metalness={0.55} roughness={0.35} />
    </mesh>
  );
}

export default function StlViewer({ path, height = "60vh", color = "#7393b3" }: StlViewerProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [8, 6, 8], fov: 45 }}
      style={{ width: "100%", height }}
    >
      <ambientLight intensity={0.8} />
      <hemisphereLight intensity={0.5} />
      <directionalLight position={[8, 10, 6]} intensity={1.5} castShadow />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <Model path={path} color={color} />
        </Bounds>
      </Suspense>
      <OrbitControls makeDefault enableDamping />
    </Canvas>
  );
}
