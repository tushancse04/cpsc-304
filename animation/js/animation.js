var scene, camera, glRenderer;
var boxes;

function init() {
    var canvas = document.getElementById('3d-canvas');

    // Create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x444444);

    // Create the camera
    var fov = 100;
    var aspectRatio = canvas.width / canvas.height;
    var nearPlane = 0.1;
    var farPlane = 100;
    camera = new THREE.PerspectiveCamera( fov, aspectRatio, nearPlane, farPlane );

    // Create the WebGLRenderer
    glRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

    // Add a floor to the scene
    var floorWidth = 20;
    var floorHeight = 40;
    var floorGeometry = new THREE.PlaneGeometry(floorWidth, floorHeight);
    var floorMaterial = new THREE.MeshStandardMaterial( { color: 0x009900 } );
    var floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

    floorMesh.position.set( 0, -1, -3 );
    floorMesh.rotation.set(-Math.PI/2, 0, 0 );

    scene.add(floorMesh);

    // Create the boxes
    boxes = [];

    var boxWidth = 0.9;
    var boxHeight = 2;
    var boxDepth = 0.2;
    var boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    var boxMaterial = new THREE.MeshStandardMaterial( { color: 0x00ffff });

    for(var i=0; i<14; i++) {
        var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(i-7, 1, -5);
        boxMesh.receiveShadow = true;
        boxMesh.castShadow = true;

        scene.add(boxMesh);

        boxes.push(boxMesh);
    }

    // Add Lights
    var ambient = new THREE.AmbientLight(0x333333);
    scene.add(ambient);

    var pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(2, 4, -2);
    scene.add(pointLight);

    // Enable Shadows
    glRenderer.shadowMap.enabled = true;

    floorMesh.receiveShadow = true;

    pointLight.castShadow = true;
}

// update() is called every frame.
// We rotate each box around the X-axis at slightly
// different speeds to create a neat pattern.
function update () {
    for(var i=0; i<boxes.length; i++) {
        boxes[i].rotateX(Math.PI/(100+i));
    }

    glRenderer.render( scene, camera );

    requestAnimationFrame( update );
}

init();
update();