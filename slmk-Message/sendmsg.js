console.log("sendmsg.js begin")
chrome.extension.sendMessage({id:"2011050698", msg: "get_autoreg_state"}, function(msg) {console.log("callback log:" + msg["id"])})
console.log("sendmsg.js sent msg")

