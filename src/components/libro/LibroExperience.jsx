import { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import { Float, Center, Environment, OrbitControls } from '@react-three/drei';
import Libro from './Libro';



export default function LibroExperience() {

    const groupRef = useRef()



  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta / 5

  })

  return (
    <>
       <OrbitControls enableZoom={false} /> 
      <Environment preset='city' />
      


        <Float floatIntensity={2} >
           <Center>
                <group ref={groupRef} >
                    <Libro />
                </group>
            </Center>
            
        </Float>

        

    </>
  )}