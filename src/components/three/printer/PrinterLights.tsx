export default function PrinterLights() {
  return (
    <>
      <ambientLight intensity={0.7} />

      <directionalLight
        castShadow
        intensity={3}
        position={[5, 8, 5]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <pointLight
        position={[-4, 3, 2]}
        intensity={30}
        color="#00bfff"
        distance={20}
      />

      <pointLight
        position={[4, 3, -2]}
        intensity={15}
        color="white"
        distance={15}
      />
    </>
  );
}