/* SiteDownAlert
 * A simple webpage that takes in parameters and shows a nice warning message to the user.
 * GitHub: https://www.github.com/lewisevans2007/SiteDownAlert
 * Licence: GNU General public licence v3.0
 * By: Lewis Evans
 */

function load(){
    var urlParams = new URLSearchParams(window.location.search);
    var message = urlParams.get('message');
    var link = urlParams.get('link');
    var link_text = urlParams.get('link_text');
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