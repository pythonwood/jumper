function sendMessage(msg)
{
 chrome.tabs.getSelected(null, function(tab) {
 chrome.tabs.sendMessage(tab.id, {greeting: msg}, function(response) {
 console.log(response.farewell);
 });
});