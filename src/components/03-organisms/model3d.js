import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const MyModel = ({ url, scrollProgress }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.z = -5 * scrollProgress;

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = 1 - scrollProgress;
        }
      });
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 20, 0]}
    />
  );
};

const Model3D = ({ modelUrl, scrollProgress }) => {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableRotate = false;
      controlsRef.current.enableZoom = false;
    }
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none z-10">
      <Canvas
        style={{
          width: '100%',
          height: '100vh',
          pointerEvents: 'none',
        }}
        camera={{
          position: [0, 0, 5],
          fov: 1000,
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={null}>
          <MyModel url={modelUrl} scrollProgress={scrollProgress} />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          autoRotate
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Model3D;
