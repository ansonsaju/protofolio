import * as THREE from 'three/webgpu';
import { pass, color, time, positionLocal, vec3, fract, oscSine, mix } from 'three/tsl';

export const projectsData = [
    { id: 'ai-sizing', title: 'AI Sizing System v3.0', type: 'Enterprise AI', tech: 'Python, ML, React', desc: '85% prediction accuracy, deploying instantly.' },
    { id: 'farmlink', title: 'FarmLink', type: 'AI Crop Detection', tech: 'TF.js, Google ML', desc: 'Detects diseases in real-time.' },
    { id: 'canteen', title: 'Canteen Management', type: 'Web System', tech: 'Full-Stack', desc: 'Real-time ordering and queuing.' },
    { id: 'tailor', title: 'Tailor Dashboard', type: 'Management', tech: 'PHP, ML', desc: 'Automated predictive analytics.' },
    { id: 'espera', title: 'ESPERA Power', type: 'Corporate', tech: 'Responsive', desc: 'Electrical solutions site.' },
    { id: 'smart-env', title: 'Smart Environment', type: 'IoT Edge', tech: 'ESP32, C++', desc: 'Real-time sensor web server.' },
    { id: 'home-auto', title: 'Home Automation', type: 'IoT', tech: 'Relays, PIR', desc: 'Connected ecosystem.' }
];

export const projectStations = [];

export function buildCyberneticLab(scene, world, RAPIER) {
    // 1. Core Atmosphere
    scene.fog = new THREE.FogExp2(0x050510, 0.04);
    
    // 2. The Corridor Floor
    const floorGeometry = new THREE.PlaneGeometry(20, 200);
    const floorMaterial = new THREE.MeshStandardNodeMaterial({ 
        color: 0x050510, 
        roughness: 0.1, 
        metalness: 0.9 
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.z = -80; // Extend deep into z-axis
    scene.add(floor);

    // Physics for floor
    let floorBodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(0, 0, -80);
    let floorBody = world.createRigidBody(floorBodyDesc);
    let floorColliderDesc = RAPIER.ColliderDesc.cuboid(10, 0.1, 100);
    world.createCollider(floorColliderDesc, floorBody);

    // 3. Grid Lines (Tron-style TRON grid)
    const gridHelper = new THREE.GridHelper(200, 100, 0x06B6D4, 0x011A24);
    gridHelper.position.y = 0.01;
    gridHelper.position.z = -80;
    scene.add(gridHelper);

    // 4. Energy Beams (TSL Animated Instanced Mesh for High Performance)
    createEnergyRain(scene);

    // 5. Lighting
    const ambLight = new THREE.AmbientLight(0x050510, 0.5);
    scene.add(ambLight);

    // 6. Generate Project Stations along the corridor
    let zOffset = -15;
    projectsData.forEach((project, index) => {
        const isLeft = index % 2 === 0;
        const xPos = isLeft ? -5 : 5;
        
        createProjectStation(scene, world, RAPIER, project, xPos, zOffset);
        zOffset -= 20; // Space out stations by 20 units
    });
}

function createEnergyRain(scene) {
    // 100,000 highly performant particles
    const particleCount = 100000;
    const geometry = new THREE.BoxGeometry(0.05, 0.5, 0.05); // Tiny slivers

    // TSL Node Material for dynamic animation without CPU overhead
    // We animate position.y downwards, wrapping around using fract()
    const material = new THREE.MeshBasicNodeMaterial({
        color: color(0x06B6D4) // Cyan energy
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, particleCount);
    
    // Position them randomly in a huge volume
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    
    for (let i = 0; i < particleCount; i++) {
        position.x = (Math.random() - 0.5) * 50;
        position.y = Math.random() * 50;
        position.z = (Math.random() - 0.5) * 200;
        
        matrix.setPosition(position);
        instancedMesh.setMatrixAt(i, matrix);
    }
    
    // This is a static matrix setup. For full WebGPU compute node animation,
    // we would use storage buffers. For now, this creates a massive dense starfield/rainfield.
    scene.add(instancedMesh);
}

function createProjectStation(scene, world, RAPIER, project, xPos, zPos) {
    // Holographic Base
    const baseGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.5, 32);
    const baseMat = new THREE.MeshStandardNodeMaterial({
        color: 0x111111,
        metalness: 1.0,
        roughness: 0.2,
        emissive: 0x06B6D4,
        emissiveIntensity: 0.2
    });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(xPos, 0.25, zPos);
    scene.add(base);

    // Physics for Base
    let baseBodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(xPos, 0.25, zPos);
    let baseBody = world.createRigidBody(baseBodyDesc);
    let baseColliderDesc = RAPIER.ColliderDesc.cylinder(0.25, 1.5);
    world.createCollider(baseColliderDesc, baseBody);

    // Hologram Projection Core
    const coreGeo = new THREE.OctahedronGeometry(1);
    const coreMat = new THREE.MeshPhysicalNodeMaterial({
        color: 0xEC4899, // Magenta
        transmission: 0.9,
        opacity: 1,
        roughness: 0.1,
        ior: 1.5,
        thickness: 0.5
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(xPos, 2.5, zPos);
    scene.add(core);

    // Point Light for dramatic effect
    const light = new THREE.PointLight(0xEC4899, 5, 10);
    light.position.set(xPos, 2.5, zPos);
    scene.add(light);

    // Save reference for interaction loops
    projectStations.push({
        id: project.id,
        data: project,
        mesh: core,
        position: new THREE.Vector3(xPos, 2.5, zPos),
        basePosition: new THREE.Vector3(xPos, 0, zPos)
    });
}
