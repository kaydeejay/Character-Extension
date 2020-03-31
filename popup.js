document.addEventListener('DOMContentLoaded', function() {
    console.log('popup console is running');
    var charSheet = document.getElementById('character-sheet');
    var scrapeChar = document.getElementById('scrape-character');
    // onClick's logic below:
    charSheet.addEventListener('click', function() {
        //console.log('The link has been clicked');
        
        var qParams = {
            active: true,
            currentWindow: true
        };
        chrome.tabs.query(qParams, gotTabs);
        function gotTabs(tabs){
            var msg = {
                text: 'redirect',
                url: 'chrome-extension://ddpkdpplaeodedaeelphkipakapcghge/character-sheet.html'
            };
            console.log('sending message...');
            chrome.tabs.sendMessage(tabs[0].id, msg);
            console.log('message sent: ' + JSON.stringify(msg));
        }
    });

    scrapeChar.addEventListener('click', function(){
        var qParams = {
            active: true,
            currentWindow: true
        };
        chrome.tabs.query(qParams, function(tabs){
            var msg = {
                text: 'getCharacter'
            };
            chrome.tabs.sendMessage(tabs[0].id, msg);
        });
    });
});
