var mesh_g;
function AddGroups(){
	groups = new Groups();
	var room1 = groups.group1(70,40,100);
	var room4 = room1.clone();

	//room1.position.x += 50;
	var room2 = room1.clone();
	var room3 = room1.clone();
	room2.position.z += -100;
	room3.position.z += -200;


	room4.position.x += -50;
	var room5 = room4.clone();
	var room6 = room4.clone();
	room5.position.z += -100;
	room6.position.z += -200;

	//var group2 = groups.group2(70,40,100);
	//group1.position.x += 55;
	//scene.add(room1);
	//scene.add(room2);
	//scene.add(room3);

	var group1 = new THREE.Group();
	group1.add(room1);
	//group1.add(room2);
	//group1.add(room3);
	//scene.add(group1);


	var group2 = new THREE.Group();
	group2.add(room4);
	group2.add(room5);
	group2.add(room6);
	//scene.add(group2);

	var group = new THREE.Group();
	group.add(group1);
	//group.add(group2);
	var mecc = new MECC(30,10,300);
	var mesh = mecc.box(30,1,floor_tex,{d:300,tz:-100,ty:-20});
	mesh_g = mesh;
	//group.add(mesh);
	mesh_g = group;
	scene.add(group);

	//group2.position.x -= 55;
	//scene.add(group2);


	//scene.add(mesh);
}

function transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d){
		rx = Math.PI*rx/180;
	  	ry = Math.PI*ry/180;
	  	rz = Math.PI*rz/180;
		mesh.position.x -= this.W/2-w/2 - tx;
		mesh.position.y -= this.H/2-h/2 - ty;
		mesh.position.z += this.D/2-d/2 + tz;
		mesh.rotation.x += rx;
		mesh.rotation.y += ry;
		mesh.rotation.z += rz;
		return mesh;	
}