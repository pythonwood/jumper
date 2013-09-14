//$("tr:has(img)").find("input")
//$("#txtFJM")			//最缺移植性。
$(":text:last")			//选取最后一个文本框，并认为其是验证码输入框。
	.css({"height": "30px", "color": "red"})
	.attr({"value": "1234", "title": "jumper helping"});

//$(document).ready(function(){
$(function(){
	alert("Hello World!");
	$("img[src*='Validate']").attr("title", "jumper helping");	//Validate 区分大小写！
	$("img[src*='Validate']")[0].onload = alert("img loaded");
});

