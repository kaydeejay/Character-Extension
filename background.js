chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(){
    let params = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs){
        let msg = {
            "text": 'test'
        };

        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}