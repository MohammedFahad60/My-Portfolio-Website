import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SceneInteraction({ reducedMotion }: { reducedMotion: boolean }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());
  useFrame((state) => {
    if (reducedMotion) return;
    target.current.set(state.pointer.x * 0.22, state.pointer.y * 0.16, 6);
    camera.position.lerp(target.current, 0.035);
    camera.lookAt(0, 0, 0);
  });
  return null;
}
