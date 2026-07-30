export default function PrintBed() {
  return (
    <group position={[0, -0.98, 0]}>
      {/* ===========================
          BASE DEL EJE Y
      ============================ */}

      <mesh
        position={[0, -0.20, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.35, 0.22, 2.35]} />
        <meshStandardMaterial
          color="#101010"
          metalness={0.95}
          roughness={0.18}
        />
      </mesh>

      {/* ===========================
          CARRIAGE
      ============================ */}

      <mesh
        position={[0, -0.08, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.18, 0.06, 2.18]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.82}
          roughness={0.30}
        />
      </mesh>

      {/* ===========================
          PLACA MAGNÉTICA
      ============================ */}

      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.05, 0.028, 2.05]} />
        <meshStandardMaterial
          color="#3c4048"
          metalness={0.45}
          roughness={0.72}
        />
      </mesh>

      {/* ===========================
          LÁMINA PEI
      ============================ */}

      <mesh
        position={[0, 0.018, 0]}
        receiveShadow
      >
        <boxGeometry args={[2, 0.008, 2]} />

        <meshStandardMaterial
          color="#1a1f26"
          roughness={1}
          metalness={0.05}
        />
      </mesh>

      {/* Textura simulada */}

      <mesh position={[0, 0.023, 0]}>
        <planeGeometry args={[1.96, 1.96]} />

        <meshBasicMaterial
          color="#242d38"
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* ===========================
          RESORTES
      ============================ */}

      {[
        [-0.82, -0.08, -0.82],
        [0.82, -0.08, -0.82],
        [-0.82, -0.08, 0.82],
        [0.82, -0.08, 0.82],
      ].map((p, i) => (
        <mesh
          key={i}
          position={p as [number, number, number]}
        >
          <cylinderGeometry
            args={[0.045, 0.045, 0.18, 20]}
          />

          <meshStandardMaterial
            color="#c8c8c8"
            metalness={1}
            roughness={0.05}
          />
        </mesh>
      ))}

      {/* ===========================
          PERILLAS
      ============================ */}

      {[
        [-0.82, -0.19, -0.82],
        [0.82, -0.19, -0.82],
        [-0.82, -0.19, 0.82],
        [0.82, -0.19, 0.82],
      ].map((p, i) => (
        <mesh
          key={i}
          position={p as [number, number, number]}
        >
          <cylinderGeometry
            args={[0.085, 0.085, 0.05, 32]}
          />

          <meshStandardMaterial
            color="#151515"
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>
      ))}

      {/* ===========================
          GUÍAS LINEALES
      ============================ */}

      <mesh position={[-0.98, -0.15, 0]}>
        <boxGeometry args={[0.07, 0.07, 2.05]} />

        <meshStandardMaterial
          color="#d4d4d4"
          metalness={1}
          roughness={0.05}
        />
      </mesh>

      <mesh position={[0.98, -0.15, 0]}>
        <boxGeometry args={[0.07, 0.07, 2.05]} />

        <meshStandardMaterial
          color="#d4d4d4"
          metalness={1}
          roughness={0.05}
        />
      </mesh>

      {/* ===========================
          LOGO SOLVUS
      ============================ */}

      <mesh position={[0, 0.026, 0]}>
        <planeGeometry args={[0.45, 0.12]} />

        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}