﻿$(function(){
    if ($("img[src$='Open.gif']:visible").length==0){
        $("a:contains('学生选课与查询')")[0].click()
    }
})
