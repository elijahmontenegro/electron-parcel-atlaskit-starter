// Basic init
const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');


// Let electron reloads bywindow. itself when webpack watches changes in ./app/
if (isDev) {
  require('electron-reload')(__dirname, {
    electron: require('${__dirname}/../../node_modules/electron')
  })
}

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    let mainWindow = new BrowserWindow({
        width: 1024,
        height: 728,
        minWidth: 600, // set a min width!
        minHeight: 300, // and a min height!
        title: " ",
        icon: path.join(__dirname, './assets/favicon.ico'),
        // Remove the window frame from windows applications
        // frame: false,
        // Hide the titlebar from MacOS applications while keeping the stop lights
        // titleBarStyle: 'hidden' || 'customButtonsOnHover',
        webPreferences: {
            zoomFactor: 1.0
        }
    })

    const startUrl = 'http://localhost:1234' || url.format({
            pathname: path.join(__dirname, './../build/index.html'),
            protocol: 'file:',
            slashes: true
        });

    // mainWindow.setMenu(null);
    mainWindow.loadURL(startUrl)

    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});
