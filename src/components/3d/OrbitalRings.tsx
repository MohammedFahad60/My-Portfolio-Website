import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const rings = [
  { rotation: [0, 0, 0] as [number, number, number], speed: 0.08, opacity: 0.46 },
  { rotation: [0.96, 0.35, 0.2] as [number, number, number], speed: 0.05, opacity: 0.3 },
  { rotation: [-0.96, -0.35, -0.2] as [number, number, number], speed: 0.035, opacity: 0.24 },
];

function Ring({ rotation, speed, opacity, index, reducedMotion }: (typeof rings[number]) & { index: number; reducedMotion: boolean }) {
  const ring = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ring.current || reducedMotion) return;
    ring.current.rotation.z = rotation[2] + state.clock.elapsedTime * speed;
    ring.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.08 + index) * 0.04;
  });
  return <mesh ref={ring} rotation={rotation} position={[0, 0, index === 1 ? 0.12 : index === 2 ? -0.16 : 0]} scale={0.9}>
    <torusGeometry args={[1.72 + index * 0.1, 0.009, 8, 96]} />
    <meshBasicMaterial color="#d8ff3e" transparent opacity={opacity} />
  </mesh>;
}

export default function OrbitalRings({ reducedMotion }: { reducedMotion: boolean }) {
  return <group>{rings.map((ring, index) => <Ring key={index} {...ring} index={index} reducedMotion={reducedMotion} />)}</group>;
}
