export default function PrinterLights() {
  return (
    <>
      {/* Luz ambiente */}
      <ambientLight intensity={0.28} />

      {/* Luz principal */}
      <directionalLight
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

      {/* Relleno */}
      <directionalLight
        position={[-4, 3, 4]}
        intensity={0.7}
        color="#dfe8ff"
      />

      {/* Contraluz */}
      <pointLight
        position={[0, 3.5, -3]}
        intensity={10}
        distance={12}
        color="#7dd3fc"
      />

      {/* LEDs internos */}
      <pointLight
        position={[-1.15, 1.05, 0]}
        intensity={18}
        distance={2.4}
        color="#38bdf8"
      />

      <pointLight
        position={[1.15, 1.05, 0]}
        intensity={18}
        distance={2.4}
        color="#38bdf8"
      />

      {/* Luz sobre el cerebro */}
      <spotLight
        position={[0, 2.3, 0.2]}
        angle={0.42}
        penumbra={1}
        intensity={16}
        distance={8}
        color="#ffffff"
        castShadow
      />

      {/* Glow interior */}
      <pointLight
        position={[0, 0.1, 0]}
        intensity={5}
        distance={2}
        color="#0ea5e9"
      />
    </>
  );
}