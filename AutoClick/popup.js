chrome.extension.onMessage.addListener(
 function(request, sender, sendResponse) {
 console.log(sender.tab ?
 "from a content script:" + sender.tab.url :
 "from the extension");
 if (request.greeting == "yes")
{
$.cookie("start","yes",{path:'/'});
 checkUrl();//�Զ��庯��
}
 else
{
 $.removeCookie("start",{path:'/'});
}
 sendResponse({farewell: "goodbye"});
 });

//���ܺ�̨���͹����Ĳ�����request.greeting ���Ǻ�̨ҳ���greeting: msg