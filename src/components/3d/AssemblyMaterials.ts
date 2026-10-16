import * as THREE from "three";

/**
 * Carefully calibrated physical materials for "The Assestics Assembly"
 * Emphasizes tactile ceramic, satin aerospace aluminum, and electric cyan data flow.
 */
export function createAssemblyMaterials() {
  // Ceramic plate: matte, subtle warmth, soft light reflection
  const ceramicMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#F6F5F0"),
    roughness: 0.35,
    metalness: 0.05,
    clearcoat: 0.25,
    clearcoatRoughness: 0.2,
    reflectivity: 0.5,
  });

  // Dark obsidian plate: high-contrast machined structural tier
  const obsidianMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#202722"),
    roughness: 0.4,
    metalness: 0.2,
  });

  // Satin metal: machined aluminum chassis and precision connecting conduits
  const satinMetalMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#D8DBD4"),
    roughness: 0.25,
    metalness: 0.85,
  });

  // Precision conduits: polished structural channels
  const conduitMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#B8BCB4"),
    roughness: 0.2,
    metalness: 0.9,
  });

  // Brand Accent: Genuine Assestics electric cyan with subtle luminescence
  const cyanAccentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#38D8E4"),
    emissive: new THREE.Color("#0891B2"),
    emissiveIntensity: 0.45,
    roughness: 0.2,
    metalness: 0.1,
  });

  // Flow Particle: glowing emissive packet of work moving through the assembly
  const particleMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#38D8E4"),
  });

  // Secondary indicator: gold/amber status node
  const amberAccentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#F59E0B"),
    emissive: new THREE.Color("#D97706"),
    emissiveIntensity: 0.3,
    roughness: 0.3,
  });

  return {
    ceramicMaterial,
    obsidianMaterial,
    satinMetalMaterial,
    conduitMaterial,
    cyanAccentMaterial,
    particleMaterial,
    amberAccentMaterial,
  };
}
