import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import { AnimationMixer } from 'three';

export default function Libro() {
  const modelLibro =  useGLTF('./models/libro2.glb');
  const mixer = useRef(null);

  
  

  useEffect(() => {
    if (modelLibro && modelLibro.animations.length) {
      mixer.current = new AnimationMixer(modelLibro.scene);
      const action = mixer.current.clipAction(modelLibro.animations[0]);
      action.play();
    }
  }, [modelLibro]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <>
      <primitive object={modelLibro.scene} />
    </>
  );
}