import { Suspense, useRef, useState } from "react";
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
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
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