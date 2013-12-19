// 后来发现：很明显用函数tlog可以更好地重用代码，减少代码量。2013-09-05
function tlog(str){console.log(new Date().toLocaleString() + ":  " + str)}

// 内存问题：后台变量用Array明显出现，后来放弃了。改用Object，无法得到详细内存差异数据，期待验证

$(function(){   
    $subm = $("input:submit")
    // console.log("jumper-start-ok ~ submit-num: " + $subm.length)      //debugging!

    // 2:确认选课页
    if($subm.length == 2){                                  
        // $subm[0].click()                            // 可能弹窗，因此可能永远不成功，所以只试一次
        id = $("#txtFpkbh").text()
        chrome.extension.sendMessage({"q":"state"}, function(dict){                                     
            for(k in dict){//$.each(dict, function(k, v){
                // 如果是在列的ID，则先发送stop消息后单击确定，保证点击确定的次数为1次。
                if (id == k){   
                    chrome.extension.sendMessage({"q":"stop", "id":id}, function(){
                        //增加提示，人性化
                        //console.log(new Date().toLocaleString() + ":  after " + (dict[id]["count"]+1) + " times. submit sure" + id + " and delete callback ~ ok")//easier! take it esay! oh yeah
                        tlog("success after " + (dict[id]["count"]+1) + " time!") 
                        $subm[0].click() 
                    })
                }
            }
        })

    //4:刚进入，未有操作时 // 5:选择过滤条件时// 6:返回查询结果时
    }else if($subm.length == 4){                            
        // console.log("" + $subm[1].disabled + $subm[1].enabled)
        // 无打开时四个按钮可用，然则默认打开我的选课
        if(!$subm[1].disabled){
            $subm[1].click()                        
        }
    }else if($subm.length == 5){                            
        $selopt = $("select:first option")
        $selopt[$selopt.length-1].selected = true;      // 课程范围的默认范围设置为通识选修，或者全部课程
    }else if($subm.length == 6){                            
        //增加功能键 " > || "
        $course_tr = $("tbody:last:not(:has(input)) tr:not(:first)")
        $course_tr.find("td:first").append("<a href='#' title='start'>&nbsp;&gt;</a>&nbsp;<a href='#' title='stop'>||</a>")

        //调用默认行为得用javascript层的click()
        //$course_tr.find("td:first").attr("onclick", $course_tr.find("td:first").attr("href"))

        chrome.extension.sendMessage({"q":"state"}, function(dict){
            for(k in dict){
                $line = $("table:last tr:contains('" +k+ "')")
                    if ($line.length>0){
                        // 移除 " > "  显得人性化
                        $line.find("a[title=start]").remove()   // @2013-09-05
                            if( parseInt($line.find("td:eq(10)").text()) - parseInt($line.find("td:eq(11)").text()) > 0 ){
                                $line.find("a:first")[0].click()    // 必须是javascript层的click才行！！
                            }else{
                                chrome.extension.sendMessage({"q":"count","id":k}, function(count){     
                                    $subm[5].value = "" + count
                                })
                                setTimeout("$subm[5].click()", 2100)                            // 设置探监间隔
                            }
                    }
            }
        })

        //消息异步处理，所以会到这里
        // 单击开始的响应函数
        $("a[title=start]").click(function(){
            id = $(this).parent().next().text()     // 由排课程编号改成排班号。
            // console.log(new Date().toLocaleString() + ":  send start id: " + id)
            tlog("start: " + id)
            chrome.extension.sendMessage({"q":"start", "id":id}, function(){
                setTimeout("$subm[5].click()", 2100)
            })
            return false    // 连接不跳转
        })

        // 单击停止的响应函数
        $("a[title=stop]").click(function(){
            id = $(this).parent().next().text()     // 由排课程编号改成排班号。
            chrome.extension.sendMessage({"q":"stop", "id":id}, function(){
                setTimeout("$subm[5].click()", 2100)
                // console.log("stop callback ~ ok")
                tlog("stop: " + id)
            })         
            return false
        })
    
        chrome.extension.sendMessage({"q":"state"}, function(dict){                                    
            //自行刷新保持session,防止自动执行
            setTimeout(function(){$subm[5].click()}, 90000)                                         
        })

        //增加提示，软件人性化
        $($subm[3]).after("<span style=\"color:gray;font-size:13px\"><strong>jumper</strong>: enter F12 , goto \"console\" panel to know <strong>TIME</strong> you make it!</span>")
    }
    // "if length==6" end 

    //美观，行与行交替着色
    //没有输入框的表格的非首行tr
    $("table:last:not(:has(input)) tr:not(:first):odd").css({"backgroundColor":"rgb(208,233,255)"})          

})
