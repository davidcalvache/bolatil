<script type="module">
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);  // Fondo claro

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});  // Activando anti-alias para suavizar los bordes
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 2, 100);  // Luz más brillante
light.position.set(50, 50, 50);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.7));  // Luz ambiente más clara

const loader = new THREE.FontLoader();
loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', function(font) {  // Fuente en negrita
    const textGeometry = new THREE.TextGeometry('BOLATIL', {
        font: font,
        size: 8,
        height: 5,  // Aumentando el grosor del texto
        curveSegments: 24,  // Mejorando la calidad de las curvas
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 5
    });

    textGeometry.center();  // Centrando la geometría

    const textMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, specular: 0x555555, shininess: 30 });  // Material mejorado
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(0, 0, 0);
    scene.add(textMesh);

    camera.position.z = 30;

    const animate = function () {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.05;  // Manteniendo la velocidad de rotación
        renderer.render(scene, camera);
    };

    animate();
});
</script>
