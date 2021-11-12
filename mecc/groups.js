


var m;
class Groups {
  group1(W,H,D) {
  		//var H = 40, W = 70, D = 100, K = 70;
		var group = new THREE.Group();  


		var mecc = new MECC(W,H,D);

		
		var mesh = mecc.new_box(2,H,wal_tex,{d:D-10,tz:-10});
		group.add(mesh);

		//mesh = mecc.box(2,H,door_tex,{d:10,tz:-10});
		mesh = this.door(W,H,D);
		group.add(mesh);

		//right wall
		mesh = mecc.box(2,H,wal_tex,{d:D,tx:68});
		group.add(mesh);
		//back wall
		mesh = mecc.box(W,H,wal_tex,{d:2,tz:-98});
		group.add(mesh);
		//front wall
		mesh = mecc.box(W,H,wal_tex,{d:2});
		//group.add(mesh);

		mesh = mecc.box(W,3,roof_tex,{d:100, ty: 40});
		group.add(mesh);

		mesh = mecc.box(W,3,floor_tex,{d:100});
		group.add(mesh);

		mesh = mecc.box(W,.5,floor_tex,{d:D});
		//group.add(mesh);

		//roof
		mesh = mecc.box(W,.5,roof_tex,{d:D,ty:39.5});
		//group.add(mesh);


		mesh = mecc.box(.5,20,car_tex,{d:6,tx:2,tz:-20,ty:10});
		//group.add(mesh);




		return group;

  }

  door(W,H,D){
  	var group = new THREE.Group();  
  	var mecc = new MECC(W,H,D);
 	var mesh = mecc.box(1,20,door_tex,{d:10});
 	group.add(mesh);
 	var mesh = mecc.box(1,10,door_tex,{d:2, ty: 20});
 	group.add(mesh);
 	var mesh = mecc.box(1,10,door_tex,{d:2, ty: 20, tz: -8});
 	group.add(mesh);
 	var mesh = mecc.box(1,10,door_tex,{d:10, ty: 30});
 	group.add(mesh);
 	return group;
  }

  group2(W,H,D) {
  		//var H = 40, W = 70, D = 100, K = 70;
		var group = new THREE.Group();  


		var mecc = new MECC(W,H,D);
		var mesh = mecc.box(2,H,wal_tex,{d:D});
		group.add(mesh);



		mesh = mecc.box(2,H,wal_tex,{d:D-10,tx:68,tz:-10});
		group.add(mesh);

		mesh = mecc.box(2,H,door_tex,{d:10,tx:68});
		group.add(mesh);

		mesh = mecc.box(W,H,wal_tex,{d:2,tz:-98});
		group.add(mesh);

		mesh = mecc.box(W,.5,floor_tex,{d:D});
		group.add(mesh);

		//roof
		mesh = mecc.box(W,.5,roof_tex,{d:D,ty:39.5});
		group.add(mesh);


		mesh = mecc.box(.5,20,car_tex,{d:6,tx:2,tz:-20,ty:10});
		group.add(mesh);


		return group;

  }
}