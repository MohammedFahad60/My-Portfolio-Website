import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ParticleField({ reducedMotion, mobile }: { reducedMotion: boolean; mobile: boolean }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = mobile ? 220 : 650;
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      values[offset] = Math.sin(index * 12.9898) * 3.8;
      values[offset + 1] = Math.sin(index * 78.233) * 2.8;
      values[offset + 2] = Math.sin(index * 39.425) * 2.2;
    }
    return values;
  }, [mobile]);
  useFrame((state) => {
    if (points.current && !reducedMotion) {
      points.current.rotation.y = state.clock.elapsedTime * 0.008;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.04;
    }
  });
  return <points ref={points} position={[0, 0, -1]}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} array={positions} itemSize={3} /></bufferGeometry><pointsMaterial color="#a7b88c" size={mobile ? 0.017 : 0.021} transparent opacity={0.4} sizeAttenuation /></points>;
}
