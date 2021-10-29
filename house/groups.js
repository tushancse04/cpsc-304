


class Groups {
  group1() {
		var group = new THREE.Group();  



		var line = new MECC(10,5,wal_tex,{z:30}).line;
		group.add(line);

		var mesh = new MECC(30,5,wal_tex,{tx:-5,ry:90}).plane;
		group.add(mesh);

		mesh = new MECC(30,5,wal_tex,{tx:5,ry:90}).plane;
		group.add(mesh);

		mesh = new MECC(10,30,wal_tex,{ty:2.5,rx:90}).plane;
		group.add(mesh);

		mesh = new MECC(10,30,floor_tex,{ty:-2.5,rx:90}).plane;
		group.add(mesh);
		return group;

  }
  static eat() {
    return this;
  }
}