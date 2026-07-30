import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

import Brain from "./Brain";
import Extruder from "./Extruder";
import PrintBed from "./PrintBed";
import PrinterFrame from "./PrinterFrame";
import PrinterLights from "./PrinterLights";

function Scene() {
  const printer = useRef<THREE.Group>(null);

  useFrame(({ camera, clock, pointer }) => {
    const t = clock.getElapsedTime();

    camera.position.x = pointer.x * 0.35;
    camera.position.y =
      0.9 +
      pointer.y * 0.15 +
      Math.sin(t * 0.4) * 0.03;

    camera.position.z = 5.4;

    camera.lookAt(0, -0.15, 0);

    if (printer.current) {
      printer.current.rotation.y =
        Math.sin(t * 0.18) * 0.04;
    }
  });

  return (
    <>
      <group ref={printer}>
        <PrinterFrame />

        <PrintBed />

        <Extruder />

        <Float
          speed={1.2}
          rotationIntensity={0}
          floatIntensity={0.03}
        >
          <Brain />
        </Float>
      </group>

      <ContactShadows
        position={[0, -1.5, 0]}
        scale={7}
        blur={2.8}
        opacity={0.45}
        far={3}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.52, 0]}
        receiveShadow
      >
        <circleGeometry args={[4.2, 64]} />

        <meshStandardMaterial
          color="#111318"
          roughness={1}
        />
      </mesh>
    </>
  );
}

export default function Printer() {
  return (
    <div className="relative h-[760px] w-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 0.9, 5.4],
          fov: 28,
        }}
      >
        <Suspense fallback={null}>
          <PrinterLights />

          <Environment preset="studio" />

          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}