/**
 * @author npatel
 */
//Toggle completed class when any li element is clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Show delete icon when you hover over a li element
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Add new todos when you type something in the input box
$("input[type='text']").keypress(function(event){
	 var todoText = $(this).val();
	 if(event.which === 13 && $.trim(todoText) !== '')
	 {
	 	$(this).val("");
	    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	 }	
});

//Hide and show input form
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});