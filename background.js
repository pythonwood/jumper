//{"id":"", "state":0, "count":1}
//g_dict = new Array()
g_dict = {}  //{}是Object,没有length； Array有length
chrome.extension.onMessage.addListener(function(request, sender, callback) {
    question = request["q"]
    id = request["id"]
    console.log("question: " + question + " id: " + id)
    if (question == "state"){
	callback(g_dict)
//    }else if (question == "sure"){
//        if(g_dict[id]){
//            delete g_dict[id]
//            callback(ture)
//        }else{
//            callback(false)
//        }
    }else if (question == "count"){
        g_dict[id]["count"]++
        callback(g_dict[id]["count"])
    }else if (question == "start"){
	g_dict[id] = {"count":0}
        //g_dict[id]["count"] = 1
	callback()
    }else if (question == "stop"){
        delete g_dict[id]
	callback()
    }else {
	callback(g_dict)
    }
});
