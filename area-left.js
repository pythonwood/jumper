$(function(){
//    console.log("area-left.js start ~ ok")
    //必须是可视的
//    console.log("$(\"img[src$='Open.gif']:visible\").length " + $("img[src$='Open.gif']:visible").length)
    if ($("img[src$='Open.gif']:visible").length==0){
//	$("a")[0].click()
	$("a:contains(学生选课与查询)")[0].click()
    }
//    console.log("$(\"img[src$='Closed.gif']:visible\").length: " + $("img[src$='Closed.gif']:visible").length)
//    console.log("$(\"div.dtree a.nodeSel:visible\").length: " + $("div.dtree a.nodeSel:visible").length)
//    console.log("$(\"a:not(:parent):contains(学生选课与查询)\").length: " + $("a:not(:parent):contains(学生选课与查询)").length)
//    console.log("$(\"a:contains(学生选课与查询)\").length: " + $("a:contains(学生选课与查询)").length)
//    if ($("img[src$='Closed.gif']:visible").length == 0 && $("div.dtree a.nodeSel:visible").length == 0){
//	$("a:contains(学生选课与查询)")[0].click()
//    }
})
