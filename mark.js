$( function(){
$itemlist = $("table#dgrdList tr:gt(0)");
if($itemlist.length==0){
    date = new Date();
    y = date.getFullYear();    //getYear()
    m = date.getMonth()+1;    //terrible!
    if(m < 7){
        $("select#ddListXQ").val("上");
    }else{
        $("select#ddListXQ").val("下");
    }
    $("select#dlstXndZ").val((y-1)+"-"+y);  // always!
    return;
}
sum = 0.0;jidian = 0.0;
$itemlist.each(function(){
    $tr = $(this);
    one = parseFloat($tr.find("td:eq(3)").text());
    if(isNaN(one)){
        return true;    //continue;
    }else{
        sum += one;
        jidian += parseFloat($tr.find("td:eq(6)").text());
    }
});
sum = Math.round(sum*10)/10.0;
show = "(总绩点/总学分=平均绩点) "+sum+"/"+jidian+" = "+(sum/jidian);
$total = $("span#Label3");
$total.text($total.text()+": "+show);
console.log(show);
});
