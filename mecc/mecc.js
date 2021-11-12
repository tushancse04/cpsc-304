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

	new_box(w, h,tex,{d=0,tx=0,ty=0,tz=0,rx=0,ry=0,rz=0}){

		var cubeMaterials = [
        new THREE.MeshBasicMaterial({ map: tex }), //right side
        new THREE.MeshBasicMaterial({ map: tex}), //left side
        new THREE.MeshBasicMaterial({ map: tex}), //top side
        new THREE.MeshBasicMaterial({ map: tex}), //bottom side
        new THREE.MeshBasicMaterial({ map: tex}), //front side
        new THREE.MeshBasicMaterial({ map: tex}), //back side
    ];
  		var mat = new THREE.MeshBasicMaterial({color: 0xffffff,map: tex} );
	  	var box = new THREE.BoxBufferGeometry( w, h, d );
		var mesh = new THREE.Mesh(box, cubeMaterials);
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



var wal_tex,roof_tex,floor_tex,win_tex,car_tex,door_tex;

var loader = new THREE.TextureLoader();
loader.load("images/wall.jpg",
            function (texture) {
              wal_tex = texture;
            } );

loader = new THREE.TextureLoader();
loader.load("images/roof.png",
            function (texture) {
            	    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
				    texture.offset.set( 0, 0 );
				    texture.repeat.set( 16, 16 );
              		roof_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/carpet.jpg",
            function (texture) {
              floor_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/window.png",
            function (texture) {
         	    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			    texture.offset.set( 0, 0 );
			    texture.repeat.set( 16, 16 );           	
              	win_tex = texture;
            } );


var loader = new THREE.TextureLoader();
loader.load("images/window.png",
            function (texture) {
         	    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			    texture.offset.set( 0, 0 );
			    texture.repeat.set( 16, 16 ); 
              	car_tex = texture;
            } );

var loader = new THREE.TextureLoader();
loader.load("images/door.png",
            function (texture) { 
            	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 			texture.offset.set( 0, 0 );
    		texture.repeat.set( 50, 50);
              	door_tex = texture;

            } );