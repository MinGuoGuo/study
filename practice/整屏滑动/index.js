// $(window).scroll( function() {
//     console.log($(window).scrollTop());
// });
// 从第二个模块儿开始计算咯
//console.log('firsr', $('.first').offset().top);
// console.log('second', $('.second').offset().top);
// console.log('scrollTop', $('.second').scrollTop());
// console.log(111);
// var top = $('.second').offset().top;
var isshow = $('.first');

// $(window).scroll(function() {
//     if($(this).is(':animated')) {
//         return false;
//     }
//     console.log($(this).scrollTop());
//     console.log(isshow.offset());
//     if($(this).scrollTop() <= isshow.offset().top) {
//         $('body').animate({
//             scrollTop: isshow.offset().top
//         }, 500);
//         if(isshow.next().length == 0) {
//             return false;
//         }else{
//             isshow = isshow.next();
//         }
//     }
//
//     // if(isshow.offset().top < $(this).scrollTop()) {
//     //     isshow = isshow.next();
//     //     $(this).scrollTop(isshow.offset().top);
//     // }
// })
var scrollTop = $(this).scrollTop();
$(window).on('mousewheel', function(e) {
    if(!$('body').is(':animated')) {
        var minus = $(this).scrollTop() - scrollTop;
        console.log(minus);

        var thisDiv = $(e.target);

        if(minus > 0) {
            thisDiv = thisDiv.next();
        }else{
            thisDiv = thisDiv.prev();
        }

        var winHeight = $(window).height();
        var thisDivH = ($(window).height() - thisDiv.height())/2;

        if(thisDiv.length != 0) {
            $('body').animate({
                scrollTop: thisDiv.offset().top - thisDivH
            }, 1000);
            return false;
        }
        scrollTop = $(this).scrollTop();
    }
});
