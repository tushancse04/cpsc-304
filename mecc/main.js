

var left_mesh,scene,camera,renderer,controls;
function main()
{
	container = document.querySelector('#container');
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(20,window.innerWidth/window.innerHeight, 1,1000);
	camera.position.z =130; 
	renderer = new THREE.WebGLRenderer(); 
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);


	AddGroups();
	scene.background = new THREE.Color(0x030124);

	mouse_event();
}

window.addEventListener('mousemove', event => {

    event.preventDefault();

    if ( isMouseDown ) {

        theta = - ( ( event.clientX - onMouseDownPosition.x ) * 0.5 )
                + onMouseDownTheta;
        phi = ( ( event.clientY - onMouseDownPosition.y ) * 0.5 )
              + onMouseDownPhi;

        phi = Math.min( 180, Math.max( 0, phi ) );

        camera.position.x = radious * Math.sin( theta * Math.PI / 360 )
                            * Math.cos( phi * Math.PI / 360 );
        camera.position.y = radious * Math.sin( phi * Math.PI / 360 );
        camera.position.z = radious * Math.cos( theta * Math.PI / 360 )
                            * Math.cos( phi * Math.PI / 360 );
        camera.updateMatrix();
    	controls.update();
    	renderer.render(scene, camera);
    }

    mouse3D = projector.unprojectVector(
        new THREE.Vector3(
            ( event.clientX / renderer.domElement.width ) * 2 - 1,
            - ( event.clientY / renderer.domElement.height ) * 2 + 1,
            0.5
        ),
        camera
    );
});
