function show_section(section) {
    $("section").hide();
    $(section).show(1500);
}

$(document).ready(function () {
    $("#nav a").click(function () {
        var section = $(this).attr("href");
        show_section(section);

        $("#nav li").removeClass("active");
        $(this).parent().addClass("active");


       
        if (section == "#Diapo") {
            $("#carousel").carousel('cycle');
        }

        return false;
    });
});