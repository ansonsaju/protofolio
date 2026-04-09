import * as THREE from 'three/webgpu';
import { pass, color } from 'three/tsl';
import RAPIER from '@dimforge/rapier3d';
import { buildCyberneticLab, projectStations } from './environment.js';
import { initSpatialAudio, attachStationSound, startAllSounds } from './spatial-audio.js';

// --- System Variables ---
let camera, scene, renderer;
let world, playerBody;
let clock = new THREE.Clock();
let blocker = document.getElementById('blocker');
let instructions = document.getElementById('instructions');
let isLocked = false;

// Input tracking
const keys = { w: false, a: false, s: false, d: false };

async function init() {
    // 1. Initialize WebGPU Renderer
    const canvas = document.getElementById('canvas3d');
    renderer = new THREE.WebGPURenderer({ canvas: canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x050510); // Deep space black
    
    // WebGPU needs to be initialized asynchronously
    await renderer.init();

    // 2. Setup Scene & Camera
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.05); // Cyber-noir atmosphere

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Add crosshair
    const uiLayer = document.getElementById('ui-layer');
    const crosshair = document.createElement('div');
    crosshair.className = 'crosshair';
    uiLayer.appendChild(crosshair);

    // 3. Setup Rapier Physics World
    const gravity = { x: 0.0, y: -9.81, z: 0.0 };
    world = new RAPIER.World(gravity);

    // 4. Create Player Body
    setupPlayer();

    // 5. Build Environment (Lab Corridor)
    buildCyberneticLab(scene, world, RAPIER);

    // Initialize Global Spatial Audio
    const listener = initSpatialAudio(camera);
    
    // Attach procedural sounds to our newly created stations
    projectStations.forEach((station, index) => {
        const type = index % 2 === 0 ? 'hum' : 'crackle';
        attachStationSound(station, type, listener);
    });

    // 6. Setup UI Elements
    setupUI();

    // 7. Setup Controls
    setupControls();

    // 8. Start Game Loop
    renderer.setAnimationLoop(animate);
}

function setupUI() {
    const uiLayer = document.getElementById('ui-layer');
    
    // Create the main info panel
    const panel = document.createElement('div');
    panel.id = 'project-panel';
    panel.className = 'info-panel';
    panel.innerHTML = `
        <h2 id="p-title">Project Name</h2>
        <p class="keys" style="display:inline-block; margin-bottom:1rem;" id="p-type">Type</p>
        <br/>
        <p id="p-desc">Description</p>
        <p style="color:var(--cyan); font-weight:bold;" id="p-tech">Tech</p>
    `;
    uiLayer.appendChild(panel);
}

function setupPlayer() {
    // Rapier physics character
    const radius = 0.5;
    const height = 1.0;
    
    let bodyDesc = RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(0, 5, 0)
        .lockRotations(); // Keep player upright
    playerBody = world.createRigidBody(bodyDesc);
    
    let colliderDesc = RAPIER.ColliderDesc.capsule(height / 2, radius);
    world.createCollider(colliderDesc, playerBody);
}

// Function buildEnvironment removed, using environment.js

// Global camera rotation variables
const euler = new THREE.Euler(0, 0, 0, 'YXZ');
const PI_2 = Math.PI / 2;

function setupControls() {
    instructions.addEventListener('click', () => {
        document.body.requestPointerLock();
        startAllSounds();
    });

    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === document.body) {
            isLocked = true;
            blocker.style.display = 'none';
        } else {
            isLocked = false;
            blocker.style.display = 'flex';
        }
    });

    // Mouse Look
    document.addEventListener('mousemove', (event) => {
        if (!isLocked) return;

        const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

        euler.setFromQuaternion(camera.quaternion);
        euler.y -= movementX * 0.002;
        euler.x -= movementY * 0.002;
        euler.x = Math.max(-PI_2, Math.min(PI_2, euler.x));
        camera.quaternion.setFromEuler(euler);
    });

    // Keyboard Movement
    document.addEventListener('keydown', (event) => {
        switch (event.code) {
            case 'KeyW': keys.w = true; break;
            case 'KeyA': keys.a = true; break;
            case 'KeyS': keys.s = true; break;
            case 'KeyD': keys.d = true; break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch (event.code) {
            case 'KeyW': keys.w = false; break;
            case 'KeyA': keys.a = false; break;
            case 'KeyS': keys.s = false; break;
            case 'KeyD': keys.d = false; break;
        }
    });
    
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

const speed = 5.0; // Slow, atmospheric speed
const vector = new THREE.Vector3();
const direction = new THREE.Vector3();

function animate() {
    const dt = clock.getDelta();

    // 1. Step Physics
    world.step();

    // 2. Handle Player Input (Physics Forces)
    if (isLocked) {
        vector.set(0, 0, 0);
        
        // Z axis (Forward/Back)
        if (keys.w) vector.z -= 1;
        if (keys.s) vector.z += 1;
        // X axis (Left/Right)
        if (keys.a) vector.x -= 1;
        if (keys.d) vector.x += 1;
        
        vector.normalize();
        
        // Convert local movement to world space relative to camera rotation
        direction.copy(vector);
        direction.applyQuaternion(camera.quaternion);
        direction.y = 0; // Don't fly
        direction.normalize();
        
        const velocity = playerBody.linvel();
        playerBody.setLinvel({
            x: direction.x * speed,
            y: velocity.y,
            z: direction.z * speed
        }, true);
    }

    // 3. Sync Camera to Player rigid body
    const translation = playerBody.translation();
    camera.position.set(translation.x, translation.y + 1.0, translation.z);

    // 4. Animate Stations and Check Proximity
    let activeStation = null;
    const playerPos = new THREE.Vector3(translation.x, translation.y, translation.z);

    projectStations.forEach(station => {
        // Rotate Hologram
        station.mesh.rotation.y += dt;
        station.mesh.rotation.x += dt * 0.5;
        
        // Bobbing motion
        station.mesh.position.y = station.basePosition.y + 2.5 + Math.sin(clock.elapsedTime * 2 + station.position.x) * 0.2;

        // Distance Check (Contact Zone radius = 4 units)
        const distance = playerPos.distanceTo(station.basePosition);
        if (distance < 4.0) {
            activeStation = station;
        }
    });

    // Handle UI Visibility
    const panel = document.getElementById('project-panel');
    if (activeStation) {
        if (!panel.classList.contains('visible')) {
            document.getElementById('p-title').textContent = activeStation.data.title;
            document.getElementById('p-type').textContent = activeStation.data.type;
            document.getElementById('p-desc').textContent = activeStation.data.desc;
            document.getElementById('p-tech').textContent = activeStation.data.tech;
            panel.classList.add('visible');
        }
    } else {
        if (panel.classList.contains('visible')) {
            panel.classList.remove('visible');
        }
    }

    // 5. Render
    renderer.render(scene, camera);
}

init();
