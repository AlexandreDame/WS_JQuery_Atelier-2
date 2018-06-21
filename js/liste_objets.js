var tabObjInit = []; //stockage du tableau initial
tabObjInit.push({ id: "Obj1", Nom: "Stratocaster", Type: "Guitare", PhotoM: "img/strat1.jpg", Photo1: "img/strat1.jpg", Photo2: "img/strat2.jpg", Photo3: "img/strat3.jpg", Description: "La Stratocaster est le second modèle de guitare électrique produit par la marque américaine Fender. Elle succède à la Telecaster, sans la remplacer, celle-ci restant au catalogue jusqu'à nos jours. Sa silhouette est devenue l'icône même de la guitare électrique et c'est l'un des modèles les plus répandus au monde.", Marque: "Fender", Categorie: "Electrique" });
tabObjInit.push({ id: "Obj2", Nom: "Telecaster", Type: "Guitare", PhotoM: "img/tele1.jpg", Photo1: "img/tele1.jpg", Photo2: "img/tele2.jpg", Photo3: "img/tele3.jpg", Description: "La Fender Telecaster est une guitare électrique produite et commercialisée en série par Fender à partir de 1951. C'est l'une des premières guitares électriques à corps plein et la première à avoir une réelle histoire commerciale. D'abord baptisée Broadcaster en 1950, elle connaît au fil du temps des modifications de sa lutherie sans que le design originel ne change drastiquement.Prisée par de très nombreux guitaristes dans le monde, la Telecaster est l'un des modèles de guitares les plus célèbres aujourd'hui.", Marque: "Fender", Categorie: "Electrique" });
tabObjInit.push({ id: "Obj3", Nom: "Les Paul", Type: "Guitare", PhotoM: "img/lespaul1.jpg", Photo1: "img/lespaul1.jpg", Photo2: "img/lespaul2.jpg", Photo3: "img/lespaul3.jpg", Description: "Les Gibson Les Paul sont des guitares électriques de type « corps plein » (solid body) fabriquées par la firme américaine Gibson Guitar Corporation.", Marque: "Gibson", Categorie: "Electrique" });
tabObjInit.push({ id: "Obj4", Nom: "D28", Type: "Guitare", PhotoM: "img/d28-1.jpg", Photo1: "img/d28-1.jpg", Photo2: "img/d28-2.jpg", Photo3: "img/d28-3.jpg", Description: "La Martin D-28 est une guitare acoustique du fabricant américain C.F. Martin & Company.Elle est apparue pour la première fois en 19341 en version 14 frettes. La version actuelle possède 20 frettes2. Elle a remporté le prix de la meilleure guitare acoustique de l'année du magazine Acoustic Guitar en 20081.", Marque: "Martin", Categorie: "Acoustique" });
tabObjInit.push({ id: "Obj5", Nom: "J-45", Type: "Guitare", PhotoM: "img/j45-1.jpg", Photo1: "img/j45-1.jpg", Photo2: "img/j45-2.jpg", Photo3: "img/j45-3.jpg", Description: "Le J-45 est l'acoustique la plus vendue de Gibson de tous les temps. Surnommé \"The Workhorse\" et introduit pour la première fois en 1942, cette acoustique populaire est maintenant l'icône de sa ligne de dreadnought aux épaules rondes. De renommée mondiale pour son expression complète et équilibrée, ses basses chaudes et son excellente projection, la J-45 est l'une des guitares les plus avancées techniquement de son époque.", Marque: "Gibson", Categorie: "Acoustique" });
tabObjInit.push({ id: "Obj6", Nom: "SG", Type: "Gibson", PhotoM: "img/sg1.jpg", Photo1: "img/sg1.jpg", Photo2: "img/sg2.jpg", Photo3: "img/sg3.jpg", Description: "La Gibson SG est un modèle de guitare électrique de type « corps plein » (solid body), c'est-à-dire ne possédant pas de caisse de résonance, fabriqué par la firme américaine Gibson Guitar Corporation. Les initiales SG signifient Solid Guitar.", Marque: "Gibson", Categorie: "Electrique" });

var tabObj = []; 

$(document).ready(function () {
    categories();
    tabObj = tabObjInit;
    ecrit_liste(tabObj);
});

function categories() {
    
    var tabCategories = [];

    for (i = 0; i < tabObjInit.length ; i++) {
        if (tabCategories.indexOf(tabObjInit[i].Categorie) == -1) {
            tabCategories.push(tabObjInit[i].Categorie);
        }
    }
    tabCategories.sort();

    tabCategories.unshift("Tous");

    for (i = 0 ; i < tabCategories.length ;i++){
        $("<a>").attr("href", "#").html(tabCategories[i]).appendTo($("<li>").appendTo("#liste_categorie"));
    }

    //Définition du click sur élément de la liste des catégories
    $("#liste_categorie a").click(function () {
        if ($(this).html().toLowerCase() == "tous") {
            
            tabObj = tabObjInit;
            ecrit_liste(tabObj);
        }
        else {
            filtre_categorie($(this).html());
        }
    });
}


function ecrit_liste(tab) {
    
    $("#liste").empty();

    
    for (i = 0; i < tab.length; i++) {

        var li = $("<li>").attr("id", "li" + tab[i].id);
        
        $("<div>").addClass("flex1").append($("<img>").addClass("img-responsive").attr("src", tab[i].PhotoM)).appendTo($(li));
        $("<div>").html(tab[i].Nom).appendTo($(li));
        $("<div>").html(tab[i].Categorie).appendTo($(li));


        $("#liste").append($(li));
    }

    
    $("#liste li").click(function () {
        var id = $(this).attr("id").replace("li",""); 

        var index = tabObjInit.findIndex(function (elm) {
            return elm.id == id;
        });

        ecrit_popup(tabObjInit[index]);
    });

}

/*Fonction de tri*/
$(document).ready(function () {
    $("#tri a").click(function () {
        var s = $(this).text();
        switch (s.toLowerCase()) {
            case "nom croissant":
                tabObj.sort(function (a, b) {
                    if (a.Nom > b.Nom) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                break;
            case "nom décroissant":
                tabObj.sort(function (a, b) {
                    if (a.Nom < b.Nom) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                break;
            case "catégorie croissante":
                tabObj.sort(function (a, b) {
                    if (a.Categorie > b.Categorie) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                break;
            case "catégorie décroissante":
                tabObj.sort(function (a, b) {
                    if (a.Categorie < b.Categorie) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                break;
            default:
        }
        ecrit_liste(tabObj);

    });

    $("#btnRecherche").click(function () {
        var texte = $("#txtRecherche").val();
        tabObj = tabObjInit;
        filtre_texte(texte);
    });
    
    $('#txtRecherche').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $(this).parent().find('button').click();
        }
    });
});

/*Fonction de filtre par catégorie*/
function filtre_categorie(cat) {
    tabObj = tabObjInit.filter(function (elm) {
        return elm.Categorie == cat;
    });
    ecrit_liste(tabObj);
}

/*Fonction de filtre par texte*/
function filtre_texte(txt) {
    tabObj = tabObjInit.filter(function (elm) {
        var pattern = new RegExp("(" + txt + ")", 'ig');
        if ( elm.Nom.match(pattern) ) {
            return true;
        } else {
            return false
        }
    });
    ecrit_liste(tabObj);
}

//Fonction d'affichage du popup avec le détail de l'élement
function ecrit_popup(elm) {
    
    $("#detail_elm_titre").html(elm.Nom);

    $("#detail_elm_body").html("<ul class='nav nav-tabs' id='myTabs'>" +
                  "<li role='presentation' class='active'><a href='#tabDescription'>Description</a></li>" +
                  "<li role='presentation'><a href='#tabPhotos'>Photos</a></li>" +
                  "<li role='presentation'><a href='#tabInfos'>Informations</a></li>" +
                "</ul>" +
                "<div class='tab-content' id='myTabContent'>" +
                    "<div class='tab-pane fade in active' role='tabpanel' id='tabDescription'><p>" + elm.Description + "</p></div>" +
                    "<div class='tab-pane fade' role='tabpanel' id='tabPhotos'>" +
                    "<div  class='photos text-center'>" +
                        "<a class='hover-img' id='aPhoto1_" + i + "'><img src='" + elm.Photo1 + "' /></a>" +
                        "<a class='hover-img' id='aPhoto2_" + i + "'><img src='" + elm.Photo2 + "' /></a>" +
                        "<a class='hover-img' id='aPhoto3_" + i + "'><img src='" + elm.Photo3 + "' /></a>" +
                    "</div>" +
                "</div>" +
                "<div class='tab-pane fade' role='tabpanel' id='tabInfos'>" +
                    "<div class='Info'>" +
                        "<p>Marque :" + " " + elm.Marque + "</p><br/>" +
                        "<p>Catégorie :" + " " + elm.Categorie + "</p><br/>" +
                        "<p>Type :" + " " + elm.Type + "</p><br/>" +
                    "</div>" +
                "</div>" +
            "</div>"
            );

    $("#detail_elm").modal();

    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })

    $("#detail_elm_body img").click(function () {
        $("<div>").addClass("masque").appendTo($("body"));
        $(this).clone().appendTo($("div.masque"));
        $("div.masque").click(function () {
            $("div.masque").remove();
        });
    });

}