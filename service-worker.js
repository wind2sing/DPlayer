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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e8271d1d2ebc4f2d160572e30e113ddd"
  },
  {
    "url": "assets/css/0.styles.f27854f6.css",
    "revision": "11521a70bfeb2652918523b1edd7c6c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2088d02d.js",
    "revision": "6d6b61efbcdb9893b336586bb3cfa06f"
  },
  {
    "url": "assets/js/11.8467bfc4.js",
    "revision": "41f87de2faa932b3f0d428b36565acfe"
  },
  {
    "url": "assets/js/12.f832bb81.js",
    "revision": "27ca977f1f3c59ca0638216f697e0868"
  },
  {
    "url": "assets/js/13.5cf1cf67.js",
    "revision": "5c97f97c7d569ecbf658abfb99144bde"
  },
  {
    "url": "assets/js/14.dfac061e.js",
    "revision": "dec3d62c2361dc5f96c2d54784b6f883"
  },
  {
    "url": "assets/js/15.b44c66c5.js",
    "revision": "e70f017166eb434af4dd23ecabf94888"
  },
  {
    "url": "assets/js/2.0ec960be.js",
    "revision": "ef69f98383b25f26d9d12d4a53e6db40"
  },
  {
    "url": "assets/js/3.485cbafa.js",
    "revision": "6fed6d57dcac609ec15f48e536ba31ed"
  },
  {
    "url": "assets/js/4.ecefe7bc.js",
    "revision": "60592ff03a1146d34dedfa3a426382de"
  },
  {
    "url": "assets/js/5.43b5b994.js",
    "revision": "007c48d307479b8d95ccecf78e9fbe67"
  },
  {
    "url": "assets/js/6.4f6a35c5.js",
    "revision": "7040c032cc67e0f34e2dd1c8731df83e"
  },
  {
    "url": "assets/js/7.0ddf0f5f.js",
    "revision": "3f59e056dd19f234bf71cbb4da865910"
  },
  {
    "url": "assets/js/8.96e56ce6.js",
    "revision": "5474568a78faa40259e13adfe25a4243"
  },
  {
    "url": "assets/js/9.7da9a08a.js",
    "revision": "51342f409200508815e10c763f1c08ef"
  },
  {
    "url": "assets/js/app.b79a2e99.js",
    "revision": "f84e0c1ef6673c66a6a445193a861169"
  },
  {
    "url": "ecosystem.html",
    "revision": "af8264a85c01b57a7bf5166f126e972b"
  },
  {
    "url": "guide.html",
    "revision": "69f83ef7c7e28fd5726fb4ab965d406c"
  },
  {
    "url": "index.html",
    "revision": "b63d7664bdbf8ddb116f4242d6b2e359"
  },
  {
    "url": "logo.png",
    "revision": "d1ccb7c104d21890f850228d34ba97f4"
  },
  {
    "url": "support.html",
    "revision": "a75ef6068ec20a168a242e61617b6d2c"
  },
  {
    "url": "zh/ecosystem.html",
    "revision": "a0866b757596a6313725c4bd23133084"
  },
  {
    "url": "zh/guide.html",
    "revision": "ec61582f5322c438d5dc2fd4313409a7"
  },
  {
    "url": "zh/index.html",
    "revision": "a96d499b4e80764307b6ca44d96caf20"
  },
  {
    "url": "zh/support.html",
    "revision": "483313e05a94e697a3a79639d29d8e36"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
