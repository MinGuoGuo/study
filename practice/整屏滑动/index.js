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
console.log($('.first').offset().top);
console.log($('.second').offset().top);

$(window).scroll(function() {
    if($(this).scrollTop() <= isshow.offset().top) {
        $('body').animate({
            scrollTop: isshow.offset().top
        }, 500);
        isshow = isshow.next();
    }
    console.log(isshow);
    console.log(isshow.offset().top);
    // if(isshow.offset().top < $(this).scrollTop()) {
    //     isshow = isshow.next();
    //     $(this).scrollTop(isshow.offset().top);
    // }
})
