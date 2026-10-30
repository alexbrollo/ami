
alfa_basic=function(element) {
	// return [element.id, element.value];
	bengaliBox=document.getElementById("bengali");
	bengaliBox.value="";
	bengaliBox.setRangeText(element.value);
	latinBox=document.getElementById("latin");
	latinBox.value="";
	latinBox.setRangeText(element.id);
	
	}
	
alfa=function(element) {
	// return [element.id, element.value];
	//bengaliBox=document.getElementById("bengali");
	//bengaliBox.value="";
	//bengaliBox.setRangeText(element.value);
	
	latinBox=document.getElementById("latin");
	latinBox.value=element.id;
	// console.log(element.value,$("#bengali").val());
	if (element.value == $("#bengali").val()) {$("#res").css("color","green");
	risultato="OK!";}
	else {$("#res").css("color","red");
	risultato="No! "+element.id + " : " + element.value};
	$("#res").text(risultato);
	}
inizia=function() {
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
		var bengaliBox=document.getElementById("bengali");
		var latinBox=document.getElementById("latin");
		var split=$("#split").val();
		latinBox.value="";
		var risultato=document.getElementById("res");
		var r;
		risultato.textContent="";
		split=split.replace(/\s+/g,"");
		$("#latin").val("");
		$("#res").text(""); 
		if(split.length==0) {
			r = Math.ceil(Math.random() * lettere.length)-1;
			bengaliBox.value=lettere[r][1];
		} else {
			r=Math.ceil(Math.random() * split.length)-1;
			bengaliBox.value=split.substring(r,r+1);
		}
		
		
	});
}

$(document).ready(function() {inizia();});
