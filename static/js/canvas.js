$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }); 

  //---------------------------------------------------------------------------
  $('#p1').click(
  	function() { 
  		context.strokeRect(20, 20, 150, 100); //Write your code for p1-p12 here
  	} 
  );
  $('#p2').click(
  	function() {
  		context.strokeRect(20,20, 100, 100);
  	}
  );
  
  $('#p3').click(
  	function() { 
  		context.beginPath(); 
  			context.arc(50, 50, 30, 0*Math.PI, 1*Math.PI);  
  			context.closePath();
  			context.stroke();
  		}
  	);
  $('#p4').click(
  	function() {
  		context.beginPath();
  			context.arc(50, 50, 30, 0*Math.PI, 2*Math.PI);
  			context.closePath();
  			context.stroke();
  		}
  	);
  $('#p5').click(
  	function() {
  		context.beginPath(); 
  		context.moveTo(10, 10);
  		context.lineTo(10, 100);
  		context.closePath();
  		context.stroke();
  	}
  );
  $('#p6').click(
  	function() {
  		context.strokeRect(50, 50, 150, 100);
  		context.strokeStyle='green';
  		}
  	);
  $('#p7').click(
  	function() {
  		context.beginPath();
  		context.arc(50, 50, 30, 0*Math.PI, 2*Math.PI); 
  		context.closePath();
  		context.stroke();
  		context.fillStyle='red';
  		context.fill(); 
  		context.strokeStyle='red';
  	}
  );
  $('#p8').click(
  	function() { 
  		context.strokeStyle='blue';
  		context.strokeRect(80, 80, 100, 100);
  		context.fillStyle='yellow';
  		context.fillRect(80, 80, 100, 100);
  	}
  );
  $('#p9').click(
  	function() {
  		for (var square=0; square < 5; square++) {
  			context.strokeRect(square*50, 0, 50, 50);
  		}
  	});
  $('#p10').click(
  	function() {
  		for (var square=0; square < 100; square++) {
  			context.strokeRect(square*5, 0, 5, 5); 	
  		}
  	});
  $('#p11').click(
  	function() {
  		for (var squareX=0; squareX < 1000; squareX++) {
  			for (var squareY=0; squareY < 1000; squareY++) {
  			context.strokeRect(squareX*5, squareY*5, 5, 5);
  			}
  	}
  });
  $('#p12').click(
  	function() {
  		for (var circle=0; circle < 20; circle++) { 
  			context.beginPath();
  			context.arc(200, 200, 30*circle, 0*Math.PI, 2*Math.PI);
  			context.closePath(); 
  			context.stroke(); 
  		}
  	});
}); 	
