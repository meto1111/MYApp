$(function(){
	$('form').submit(function(){

		if(validateUsername() && validationPassword())
		{
			showSucces('You have logged in susccesfully');
		}
		

		function validateUsername(){
			if($('#username').val().length ==0)
			{
				alert('Empty');
				return false;
			}

		}
		function validationPassword(){

			if($('#username').val().length ==0)
			{
				alert('Empty');
				return false;
			}

		}

		

		return false;
	})
})