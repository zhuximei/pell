//轮播图
	var mySwiper1 = new Swiper('.swiper1', {
		autoplay: true,//可选选项，自动滑动
	})
	var mySwiper2 = new Swiper('.swiper2', {
		autoplay: true,//可选选项，自动滑动
		slidesPerView: 6,
		spaceBetween: 10
	})
   function testf(){
	   	$("listOf").onclick=function(){
	       $("asideList").style.display="block";
		}
		$("titleBg").onclick=function(){
	       $("asideList").style.display="none";
		}
    }
	
	window.onload=function(){
      testf();
	}
	function $(str){
		return document.getElementById(str);
	}