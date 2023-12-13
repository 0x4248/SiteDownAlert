/* SiteDownAlert
 * A simple webpage that takes in parameters and shows a nice warning message to the user.
 * GitHub: https://www.github.com/lewisevans2007/SiteDownAlert
 * Licence: GNU General public licence v3.0
 * By: Lewis Evans
 */

function block_xxs(content) {
    var xxs = false;
    if (content.includes("<") || content.includes(">")) {
        xxs = true;
    }
    console.log(xxs);
    if (xxs) {
        document.body.innerHTML = "<h1 style='font-family: arial; text-align: center; margin-top: 20%;color: red;'>A XXS attack has been detected and has been blocked.</h1>";
    }
}