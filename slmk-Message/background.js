
//接收消息
g_dict = {}
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {  
    console.log('recieve: ' + request.msg);
    id = request.id
    g_dict[id] = request
    sendResponse(g_dict[id])
});


/*

chrome.tabs.sendMessage(dTabid,
                        {  
                           'msg': '传给前台的消息' 
                        }, 
                        function(response) {  
                            //回传函数    
                        });   
//dTabid是前台Tab的id



chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("click");
}); 

chrome.tabs.create({'url': ‘http://www.cnblogs.com’,'selected':false}, function(tab2) {
                console.log("OK");
});
*/


