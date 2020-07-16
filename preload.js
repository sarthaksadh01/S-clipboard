const util = require("./util");

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  replaceText("os",util.getOs());
  replaceText("path",util.getScreenShotDirectory());
  replaceText("uName",util.getUserName())

 
})
