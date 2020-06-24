$(function(){
    setInterval(function(){
        $('.box-rolling-news').first().animate({'margin-top':'-24px'},700,function(){
            $(this).detach().appendTo('.box-rolling-newslist').css('margin-top','0px').removeAttr('style');
            /*
            $(A).prepend(B) : A요소 안의 제일 앞에 B를 html코드로 추가해라 
            $(A). prependTo(B) : B요소 안의 제일 앞에 A를 html코드로 추가해라 */
        });
    },2000)
})