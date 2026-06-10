import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Stars, ContactShadows, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShape({ position, color, scale }) {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <mesh ref={mesh} scale={scale}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshTransmissionMaterial 
          backside 
          samples={4} 
          thickness={1.5} 
          chromaticAberration={0.5} 
          anisotropy={0.3} 
          distortion={0.2} 
          distortionScale={0.3} 
          temporalDistortion={0.1} 
          color={color} 
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function FloatingOrbs() {
  const orbs = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5
      ],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <>
      {orbs.map((orb, i) => (
        <Float key={i} speed={orb.speed} rotationIntensity={1} floatIntensity={3} position={orb.position}>
          <mesh scale={orb.scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#E50914" : "#46d369"} 
              emissive={i % 2 === 0 ? "#E50914" : "#46d369"} 
              emissiveIntensity={2} 
              toneMapped={false} 
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#E50914" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.3} color="#ffffff" />
        
        <AbstractShape position={[3, 0, -2]} color="#E50914" scale={1.5} />
        <AbstractShape position={[-4, 1, -4]} color="#ffffff" scale={1} />
        <AbstractShape position={[0, -3, -3]} color="#B20710" scale={1.2} />
        
        <FloatingOrbs />

        <ContactShadows position={[0, -5, 0]} opacity={0.5} scale={20} blur={2} far={10} />
        <Environment preset="city" />
        <Rig />
      </Canvas>
    </div>
  );
}
