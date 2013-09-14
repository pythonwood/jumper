$(function(){
	console.log("jumper-start-ok")

	$subm = $("input:submit")	
	if($subm.length == 2){					//确认选课页
//		$subm[0].click()				//可能弹窗，因此可能永远不成功，所以只试一次
//		$subm[1].click()				//
		id = $(this).next("td:first").text()
		chrome.extension.sendMessage({"q":"state"}, function(dict){					//state问题
			$.each(dict, function(k, v){
				if (id == k){
					//chrome.extension.sendMessage({"q":"sure","id":id}, function(first_time){//sure问题
					//	if (first_time){
					//		$subm[0].click()
					//	}else{
					//		$subm[1].click()
					//	}
					//chrome.extension.sendMessage({"q":"state"}, function(dict_in){	//state问题
					//	if (dict_in[id]["count"] != dict[id]["count"])	$subm[0].click()
				        chrome.extension.sendMessage({"q":"stop", "id":id}, function(){
					    $subm[0].click() 
					    console.log("sure and delete callback ~ ok")//short quiet well! take it esay! oh yeah
					})
				}
			})
		})
	}else if($subm.length == 4){				//刚进入，未有操作时
		if($subm[1].disabled == false)
			$subm[1].click()			//默认打开我的选课
	}else if($subm.length == 5){				//选择过滤条件时
		$selopt = $("select:first option")
		$selopt[$selopt.length-1].selected = true;	//默认范围是通识选修，或者全部课程
	}else if($subm.length == 6){				//返回查询结果时
		$course_tr = $("tbody:last:not(:has(input)) tr:not(:first)")
		$course_tr.find("td:first").append("<a href='#' title='start'>&nbsp;&gt;</a>&nbsp;<a href='#' title='stop'>|</a>")

		chrome.extension.sendMessage({"q":"state"}, function(dict){					//state问题
		        console.log("state callback ~ para dict: " + dict + " typeof: " + typeof(dict) + " dict==null: " + (dict==null) + " dict.length: " + dict.length)
		    //硬骨头
		    if(typeof(dict) != "undefined"){
		        //if(g_dict){
//try{
			$.each(dict, function(k, v){
			        console.log("in $.each() key: " + k)
				//console.log("dict.size(): " + dict.size())//无size()，出异常
				$line = $("table:last tr:contains('" +k+ "')")
				if ($line.length>0){	
					if( parseInt($line.find("td:eq(10)").text()) - parseInt($line.find("td:eq(11)").text()) > 0 ){
						setTimeout(function(){$line.find("a:first").click()}, 2100)
					}else{
						chrome.extension.sendMessage({"q":"count","id":k}, function(count){	//count问题
							$subm[5].value = "" + count + "!"
						})
						setTimeout("$subm[5].click()", 2100)				//探监间隔
					}
				}
			})}
//catch(err){console.log(err.what())}
		})
		console.log("gocenter")

	        //消息异步处理，所以会到这里
	        //if click "start"
		$("a[title=start]").click(function(){
		        console.log("start checking")
			id = $(this).parent().next().text()
		        console.log("send start id: " + id)
			chrome.extension.sendMessage({"q":"start", "id":id}, function(){
			    setTimeout("$subm[5].click()", 2100)
			    console.log("start callback ~ ok")
			})//setTimeout($subm[5].click(), 2100))		//start问题
		        console.log("sent message")
		        return false
		})
	        console.log("click one")

	        //if click "stop"
		$("a[title=stop]").click(function(){
			id = $(this).parent().next().text()
			chrome.extension.sendMessage({"q":"stop", "id":id}, function(){
			    setTimeout("$subm[5].click()", 2100)
			    console.log("stop callback ~ ok")
			})//setTimeout($subm[5].click(), 2100))		//stop问题
		        return false
		})
	        console.log("click twice")


	        chrome.extension.sendMessage({"q":"state"}, function(dict){					//state问题
		    if (dict=='undefine'){
			setTimeout(function(){$subm[5].click()}, 90000)						//自行刷新保持session,防止自动执行
		    }
		})
	        console.log("click thrid")
	}

			//没有输入框的表格的非首行tr
	$("tbody:last:not(:has(input)) tr:not(:first):odd").css({"backgroundColor":"#bbeeff"})		//美观，行与行交替着色

})
