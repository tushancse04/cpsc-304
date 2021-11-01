class MECC {
	constructor(W,H,D) {
		this.W = W;
		this.H = H;
		this.D = D;
	}

	line(w, h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
		var edgeLine = new THREE.BoxBufferGeometry( w, h, d ); 
		var edges = new THREE.EdgesGeometry( edgeLine ); 
		var mesh = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
		return mesh;	
	}

	plane(w, h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
		var mat = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex} );
		var p = new THREE.PlaneBufferGeometry(w,h);
		var mesh  = new THREE.Mesh(p, mat);
		mesh.material.side = THREE.DoubleSide;
		mesh = this.transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d);
		return mesh;
	}

	box(w, h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){
  		var mat = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex} );
	  	var box = new THREE.BoxBufferGeometry( w, h, d );
		var mesh = new THREE.Mesh(box, mat);
		mesh.material.side = THREE.DoubleSide;
		mesh = this.transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d);
		return mesh;
	}

	transform(mesh,tx,ty,tz,rx,ry,rz,w,h,d){
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

}



var wal_tex,roof_tex,floor_tex,win_tex,car_tex;

var loader = new THREE.TextureLoader();
loader.load("images/wall.jpg",
            function (texture) {
              wal_tex = texture;
            } );

loader = new THREE.TextureLoader();
loader.load("images/roof.jpg",
            function (texture) {
              roof_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/floor.jpeg",
            function (texture) {
              floor_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/win_1.png",
            function (texture) {
              win_tex = texture;
            } );


var loader = new THREE.TextureLoader();
loader.load("images/cartain.png",
            function (texture) {
              car_tex = texture;
            } );