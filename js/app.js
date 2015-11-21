

$(function() { //waits until page is loaded
$('#add').on('click',function() {
	var itemadd = $('input').val(); //finds the value of the input box.
		$('.item:first-child').after('<div class ="item"><i class="fa fa-square-o"></i><span><i class="fa fa-trash"></i></span><p>'+itemadd+'</p></div>');	
});

$('input').on('keydown', function(e){
	if(e.keyCode == 13){ //senses use of enter button
		$('#add').click();
	}
});

$('div').on('click', '.fa-trash', function() {
	$(this).closest('div').remove();
}); //deletes items

$('.list').on('click', '.fa-square-o', function() {
	$(this).toggleClass('fa-check-square-o fa-square-o');
	$(this).closest('div').find('p').toggleClass('checked none'); 
}); //toggles unchecked

$('.list').on('click', '.fa-check-square-o', function() {
	$(this).toggleClass('fa-square-o fa-check-square-o');
	$(this).closest('div').find('p').toggleClass('none checked'); 

});//toggles checked
		
});
//end
