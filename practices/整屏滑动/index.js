var scrollFunc = function (e) {
    var direct = 0;
    e = e || window.event;

    var thisDiv = $(e.target);
    var winHeight = $(window).height();
    var thisDivH = ($(window).height() - thisDiv.height())/2;

    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
            thisDiv = thisDiv.prev();
        	winAnimate(thisDiv, thisDivH);
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            console.log("滑轮向下滚动");
            thisDiv = thisDiv.next();
            winAnimate(thisDiv, thisDivH);
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
            console.log("滑轮向上滚动");
            thisDiv = thisDiv.prev();
            winAnimate(thisDiv, thisDivH);
        }
        if (e.detail< 0) { //当滑轮向下滚动时
            console.log("滑轮向下滚动");
            thisDiv = thisDiv.next();
            winAnimate(thisDiv, thisDivH);
        }
    }
    // ScrollText(direct);
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc;


function winAnimate (obj, obj_height) {
	if(!$('body').is(':animated')) {
		if(obj.length != 0) {
	        $('body').stop(true, false).animate({
	            scrollTop: obj.offset().top - obj_height
	        }, 1000);
	        return false;
	    }
		
		if($(window).scrollTop() <= 80) {
			$('body').stop(true, false).animate({
	            scrollTop: 0
	        }, 1000);
	        return false;
		}
	}
}
