/**
 * Created by Administrator on 2017/1/3 0003.
 */
$(document).ready(function () {
    $("#imgScale img").click(function () {
        if(!$(this).parent().hasClass("max")){
            $(this).css({"width": "auto", "height": "665px"});
            $(".abs100.model1").children().not("#imgScale").hide();
            $(this).parent().attr("class","max");
        }
         else{
            $(this).css({"width": "auto", "height": "368px"});
            $(this).parent().attr("class","imgScale");
        }
    });
    $(".imgScale").hover(function () {
        if($(this).hasClass("imgScale")){
            $(".abs100.model1").children().not("#imgScale").fadeIn();
        }
    },function () {
        if($(this).hasClass("imgScale")) {
            $(".abs100.model1").children().not("#imgScale").fadeOut();
        }
    });
    $(".buyInfoBtn").hover(function (){
        $(".detail").fadeOut();
        $(".buyInfo").fadeIn();
    });

    $(".artInfoBtn").hover(function (){
        $(".buyInfo").fadeOut();
        $(".detail").fadeIn();
        });
    $(".workHeader").children("span").click(function () {
        $(".workHeader").children("span").removeClass("spanActive");
        $(this).addClass("spanActive");
        if($(this).index()==0){
            $(".workDes").show();
            $(".workDes.clearfix").hide();
        }
        else{
            $(".workDes").hide();
            $(".workInf.clearfix").show();
        }
    });
    var winwidth=$(Window).width();
    if(winwidth<1700&&winwidth>1050){
        $(".span-6.cell").find(".preview").css("height","420px");
    }
    else if(winwidth<1050){
        $(".span-6.cell").find(".preview").css("height","536px");
    }
});