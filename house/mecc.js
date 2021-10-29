class MECC {
  constructor(w, h,tex,{tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}) {
  	rx = Math.PI*rx/180;
  	ry = Math.PI*ry/180;
  	rz = Math.PI*rz/180;
	var mat = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex} );
	var p = new THREE.PlaneBufferGeometry(w,h);
	var mesh  = new THREE.Mesh(p, mat);
	mesh.material.side = THREE.DoubleSide;
	mesh.position.x += tx;
	mesh.position.y += ty;
	mesh.position.z += tz;
	mesh.rotation.x += rx;
	mesh.rotation.y += ry;
	mesh.rotation.z += rz;
	

	/*
	console.log(tx,ty,tz);
	var mat = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex} );
	var p = new THREE.PlaneBufferGeometry(30,5);
	var mesh  = new THREE.Mesh(p, mat);
	mesh.material.side = THREE.DoubleSide;
	mesh.position.x -= 5;
	mesh.rotation.y += theta_90;*/
	this.plane = mesh;	
  }
}

var wal_tex,roof_tex,floor_tex;

var loader = new THREE.TextureLoader();
loader.load("wall.jpg",
            function (texture) {
              wal_tex = texture;
            } );

loader = new THREE.TextureLoader();
loader.load("roof.jpg",
            function (texture) {
              roof_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("floor.jpeg",
            function (texture) {
              floor_tex = texture;
            } );