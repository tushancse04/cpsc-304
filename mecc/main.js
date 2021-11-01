var left_mesh,scene,camera,renderer;
function main()
{
	container = document.querySelector('#container');
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight, 1,1000);
	camera.position.z = 100; 
	renderer = new THREE.WebGLRenderer(); 
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	groups = new Groups();
	scene.add(groups.group1());

	scene.background = new THREE.Color(0x030124);
  	renderer.render(scene, camera);
}





