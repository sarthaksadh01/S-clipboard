# S-clipboard
Copy text from images or website where copy paste is blocked.

### Installation
First, you need to install the Tesseract project. Instructions for installing Tesseract for all platforms can be found on the [the project site](https://github.com/tesseract-ocr/tesseract/wiki "the project site")

Download the installer for
- [Macos](https://drive.google.com/file/d/1NXDrApSWd3teQVDoT3RL_aWhiyrB5i43/view?usp=sharing "Macos")
- [Windows]( "Windows")
- [Linux](https://drive.google.com/file/d/1kXGmCWNUB2cf8u89TEdUKuzqlOh9Z3Mx/view?usp=sharing "Linux")

Or setup the project locally
 ```shell
git clone https://github.com/sarthaksadh01/S-clipboard.git
npm install
npm start
```
### Usage
- Keep the app running in background
- Take the screenshot of the area from where you want to copy the text
- Text will be copied to clipboard.

### How it works
This app monitors for file change (using node-watch) in screenshot directory (for eg desktop in macos) whenever a new image is added to this directory it extract the text from it using Tesseract and copy it to the clipboard (using clipboardy)

