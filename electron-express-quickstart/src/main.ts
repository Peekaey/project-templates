// main.js

// Modules to control application life and create native browser window

const { app, BrowserWindow } = require('electron');
import * as path from 'path';
import express from 'express';
import bodyParser from 'body-parser';


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./build/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

// Create an express app
const ExpressApp = express();

// Parse application/x-www-form-urlencoded
ExpressApp.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
ExpressApp.use(bodyParser.json());

// Handle form submission
ExpressApp.post('/submit', (req: any, res: any) => {
  const stack = req.body.stack;
  const startDate = req.body.start_date;
  const endDate = req.body.end_date;

  // Handle the form data as needed
  console.log(`Stack: ${stack}, Start Date: ${startDate}, End Date: ${endDate}`);

  // Send a response back to the client
  res.send('Form submission successful!');
});

// Start the server
ExpressApp.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Wait until the app is ready
app.whenReady().then(() => {
  // Create the main window
  createWindow();

  // Quit when all windows are closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});