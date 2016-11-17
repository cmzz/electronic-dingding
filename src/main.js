/**
 * Created by max on 16-11-17.
 */

'use strict';

const {app, icpMain} = require('electron');
const path = require('path');
const DingDingWindow = require('./windows/controllers/dingding')

class DingDing {

    constructor() {
        this.dingdingWindow = null;
    }

    init() {
        this.initApp();
    }

    initApp() {
        app.on('ready', ()=>{
            this.createDingDingWindow();
            this.dingdingWindow.show();
        });

        app.on('active', () => {
            if(this.dingdingWindow == null) {
                this.createDingDingWindow();
            } else {
                this.dingdingWindow.show();
            }
        })
    }

    createDingDingWindow() {
        this.dingdingWindow = new DingDingWindow();
    }
}

new DingDing().init();