import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
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

    camera.position.x = pointer.x * 0.28;

    camera.position.y =
      0.55 +
      pointer.y * 0.12 +
      Math.sin(t * 0.35) * 0.015;

    camera.position.z = 5.9;

    camera.lookAt(0, -0.55, 0);

    if (printer.current) {
      printer.current.rotation.y =
        Math.sin(t * 0.16) * 0.03;
    }
  });

  return (
    <>
      <group ref={printer}>
        <PrinterFrame />

        <PrintBed />

        <Extruder />

        <Brain />
      </group>

      <ContactShadows
        position={[0, -1.52, 0]}
        scale={7}
        blur={3}
        opacity={0.42}
        far={3}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.53, 0]}
        receiveShadow
      >
        <circleGeometry args={[4.3, 64]} />

        <meshStandardMaterial
          color="#101114"
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
          position: [0, 0.55, 5.9],
          fov: 30,
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