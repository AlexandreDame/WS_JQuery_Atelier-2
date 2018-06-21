$(document).ready(function () {
    //setTimeout(function () { $("#splash").hide(); show_section('#Accueil'); }, 3000);
    $("#splash").delay(2000).hide(1000, function () { show_section('#Accueil');});
});