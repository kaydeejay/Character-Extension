chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
    console.log(message.text);
    if(message.text == 'redirect'){
        console.log('recieved redirect message.');
        window.location.href = message.url;
    } else if(message.text == 'getCharacter'){
        var characterSheetElement = document.getElementsByClassName('characterviewer');
        //console.log(characterSheetElement);
        //console.dirxml(characterSheetElement[0]);
        var inputs = characterSheetElement[0].getElementsByTagName('input');
        //console.log(inputs);
        var charAttrbs = {};
        //console.log(inputs[1510].name);
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].value){
                charAttrbs[inputs[i].name] = inputs[i].value;
            }
        }
        console.log(JSON.stringify(charAttrbs));
    }
    
}

