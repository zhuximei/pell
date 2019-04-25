// var dogzone=my$("dogzone_x").offsetHeight;
function testf(){
	   	$("#listOfs").click(function(){
	       $("#squere_list").slideToggle(500);
	        // if(my$("squere_list").style.display=="none"){
         //        my$("listOfss").innerHTML="关闭";
         //        my$("squere_list").style.display="block";
	        // }else{
	        // 	my$("listOfss").innerHTML="狗狗专区";
         //        my$("squere_list").style.display="none";
	        // }
	         my$("listOfss").innerHTML="关闭";
	     });

		my$("listOfss").onclick=function(){
	       my$("squere_list").style.display="none";
	       my$("listOfss").innerHTML="狗狗专区";
		}
		
    }
	
	window.onload=function(){
      testf();
	}
	function my$(str){
		return document.getElementById(str);
	}