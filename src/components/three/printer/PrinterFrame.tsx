import type { ThreeElements } from "@react-three/fiber";

const frameMaterial = (
  <meshStandardMaterial
    color="#151515"
    metalness={0.95}
    roughness={0.22}
  />
);

const railMaterial = (
  <meshStandardMaterial
    color="#b7bcc3"
    metalness={1}
    roughness={0.08}
  />
);

function Vertical(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[0.12, 3, 0.12]} />
      {frameMaterial}
    </mesh>
  );
}

function BeamX(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[3.2, 0.12, 0.12]} />
      {frameMaterial}
    </mesh>
  );
}

function BeamZ(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[0.12, 0.12, 3]} />
      {frameMaterial}
    </mesh>
  );
}

export default function PrinterFrame() {
  return (
    <group>
      {/* Columnas */}
      <Vertical position={[-1.6, 0, -1.5]} />
      <Vertical position={[1.6, 0, -1.5]} />
      <Vertical position={[-1.6, 0, 1.5]} />
      <Vertical position={[1.6, 0, 1.5]} />

      {/* Base */}
      <BeamX position={[0, -1.5, -1.5]} />
      <BeamX position={[0, -1.5, 1.5]} />

      <BeamZ position={[-1.6, -1.5, 0]} />
      <BeamZ position={[1.6, -1.5, 0]} />

      {/* Superior */}
      <BeamX position={[0, 1.5, -1.5]} />
      <BeamX position={[0, 1.5, 1.5]} />

      <BeamZ position={[-1.6, 1.5, 0]} />
      <BeamZ position={[1.6, 1.5, 0]} />

      {/* Viga del eje X */}
      <mesh position={[0, 1.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.1, 0.16, 0.16]} />
        {frameMaterial}
      </mesh>

      {/* Guías metálicas */}
      <mesh
        position={[0, 1.05, 0.08]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.03, 0.03, 3.05, 32]} />
        {railMaterial}
      </mesh>

      <mesh
        position={[0, 1.05, -0.08]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.03, 0.03, 3.05, 32]} />
        {railMaterial}
      </mesh>

      {/* Motores superiores */}
      <mesh position={[-1.38, 1.2, 0]}>
        <boxGeometry args={[0.22, 0.22, 0.22]} />
        <meshStandardMaterial
          color="#202020"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[1.38, 1.2, 0]}>
        <boxGeometry args={[0.22, 0.22, 0.22]} />
        <meshStandardMaterial
          color="#202020"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Poleas */}
      <mesh
        position={[-1.38, 1.05, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.055, 0.055, 0.04, 24]} />
        <meshStandardMaterial color="#666" metalness={1} roughness={0.15} />
      </mesh>

      <mesh
        position={[1.38, 1.05, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.055, 0.055, 0.04, 24]} />
        <meshStandardMaterial color="#666" metalness={1} roughness={0.15} />
      </mesh>

      {/* Correas */}
      <mesh position={[0, 1.05, 0.11]}>
        <boxGeometry args={[2.7, 0.01, 0.01]} />
        <meshStandardMaterial color="#090909" />
      </mesh>

      <mesh position={[0, 1.05, -0.11]}>
        <boxGeometry args={[2.7, 0.01, 0.01]} />
        <meshStandardMaterial color="#090909" />
      </mesh>

      {/* Panel izquierdo */}
      <mesh position={[-1.53, 0, 0]} receiveShadow>
        <boxGeometry args={[0.02, 2.8, 2.8]} />
        <meshPhysicalMaterial
          transmission={1}
          transparent
          thickness={0.03}
          roughness={0}
          metalness={0}
          color="#dcefff"
          opacity={0.12}
        />
      </mesh>

      {/* Panel derecho */}
      <mesh position={[1.53, 0, 0]} receiveShadow>
        <boxGeometry args={[0.02, 2.8, 2.8]} />
        <meshPhysicalMaterial
          transmission={1}
          transparent
          thickness={0.03}
          roughness={0}
          metalness={0}
          color="#dcefff"
          opacity={0.12}
        />
      </mesh>

      {/* Panel trasero */}
      <mesh position={[0, 0, -1.43]} receiveShadow>
        <boxGeometry args={[3, 2.8, 0.02]} />
        <meshPhysicalMaterial
          transmission={1}
          transparent
          thickness={0.03}
          roughness={0}
          metalness={0}
          color="#dcefff"
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}