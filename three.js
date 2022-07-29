var scene3d = document.getElementById("scene3d");
var CANVAS_WIDTH = 300;
var CANVAS_HEIGHT = 300;

// SCENE

scene = new THREE.Scene();

// CAMERA 

camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
camera.position.x = 17;
camera.position.y = 12;
camera.position.z = 13;
camera.lookAt(scene.position);

// RENDERER

renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000, 1.0);
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

// GEOMETRY & MATERIALS

var cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff55ff });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);
cube.position.z = 4;

var ballGeometry = new THREE.SphereGeometry(3, 16, 16);
var ballMaterial = new THREE.MeshPhongMaterial({ color: 0x33aaff });
var ball = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ball);
ball.position.z = -5;

var floorGeometry = new THREE.BoxGeometry(30, 1, 30);
var floorMaterial = new THREE.MeshBasicMaterial({ color: 0x656587 });
var floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);
floor.position.y = -3;
floor.receiveShadow = true;

// LIGHT

var spot1 = new THREE.SpotLight(0xffffff);
spot1.position.set(10, 100, -50);
scene.add(spot1);

// FINISH SCENE SETUP

// document.body.appendChild(scene3d.domElement);
scene3d.appendChild(renderer.domElement);
renderer.render(scene, camera);