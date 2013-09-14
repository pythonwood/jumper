//$("tr:has(img)").find("input")
//$("#txtFJM")			//最缺移植性。
$(":text:last")			//选取最后一个文本框，并认为其是验证码输入框。
	.css({"height": "30px", "color": "red"})
//	.css("height", "30px").css("color","red")	//also ok
	.attr({"value": "1234", "title": "jumper helping"});
//	.attr("value", "1234").attr("title", "jumper helping");	//also ok



//$target_tr = $("tr:has(img)");
//$("td:contains('验证码：')").val("chg");

//$("img[src*='Validate']").attr("title", "jumper helping");		//Validate 区分大小写
//$("img[src*='Validate']").attr("src", "http://jwc.jnu.edu.cn/Web/images/logoSchool.jpg");	

//alert($("img[src*='Validate']"));
$(document).ready(function(){
	alert("Hello World!");
	$("img[src*='Validate']").attr("title", "jumper helping");
//	$("img[src*='Validate']")[0].onload = alert("img loaded");
//	$("img[src*='Validate']")[0].onload = function(){alert("img loaded");}
});


//fucntion(){
	//$("img[src*='Validate']")[0].onload = function(){alert("img loaded");}
	$("img[src*='Validate']")[0].onload = alert("img loaded");
//}

