// $(window).scroll( function() {
//     console.log($(window).scrollTop());
// });


// 从第二个模块儿开始计算咯
//console.log('firsr', $('.first').offset().top);
// console.log('second', $('.second').offset().top);
// console.log('scrollTop', $('.second').scrollTop());
// console.log(111);
// var top = $('.second').offset().top;
$('.second').scroll(function () {
    console.log(this.scrollTop());
})
