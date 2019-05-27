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
});