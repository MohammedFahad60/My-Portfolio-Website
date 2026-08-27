import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function DeveloperCore({ reducedMotion }: { reducedMotion: boolean }) {
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const pulse = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (reducedMotion) return;
    const time = state.clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.y = time * 0.12;
      const scale = hovered ? 0.81 : 0.78;
      outer.current.scale.x += (scale - outer.current.scale.x) * 0.08;
      outer.current.scale.y += (scale - outer.current.scale.y) * 0.08;
      outer.current.scale.z += (scale - outer.current.scale.z) * 0.08;
    }
    if (inner.current) {
      inner.current.rotation.x = time * 0.18;
      inner.current.rotation.y = time * -0.22;
    }
    if (pulse.current) {
      const scale = 1 + Math.sin(time * 1.4) * 0.08;
      pulse.current.scale.setScalar(scale);
    }
  });

  return <group onPointerOver={(event) => { event.stopPropagation(); setHovered(true); }} onPointerOut={() => setHovered(false)}>
    <group ref={outer} scale={0.78}>
      <mesh>
        <icosahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial color="#151a14" emissive="#304315" emissiveIntensity={hovered ? 0.38 : 0.28} metalness={0.85} roughness={0.28} wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.28, 1]} />
        <meshBasicMaterial color="#d8ff3e" transparent opacity={0.045} side={THREE.DoubleSide} />
      </mesh>
    </group>
    <group ref={inner} scale={0.58}>
      <mesh rotation={[0.3, 0.5, 0.2]}>
        <octahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#35402a" emissive="#91b62f" emissiveIntensity={0.28} metalness={0.9} roughness={0.2} wireframe />
      </mesh>
      <mesh ref={pulse}>
        <sphereGeometry args={[0.17, 16, 16]} />
        <meshBasicMaterial color="#d8ff3e" transparent opacity={0.8} />
      </mesh>
    </group>
    <Html center distanceFactor={5} className="core-label">
      <span>FAHAD</span><strong>.DEV</strong><small>SYSTEM CORE</small>
    </Html>
  </group>;
}
