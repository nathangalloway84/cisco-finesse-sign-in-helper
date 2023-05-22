let intervalId, button, userData

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function autoLogin() {
    console.log("getting sign-in button")

    button = document.getElementById("signin-button")

    if (! button) return
    
    clearInterval(intervalId)

    button.click()
}

function run() {    
    intervalId = setInterval(autoLogin, 100)
}

chrome.storage.local.get(["userData"]).then((result) => {
    if (! result.userData) return console.log("userData not found")

    userData = result.userData

    document.addEventListener("DOMContentLoaded", run);

    if (userData.ciscoExtension) setCookie('finesse_ag_extension', userData.ciscoExtension, 30)

    if (userData.deviceType == 1 || userData.deviceType == 3) {
        setCookie('finesse_ma_dialnum', userData.remoteExtension, 30)
        setCookie('finesse_ma_mode', "CALL_BY_CALL", 30)
    } else {
        setCookie('finesse_ma_dialnum', "", 30)
        setCookie('finesse_ma_mode', "", 30)
    }
})