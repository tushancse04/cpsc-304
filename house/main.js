var left_mesh,scene,camera,renderer;
var theta_90 = Math.PI*.5;

setTimeout(function(){
	main();
	requestAnimationFrame(update);
}, 1000);

function initialize()
{


}

function main()
{
	container = document.querySelector('#container');
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,1000);
	camera.position.z = 25; 
	renderer = new THREE.WebGLRenderer(); 
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	houseGroup = new THREE.Group();  


	edgeLine = new THREE.BoxBufferGeometry( 10, 5, 30 ); 
	edges = new THREE.EdgesGeometry( edgeLine ); 
	line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
	houseGroup.add(line);


	var planeMat = new THREE.MeshBasicMaterial({color: 0xffffff,map: wal_tex} );
	left_wall = new THREE.PlaneBufferGeometry(30,5);
	left_mesh  = new THREE.Mesh(left_wall, planeMat);
	left_mesh.material.side = THREE.DoubleSide;
	left_mesh.position.x -= 5;
	left_mesh.rotation.y += theta_90;
	//houseGroup.add(left_mesh);

	mesh = new MECC(30,5,wal_tex,{tx:-5,ry:90}).plane;
	houseGroup.add(mesh);

	mesh = new MECC(30,5,wal_tex,{tx:5,ry:90}).plane;
	houseGroup.add(mesh);

	mesh = new MECC(10,30,wal_tex,{ty:2.5,rx:90}).plane;
	houseGroup.add(mesh);

	mesh = new MECC(10,30,floor_tex,{ty:-2.5,rx:90}).plane;
	houseGroup.add(mesh);


	scene.add(houseGroup); 

	scene.background = new THREE.Color(0x030124);
  	renderer.render(scene, camera);


}


function update () {
  renderer.render(scene, camera);
  requestAnimationFrame(update);  
}


cons_k = .1; 
function animationBuilder(direction) {
  return function animateRotate() {
    switch (direction) {
      case 'up':
        scene.position.z += cons_k;
        break;
      case 'down':
        scene.position.z -= cons_k;
        break;
      case 'left':
      	scene.rotation.y += cons_k*.1;
        console.log(scene.rotation.y);
        break;
      case 'right':
        scene.rotation.y -= cons_k*.1;
        break;
      default:
        break;
    }
  }
}

var animateDirection = {
  up: animationBuilder('up'),
  down: animationBuilder('down'),
  left: animationBuilder('left'),
  right: animationBuilder('right')
}

function checkKey(e) {
  e = e || window.event;
  e.preventDefault();
 
  //based on keycode, trigger appropriate animation:
  if (e.keyCode == '38') {
    animateDirection.up();
  } else if (e.keyCode == '40') {
    animateDirection.down();
  } else if (e.keyCode == '37') {
    animateDirection.left();
  } else if (e.keyCode == '39') {
    animateDirection.right();
  }
}
document.onkeydown = checkKey;