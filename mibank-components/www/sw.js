/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/mycomponent.js",
    "revision": "7129feeb5cfe5c16e8b6404c73407073"
  },
  {
    "url": "build/mycomponent/mycomponent.nqo1zgrh.js",
    "revision": "d501397a240cf67517993a3cf07ed14d"
  },
  {
    "url": "build/mycomponent/mycomponent.oh1vr137.js",
    "revision": "8c68b5b3e39525f9a5a2f5f2c5c2d799"
  },
  {
    "url": "build/mycomponent/o70a0g6k.es5.js",
    "revision": "8345feeb358caccd32a1e618af120c2c"
  },
  {
    "url": "build/mycomponent/o70a0g6k.js",
    "revision": "826b0367b9fb40b95906585eb3906ed8"
  },
  {
    "url": "build/mycomponent/o70a0g6k.sc.es5.js",
    "revision": "8345feeb358caccd32a1e618af120c2c"
  },
  {
    "url": "build/mycomponent/o70a0g6k.sc.js",
    "revision": "826b0367b9fb40b95906585eb3906ed8"
  },
  {
    "url": "index.html",
    "revision": "383334994515348d07f8c9d25f4c15a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
