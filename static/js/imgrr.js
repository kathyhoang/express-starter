
//if(1) {$('#toggle_img').click(function() {
//	$('#main_img').hide();
//	$('#toggle_img').text('Reappear!');
//})};

// Problem 2 (Peekaboo) ------------------------------------------------------
$('#toggle_img').click(
	function() {
		if($('#toggle_img').text() === "Go Away!"){
			$('#main_img').hide(); 
			$('#toggle_img').text('Reappear!');
		}
		else
		{
			$('#toggle_img').text("Go Away!");
			$('#main_img').show();
		}	
	}
);


// Problem 3 (Swap Em) -----------------------------------------------
$('#change_img').click(
	function() {
		//alert($("#new_img_file").val());
		//alert("/static/img/" + $("#new_img_file").val()
		//)
		$('#main_img').attr('src', '../static/img/' + $('#new_img_file').val()); 
	}
); 
	// WRITE CODE HERE

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
	alert($(this).attr('src'));
	}
);

// Problem 5 (Imgrr) -------------------------------------------------
$('.pfiveclickable').click(function() {
	$('#pfive_image').attr('src', ($(this).attr('src'))); 
});