export default function PrintBed() {
  return (
    <group position={[0, -1.08, 0]}>
      {/* Base inferior */}

      <mesh castShadow receiveShadow position={[0, -0.18, 0]}>
        <boxGeometry args={[2.8, 0.18, 2.8]} />
        <meshStandardMaterial
          color="#121212"
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>

      {/* Carro */}

      <mesh castShadow receiveShadow position={[0, -0.08, 0]}>
        <boxGeometry args={[2.55, 0.05, 2.55]} />
        <meshStandardMaterial
          color="#2b2b2b"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Placa magnética */}

      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.42, 0.03, 2.42]} />
        <meshStandardMaterial
          color="#31363d"
          metalness={0.35}
          roughness={0.82}
        />
      </mesh>

      {/* PEI */}

      <mesh receiveShadow position={[0, 0.021, 0]}>
        <boxGeometry args={[2.38, 0.008, 2.38]} />
        <meshStandardMaterial
          color="#1f2328"
          roughness={1}
          metalness={0.05}
        />
      </mesh>

      {/* Resortes */}

      {[
        [-0.95, -0.08, -0.95],
        [0.95, -0.08, -0.95],
        [-0.95, -0.08, 0.95],
        [0.95, -0.08, 0.95],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <cylinderGeometry args={[0.05, 0.05, 0.18, 18]} />
          <meshStandardMaterial
            color="#b7b7b7"
            metalness={1}
            roughness={0.08}
          />
        </mesh>
      ))}

      {/* Perillas */}

      {[
        [-0.95, -0.2, -0.95],
        [0.95, -0.2, -0.95],
        [-0.95, -0.2, 0.95],
        [0.95, -0.2, 0.95],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <cylinderGeometry args={[0.09, 0.09, 0.05, 32]} />
          <meshStandardMaterial
            color="#171717"
            metalness={0.85}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Guía izquierda */}

      <mesh position={[-1.15, -0.16, 0]}>
        <boxGeometry args={[0.08, 0.08, 2.6]} />
        <meshStandardMaterial
          color="#bcbcbc"
          metalness={1}
          roughness={0.08}
        />
      </mesh>

      {/* Guía derecha */}

      <mesh position={[1.15, -0.16, 0]}>
        <boxGeometry args={[0.08, 0.08, 2.6]} />
        <meshStandardMaterial
          color="#bcbcbc"
          metalness={1}
          roughness={0.08}
        />
      </mesh>
    </group>
  );
}