// browser.browserAction.onClicked.addListener(function() {console.log("Clicked!")});

chrome.browserAction.onClicked.addListener(function(tab) {
    alert('working?');
});
