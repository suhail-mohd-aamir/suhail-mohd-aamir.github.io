import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, OrbitControls, Text3D } from "@react-three/drei";
import { Component, ErrorInfo, ReactNode, Suspense, useRef } from "react";
import * as THREE from "three";

class ThreeDErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("3D name could not be rendered", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full items-center justify-center px-4 text-center">
          <h1 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Mohd Aamir Suhail
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

const AnimatedText = () => {
  const groupRef = useRef<THREE.Group>(null);
  const viewport = useThree((state) => state.viewport);
  const responsiveScale = Math.min(1, viewport.width / 12);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Center>
      <group ref={groupRef} scale={responsiveScale}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.25}
          height={0.2}
          curveSegments={16}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.05}
          bevelOffset={0}
          bevelSegments={8}
        >
          Mohd Aamir Suhail
          <meshStandardMaterial
            color="#67e8f9"
            metalness={0.75}
            roughness={0.12}
            emissive="#0891b2"
            emissiveIntensity={0.75}
          />
        </Text3D>
      </group>
    </Center>
  );
};

const ThreeDName = () => (
  <div className="my-4 h-40 w-full cursor-grab overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.12)] md:h-48 active:cursor-grabbing">
    <ThreeDErrorBoundary>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.8} color="#ffffff" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.7}
          color="#22d3ee"
        />
        <pointLight position={[6, -3, 4]} intensity={1.2} color="#a78bfa" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.5}
          penumbra={1}
          intensity={1}
          color="#67e8f9"
        />

        <Suspense fallback={null}>
          <AnimatedText />
        </Suspense>

        <gridHelper
          args={[20, 20, "#0891b2", "#1e293b"]}
          position={[0, -2, 0]}
        />
        <axesHelper args={[3]} position={[0, -2, 0]} />

        <OrbitControls
          enableZoom
          enablePan={false}
          enableRotate
          minDistance={6}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </ThreeDErrorBoundary>
  </div>
);

export default ThreeDName;
