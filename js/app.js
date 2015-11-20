

$(function() { //waits until page is loaded
$('#add').on('click',function() {
	var itemadd = $('input').val(); //finds the value of the input box.
		$('.item:first-child').after('<div class ="item"><i id="add" class="fa fa-square-o"></i><span><i class="fa fa-trash"></i></span><p>'+ $(itemadd) +'</p></div>');
	

});
$('i .fa-trash').css('color','red');
	});



