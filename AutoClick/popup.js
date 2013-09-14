chrome.extension.onMessage.addListener(
 function(request, sender, sendResponse) {
 console.log(sender.tab ?
 "from a content script:" + sender.tab.url :
 "from the extension");
 if (request.greeting == "yes")
{
$.cookie("start","yes",{path:'/'});
 checkUrl();//自定义函数
}
 else
{
 $.removeCookie("start",{path:'/'});
}
 sendResponse({farewell: "goodbye"});
 });

//接受后台发送过来的参数，request.greeting 就是后台页面的greeting: msg