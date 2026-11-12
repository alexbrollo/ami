/*
la routine carica una variabile testo leggendo un file js
con la seguente sintassi:
	testo="stringa"

	Stringa contiene elementi con la sintassi [primo elemento;secondo elemento] che diventano testi visualizzati alternativamente. All'avvio viene visualizzato testo1.js. 
	
*/
function elabora(titolo,alternative,testo) {

	testo_split=testo.split(/(\[.+?\])/);
	for (i=0; i<testo_split.length;i+=1) {
		if (testo_split[i].indexOf("[!")==0) {
			t=testo_split[i]; // console.log(t);
			t=t.substr(2,t.length-3).split(";");
			t='<span class="input"><input type="text" placeholder="$1" alt="$2" size="$3" ondblclick="verifica(this)" onfocusout="verifica(this)"></span>'.replace("$1",t[0]).replace("$2",t[1]).replace("$3",t[1].length);
			testo_split[i]=t;
			testo=testo_split.join("");
			
			}
		else 
		    if (testo_split[i].indexOf("[")==0) {
				t=testo_split[i]; // console.log(t);
				t=t.substr(1,t.length-2).split(";");
				t='<span class=alterna><span class="v0">$1</span><span class="v1">$2</span></span>'.replace("$1",t[0]).replace("$2",t[1]);
				testo_split[i]=t;
				testo=testo_split.join("");
				$("#titolo p").html(titolo);
				$("#alternative p").html(alternative);
				$("#testo p").html(testo); 
				$(".alterna").click(function() {$(this).children().toggle();});
			}
	}
	$("#titolo p").html(titolo);
	$("#alternative p").html(alternative);
	$("#testo p").html(testo); 
	
	$(".alterna").click(function() {$(this).children().toggle();});
}

// carica un js contenente un testo prova e lo sostituisce a testo

function verifica(elemento) {
	$elemento=$(elemento);
	if ($elemento.attr("alt").toLocaleLowerCase()==$elemento.val().toLocaleLowerCase()) {
		//$elemento.css("color", "green");
		//elemento.setSelectionRange(0,0);
		$testo=$elemento.val(); 
		$elemento.replaceWith('<span class="green">'+$testo+"</span>")
		}
	else {
		$elemento.css("color", "red");
		elemento.setSelectionRange(0,0);
		}
		
	}
	

$(document).ready(function() {
	var hash=URL.parse(document.URL)["hash"].substr(1,);
	console.log(hash);
	$("#input").val(hash);
	$("#vai").click(function() {
	var titolo="";
	var alternative="";
	var testo="";
	var nomeTesto="";
	if ($("#input").val()!="") {
		nomeTesto=$("#input").val().toLocaleLowerCase();

	} else {
		nomeTesto=URL.parse(document.URL)["hash"].substr(1,);
		$("#input").val(nomeTesto);
		$("this").click();
	}
	$("body script").remove();
	
	var s=document.createElement("script");
	s.src="./js/"+nomeTesto+".js";
	document.body.append(s);
	});
});
