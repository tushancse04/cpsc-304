function mouse_event(){

	var three = THREE;

	var isDragging = false;
	var previousMousePosition = {
	    x: 0,
	    y: 0
	};
	$(renderer.domElement).on('mousedown', function(e) {
	    isDragging = true;
	})
	.on('mousemove', function(e) {
	    //console.log(e);
	    var deltaMove = {
	        x: e.offsetX-previousMousePosition.x,
	        y: e.offsetY-previousMousePosition.y
	    };

	    if(isDragging) {
	            
	        var deltaRotationQuaternion = new three.Quaternion()
	            .setFromEuler(new three.Euler(
	                toRadians(deltaMove.y * .1),
	                toRadians(deltaMove.x * .1),
	                0,
	                'XYZ'
	            ));
	        
	        scene.quaternion.multiplyQuaternions(deltaRotationQuaternion, scene.quaternion);
	    }
	    
	    previousMousePosition = {
	        x: e.offsetX,
	        y: e.offsetY
	    };
	});
	/* */

	$(document).on('mouseup', function(e) {
	    isDragging = false;
	});



	// shim layer with setTimeout fallback
	window.requestAnimFrame = (function(){
	    return  window.requestAnimationFrame ||
	        window.webkitRequestAnimationFrame ||
	        window.mozRequestAnimationFrame ||
	        function(callback) {
	            window.setTimeout(callback, 1000 / 60);
	        };
	})();

}




function toRadians(angle) {
	return angle * (Math.PI / 180);
}

function toDegrees(angle) {
	return angle * (180 / Math.PI);
}

