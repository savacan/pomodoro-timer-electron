'use strict';

const builder = require('electron-builder');
const fs = require('fs');
const path = require('path');
const platform = builder.Platform

const rootDir = path.resolve(__dirname, '../');
const packagejson = JSON.parse(fs.readFileSync(path.resolve(rootDir, 'package.json'), 'utf8'));



builder.build({
    targets: platform.MAC.createTarget(),
    config: {
        appId: `com.example.${packagejson.name}`,
        directories: {
            output: 'electron-app'
        }
    },
}).then((val) => {
    console.log('build成功', val)
}).catch(error => {
    console.log('build失敗', error)
})