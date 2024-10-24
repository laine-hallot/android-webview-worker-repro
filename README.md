## Info

This is all related to this Chromium issue ticket: https://issues.chromium.org/issues/374241716

This repo is meant to demonstrate an issue where trying to create a worker from with in another worker seems to fail on versions of the Android WebView based on Chromium versions past 130.0.6723.58

The code here is based on the MDN web worker example, but with an extra worker that the main worker creates https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker

## How to run

The code here is only the client side html and JS stuff, you're going to have to figure out a way to get this in an android webview yourself.

Once you've got your base app with a webview set up theres two ways to actually load this code, only one of them causes the issue though

#### Loading stuff served from Webpack Dev Server (works normally)

1. `npm i`
1. `npm run serve`
1. Point the webview in your android app to the lan IP of your computer and open the app

#### Loading static files (Sub worker fails to load)

1. `npm i`
1. `npm run build`
1. Copy the output from `dist/` to the android app with the webview
