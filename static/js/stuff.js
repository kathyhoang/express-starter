alert('yo'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
	alert('Hello world!');
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $("#houdini_text").hide();  
});

$('#reappear').click(function() {
  $("#houdini_text").show();
});


$('#pink').click(function() {
	$("#tickled_text").css('color', 'pink');
});


$('#greet').click(function() {
	alert('Hello ' + $('#my_name').val());
	});// Problem 4 (Greet Me) -----------------------------------------------------
// WRITE CODE HERE
