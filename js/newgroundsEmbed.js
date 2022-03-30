//Fix the bas newgrounds video embed CSS
/*
window.onload = function(){
    let frameElement = document.getElementById("newgroundsEmbed");
    let doc = frameElement.contentDocument;
    doc.body.innerHTML = doc.body.innerHTML + '<style>.stack {background-color: #fff;}</style>'
}
*/
/*
window.onload = function () {
  
    // Create a link Element
    // for the css file
    var link = document.createElement("link");

    // Set the attributes 
    // for link element  
    link.href = "iframeCss.css";
    link.rel = "stylesheet";
    link.type = "text/css";

    // Set the link element at the
    // 'head' of HTML document  
    document.head.appendChild(link);
}
*/

$(document).ready(function(){
    $('#newgroundsEmbed').load(function(){
        $('#newgroundsEmbed')
                .contents().find("body")
                .html("test iframe");
        $('#newgroundsEmbed')
            .contents().find("head")
            .append($('<link rel="stylesheet" type="text/css" href="main.css">')
        );
    });
});