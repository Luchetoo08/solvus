import PrinterFrame from "./PrinterFrame";
import PrintBed from "./PrintBed";
import Extruder from "./Extruder";
import PrinterLights from "./PrinterLights";
import PrintingObject from "./PrintingObject";

export default function PrinterScene() {
  return (
    <>
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
        <shadowMaterial opacity={0.18} />
      </mesh>
    </>
  );
}