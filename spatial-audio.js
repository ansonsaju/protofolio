import * as THREE from 'three/webgpu';

let audioListener;
const sounds = [];

export function initSpatialAudio(camera) {
    // Create an AudioListener and add it to the camera
    audioListener = new THREE.AudioListener();
    camera.add(audioListener);
    return audioListener;
}

export function attachStationSound(station, type = 'hum', listener) {
    // Create a PositionalAudio object
    const sound = new THREE.PositionalAudio(listener);
    
    // We would normally load an audio file here. 
    // For demonstration/offline capability, we will synthesize a low-frequency hum 
    // using the Web Audio API oscillator.
    
    const context = listener.context;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    if (type === 'hum') {
        oscillator.type = 'sine';
        oscillator.frequency.value = 60; // Deep hum
        gainNode.gain.value = 0.5;
    } else if (type === 'crackle') {
        oscillator.type = 'square';
        oscillator.frequency.value = 120; // Electrical/glitchy edge
        gainNode.gain.value = 0.2;
        // Simple LFO for crackle effect
        const lfo = context.createOscillator();
        lfo.frequency.value = 10;
        lfo.connect(gainNode.gain);
        lfo.start();
    }

    oscillator.connect(gainNode);
    sound.setNodeSource(gainNode);

    // Roll-off distance
    sound.setRefDistance(2);
    sound.setDistanceModel('exponential');
    sound.setRolloffFactor(2);

    station.mesh.add(sound);
    sounds.push({ sound, oscillator });

    return { sound, oscillator };
}

export function startAllSounds() {
    // Must be called upon user interaction (like clicking "ENTER THE LAB")
    if (audioListener && audioListener.context.state === 'suspended') {
        audioListener.context.resume();
    }
    
    sounds.forEach(s => {
        if (!s.started) {
            s.oscillator.start();
            s.started = true;
        }
    });
}
