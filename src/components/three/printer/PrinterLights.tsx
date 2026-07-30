import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function PrinterLights() {
  const dirLight = useRef<THREE.DirectionalLight>(null);

  // Descomentar para depurar sombras
  // useHelper(dirLight, THREE.DirectionalLightHelper, 0.5);

  return (
    <>
      {/* ===============================
          LUZ AMBIENTE
      =============================== */}

      <ambientLight intensity={0.28} />

      {/* ===============================
          LUZ PRINCIPAL
      =============================== */}

      <directionalLight
        ref={dirLight}
        castShadow
        position={[4, 6, 5]}
        intensity={3.2}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />

      {/* ===============================
          RELLENO FRONTAL
      =============================== */}

      <directionalLight
        position={[-4, 3, 4]}
        intensity={0.7}
        color="#dfe8ff"
      />

      {/* ===============================
          CONTRALUZ
      =============================== */}

      <pointLight
        position={[0, 3.5, -3]}
        intensity={10}
        distance={12}
        color="#7dd3fc"
      />

      {/* ===============================
          LED SUPERIOR IZQUIERDO
      =============================== */}

      <pointLight
        position={[-1.15, 1.05, 0]}
        intensity={18}
        distance={2.4}
        color="#38bdf8"
      />

      {/* ===============================
          LED SUPERIOR DERECHO
      =============================== */}

      <pointLight
        position={[1.15, 1.05, 0]}
        intensity={18}
        distance={2.4}
        color="#38bdf8"
      />

      {/* ===============================
          LUZ SOBRE EL CEREBRO
      =============================== */}

      <spotLight
        position={[0, 2.3, 0.2]}
        angle={0.42}
        penumbra={1}
        intensity={16}
        distance={8}
        color="#ffffff"
        castShadow
      />

      {/* ===============================
          GLOW INTERIOR
      =============================== */}

      <pointLight
        position={[0, 0.1, 0]}
        intensity={5}
        distance={2}
        color="#0ea5e9"
      />
    </>
  );
}