import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { prefersReducedMotion } from '../utils/gsap';

export default function ThreeNetworkCanvas({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Architectural geodesic wireframe sphere
    const geo = new THREE.IcosahedronGeometry(1.45, 2);
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.22,
    });
    const wireframe = new THREE.LineSegments(wireGeo, wireMat);
    group.add(wireframe);

    // Subtle vertex nodes
    const pointsMat = new THREE.PointsMaterial({
      color: 0x101828,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
    });
    const points = new THREE.Points(geo, pointsMat);
    group.add(points);

    let frameId;
    const reduced = prefersReducedMotion();

    const animate = () => {
      if (!reduced) {
        group.rotation.y += 0.0022;
        group.rotation.x += 0.0008;
      }
      renderer.render(scene, camera);
      if (!reduced) {
        frameId = requestAnimationFrame(animate);
      }
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId) cancelAnimationFrame(frameId);
      geo.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      pointsMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
