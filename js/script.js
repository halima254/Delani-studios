$(document).ready(function(){
    $("#image1").click(function(){
        $("#image1").hide();
        $("#design-def").show();
    })
    $("#design-def").click(function(){
        $("#design-def").hide();
        $("#image1").show();
    })
});
$(document).ready(function(){
    $("#image2").click(function(){
        $("#image2").hide();
        $("#develop-def").show();
    })
    $("#develop-def").click(function(){
        $("#develop-def").hide();
        $("#image2").show();
    })
});
$(document).ready(function(){
    $("#image3").click(function(){
        $("#image3").hide();
        $("#product-def").show();
    })
    $("#product-def").click(function(){
        $("#product-def").hide();
        $("#image3").show();
    })
});