import { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { Button } from "@/components/ui/button";
import { RotateCcw, ZoomIn, ZoomOut, Loader2 } from "lucide-react";
import * as THREE from "three";

interface ModelProps {
  url: string;
}

const Model = ({ url }: ModelProps) => {
  const mesh = useRef<THREE.Group>(null);
  const obj = useLoader(OBJLoader, url);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.5;
      // gentle floating motion for 'space' effect
      const t = state.clock.elapsedTime;
      mesh.current.position.y = Math.sin(t * 0.6) * 0.35;
      mesh.current.position.x = Math.cos(t * 0.3) * 0.25;
      mesh.current.position.z = Math.sin(t * 0.4) * 0.15;
    }
  });

  // Apply a basic material to the loaded model
  if (obj) {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({ 
          color: 0x606060,
          metalness: 0.7,
          roughness: 0.3
        });
      }
    });
  }

  return (
    <group ref={mesh}>
      <primitive object={obj} scale={2} />
    </group>
  );
};

// Simple starfield using points
const Stars = ({ count = 600 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3 + 0] = Math.sin(phi) * Math.cos(theta) * r;
      arr[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r;
      arr[i * 3 + 2] = Math.cos(phi) * r;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={0xffffff} size={0.06} sizeAttenuation transparent opacity={0.8} />
    </points>
  );
};

const LoadingSpinner = () => (
  <Html center>
    <div className="flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <span className="ml-2 text-foreground">Loading 3D Model...</span>
    </div>
  </Html>
);

interface ModelViewerProps {
  modelUrl: string;
  title: string;
  description: string;
}

const ModelViewer = ({ modelUrl, title, description }: ModelViewerProps) => {
  const controlsRef = useRef<any>();
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(1.2);
      controlsRef.current.update();
    }
  };

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(1.2);
      controlsRef.current.update();
    }
  };

  return (
    <div className="model-viewer h-96 w-full">
      {/* 3D Canvas */}
      <Canvas gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }} camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Stars count={650} />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Model url={modelUrl} />
        </Suspense>
        
        <OrbitControls
          ref={controlsRef}
          autoRotate={isAutoRotate}
          autoRotateSpeed={1}
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>

      {/* Controls Overlay */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsAutoRotate(!isAutoRotate)}
          className="shadow-md"
        >
          <RotateCcw size={16} />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleZoomIn}
          className="shadow-md"
        >
          <ZoomIn size={16} />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleZoomOut}
          className="shadow-md"
        >
          <ZoomOut size={16} />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleReset}
          className="shadow-md"
        >
          Reset
        </Button>
      </div>

      {/* Model Info Overlay */}
      <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-lg border border-border">
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

// Placeholder component for when no model is provided
export const PlaceholderModel = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="model-viewer h-96 w-full bg-muted flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 bg-primary/40 rounded"></div>
        </div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <p className="text-xs text-muted-foreground">3D Model placeholder - Upload .OBJ file to view</p>
      </div>
    </div>
  );
};

export default ModelViewer;