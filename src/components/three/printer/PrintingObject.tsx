import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function PrintingObject() {
  const printed = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = (Math.sin(clock.elapsedTime * 0.45) + 1) / 2;

    const height = 0.05 + t * 0.9;

    if (printed.current) {
      printed.current.scale.y = height;
      printed.current.position.y = height / 2;
    }

    if (glow.current) {
      glow.current.scale.y = height;
      glow.current.position.y = height / 2;

      (
        glow.current.material as THREE.MeshStandardMaterial
      ).emissiveIntensity = 0.35 + Math.sin(clock.elapsedTime * 8) * 0.12;
    }
  });

  return (
    <group position={[0, -1.05, 0]}>
      {/* Pieza principal */}

      <mesh ref={printed} castShadow receiveShadow>
        <boxGeometry args={[0.8, 1, 0.8]} />

        <meshStandardMaterial
          color="#3f4954"
          metalness={0.25}
          roughness={0.82}
        />
      </mesh>

      {/* Resplandor */}

      <mesh ref={glow}>
        <boxGeometry args={[0.82, 1.01, 0.82]} />

        <meshStandardMaterial
          transparent
          opacity={0.18}
          color="#57b8ff"
          emissive="#57b8ff"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Capas horizontales */}

      {Array.from({ length: 55 }).map((_, i) => (
        <mesh
          key={i}
          position={[0, i * 0.018, 0]}
        >
          <boxGeometry args={[0.81, 0.002, 0.81]} />

          <meshStandardMaterial
            color="#6fc6ff"
            emissive="#6fc6ff"
            emissiveIntensity={0.12}
          />
        </mesh>
      ))}
    </group>
  );
}