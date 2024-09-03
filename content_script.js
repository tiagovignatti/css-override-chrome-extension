// import "./globo.css";

function addstylesheet(filename){
    var link = document.createElement("link");
    link.href = chrome.runtime.getURL(filename);
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}
    
if (window.location.href.match(/(https:\/\/(.*globo\.com\/.*))/i)) {
    addstylesheet("content_script.css");
}

console.log("inside content script!");