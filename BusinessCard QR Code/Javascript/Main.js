// #region Variables
// #region Redirect Links
var windowsPhoneLink = "";
var androidLink = "https://play.google.com/store/apps/details?id=com.discord&hl=en_IE&gl=US";
var iOSLink = "https://apps.apple.com/us/app/discord-talk-chat-hang-out/id985746746";
var defaultLink = "https://www.amazon.co.uk/";
// #endregion
// #endregion

function getMobileOperatingSystem()
{
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent))
        return windowsPhoneLink;

    if (/android/i.test(userAgent))
        return androidLink;

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
        return iOSLink;

    return defaultLink;
}
document.getElementById("redirectTitle").innerHTML = "Redirecting to: " + getMobileOperatingSystem();
document.getElementById("redirectMeta").content = "0 URL = " + getMobileOperatingSystem();
document.getElementById("redirectLink").href = getMobileOperatingSystem();