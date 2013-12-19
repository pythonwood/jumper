//{"id":"", "state":0, "count":1}
//g_dict = new Array()
g_dict = {}  //{}是Object,没有length； Array有length；还有原因是内存问题，所以用Object
//g_dict = []
chrome.extension.onMessage.addListener(function(request, sender, callback) {
    question = request["q"]
    id = request["id"]
    //分别回答state,count,start,stop提问(后来减少了sure，因为可组合曲线之)
    if (question == "state"){
            callback(g_dict)
    }else if (question == "count"){
        g_dict[id]["count"]++
        callback(g_dict[id]["count"])
    }else if (question == "start"){
    g_dict[id] = {"count":0}
        callback()
    }else if (question == "stop"){
        delete g_dict[id]   //后来才知道简单删除状态可矣！
        callback()
    }else {     //应该不用这个分支
        callback(g_dict)
    }
});
