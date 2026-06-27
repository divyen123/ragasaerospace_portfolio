/* ══════════════════════════════════════════════════════
   RAGAS AEROSPACE — ParticleField Component
   Three.js particle system rendered via @react-three/fiber.
   800 ambient particles with slow rotation and upward drift.
   ══════════════════════════════════════════════════════ */

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Particle Count & Spatial Bounds ── */
const PARTICLE_COUNT = 800;
const BOX_WIDTH = 30;
const BOX_HEIGHT = 30;
const BOX_DEPTH = 15;

/* ── Inner component: the actual Points mesh ── */
function Particles() {
  const pointsRef = useRef();

  /* Generate random particle positions within the bounding box */
  const positions = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * BOX_WIDTH;       // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * BOX_HEIGHT;  // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * BOX_DEPTH;   // z
    }
    return pos;
  }, []);

  /* Animate: slow rotation + subtle upward drift + float */
  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const points = pointsRef.current;
    const time = state.clock.elapsedTime;

    // Slow overall rotation
    points.rotation.y += delta * 0.02;
    points.rotation.x += delta * 0.005;

    // Subtle floating motion on the group
    points.position.y = Math.sin(time * 0.3) * 0.3;

    // Drift individual particles upward, wrap around when exceeding bounds
    const posArray = points.geometry.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      posArray[i * 3 + 1] += delta * 0.05; // upward drift
      // Wrap particle back to bottom when it exceeds the top
      if (posArray[i * 3 + 1] > BOX_HEIGHT / 2) {
        posArray[i * 3 + 1] = -BOX_HEIGHT / 2;
      }
    }
    points.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00b4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ── Wrapper: Canvas fills its parent container ── */
export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Minimal ambient light — particles are self-lit via material */}
        <ambientLight intensity={0.1} />
        <Particles />
      </Canvas>
    </div>
  );
}
