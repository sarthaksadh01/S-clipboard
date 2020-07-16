const os = require("os");
const tesseract = require("node-tesseract-ocr")


const getScreenShotDirectory = () => {
    var operatingSystem = os.platform()
    var user = os.userInfo().username
    switch (operatingSystem) {
        case "darwin": // Mac os
            return `/Users/${user}/desktop`;
        case "linux": //Linux
            return `/home/${user}/Pictures`
        case "win32": //windows
            return `C:\\Users\\${user}\\Pictures\\Screenshots`
        default:
            return "";
    }

}

const getOs = () => {
    var operatingSystem = os.platform()
    switch (operatingSystem) {
        case "darwin": // Mac os
            return `Mac Os`;
        case "linux": //Linux
            return `Linux`
        case "win32": //windows
            return `Windows`
        default:
            return "Unknown";
    }

}

const getUserName = () => {
    return os.userInfo().username;
}




async function extractText(imageLocation) {
    return new Promise((resolve, reject) => {
        tesseract.recognize(imageLocation, {lang:'eng'})
            .then(text => { 
                resolve(text)
            })
            .catch(error => {
                reject(error)
            })
 
    })
}


module.exports = {
    getScreenShotDirectory,
    extractText,
    getOs,
    getUserName,

}