function getFormvalue() {
    //Write your code here
	const name = document.childNodes("form");
	const firstName = name[0].value;
	const secondName = name[1].value;
	alert(firstName+" "+secondName);
	
	

}
