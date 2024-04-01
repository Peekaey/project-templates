"use strict";
// main.js
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = __importStar(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    // and load the index.html of the app.
    mainWindow.loadFile('./build/index.html');
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// Create an express app
const ExpressApp = (0, express_1.default)();
// Parse application/x-www-form-urlencoded
ExpressApp.use(body_parser_1.default.urlencoded({ extended: false }));
// Parse application/json
ExpressApp.use(body_parser_1.default.json());
// Handle form submission
ExpressApp.post('/submit', (req, res) => {
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
