import { Canvas } from '@react-three/fiber';
import LibroExperience from './LibroExperience.jsx';

export default function LibroModel() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas 
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 5] // Asegúrate de que la cámara esté correctamente posicionada
        }} 
        style={{ width: '600px', height: '100%' }}
      >
        <LibroExperience />
      </Canvas>
    </div>
  );
}
