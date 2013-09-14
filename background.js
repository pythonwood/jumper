g_dict = {"state":0, "count":0, "id":""}
chrome.extension.onMessage.addListener(function(request, sender, callback) {
    console.log("state: " + g_dict["state"])
    if (g_dict["state"]==0){
	g_dict["count"]=1
	g_dict["state"]=1
    }else if (g_dict["state"]==1){
	g_dict["state"]++
    }else if (g_dict["state"]==2){
    }else if (g_dict["state"]==-1){
    }
    callback(g_dict)
});
