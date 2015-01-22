var $ = function (id) {
    return document.getElementById(id);
}
var join_list = function () {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
	var isValid = true;
	
	if (emailAddress1 == "") { 
		$("email_address1_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("email_address1_error").firstChild.nodeValue = "";
	} 

	if (emailAddress1 !== emailAddress2) { 
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		isValid = false;
	} else {
		$("email_address2_error").firstChild.nodeValue = "";
	}  
	if ($("first_name").value == "") {
		$("first_name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("first_name_error").firstChild.nodeValue = "";
	}  
	
		if ($("last_name").value == "") {
		$("last_name_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else {
		$("first_name_error").firstChild.nodeValue = "";
	}  
	
	if (isValid) {
		$("email_form").submit(); 
		console.log(emailAddress1)
	}
	if (isValid) {
		window.alert( "Thankyou, " + $("first_name").value); 
		console.log($("first_name").value, $("last_name").value) ;
	}
		if (isValid) {
		window.prompt( "Please confirm last name" , $("last_name").value ) ;
		console.log($("last_name").value) ;
	}
	
}

window.onload = function () {
    $("join_list").onclick = join_list;
    //$("join_list").onclick = console.log('This is the console log method.');
    $("email_address1").focus();
    // enter the alert statement of step 11 here
//alert("ict4510 student Russell Erickson");
//console.log('This is the console log method.');

}



