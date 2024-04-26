import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// import CanvasLoader from '../Loader';
import { EarthFall } from '../../assets';

const Earth = ({ scaleValue }) => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive
      // eslint-disable-next-line react/no-unknown-property
      object={earth.scene}
      scale={scaleValue}
      // eslint-disable-next-line react/no-unknown-property
      position-y={0}
      // eslint-disable-next-line react/no-unknown-property
      rotation-y={0}
    />
  );
};

const EarthCanvas = ({ scaleValue }) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={EarthFall}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth scaleValue={scaleValue} />
      </Suspense>
    </Canvas>
  );
};
export default EarthCanvas;
