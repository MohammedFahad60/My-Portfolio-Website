import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import type { TechnologyConfig } from "./sceneConfig";

type Props = { technologies: TechnologyConfig[]; positions: React.MutableRefObject<THREE.Vector3[]>; reducedMotion: boolean; mobile: boolean };

export default function TechnologyNodes({ technologies, positions, reducedMotion, mobile }: Props) {
  const visible = mobile ? technologies.filter((technology) => ["React", "Python", "Node.js", "AWS", "AI / ML"].includes(technology.name)) : technologies;
  return <group>{visible.map((technology, index) => <TechnologyNode key={technology.name} technology={technology} index={index} positions={positions} reducedMotion={reducedMotion} />)}</group>;
}

function TechnologyNode({ technology, index, positions, reducedMotion }: { technology: TechnologyConfig; index: number; positions: React.MutableRefObject<THREE.Vector3[]>; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const point = useRef<THREE.Mesh>(null);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(false);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const angle = technology.angle + (reducedMotion ? 0 : time * technology.speed);
    group.current.position.set(
      Math.cos(angle) * technology.radius,
      technology.height + (reducedMotion ? 0 : Math.sin(time * 0.45 + technology.phase) * 0.045),
      technology.depth + Math.sin(angle) * technology.radius * 0.45,
    );
    positions.current[index].copy(group.current.position);
    const scale = active || selected ? 1.15 : 1;
    group.current.scale.x += (scale - group.current.scale.x) * 0.12;
    group.current.scale.y += (scale - group.current.scale.y) * 0.12;
    group.current.scale.z += (scale - group.current.scale.z) * 0.12;
    if (point.current) {
      const material = point.current.material as THREE.MeshBasicMaterial;
      material.opacity = active || selected ? 1 : 0.72;
    }
  });

  return <group ref={group} onPointerOver={(event) => { event.stopPropagation(); setActive(true); }} onPointerOut={() => setActive(false)} onClick={(event) => { event.stopPropagation(); setSelected((value) => !value); }}>
    <mesh ref={point}><sphereGeometry args={[0.055, 12, 12]} /><meshBasicMaterial color="#d8ff3e" transparent /></mesh>
    <mesh scale={2.8}><sphereGeometry args={[0.055, 8, 8]} /><meshBasicMaterial color="#d8ff3e" transparent opacity={active || selected ? 0.16 : 0.05} /></mesh>
    <Html distanceFactor={7} className={`tech-label ${active || selected ? "tech-label-active" : ""}`}>
      <span>{technology.name}</span>
      {selected && <small>{technology.description}</small>}
    </Html>
  </group>;
}
