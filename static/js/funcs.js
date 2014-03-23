$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    //alert('Drawing a square is unimplemented!');
    context.strokeStyle=color; 
    context.strokeRect(x, y, sideLen, sideLen);
    // Delete the alerts when done
  };

  var drawCircle = function(x, y, radius, color) {
   // alert('Drawing a circle is unimplemented!');
    context.beginPath(); 
    context.arc(x, y, radius, 0*Math.PI, 2*Math.PI); 
    context.closePath(); 
    context.strokeStyle=color;
    context.stroke(); 
    // Delete the alert when done
  };

  var drawTriplet = function(x_coordinate, y_coordinate, color) {
    drawCircle(x_coordinate+50, y_coordinate+50, 50, color);
    drawCircle(x_coordinate+25, y_coordinate+100, 50, color);
    drawCircle(x_coordinate+75, y_coordinate+100, 50, color);
  };

  var drawTriangle = function(x_coordinate, y_coordinate, sideLen, color) { 
    context.beginPath(); 
    context.moveTo(x_coordinate, y_coordinate); 
      context.lineTo(x_coordinate + sideLen, y_coordinate + sideLen);
    context.moveTo(x_coordinate, y_coordinate);
      context.lineTo(x_coordinate - sideLen, y_coordinate + sideLen);  
   context.moveTo(x_coordinate + sideLen, y_coordinate + sideLen);
     context.lineTo(x_coordinate - sideLen, y_coordinate + sideLen);
    context.closePath();
    context.fillStyle=color; 
    context.fill(); 
    context.strokeStyle=color;
    context.stroke();
  }; 

  var drawTriforce = function(x_coordinate, y_coordinate, color) {
    drawTriangle(x_coordinate, y_coordinate, 25, color);
    drawTriangle(x_coordinate+25, y_coordinate+25, 25, color);
    drawTriangle(x_coordinate-25, y_coordinate+25, 25, color);
}; 

  var drawTripleTriforce = function(x_coordinate, y_coordinate, color) {
    drawTriforce(x_coordinate, y_coordinate, color);
    drawTriforce(x_coordinate-50, y_coordinate+50, color);
    drawTriforce(x_coordinate+50, y_coordinate+50, color);
};

  var drawSierpinski = function(x_coordinate, y_coordinate, color) { 
    drawTripleTriforce(x_coordinate, y_coordinate, color);
    drawTripleTriforce(x_coordinate-75, y_coordinate+75, color);
    drawTripleTriforce(x_coordinate+75, y_coordinate+75, color);
};
    


  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawSquare(50, 150, 100, 'red');
    drawCircle(100, 200, 50, 'blue'); 
    drawCircle(50, 200, 50, 'green');
    drawCircle(150, 200, 50, 'green');
    drawCircle(100, 150, 50, 'green');
    drawCircle(100, 250, 50, 'green');
  });

  $('#p6').click(function() { 
    drawTriplet(200, 200, 'green'); 
  }); 

  $('#p7').click(function() { 
    drawTriplet(300, 300, 'blue');
  });

  $('#p8').click(function() {
    drawTriplet(100, 100, 'red');
    drawTriplet(100, 300, 'blue');
    drawTriplet(300, 100, 'yellow');
    drawTriplet(300, 300, 'green');
  });

  $('#p9').click(function() {
    drawTriangle(200, 300, 100, 'blue');
  });

  $('#p10').click(function() { 
    drawTriforce(300, 100, 'black'); 
  }); 

  $('#p11').click(function() {
    drawTripleTriforce(200, 100, 'red');
  });

  $('#p12').click(function() {
    drawSierpinski(200, 100, 'green');
  });

});
