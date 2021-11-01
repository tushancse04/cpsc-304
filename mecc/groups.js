


var m;
class Groups {
  group1() {
  		var H = 40, W = 70, D = 100, K = 70;
		var group = new THREE.Group();  


		var mecc = new MECC(W,H,D);
		var mesh = mecc.box(2,H,wal_tex,{d:D});
		group.add(mesh);

		mesh = mecc.box(2,H,wal_tex,{d:D,tx:68});
		group.add(mesh);

		mesh = mecc.box(W,H,wal_tex,{d:2*D/K,tz:-98});
		group.add(mesh);

		mesh = mecc.box(W,.5,floor_tex,{d:D});
		group.add(mesh);

		//roof
		mesh = mecc.box(W,.5,roof_tex,{d:D,ty:39.5});
		group.add(mesh);


		mesh = mecc.box(.5,20,car_tex,{d:6,tx:2,tz:-20,ty:10});
		group.add(mesh);

		mesh = mecc.plane(12*W/70,H/2,win_tex,{tx:9*W/70,tz:-98});
		//group.add(mesh);

		mesh = mecc.plane(12*W/70,H/2,win_tex,{tx:30*W/70,tz:-98});
		//group.add(mesh);

		mesh = mecc.plane(12*W/70,H/2,win_tex,{tx:50*W/70,tz:-98});
		//group.add(mesh);

		return group;

  }



}