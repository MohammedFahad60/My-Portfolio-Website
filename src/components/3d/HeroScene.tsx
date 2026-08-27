import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import DeveloperCore from "./DeveloperCore";
import OrbitalRings from "./OrbitalRings";
import TechnologyNodes from "./TechnologyNodes";
import ConnectionLines from "./ConnectionLines";
import ParticleField from "./ParticleField";
import SceneInteraction from "./SceneInteraction";
import { technologies } from "./sceneConfig";

export default function HeroScene() {
  const [mobile, setMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const nodePositions = useRef(technologies.map(() => new THREE.Vector3()));

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 600px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setMobile(mobileQuery.matches); setReducedMotion(motionQuery.matches); };
    update();
    mobileQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => { mobileQuery.removeEventListener("change", update); motionQuery.removeEventListener("change", update); };
  }, []);

  return <div className="hero-3d" aria-label="Interactive 3D FAHAD.DEV developer system">
    <Canvas fallback={<div className="hero-scene-fallback"><span>&lt;/&gt;</span><small>FAHAD.DEV / DEVELOPER SYSTEM</small></div>} camera={{ position: [0, 0, 6], fov: 45 }} dpr={mobile ? [1, 1.25] : [1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <SceneInteraction reducedMotion={reducedMotion} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 5]} intensity={1.8} color="#efffe0" />
      <pointLight position={[-3, -2, 3]} intensity={4.5} color="#d8ff3e" />
      <pointLight position={[3, 2, -2]} intensity={2} color="#dce4d5" />
      <group scale={1.12} position={[-0.14, 0, 0]}>
        <DeveloperCore reducedMotion={reducedMotion} />
        <OrbitalRings reducedMotion={reducedMotion} />
        <ConnectionLines positions={nodePositions} count={technologies.length} />
        <TechnologyNodes technologies={technologies} positions={nodePositions} reducedMotion={reducedMotion} mobile={mobile} />
      </group>
      <ParticleField reducedMotion={reducedMotion} mobile={mobile} />
      <Environment preset="city" />
    </Canvas>
  </div>;
}
