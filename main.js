const electron = require('electron');
//const url = require('url');
//const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;


function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('index.html')
}

app.on('ready', createWindow)
