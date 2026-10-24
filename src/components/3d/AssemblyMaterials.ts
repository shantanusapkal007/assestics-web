import * as THREE from "three";

/**
 * Luxury Calibrated Physical Materials for "The Assestics Assembly"
 * Combines machined satin aerospace aluminum, polished obsidian graphite,
 * translucent architectural glass, and electric cyan / emerald emissive data conduits.
 */
export function createAssemblyMaterials() {
  // 1. Foundation Ceramic: Matte, warm architectural off-white with fine clearcoat
  const ceramicMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#F4F3ED"),
    roughness: 0.28,
    metalness: 0.08,
    clearcoat: 0.6,
    clearcoatRoughness: 0.15,
    reflectivity: 0.7,
  });

  // 2. Machined Obsidian Graphite: High-density structural core plate
  const obsidianMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#161B17"),
    roughness: 0.25,
    metalness: 0.35,
    clearcoat: 0.85,
    clearcoatRoughness: 0.12,
    reflectivity: 0.85,
  });

  // 3. Satin Aerospace Aluminum: Precision milled chamfer trims and connecting busbars
  const satinMetalMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#E2E5DC"),
    roughness: 0.18,
    metalness: 0.92,
  });

  // 4. Dark Anodized Chassis: Matte precision frame
  const darkMetalMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#2D342E"),
    roughness: 0.3,
    metalness: 0.85,
  });

  // 5. Translucent Architectural Glass: Frosted reasoning prism layer
  const frostedGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#EDFDFE"),
    transmission: 0.65,
    opacity: 1,
    transparent: true,
    roughness: 0.15,
    ior: 1.48,
    thickness: 0.5,
  });

  // 6. Brand Electric Cyan: High-energy data stream conduits
  const cyanAccentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#38D8E4"),
    emissive: new THREE.Color("#0891B2"),
    emissiveIntensity: 1.6,
    roughness: 0.15,
    metalness: 0.1,
  });

  // 7. Emerald Health Status: Operational uptime indicator
  const emeraldAccentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#10B981"),
    emissive: new THREE.Color("#059669"),
    emissiveIntensity: 1.4,
    roughness: 0.2,
    metalness: 0.1,
  });

  // 8. Flow Particle: Glowing luminous packet of work
  const particleMaterial = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#38D8E4"),
  });

  // 9. Amber Exception Node: Confidence triage marker
  const amberAccentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#F59E0B"),
    emissive: new THREE.Color("#D97706"),
    emissiveIntensity: 1.2,
    roughness: 0.25,
  });

  return {
    ceramicMaterial,
    obsidianMaterial,
    satinMetalMaterial,
    darkMetalMaterial,
    frostedGlassMaterial,
    cyanAccentMaterial,
    emeraldAccentMaterial,
    particleMaterial,
    amberAccentMaterial,
  };
}
