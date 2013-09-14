// (function(){
	console.log("ready")
        chrome.browserAction.onClicked.addListener(function(tab) {
		console.log("click_icon")
            // 扩展向内容脚本发送消息
            chrome.tabs.sendMessage(tab.id,{
                greeting: "hello to content script!"
            }, function(response) {
                console.log(response.farewell);
            });
        });
//    })();