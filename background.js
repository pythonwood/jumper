//{"id":"", "state":0, "count":1}
//g_dict = new Array()
g_dict = {}  //{}��Object,û��length�� Array��length������ԭ�����ڴ����⣬������Object
//g_dict = []
chrome.extension.onMessage.addListener(function(request, sender, callback) {
    question = request["q"]
    id = request["id"]
    //�ֱ�ش�state,count,start,stop����(����������sure����Ϊ���������֮)
    if (question == "state"){
            callback(g_dict)
    }else if (question == "count"){
        g_dict[id]["count"]++
        callback(g_dict[id]["count"])
    }else if (question == "start"){
    g_dict[id] = {"count":0}
        callback()
    }else if (question == "stop"){
        delete g_dict[id]   //������֪����ɾ��״̬���ӣ�
        callback()
    }else {     //Ӧ�ò��������֧
        callback(g_dict)
    }
});
