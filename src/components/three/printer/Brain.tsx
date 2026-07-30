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

    // Escala final
    const scale = 1.02 / max;

    brain.scale.setScalar(scale);

    box.setFromObject(brain);

    const center = box.getCenter(new THREE.Vector3());

    brain.position.sub(center);

    const fixed = new THREE.Box3().setFromObject(brain);

    // Apoya el cerebro sobre la cama
    brain.position.y -= fixed.min.y;

    brain.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      child.material = new THREE.MeshPhysicalMaterial({
        color: "#e4f3ff",

        metalness: 0.05,
        roughness: 0.22,

        transmission: 0.14,
        thickness: 0.28,

        clearcoat: 1,
        clearcoatRoughness: 0,

        emissive: "#38bdf8",
        emissiveIntensity: 0.12,

        reflectivity: 1,
      });
    });
  }, [brain]);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    // Rotación muy lenta
    group.current.rotation.y = t * 0.08;

    // Posición fija
    group.current.position.set(
      0,
      -1.09,
      0
    );
  });

  return (
    <group ref={group}>
      <primitive object={brain} />
    </group>
  );
}

useGLTF.preload("/models/brain.glb");