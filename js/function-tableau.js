function ecrit_tableau(tab) {
	$("#liste").html("");
	for ( i = 0 ; i < tab.length ; i++) {

		//tableau
		$("#liste").html($("#liste").html() + "<div class='ligneTab row'><div class='ligneHover Ligne" + i + "'><div class='col-xs-4 img'>" + tab[i].PhotoM + "</div>" + 
			"<div class='col-xs-4 nom center-block''>" + tab[i].Nom + "</div>" + 
			"<div class='col-xs-3 type'>" + tab[i].Catégorie + "</div></div><div class='col-xs-1 poubelle'><span class='glyphicon glyphicon-trash'></span></div></div>" );

		//modal
		$("#modal").html($("#modal").html() + "<div class='modal fade' tabindex='-1' role='dialog' id='modalFenetreLigne" + i + "'>" + 
			"<div class='modal-dialog' role='document'>" +
				"<div class='modal-content'>" +
					"<div class='modal-header'>" +
						"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
					"<h4 class='modal-title' id='modalTitle'>" + tab[i].Nom + "</h4>" +
					"<br />" +
					"<ul class='nav nav-tabs'>" +
						  "<li role='presentation' class='active liSynopsis'><a href='#' class='btnSynopsis'>Synopsis</a></li>" +
						  "<li role='presentation' class='liPhoto'><a href='#'class='btnPhoto'>Photos</a></li>" +
						  "<li role='presentation' class='liInfo'><a href='#'class='btnInfo'>Informations</a></li>" +
						"</ul>" +
					"</div>" +
					"<div  class='modal-body Synopsis' id='Synopsis'>" + 
						"<p>" + tab[i].Synopsis + "</p>" +
						
					"</div>" +
					"<div  class='modal-body Photo text-center' id='Photo'>" + 
						"<a class='hover-img' id='aPhoto1_" + i + "'>" + tab[i].Photo1 + "</a>" + 
						"<a class='hover-img' id='aPhoto2_" + i + "'>" + tab[i].Photo2 + "</a>" +
						"<a class='hover-img' id='aPhoto3_" + i + "'>" + tab[i].Photo3 + "</a>" +	
					"</div>" +
					"<div  class='modal-body Info' id='Info'>" + 
						"<p>Auteur :" + " " + tab[i].Auteur + "</p><br/>" +
						"<p>Catégorie :" + " " + tab[i].Catégorie + "</p><br/>" +
						"<p>Type :" + " " + tab[i].Type + "</p><br/>" +
						"<p>Date de sortie :" + " " + tab[i].Date + "</p><br/>" +
					"</div>" +
					"<div class='modal-footer'>" +
						"<button type='button' class='btn btn-default' data-dismiss='modal'>Annuler</button>" +
					"</div>" +
				"</div>" +
			"</div>" +
		"</div>");		

	}
}
function ecrit_diapo(tab) {
	for ( i = 0 ; i < tab.length ; i++) {
		$("#divDiapo").html($("#divDiapo").html() +			
			"<div class='item' id='imgCarousel" + i + "'>" +
				"<a href='#' class='Ligne" + i + "'>" +
					"<div class='row text-center'>" +
					tab[i].Photo1 + 
					"</div>" +
				"</a>" +
				"<div class='carousel-caption'>" +
					"<h3>" + tab[i].Nom + "</h3>" +
				"</div>" +
			"</div>"
		);
	}
}	
function show_page(div)	{
	$("#Accueil").hide();
	$("#Diapo").hide();	;
	$("#Contact").hide();
	$(div).show();
	$("#liAccueil").removeClass("active");
	$("#liDiapo").removeClass("active");	;
	$("#liContact").removeClass("active");	;
	
}
function show_onglet(div)	{
	$(".Photo").hide();
	$(".Synopsis").hide();
	$(".Info").hide();
	$(div).show();
}
function show_return(btn)	{
	$(btn).click(function () {
		$("#spanReturn").show();

	});
}
function modal_img() {
	$(document).ready(function () {
			$(".Ligne0").click(function()	{
				$("#modalFenetreLigne0").modal();
				synopsis();
				show_onglet(Synopsis);		
			});;
			$(".Ligne1").click(function()	{
				$("#modalFenetreLigne1").modal();
				synopsis();
				show_onglet(Synopsis);		
			});
			$(".Ligne2").click(function()	{
				$("#modalFenetreLigne2").modal();	
				synopsis();
				show_onglet(Synopsis);	
			});
			$(".Ligne3").click(function()	{
				$("#modalFenetreLigne3").modal();	
				synopsis();
				show_onglet(Synopsis);	
			});
			$(".Ligne4").click(function()	{
				$("#modalFenetreLigne4").modal();	
				synopsis();
				show_onglet(Synopsis);	
			});
			$(".Ligne5").click(function()	{
				$("#modalFenetreLigne5").modal();	
				synopsis();
				show_onglet(Synopsis);	
			});
			$(".Ligne6").click(function()	{
				$("#modalFenetreLigne6").modal();	
				synopsis();
				show_onglet(Synopsis);	
			});
			$(".Ligne7").click(function()	{
				$("#modalFenetreLigne7").modal();
				synopsis();
				show_onglet(Synopsis);		
			});
			$(".Ligne9").click(function()	{
				$("#modalFenetreLigne9").modal();	
				synopsis();
				show_onglet(Synopsis);	
			});
			$(".Ligne8").click(function()	{
				$("#modalFenetreLigne8").modal();	
				synopsis();
				show_onglet(Synopsis);	
			});
			$(".btnCloseModal").click(function()	{
				$(".modalFenetre").modal("hide");
			});
	});
}

function synopsis() {
	$(".liPhoto").removeClass("active");
	$(".liInfo").removeClass("active");	
	$(".liSynopsis").addClass("active");
}

function modal_onglet() {
	$(document).ready(function () {
		$(".btnPhoto").click(function()	{
			$(".liSynopsis").removeClass("active");	
			$(".liInfo").removeClass("active");
			$(".liPhoto").addClass("active");
			show_onglet(Photo);
		});
		$(".btnSynopsis").click(function()	{
			$(".liPhoto").removeClass("active");
			$(".liInfo").removeClass("active");	
			$(".liSynopsis").addClass("active");
			show_onglet(Synopsis);
		});
		$(".btnInfo").click(function()	{
			$(".liPhoto").removeClass("active");
			$(".liSynopsis").removeClass("active");	
			$(".liInfo").addClass("active");
			show_onglet(Info);
		});
	});
}

function show_modal_img_parent() {
	$(".Photo a img").click(function () { 

	     $("#zoomImg").addClass("divPopImg").addClass("text-center");
	     $(this).clone().appendTo($(".divPopImg"));
	     $(".divPopImg").click(function () {
	     	$("#zoomImg").empty(); 
	         $(".divPopImg").removeClass("divPopImg");
	     });
    	});
 
}
function hover() {
	$(".ligneHover").mouseover(function () {           
       $(this).parent().addClass("hover");
       
	});
	$(".ligneHover").mouseout(function () {           
       $(this).parent().removeClass("hover");
       
	});
}

function delete_ligne (array, index) {
	array.splice(index, 1);
}


