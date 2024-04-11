/* SiteDownAlert
 * A simple webpage that takes in parameters and shows a nice warning message to the user.
 * GitHub: https://www.github.com/0x4248/SiteDownAlert
 * Licence: GNU General public licence v3.0
 * By: 0x4248
 */


function show_error(){
    document.body.innerHTML = "<style>body{padding:10px;text-align:center;}</style><h1>One or more parameters are missing.</h1><p>Check the URL and try again.</p>";
}

function load(){
    var urlParams = new URLSearchParams(window.location.search);
    var message = urlParams.get('message');

    if (message == null){
        show_error();
        return;
    }
    
    var link = urlParams.get('link');
    if (link == null){
        show_error();
        return;
    }
    
    var link_text = urlParams.get('link_text');
    if (link_text == null){
        show_error();
        return;
    }

    var messageElement = document.getElementById("message");
    var linkElement = document.getElementById("link");
    message = atob(message);
    link = atob(link);
    link_text = atob(link_text);
    block_xxs(message);
    block_xxs(link);
    messageElement.innerHTML = message;
    linkElement.setAttribute("href", link);
    linkElement.innerHTML = link_text;
}