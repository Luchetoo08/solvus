import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Extruder() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.position.x = Math.sin(clock.elapsedTime * 0.65) * 0.9;
    group.current.position.z = Math.cos(clock.elapsedTime * 0.4) * 0.45;
  });

  return (
    <group ref={group} position={[0, 1.05, 0]}>
      {/* Placa del carro */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.65, 0.08, 0.38]} />
        <meshStandardMaterial
          color="#171717"
          metalness={1}
          roughness={0.18}
        />
      </mesh>

      {/* Cuerpo principal */}
      <mesh position={[0, -0.23, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.42, 0.32]} />
        <meshStandardMaterial
          color="#202020"
          metalness={0.9}
          roughness={0.25}
        />
      </mesh>

      {/* Cubierta frontal */}
      <mesh position={[0, -0.23, 0.18]} castShadow>
        <boxGeometry args={[0.38, 0.36, 0.03]} />
        <meshStandardMaterial
          color="#2b2b2b"
          metalness={0.65}
          roughness={0.28}
        />
      </mesh>

      {/* Ventilador */}
      <mesh position={[0, -0.23, 0.195]}>
        <cylinderGeometry args={[0.095, 0.095, 0.02, 40]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Centro ventilador */}
      <mesh position={[0, -0.23, 0.208]}>
        <cylinderGeometry args={[0.025, 0.025, 0.03, 24]} />
        <meshStandardMaterial color="#444" metalness={1} />
      </mesh>

      {/* Disipador */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          position={[0, -0.42 - i * 0.025, -0.02]}
          castShadow
        >
          <boxGeometry args={[0.16, 0.012, 0.16]} />
          <meshStandardMaterial
            color="#9b9b9b"
            metalness={1}
            roughness={0.12}
          />
        </mesh>
      ))}

      {/* Heatbreak */}
      <mesh position={[0, -0.58, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.12, 24]} />
        <meshStandardMaterial
          color="#bdbdbd"
          metalness={1}
          roughness={0.08}
        />
      </mesh>

      {/* Bloque calentador */}
      <mesh position={[0, -0.67, 0]}>
        <boxGeometry args={[0.12, 0.08, 0.12]} />
        <meshStandardMaterial
          color="#a56d2b"
          metalness={0.85}
          roughness={0.18}
        />
      </mesh>

      {/* Nozzle */}
      <mesh position={[0, -0.76, 0]} castShadow>
        <coneGeometry args={[0.035, 0.09, 32]} />
        <meshStandardMaterial
          color="#e5b454"
          emissive="#ff9d00"
          emissiveIntensity={0.55}
          metalness={1}
          roughness={0.05}
        />
      </mesh>

      {/* Sensor izquierdo */}
      <mesh position={[-0.18, -0.18, 0]}>
        <boxGeometry args={[0.05, 0.14, 0.08]} />
        <meshStandardMaterial
          color="#2f2f2f"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Sensor derecho */}
      <mesh position={[0.18, -0.18, 0]}>
        <boxGeometry args={[0.05, 0.14, 0.08]} />
        <meshStandardMaterial
          color="#2f2f2f"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Luz del nozzle */}
      <pointLight
        position={[0, -0.73, 0]}
        intensity={4}
        distance={2}
        color="#37d7ff"
      />
    </group>
  );
}