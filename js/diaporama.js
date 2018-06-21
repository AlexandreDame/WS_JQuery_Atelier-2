$(document).ready(function () {
    var classe = "active";

    for (i = 0; i < tabObjInit.length; i++) {
        if (i != 0) { classe = ""; } //pour mettre la class active sur le 1er élément
        //les puces 
        $("<li>").attr("data-target", "#carousel").attr("data-slide-to", i).appendTo($("#carousel-indicators"));

        //les images
        $("<div class='item " + classe + "' >" +
            "<img src='" + tabObjInit[i].Photo1 + "' id='img" + tabObjInit[i].id + "' />" +
				"<div class='carousel-caption'>" +
					"<h3>" + tabObjInit[i].Nom + "</h3>" +
				"</div>" +
			"</div>"
		).appendTo($("#divDiapo"));

    }

    
    $("#carousel .item img").click(function () {
        var id = $(this).attr("id").replace("img", ""); 
        var tabDiapo = tabObjInit;

        
        var index = tabDiapo.findIndex(function (elm) {
            return elm.id == id;
        });

        
        var elm = tabDiapo[index];

        
        ecrit_popup(elm);
    });

    
});