#!/bin/bash
npm run build
scp -r app/* aswwu.com:/var/www/html/mask/app/
scp dist/app.bundle.js aswwu.com:/var/www/html/mask/dist/
