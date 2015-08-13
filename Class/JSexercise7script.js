function init () {
	document.getElementById("btn1").addEventListener("click", function() {
		alert("clicked");
	});

	document.getElementById("div1").addEventListener("mousemove", function(e) {
		document.getElementById("divTest1").innerHTML = e.clientX + " " + e.clientY;
	}, true);

	document.getElementById("div2").addEventListener("click", function(e) {
		alert("Clicked div2"); e.stopPropagation();
	}, false);

	document.getElementById("div1").addEventListener("click", function(e) {
		alert("Clicked div1"); e.stopPropagation();
	}, false);

	document.getElementById("usrEmail").addEventListener("keydown", function(e){
		document.getElementById("divTest2").innerHTML += e.keyCode;
	});

}

function writeCookie(cookieName, cookieValue, expiry){
		var d = new Date();
		d.setTime(d.getTime() + (expiry*24*60*60*1000));
		var expires = "expires=" + d.toUTCString;
		document.cookie = cookieName+"="+cookieValue+";"+expires;
}

function readCookie(cookieName){
	var name = cookieName + "=";
	var ca = document.cookie.split(";");
	for(var i = 0;  i < ca.length; i++){
		var c = ca[i];
		while(c.charAt(0)==' ') c = c.substring(1);
		if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}