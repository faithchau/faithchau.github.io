
	function loadDoc(documentName){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState ==4 && this.status == 200){
				document.getElementById(documentName+"Body").innerHTML = this.responseText;
				
			}
		};

		xhttp.open("GET", "/res/"+documentName+".txt", true);
		xhttp.send();
	}
