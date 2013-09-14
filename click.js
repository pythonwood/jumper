//(function($){
function is_target_right($a){	$a.css({"color":"red"}).attr({"title":"jumper target right?"});	}
//})($)

function callback(dict){
    $subm = $("input:submit")
    if (dict["state"]==1){
	setTimeout($subm[5].click(), 3000)
    }else if (dict["state"]==2){
	$subm[0].click()
    }else if (dict["state"]==0){
	$subm[0].click()
    }
}	

$(

function(){
	console.log("jumper-start-ok")

	$subm = $("input:submit")	
	if($subm.length == 2){					//确认选课页
//		$subm[0].click()				//可能弹窗，因此可能永远不成功，所以只试一次
//		$subm[1].click()				//
		chrome
	}else if($subm.length == 4){				//刚进入，未有操作时
		if($subm[1].disabled == false)
			$subm[1].click()			//默认打开我的选课
	}else if($subm.length == 5){				//选择过滤条件时
		$selopt = $("select:first option")
		$selopt[$selopt.length-1].selected = true;	//默认范围是通识选修，或者全部课程
	}else if($subm.length == 6){				//返回查询结果时
		$course_tr = $("tbody:last:not(:has(input)) tr:not(:first)")
		$course_tr.find("td:first").append("<a href='#' title='start'>&nbsp;&gt;</a>&nbsp;<a href='#' title='stop'>|</a>")
		$("a[title=start]").click(function(){
//			var bgpg = chrome.extension.getBackgroundPage();	//Uncaught Error: "getBackgroundPage" can only be used in extension processes. 
//			console.log("data: " + bgpg.global_state + ", " + bgpg.global_tr_index_ok)
			tr_index_ok = $(this).parent().parent().prevAll().length - 1
			console.log("index: "+tr_index_ok)
//			bgpg.global_state = 1
//			bgpg.global_tr_index_ok = tr_index_ok 
			$tr_todeal = $($course_tr[tr_index_ok])
			console.log($tr_todeal.find("td:eq(10)").text())
			if(parseInt($tr_todeal.find("td:eq(10)").text()) - parseInt($tr_todeal.find("td:eq(11)").text()) > 0){
//				$tr_todeal.children("a")[0].click()
			}else{
				setTimeout("$subm[5].click()", 2000)
			}
		})
		$("a[title=stop]").click(function(){
		})
	}

			//没有输入框的表格的非首行tr
	$("tbody:last:not(:has(input)) tr:not(:first):odd").css({"backgroundColor":"#bbddff"})		//美观，行与行交替着色

//	$a_click = $("a:even")
//	is_target_right($a_click)

//	console.log($("#btnKkLb").attr("disabled"))
//	if($("#btnKkLb").attr("disabled") == "disabled"){
//		$a_click[0].click()
//		console.log("click " + $("submit:disabled").text())
//	}

}

)
