$(function() {
	//Bind "enter" to the login form to enable login without pressing button
	$("input").keypress(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			$("#login-form").submit();
		}
	});
});