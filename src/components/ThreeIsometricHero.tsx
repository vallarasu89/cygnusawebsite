import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeIsometricHeroProps {
  className?: string;
}

export const ThreeIsometricHero: React.FC<ThreeIsometricHeroProps> = ({
  className = "w-full h-full"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || 560;
    let height = container.clientHeight || 560;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();

    // Perspective camera positioned at isometric-like angle
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(16, 14, 22);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Rotate root slightly to get the perfect isometric perspective seen in the user image
    rootGroup.rotation.y = THREE.MathUtils.degToRad(-15);

    // 2. Lighting (tuned to match the vibrant cyan top and dark blue sides)
    const ambientLight = new THREE.AmbientLight(0x0ea5e9, 1.2);
    scene.add(ambientLight);

    const dirLightTop = new THREE.DirectionalLight(0xffffff, 2.6);
    dirLightTop.position.set(5, 20, 10);
    scene.add(dirLightTop);

    const dirLightCyan = new THREE.DirectionalLight(0x06b6d4, 1.8);
    dirLightCyan.position.set(-15, 10, 10);
    scene.add(dirLightCyan);

    const dirLightBlue = new THREE.DirectionalLight(0x1e3a8a, 2.2);
    dirLightBlue.position.set(10, -10, -10);
    scene.add(dirLightBlue);

    // Helper to build a styled cube with custom faces matching the image
    const createCustomCube = (w: number, h: number, d: number, colors: {
      top: number;
      right: number;
      left: number;
      back: number;
      bottom: number;
    }) => {
      const geometry = new THREE.BoxGeometry(w, h, d);
      
      // Face materials: [Right (+x), Left (-x), Top (+y), Bottom (-y), Front (+z), Back (-z)]
      const materials = [
        new THREE.MeshStandardMaterial({ color: colors.right, roughness: 0.25, metalness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: colors.left, roughness: 0.35, metalness: 0.15 }),
        new THREE.MeshStandardMaterial({ color: colors.top, roughness: 0.15, metalness: 0.05 }),
        new THREE.MeshStandardMaterial({ color: colors.bottom, roughness: 0.5, metalness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: colors.right, roughness: 0.25, metalness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: colors.back, roughness: 0.4, metalness: 0.1 }),
      ];

      const mesh = new THREE.Mesh(geometry, materials);

      // Glowing edge contours
      const edges = new THREE.EdgesGeometry(geometry);
      const edgeMaterial = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.65,
        linewidth: 1
      });
      const wireframe = new THREE.LineSegments(edges, edgeMaterial);
      mesh.add(wireframe);

      return mesh;
    };

    // 3. Three Stacked Cubes
    // Cube 1 (Base - largest)
    const baseCube = createCustomCube(5.2, 3.2, 5.2, {
      top: 0x0ea5e9,     // vibrant cyan-blue
      right: 0x0284c7,   // mid cyan
      left: 0x1e3a8a,    // deep navy
      back: 0x0f172a,
      bottom: 0x0f172a,
    });
    baseCube.position.y = -2.2;
    rootGroup.add(baseCube);

    // Cube 2 (Middle)
    const midCube = createCustomCube(3.8, 2.7, 3.8, {
      top: 0x38bdf8,     // sky cyan
      right: 0x0ea5e9,   // cyan
      left: 0x1e3a8a,    // deep navy
      back: 0x0f172a,
      bottom: 0x0f172a,
    });
    midCube.position.y = 1.0;
    rootGroup.add(midCube);

    // Cube 3 (Apex - smallest with pure white/glow top)
    const topCube = createCustomCube(2.4, 2.2, 2.4, {
      top: 0xffffff,     // pure white apex face
      right: 0x38bdf8,   // bright sky
      left: 0x0284c7,    // deep cyan
      back: 0x1e3a8a,
      bottom: 0x0f172a,
    });
    topCube.position.y = 3.7;
    rootGroup.add(topCube);

    // 4. Orbital Rings (Cyan Rings around tower)
    const orbitGroup = new THREE.Group();
    orbitGroup.rotation.x = Math.PI / 2.35;
    orbitGroup.rotation.y = Math.PI / 12;
    rootGroup.add(orbitGroup);

    // Inner Solid Ring
    const innerRingGeo = new THREE.TorusGeometry(6.6, 0.045, 16, 120);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    orbitGroup.add(innerRing);

    // Outer Dashed Orbit Ring
    const outerRingGeo = new THREE.TorusGeometry(8.5, 0.035, 16, 120);
    const outerRingMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.35
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    orbitGroup.add(outerRing);

    // Small orbiting satellite node
    const satGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const satellite = new THREE.Mesh(satGeo, satMat);
    orbitGroup.add(satellite);

    // 5. Outer Telemetry Frame & Glowing Vertices
    const wireframeGroup = new THREE.Group();
    rootGroup.add(wireframeGroup);

    // Corner positions for satellite spheres
    const nodeCoords: [number, number, number][] = [
      [-6.5, 3.2, 3.0],
      [6.5, 3.0, 3.0],
      [-6.2, -4.5, 3.0],
      [6.5, -4.2, 3.0],
      [0, 6.2, 0],
      [0, -6.0, 0]
    ];

    const sphereGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });

    nodeCoords.forEach(pos => {
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.position.set(...pos);
      wireframeGroup.add(sphere);
    });

    // Connecting Network Lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.38
    });

    const connectPairs: [number, number][] = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [0, 4],
      [1, 4],
      [2, 5],
      [3, 5]
    ];

    connectPairs.forEach(([i, j]) => {
      const p1 = new THREE.Vector3(...nodeCoords[i]);
      const p2 = new THREE.Vector3(...nodeCoords[j]);
      const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      const line = new THREE.Line(lineGeo, lineMat);
      wireframeGroup.add(line);
    });

    // 6. Interactive Mouse Motion & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    const handleMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 7. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuous floating breathing motion
      rootGroup.position.y = Math.sin(elapsedTime * 1.4) * 0.22;

      // Subtle harmonic cube separation
      topCube.position.y = 3.7 + Math.sin(elapsedTime * 1.8 + 0.4) * 0.12;
      midCube.position.y = 1.0 + Math.sin(elapsedTime * 1.4 + 0.2) * 0.06;
      baseCube.position.y = -2.2 + Math.sin(elapsedTime * 1.1) * 0.03;

      // Orbital rotation
      orbitGroup.rotation.z += 0.005;
      const satAngle = elapsedTime * 0.8;
      satellite.position.set(Math.cos(satAngle) * 6.6, Math.sin(satAngle) * 6.6, 0);

      // Smooth mouse parallax lerp
      targetRotY = mouseX * 0.35;
      targetRotX = -mouseY * 0.22;
      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Responsive Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth && newHeight) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className} select-none`}>
      {/* Three.js WebGL Container */}
      <div ref={containerRef} className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing" />

      {/* Floating Glassmorphism Cards positioned in 3D perspective around the tower */}
      
      {/* 1. "AI" Badge (Left) */}
      <div 
        className="absolute top-[48%] left-[4%] sm:left-[8%] -translate-y-1/2 px-5 py-2.5 rounded-xl border border-white/25 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white font-heading font-semibold text-sm sm:text-base tracking-wide pointer-events-none animate-float transition-transform hover:scale-105"
        style={{ animationDuration: '6s' }}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
          AI
        </span>
      </div>

      {/* 2. "Cloud" Badge (Right Top) */}
      <div 
        className="absolute top-[34%] right-[4%] sm:right-[8%] -translate-y-1/2 px-5 py-2.5 rounded-xl border border-white/25 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white font-heading font-semibold text-sm sm:text-base tracking-wide pointer-events-none animate-float transition-transform hover:scale-105"
        style={{ animationDelay: '1.2s', animationDuration: '7s' }}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
          Cloud
        </span>
      </div>

      {/* 3. "Security" Badge (Right Bottom) */}
      <div 
        className="absolute top-[72%] right-[6%] sm:right-[10%] -translate-y-1/2 px-5 py-2.5 rounded-xl border border-white/25 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white font-heading font-semibold text-sm sm:text-base tracking-wide pointer-events-none animate-float transition-transform hover:scale-105"
        style={{ animationDelay: '2.4s', animationDuration: '6.5s' }}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          Security
        </span>
      </div>
    </div>
  );
};

