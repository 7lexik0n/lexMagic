document.addEventListener('DOMContentLoaded', function(){ 
    var parser = document.querySelector('#parser');
    parser.addEventListener('click', function(){
        document.querySelector('head meta').setAttribute('charset', 'windows-1251');
        var scriptURL = chrome.extension.getURL('script/InfinityParsing.js');
        chrome.tabs.executeScript({
            code: "document.querySelector('head meta').setAttribute('charset', 'windows-1251'); var script = document.createElement('script'); var head = document.querySelector('head'); head.appendChild(script); script.setAttribute('src', '" + scriptURL + "');"
        })        
    });
    var titles = document.querySelector('#titles');
    titles.addEventListener('click', function(){
        chrome.tabs.executeScript(null, {file: "script/main.js"});
    });
    var digger = document.querySelector('#digger');
    digger.addEventListener('click', function(){
        document.querySelector('head meta').setAttribute('charset', 'windows-1251');
        var scriptURL = chrome.extension.getURL('script/DiggerMaster.js');
        chrome.tabs.executeScript({
            code: "document.querySelector('head meta').setAttribute('charset', 'windows-1251'); var script = document.createElement('script'); var head = document.querySelector('head'); head.appendChild(script); script.setAttribute('src', '" + scriptURL + "');"
        })   
    });
    var hrefsBtn = document.querySelector('#hrefsBtn');
    hrefsBtn.addEventListener('click', function(){
        chrome.tabs.executeScript(null, {file: "script/siteList.js"});
    });
    var decrTitles = document.querySelector('#decrTitles');
    decrTitles.addEventListener('click', function(){
        chrome.tabs.executeScript(null, {file: "script/decreaseTitles.js"});
    });
    var incrTitles = document.querySelector('#incrTitles');
    incrTitles.addEventListener('click', function(){
        chrome.tabs.executeScript(null, {file: "script/increaseTitles.js"});
    });
    var decrIcons = document.querySelector('#decrIcons');
    decrIcons.addEventListener('click', function(){
        chrome.tabs.executeScript(null, {file: "script/decreaseIcons.js"});
    });
    var incrIcons = document.querySelector('#incrIcons');
    incrIcons.addEventListener('click', function(){
        chrome.tabs.executeScript(null, {file: "script/increaseIcons.js"});
    });
    var signatureBack = document.querySelector('#signatureBack');
    signatureBack.addEventListener('input', function(){        
        var backColor = signatureBack.value;
        chrome.tabs.executeScript({
            code: "var backColor = '" + backColor + "';"
        }, function(result) {
            chrome.tabs.executeScript(null, {file: "script/changeColor.js"});
        });            
    });
    var signatureText = document.querySelector('#signatureText');
    signatureText.addEventListener('input', function(){
        var textColor = signatureText.value;
        chrome.tabs.executeScript({
            code: "var textColor = '" + textColor + "';"
        }, function(result) {
            chrome.tabs.executeScript(null, {file: "script/changeTextColor.js"});
        }); 
    });
});