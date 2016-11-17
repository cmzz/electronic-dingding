/**
 * Created by max on 16-11-17.
 */

const path = require('path');
const {app, BrowserWindow, ipcRenderer, session} = require('electron');

let Common = require("../../common");

class DingDingWindow {
    constructor() {
        this.dingWindow = null;
        this.inervals = {};

        // 登录状态
        this.loginState = {
            NULL: -2,
            WAITING: -1,
            YES: 1,
            NO: 0
        };
        this.loginState.current = this.loginState.NULL;

        this.createWindow();
    }

    createWindow() {
        this.dingWindow = new BrowserWindow({
            width: Common.DingDingWindowsSize.width,
            height: Common.DingDingWindowsSize.height,
            title: Common.title,
            resizeable: false,
            center: true,
            show: false,
            frame: true,
            webPreferences: {
                javascript: true,
                plugins: true,
                nodeIntegration: false,
                webSecurity: false
            }
        });

        this.dingWindow.webContents.setUserAgent(Common.userAgent[process.platform]);

        if (Common.debug) {
            this.dingWindow.webContents.openDevTools();
        }

        this.connect();

        this.dingWindow.webContents.on('will-navigate', (event, url) =>  {
            if (/.*\.dingtalk\.com.*/.test(url)) return;
            ev.preventDefault();
        });

        this.dingWindow.on('page-title-updated', (event) => {
            if (this.loginState.current === this.loginState.NULL) {
                this.loginState.current = this.loginState.WAITING;
            }
            event.preventDefault();
        });
    }

    connect() {
        Object.keys(this.inervals).forEach((key, index) => {
            clearInterval(key);
            delete this.inervals[key];
        });

        this.loadURL(Common.webDingding);
        const int = setInterval(() =>{
            if(this.loginState.current == this.loginState.NULL) {
                this.loadURL(Common.webDingding);
                console.log('Reconnect...');
            }
        }, 5000);

        console.log('Logined');
        this.inervals[int] = true;
    }

    loadURL(url) {
        this.dingWindow.loadURL(url);
    }

    show() {
        this.dingWindow.show();
    }
}

module.exports = DingDingWindow;