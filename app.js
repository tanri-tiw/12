$(".ans").hide();
$(".arrow").click(function(eve){

    $(".ans").hide();
    $(".ques").removeClass("bold");
    $(".arrow").removeClass("rotate");
    const ans=eve.currentTarget.id;
    $(`#${ans}`).addClass("rotate");
    $(`#a${ans}`).slideToggle();
    $(`#q${ans}`).addClass("bold");


})