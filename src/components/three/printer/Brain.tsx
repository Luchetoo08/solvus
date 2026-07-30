import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export default function Brain() {
  const group = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/models/brain.glb");

  const brain = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(brain);
    const size = box.getSize(new THREE.Vector3());

    const max = Math.max(size.x, size.y, size.z);

    // Tamaño final del cerebro
    const scale = 1.45 / max;

    brain.scale.setScalar(scale);

    box.setFromObject(brain);

    const center = box.getCenter(new THREE.Vector3());

    brain.position.sub(center);

    const fixed = new THREE.Box3().setFromObject(brain);

    // Apoyar sobre la cama
    brain.position.y -= fixed.min.y;

    brain.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      child.material = new THREE.MeshPhysicalMaterial({
        color: "#bfe7ff",

        metalness: 0.08,
        roughness: 0.12,

        transmission: 0.22,
        thickness: 0.5,

        clearcoat: 1,
        clearcoatRoughness: 0,

        emissive: "#38bdf8",
        emissiveIntensity: 0.28,

        reflectivity: 1,
      });
    });
  }, [brain]);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    group.current.rotation.y += 0.002;

    group.current.position.y =
      -0.985 +
      Math.sin(t * 1.8) * 0.006;
  });

  return (
    <group ref={group}>
      <primitive object={brain} />
    </group>
  );
}

useGLTF.preload("/models/brain.glb");