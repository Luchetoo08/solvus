import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Extruder() {
  const group = useRef<THREE.Group>(null);
  const fan = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // Movimiento tipo impresión CoreXY
    group.current.position.x = Math.sin(t * 0.55) * 0.55;

    group.current.position.z =
      Math.cos(t * 0.45) * 0.22 +
      Math.sin(t * 0.18) * 0.05;

    // Altura cercana a la pieza
    group.current.position.y =
      -0.08 +
      Math.sin(t * 0.35) * 0.015;

    // Pequeñas vibraciones
    group.current.rotation.z =
      Math.sin(t * 1.2) * 0.008;

    group.current.rotation.x =
      Math.cos(t * 1.1) * 0.004;

    if (fan.current) {
      fan.current.rotation.z += 0.42;
    }
  });

  return (
    <group ref={group}>
      {/* ===================== */}
      {/* Carcasa principal */}
      {/* ===================== */}

      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.50, 0.40, 0.40]} />

        <meshPhysicalMaterial
          color="#171717"
          metalness={0.95}
          roughness={0.18}
          clearcoat={1}
        />
      </mesh>

      {/* Parte superior */}

      <mesh position={[0, 0.16, 0]}>
        <boxGeometry args={[0.40, 0.10, 0.34]} />

        <meshStandardMaterial
          color="#111111"
          metalness={0.9}
          roughness={0.22}
        />
      </mesh>

      {/* Frente */}

      <mesh position={[0, 0, 0.215]}>
        <boxGeometry args={[0.31, 0.25, 0.03]} />

        <meshStandardMaterial
          color="#303030"
          metalness={0.85}
          roughness={0.18}
        />
      </mesh>

      {/* Ventilador */}

      <mesh
        ref={fan}
        position={[0, 0, 0.232]}
      >
        <cylinderGeometry
          args={[0.095, 0.095, 0.015, 8]}
        />

        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={2.4}
        />
      </mesh>

      {/* Tornillos */}

      {[
        [-0.10, 0.09],
        [0.10, 0.09],
        [-0.10, -0.09],
        [0.10, -0.09],
      ].map(([x, y], i) => (
        <mesh
          key={i}
          position={[x, y, 0.245]}
        >
          <cylinderGeometry
            args={[0.012, 0.012, 0.01, 16]}
          />

          <meshStandardMaterial
            color="#8b8b8b"
            metalness={1}
            roughness={0.12}
          />
        </mesh>
      ))}

      {/* Disipador */}

      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry
          args={[0.07, 0.08, 0.11, 30]}
        />

        <meshStandardMaterial
          color="#909090"
          metalness={1}
          roughness={0.08}
        />
      </mesh>

      {/* Nozzle */}

      <mesh position={[0, -0.33, 0]}>
        <coneGeometry
          args={[0.055, 0.18, 32]}
        />

        <meshStandardMaterial
          color="#dca43d"
          metalness={1}
          roughness={0.04}
        />
      </mesh>

      {/* Heat Break */}

      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry
          args={[0.018, 0.018, 0.08, 20]}
        />

        <meshStandardMaterial
          color="#bdbdbd"
          metalness={1}
          roughness={0.08}
        />
      </mesh>

      {/* LED */}

      <mesh position={[0, -0.12, 0.205]}>
        <boxGeometry args={[0.18, 0.02, 0.012]} />

        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Filamento */}

      <mesh position={[0, 0.48, 0]}>
        <cylinderGeometry
          args={[0.015, 0.015, 0.58, 20]}
        />

        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.1}
        />
      </mesh>

      {/* Cable */}

      <mesh position={[0, 0.76, -0.02]}>
        <cylinderGeometry
          args={[0.03, 0.03, 0.46, 20]}
        />

        <meshStandardMaterial
          color="#222222"
          roughness={0.8}
        />
      </mesh>

      {/* Luz del nozzle */}

      <pointLight
        position={[0, -0.26, 0]}
        intensity={4.5}
        distance={1}
        color="#38bdf8"
      />
    </group>
  );
}