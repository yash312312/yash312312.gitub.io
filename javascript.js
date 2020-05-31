function getOption() { 
    selectElement =  
            document.querySelector('#Bundle'); 
              
    output = selectElement.value; 

    document.querySelector('.output').textContent 
            = output; 
    document.querySelector('.Product').style.setProperty('display', 'initial')
} 
var table = document.querySelector("#t01")

function addEntity(){
	
	var p = document.querySelector(".pro").value
	var c = document.querySelector(".cos").value
	if (p.length==0||c.length==0) {
		alert("Invalid Entry")
		return
	}
	c=parseInt(c)
	var rowCount = table.rows.length
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
  	cell1.innerHTML = p;
  	cell2.innerHTML = c;
  	cell3.innerHTML = "<INPUT type=\"checkbox\" name=\"chk\"/>"
  	var x=document.querySelector("#finCos")
  	var cos=parseInt(x.innerHTML)+c
  	x.innerHTML = cos

}

function remEntity(){
try {
		var rowCount = table.rows.length;

		for(var i=0; i<rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[2].childNodes[0];
			if(null != chkbox && true == chkbox.checked) {
				if(rowCount <= 1) {
					alert("Cannot delete all the rows.");
					break;
				}
				var x=document.querySelector("#finCos")
  				var cos=parseInt(x.innerHTML)-parseInt(table.rows[i].cells[1].innerHTML)
  				x.innerHTML = cos
				table.deleteRow(i);

				rowCount--;
				i--;
			}


		}
	}catch(e) {
		alert(e);
	}
}