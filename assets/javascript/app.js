window.onload = function(){

    var preview;

$(".proj-link").on("click", function(){
    preview = $(this).attr("data-info");
    
    $(".proj-link").removeAttr("id");
    $(this).attr("id", "proj-link-select");

    $(".preview-panel").removeAttr("id");
    $("." + preview).attr("id", "active-preview");
})

$(".tab").on("click", function(){
    tab = $(this).attr("data-tab");

    $(".tab").removeAttr("id");
    $(this).attr("id", "tab-select");

    $(".proj-link-block").removeAttr("id");
    $("." + tab).attr("id", "selected-block");
})

}