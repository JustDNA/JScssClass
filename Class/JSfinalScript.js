var rows = 1;

var productIDs = {"prod1":"Water 1L", 
				  "prod2":"Paper plates X 40", 
				  "prod3":"Paper cups X 100", 
				  "prod4":"Soap", 
				  "prod5":"Floor Cleaner", 
				  "prod6":"Towel", 
				  "prod7":"Dairy Milk", 
				  "prod8":"Wheat bread", 
				  "prod9":"Butter", 
				  "prod10":"Mosquito repellant"};

var cpu = {"prod1":"20",
		  "prod2":"40",
		  "prod3":"50",
		  "prod4":"45",
		  "prod5":"97",
		  "prod6":"250",
		  "prod7":"30",
		  "prod8":"15",
		  "prod9":"10",
		  "prod10":"15"};

var tax = 0;
var total = 0;
var totalGrand = 0;

function printBill () {
	var divToPrint=document.getElementById('printArea');
	newWin = window.open("");
	newWin.document.write(divToPrint.outerHTML);
	newWin.print();
	newWin.close();
}

function validate() {
	var id = document.forms["LoginForm"]["uid"].value;
    var pass = document.forms["LoginForm"]["pass"].value;
    if (id == "Dhiwakar" && pass == "14171417") {
        	document.getElementById('login').style.display = 'none';
        	document.getElementById('data').style.display = 'block';
       }else{
        	alert("Wrong credentials!");
       }
}

function fillName (rowId) {
	var prodId = document.getElementById("pid"+rowId).value;
	document.getElementById("pn"+rowId).innerText = productIDs[prodId];
	document.getElementById("cu"+rowId).innerText = cpu[prodId];
}

function fillCost (rowId) {
	var prodId = document.getElementById("pid"+rowId).value;
	var qty = document.getElementById("qty"+rowId).value;
	document.getElementById("c"+rowId).innerText = parseInt(cpu[prodId])*qty;
	total = total + parseInt(cpu[prodId])*qty;
	tax = total*0.1;
	totalGrand = total+tax;
	document.getElementById("tax").innerText = tax+" Rs";
	document.getElementById("total").innerText = totalGrand+" Rs";
}

function addRow() {
	rows++;
	var row = document.createElement('tr');
	row.setAttribute("id", "row"+rows);
	row.innerHTML = 		"<td>" +
							rows +
							"</td>" +
							"<td>" +
							"<input id='pid"+ rows +"' onblur=\"fillName("+ rows +")\" type=\"text\" placeholder='Prodct ID' class=\"form-control\"/>" +
							"</td>" +
							"<td>" +
							"<label id='pn"+ rows +"' type=\"text\" class=\"\"/>" +
							"</td>" +
							"<td>" +
							"<label id='cu"+ rows +"' type=\"text\" class=\"\"/>" +
							"</td>" +
							"<td>" +
							"<input id='qty"+ rows +"' onblur=\"fillCost("+ rows +")\"  type=\"text\" placeholder='Qty' class=\"form-control\"/>" +
							"</td>" +
							"<td>" +
							"<label id='c"+ rows +"' type=\"text\" class=\"\"/>" +
							"</td>";
	var temp = document.getElementById('table').getElementsByTagName('tbody');
	temp[0].appendChild(row);
}

function deleteRow() {
	if(rows < 1){
		alert("Min rows reached");
		return;
	}
	var id = "row"+rows;

	var prodId = document.getElementById("pid"+rows).value;	
	var qty = document.getElementById("qty"+rows).value;
	total = total - parseInt(cpu[prodId])*qty;
	tax = total*0.1;
	totalGrand = total+tax;
	document.getElementById("tax").innerText = tax+" Rs";
	document.getElementById("total").innerText = totalGrand+" Rs";

	var temp = document.getElementById('table').getElementsByTagName('tbody');
	temp = temp[0];
	temp.removeChild(document.getElementById(id));
	rows--;
}