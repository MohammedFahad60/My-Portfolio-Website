import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const technologies = [
  ["React", 1.75, 0.5, 0.2], ["TypeScript", -1.6, 0.8, 0],
  ["Python", 1.5, -0.9, 0.1], ["Node.js", -1.7, -0.8, 0.2],
  ["AWS", 0.2, 1.65, -0.3], ["AI / ML", 0.1, -1.75, 0.3],
  ["MySQL", 1.9, 0.05, -0.7], ["Git", -1.8, 0.05, -0.5],
] as const;

function DeveloperCore() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += 0.0025;
    group.current.rotation.x += (state.pointer.y * 0.12 - group.current.rotation.x) * 0.02;
    group.current.rotation.z += (state.pointer.x * 0.08 - group.current.rotation.z) * 0.02;
  });

  return (
    <Float speed={1.1} floatIntensity={0.28} rotationIntensity={0.15}>
      <group ref={group} scale={0.84}>
        <mesh>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial color="#131713" emissive="#304315" emissiveIntensity={0.35} metalness={0.9} roughness={0.3} wireframe />
        </mesh>
        <mesh rotation={[0.4, 0.2, 0]}>
          <octahedronGeometry args={[0.62, 1]} />
          <meshStandardMaterial color="#27321e" emissive="#9abf32" emissiveIntensity={0.32} metalness={0.85} roughness={0.22} wireframe />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.42, 0.015, 8, 64]} />
          <meshBasicMaterial color="#d8ff3e" transparent opacity={0.75} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[1.58, 0.008, 8, 64]} />
          <meshBasicMaterial color="#d8ff3e" transparent opacity={0.4} />
        </mesh>
        <Html center distanceFactor={5} className="core-label"><span>FAHAD</span><strong>.DEV</strong></Html>
        {technologies.map(([label, x, y, z], index) => <TechnologyNode key={label} label={label} position={[x, y, z]} index={index} />)}
      </group>
    </Float>
  );
}

function TechnologyNode({ label, position, index }: { label: string; position: [number, number, number]; index: number }) {
  const node = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!node.current) return;
    node.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + index) * 0.035;
    node.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.45 + index) * 0.04;
  });
  return <group ref={node} position={position}>
    <mesh><sphereGeometry args={[0.045, 10, 10]} /><meshBasicMaterial color="#d8ff3e" /></mesh>
    <Html distanceFactor={7} className="tech-label"><span>{label}</span></Html>
    <Line points={[[0, 0, 0], [-position[0] * 0.52, -position[1] * 0.52, -position[2] * 0.52]]} color="#d8ff3e" transparent opacity={0.18} lineWidth={0.5} />
  </group>;
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = typeof window !== "undefined" && window.innerWidth <= 800 ? 280 : 900;
    const values = new Float32Array(count * 3);
    for (let index = 0; index < values.length; index += 3) {
      values[index] = Math.sin(index * 12.9898) * 3.5;
      values[index + 1] = Math.sin(index * 78.233) * 2.5;
      values[index + 2] = Math.sin(index * 39.425) * 2;
    }
    return values;
  }, []);
  useFrame(() => { if (points.current) points.current.rotation.y += 0.0004; });
  return <points ref={points}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} count={positions.length / 3} array={positions} itemSize={3} /></bufferGeometry><pointsMaterial color="#9daf78" size={0.018} transparent opacity={0.5} sizeAttenuation /></points>;
}

export default function HeroScene() {
  return (
    <div className="hero-3d" aria-label="Interactive 3D developer core visualization">
      <Canvas fallback={<div className="hero-scene-fallback"><span>&lt;/&gt;</span><small>3D CORE UNAVAILABLE</small></div>} camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.28} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#efffe0" />
        <pointLight position={[-3, -2, 3]} intensity={5} color="#d8ff3e" />
        <DeveloperCore />
        <ParticleField />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
