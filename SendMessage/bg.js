// (function(){
	console.log("ready")
        chrome.browserAction.onClicked.addListener(function(tab) {
		console.log("click_icon")
            // ��չ�����ݽű�������Ϣ
            chrome.tabs.sendMessage(tab.id,{
                greeting: "hello to content script!"
            }, function(response) {
                console.log(response.farewell);
            });
        });
//    })();