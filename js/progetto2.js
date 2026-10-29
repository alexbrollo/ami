
alfa=function(element) {
	var beng=$("#bengali").val();
	//var lat=$("#latin").val();
	beng+=element.value;
	
	$("#latin").val(element.id);
	$("#bengali").val(beng).focus();
	//bengaliBox.setRangeText();
	
	//latinBox.setRangeText(element.id);
	
	}
	
alfa_1=function(element) {
	// return [element.id, element.value];
	//bengaliBox=document.getElementById("bengali");
	//bengaliBox.value="";
	//bengaliBox.setRangeText(element.value);
	
	latinBox=document.getElementById("latin");
	latinBox.value=element.id;
	console.log(element.value,$("#bengali").val());
	if (element.value == $("#bengali").val()) {$("#res").css("color","green");
	risultato="OK!";}
	else {$("#res").css("color","red");
	risultato="No! "+element.id + " : " + element.value};
	$("#res").text(risultato);
	}
inizia=function() {
	console.log("inizio");
	for(i=0; i<lettere.length; i+=1) {
	 x=new $("<button>");
	 x.attr("id",lettere[i][0]);
	 x.attr("value",lettere[i][1]);
	 x.text(lettere[i][0]);
	 x.attr("onclick","alfa(this)");
	 if ("ািীুূৃৄৢৣেৈোৌ".indexOf(x.attr("value"))>-1) x.css("color","red");
	 $("#bottom-buttons").append(x);
	}
	$("#vai").click(function() {
		
		//var splitBox=document.getElementById("split");
		var testo=$("#split").val();
		if(testo=="") testo=$("#bengali").val();
		if (testo.indexOf("\u200a")==-1) {$("#split").val(testo.split("").join("\u200a"));}
		else {$("#split").val(testo.replace(/\u200a/g,""));}
	});
}

$(document).ready(function() {inizia();});
