function getFormvalue() {
    //Write your code here
	const name = document.getElementsByTagName("input")
	const firstName = name[0].value;
	const lastName = name[1].value;
	let btn = name[2];
	return alert(firstName+" "+lastName);
	
	// btn.addEventListener('click' , () =>{
	// 	return alert(firstName+" "+lastName);
	// } )
	
	}


