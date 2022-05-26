import * as THREE from 'three';

import {OBJLoader} from '../loaders/OBJLoader.js';

const ObjectWrapper = () => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 5;
    const loader = new OBJLoader();

    loader.load(
        'src/models/Queen.obj',
        function (object) {
            scene.add(object);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        function (error) {
            console.log('An error happened');
        }
    );

    var animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
};

export default ObjectWrapper;
