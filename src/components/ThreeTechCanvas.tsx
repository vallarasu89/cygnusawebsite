import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeTechCanvasProps {
  className?: string;
  interactive?: boolean;
}

export const ThreeTechCanvas: React.FC<ThreeTechCanvasProps> = ({
  className = "w-full h-full",
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    const container = mountRef.current;
    if (!container || motionQuery.matches) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for entire tech constellation
    const techGroup = new THREE.Group();
    scene.add(techGroup);

    // 1. Central Geodesic Icosahedron Wireframe Core (Cygnusa Sky)
    const icosaGeometry = new THREE.IcosahedronGeometry(7, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0EA5E9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, wireframeMaterial);
    techGroup.add(icosaMesh);

    // 2. Inner Orbit Torus (Cosmic Deep Indigo)
    const torusGeometry = new THREE.TorusGeometry(8.5, 0.08, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.5,
    });
    const torusMesh1 = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh1.rotation.x = Math.PI / 3;
    techGroup.add(torusMesh1);

    const torusMesh2 = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh2.rotation.y = Math.PI / 4;
    torusMesh2.rotation.x = -Math.PI / 6;
    techGroup.add(torusMesh2);

    // 3. Floating Node Particles
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    const radius = 11;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = radius * (0.8 + Math.random() * 0.4);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x06B6D4,
      size: 0.28,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    techGroup.add(particles);

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    if (interactive) {
      window.addEventListener('mousemove', onMouseMove);
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Pause rendering when canvas is out of viewport to preserve Core Web Vitals
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation
      icosaMesh.rotation.y = elapsedTime * 0.12;
      icosaMesh.rotation.x = elapsedTime * 0.08;

      torusMesh1.rotation.z = elapsedTime * 0.15;
      torusMesh2.rotation.z = -elapsedTime * 0.12;

      particles.rotation.y = elapsedTime * 0.05;

      // Smooth mouse parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      techGroup.rotation.y = mouseX * 0.5;
      techGroup.rotation.x = -mouseY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      if (interactive) window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Cleanup WebGL resources
      icosaGeometry.dispose();
      wireframeMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  if (reducedMotion) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-64 h-64 rounded-full border-2 border-brand-sky/30 bg-gradient-to-tr from-brand-deep/40 to-brand-sky/20 backdrop-blur-xl animate-pulse flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-brand-cyan/40 flex items-center justify-center">
            <span className="text-brand-sky font-heading font-bold text-xl tracking-wider">CYGNUSA</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mountRef} 
      className={`relative overflow-hidden ${className}`} 
      aria-hidden="true"
    />
  );
};

