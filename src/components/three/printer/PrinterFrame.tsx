import type { ThreeElements } from "@react-three/fiber";

const frameMaterial = (
  <meshStandardMaterial
    color="#171717"
    metalness={0.95}
    roughness={0.18}
  />
);

const railMaterial = (
  <meshStandardMaterial
    color="#c7ccd2"
    metalness={1}
    roughness={0.05}
  />
);

function Vertical(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[0.08, 2.7, 0.08]} />
      {frameMaterial}
    </mesh>
  );
}

function BeamX(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[2.8, 0.08, 0.08]} />
      {frameMaterial}
    </mesh>
  );
}

function BeamZ(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[0.08, 0.08, 2.7]} />
      {frameMaterial}
    </mesh>
  );
}

export default function PrinterFrame() {
  return (
    <group>
      {/* =======================
          COLUMNAS
      ======================= */}

      <Vertical position={[-1.4, -0.05, -1.35]} />
      <Vertical position={[1.4, -0.05, -1.35]} />
      <Vertical position={[-1.4, -0.05, 1.35]} />
      <Vertical position={[1.4, -0.05, 1.35]} />

      {/* =======================
          BASE
      ======================= */}

      <BeamX position={[0, -1.4, -1.35]} />
      <BeamX position={[0, -1.4, 1.35]} />

      <BeamZ position={[-1.4, -1.4, 0]} />
      <BeamZ position={[1.4, -1.4, 0]} />

      {/* =======================
          PARTE SUPERIOR
      ======================= */}

      <BeamX position={[0, 1.3, -1.35]} />
      <BeamX position={[0, 1.3, 1.35]} />

      <BeamZ position={[-1.4, 1.3, 0]} />
      <BeamZ position={[1.4, 1.3, 0]} />

      {/* =======================
          REFUERZOS
      ======================= */}

      {[
        [-1.4, -1.35],
        [1.4, -1.35],
        [-1.4, 1.35],
        [1.4, 1.35],
      ].map(([x, z], i) => (
        <mesh
          key={i}
          position={[x, 1.25, z]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.16, 0.16, 0.16]} />

          <meshStandardMaterial
            color="#222"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>
      ))}

      {/* =======================
          VIGA X
      ======================= */}

      <mesh
        position={[0, 0.95, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.75, 0.14, 0.18]} />
        {frameMaterial}
      </mesh>

      {/* =======================
          RIELES
      ======================= */}

      <mesh
        position={[0, 0.95, 0.09]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.03, 0.03, 2.72, 32]} />
        {railMaterial}
      </mesh>

      <mesh
        position={[0, 0.95, -0.09]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.03, 0.03, 2.72, 32]} />
        {railMaterial}
      </mesh>

      {/* =======================
          CORREAS
      ======================= */}

      <mesh position={[0, 0.95, 0.12]}>
        <boxGeometry args={[2.3, 0.01, 0.01]} />
        <meshStandardMaterial color="#050505" />
      </mesh>

      <mesh position={[0, 0.95, -0.12]}>
        <boxGeometry args={[2.3, 0.01, 0.01]} />
        <meshStandardMaterial color="#050505" />
      </mesh>

      {/* =======================
          PANELES LATERALES
      ======================= */}

      <mesh position={[-1.34, -0.05, 0]} receiveShadow>
        <boxGeometry args={[0.02, 2.5, 2.5]} />

        <meshPhysicalMaterial
          transmission={1}
          transparent
          opacity={0.18}
          thickness={0.03}
          roughness={0}
          metalness={0}
          ior={1.45}
          reflectivity={1}
          color="#20252c"
        />
      </mesh>

      <mesh position={[1.34, -0.05, 0]} receiveShadow>
        <boxGeometry args={[0.02, 2.5, 2.5]} />

        <meshPhysicalMaterial
          transmission={1}
          transparent
          opacity={0.18}
          thickness={0.03}
          roughness={0}
          metalness={0}
          ior={1.45}
          reflectivity={1}
          color="#20252c"
        />
      </mesh>

      {/* =======================
          PANEL TRASERO
      ======================= */}

      <mesh position={[0, -0.05, -1.24]} receiveShadow>
        <boxGeometry args={[2.6, 2.5, 0.02]} />

        <meshPhysicalMaterial
          transmission={1}
          transparent
          opacity={0.12}
          thickness={0.03}
          roughness={0}
          metalness={0}
          ior={1.45}
          reflectivity={1}
          color="#1b1f24"
        />
      </mesh>

      {/* =======================
          TECHO INTERIOR
      ======================= */}

      <mesh
        position={[0, 1.28, 0]}
        receiveShadow
      >
        <boxGeometry args={[2.72, 0.04, 2.72]} />

        <meshStandardMaterial
          color="#111"
          metalness={0.85}
          roughness={0.22}
        />
      </mesh>

      {/* =======================
          BASE
      ======================= */}

      <mesh
        position={[0, -1.5, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.95, 0.22, 2.95]} />

        <meshStandardMaterial
          color="#0d0d0d"
          metalness={0.9}
          roughness={0.22}
        />
      </mesh>
    </group>
  );
}