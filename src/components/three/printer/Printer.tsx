import { Canvas } from "@react-three/fiber";
import PrinterFrame from "./PrinterFrame";
import PrintBed from "./PrintBed";
import Extruder from "./Extruder";
import PrintingObject from "./PrintingObject";
import PrinterLights from "./PrinterLights";

export default function Printer() {
  return (
    <div className="w-full h-[550px]">
      <Canvas
        shadows
        camera={{
          position: [5, 4, 6],
          fov: 40,
        }}
      >
        <PrinterLights />

        <PrinterFrame />
        <PrintBed />
        <Extruder />
        <PrintingObject />

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.25} />
        </mesh>
      </Canvas>
    </div>
  );
}