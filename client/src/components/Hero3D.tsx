import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Sphere, Float, Stars, Line } from "@react-three/drei";

function Connections({ count = 20 }) {
  const points = useMemo(() => {
    return new Array(count).fill(0).map(() => {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      return [start, end] as [THREE.Vector3, THREE.Vector3];
    });
  }, [count]);

  return (
    <group>
      {points.map((connection, i) => (
        <Line
          key={i}
          points={connection}
          color="#3b82f6"
          opacity={0.3}
          transparent
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Connections />
      {Array.from({ length: 15 }).map((_, i) => (
        <Float 
          key={i} 
          speed={1.5} 
          rotationIntensity={1} 
          floatIntensity={2} 
          position={[
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8
          ]}
        >
          <Sphere args={[0.15, 16, 16]}>
            <meshStandardMaterial 
              color="#60a5fa" 
              emissive="#3b82f6" 
              emissiveIntensity={2} 
              roughness={0.1} 
              metalness={0.8} 
            />
          </Sphere>
        </Float>
      ))}
      <Sphere args={[3.5, 64, 64]} position={[0, 0, 0]}>
         <meshStandardMaterial 
           color="#1e293b"
           wireframe
           transparent
           opacity={0.05}
         />
      </Sphere>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2563eb" />
        
        <FloatingNodes />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <fog attach="fog" args={['#0f172a', 8, 30]} />
      </Canvas>
    </div>
  );
}
