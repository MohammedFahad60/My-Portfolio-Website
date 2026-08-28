import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ConnectionLines({ positions, count }: { positions: React.MutableRefObject<THREE.Vector3[]>; count: number }) {
  const line = useRef<THREE.LineSegments>(null);
  const end = useRef(new THREE.Vector3());
  const geometry = useMemo(() => {
    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 6), 3));
    return buffer;
  }, [count]);

  useFrame(() => {
    const attribute = geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let index = 0; index < count; index += 1) {
      const start = positions.current[index];
      end.current.copy(start).multiplyScalar(0.3);
      attribute.setXYZ(index * 2, start.x, start.y, start.z);
      attribute.setXYZ(index * 2 + 1, end.current.x, end.current.y, end.current.z);
    }
    attribute.needsUpdate = true;
  });

  return <lineSegments ref={line} geometry={geometry}><lineBasicMaterial color="#d8ff3e" transparent opacity={0.14} /></lineSegments>;
}
