import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Extruder() {
  const group = useRef<THREE.Group>(null);
  const fan = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!group.current) return;

    // Movimiento de impresión
    group.current.position.x = Math.sin(t * 0.8) * 0.95;
    group.current.position.z = Math.cos(t * 0.65) * 0.45;
    group.current.position.y = 0.93 + Math.sin(t * 1.6) * 0.01;

    // Ligera inclinación
    group.current.rotation.z = Math.sin(t * 0.8) * 0.015;
    group.current.rotation.x = Math.cos(t * 0.6) * 0.01;

    if (fan.current) {
      fan.current.rotation.z += 0.55;
    }
  });

  return (
    <group ref={group}>
      {/* ===========================
          CUERPO PRINCIPAL
      ============================ */}

      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.42, 0.34, 0.34]} />

        <meshPhysicalMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.25}
          clearcoat={1}
        />
      </mesh>

      {/* ===========================
          CARCASA SUPERIOR
      ============================ */}

      <mesh position={[0, 0.13, 0]}>
        <boxGeometry args={[0.34, 0.08, 0.28]} />

        <meshStandardMaterial
          color="#111111"
          metalness={0.85}
          roughness={0.22}
        />
      </mesh>

      {/* ===========================
          PLACA FRONTAL
      ============================ */}

      <mesh position={[0, 0, 0.175]}>
        <boxGeometry args={[0.28, 0.22, 0.025]} />

        <meshStandardMaterial
          color="#2c2c2c"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* ===========================
          VENTILADOR
      ============================ */}

      <mesh ref={fan} position={[0, 0, 0.188]}>
        <cylinderGeometry args={[0.085, 0.085, 0.012, 6]} />

        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={2.2}
        />
      </mesh>

      {/* ===========================
          LED
      ============================ */}

      <mesh position={[0, -0.09, 0.17]}>
        <boxGeometry args={[0.18, 0.025, 0.01]} />

        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* ===========================
          NOZZLE
      ============================ */}

      <mesh position={[0, -0.25, 0]}>
        <coneGeometry args={[0.045, 0.13, 32]} />

        <meshStandardMaterial
          color="#d6a43d"
          metalness={1}
          roughness={0.08}
        />
      </mesh>

      {/* ===========================
          DISIPADOR
      ============================ */}

      <mesh position={[0, -0.12, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.08, 24]} />

        <meshStandardMaterial
          color="#8c8c8c"
          metalness={1}
          roughness={0.12}
        />
      </mesh>

      {/* ===========================
          FILAMENTO
      ============================ */}

      <mesh position={[0, 0.34, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.48, 20]} />

        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* ===========================
          CABLE
      ============================ */}

      <mesh position={[0, 0.48, -0.02]}>
        <cylinderGeometry args={[0.028, 0.028, 0.28, 20]} />

        <meshStandardMaterial
          color="#202020"
          roughness={0.7}
        />
      </mesh>

      {/* ===========================
          LUZ DEL NOZZLE
      ============================ */}

      <pointLight
        position={[0, -0.18, 0]}
        intensity={7}
        distance={1.5}
        color="#38bdf8"
      />
    </group>
  );
}