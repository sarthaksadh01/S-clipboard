const { app, BrowserWindow, Notification } = require('electron')
const path = require('path')
var watch = require('node-watch');
const util = require("./util");
const clipboardy = require('clipboardy');
const screenShotDirectory = util.getScreenShotDirectory()

var prevSS = "";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')

}

app.whenReady().then(() => {

  createWindow()
  detectScreenShot()



  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
      detectScreenShot()

    }
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

const detectScreenShot = () => {
  watch(screenShotDirectory, function (evt, imageLocation) {
    if (evt === "update" && imageLocation !== prevSS && imageLocation.endsWith(".png")) {
      console.log(imageLocation)
      prevSS = imageLocation;
      new Notification({
        title: 'Screenshot Detected',
        body: "",
      }).show();

      util.extractText(imageLocation).then((text) => {
        clipboardy.writeSync(text);
        new Notification({
          title: 'Text Copied',
          body: text,
        }).show();


      }).catch((err) => {
        new Notification({
          title: 'Error extracting Text',
          body: err,
        }).show();
      })

    }

  });

}

