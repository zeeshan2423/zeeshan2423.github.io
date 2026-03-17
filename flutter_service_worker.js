'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "13fcc8d35b2a813640089eaf1a410af5",
"assets/AssetManifest.bin.json": "3929ab7813ff7b79c8d2771058b5d05d",
"assets/assets/covers/camio.png": "91222c28efd70dbef2b7d4d500cccb48",
"assets/assets/covers/carbon-footprint.png": "b14f0a452dee00d9f3509b8aa714b895",
"assets/assets/covers/crisfood.png": "091cdb11a1714d0168886e5aa896b921",
"assets/assets/covers/groovi.png": "25ecd665ae2e311857d3410f27fd1a64",
"assets/assets/covers/gtmx.png": "f173871b98d6d07ce4bdd71265460dee",
"assets/assets/covers/lunches.png": "7c0c4e17dde01a93f60d382de37673d5",
"assets/assets/covers/one-piece-a-day.png": "33b847f7ddec077c33934047a6522d27",
"assets/assets/covers/prevent-suicide.png": "738d934b56c85b66ef79caa008f1c4ed",
"assets/assets/covers/rentr.png": "3123d91376a84bcb9a95b139e12f0dfb",
"assets/assets/covers/smed.png": "6c53c141822b910306841dbd418db444",
"assets/assets/covers/translangua.png": "582b043c94a180dede2d9ce415a4f258",
"assets/assets/covers/xturra-partner.png": "bac47a7161c371327ecff57b6def5bfc",
"assets/assets/covers/xturra.png": "56f6f1de54b0c26dcfcc1d74b24d0489",
"assets/assets/icons/android-studio.svg": "558e9bd2c665aea39fa44564bf6a9549",
"assets/assets/icons/apple-app-store.svg": "3bdae6a422b007be2f757c94ab9f4944",
"assets/assets/icons/bitbucket.svg": "2a7acf0f82a255e3536d8f881edfbd52",
"assets/assets/icons/confluence.svg": "54209e018abc80dd4c2ac278b6f665ee",
"assets/assets/icons/css.svg": "5f427a1d45181e64d3cbdffc6c4f860a",
"assets/assets/icons/dart.svg": "ba73012769b89296ec3034a082725d28",
"assets/assets/icons/docker.svg": "e14f56274870fca519ba960799a86f3c",
"assets/assets/icons/download.svg": "7ef11cde8d5c9d444f52898e83eec877",
"assets/assets/icons/express.svg": "cd477f28ad033b1439f75c921e6db303",
"assets/assets/icons/fastlane.svg": "3150d3359ebd32123d8f57f8368ffeea",
"assets/assets/icons/figma.svg": "9cc4e20e3a0d95b01f4f5370a633da46",
"assets/assets/icons/firebase.svg": "4ce0e63ac2c127a2c7ee797cdeb6a531",
"assets/assets/icons/flutter.svg": "7eb717347452639a6e6a1d91b1cf0a75",
"assets/assets/icons/git.svg": "fa64ffb6e4394dde387b608fbc241a28",
"assets/assets/icons/github.svg": "56986311c424351a0710dd21cd753db7",
"assets/assets/icons/gitlab.svg": "5923c5a9393500d44289b5041db6c0cd",
"assets/assets/icons/html.svg": "3386e20a4738648b627de6f520029cfa",
"assets/assets/icons/javascript.svg": "a01bfa4f34dd6102a8a57b3e1c16a69f",
"assets/assets/icons/jenkins.svg": "b32d11fa0fe632521e8b3e68322291db",
"assets/assets/icons/jira.svg": "53999d79becb97ce0baec610571a490d",
"assets/assets/icons/kotlin.svg": "82abc9a4f498558194166816c5e99f6c",
"assets/assets/icons/kubernetes.svg": "308f37bdcd36a1863a89c15f601ef403",
"assets/assets/icons/linkedin.svg": "62b5ff70fbf68b5392f822bccc71b616",
"assets/assets/icons/mongo-db.svg": "3c4ffcbcc8af43b17d3ac513a1aa0679",
"assets/assets/icons/mysql.svg": "479558683db1b2b1f0412800c093f747",
"assets/assets/icons/nextjs.svg": "7cfd7d6ccc5948e2793d3be2ce117523",
"assets/assets/icons/node.svg": "5572edf4959a4a9ad810bdd5c3341fd1",
"assets/assets/icons/playstore.svg": "bb2cca6641204566fbebeeef91611481",
"assets/assets/icons/postman.svg": "091ec4b272513de23bb878abb2eb1ee2",
"assets/assets/icons/react.svg": "680237b11b246e43a10f53770a6678d6",
"assets/assets/icons/supabase.svg": "5b8a2b3a7ef7ec24352414a9eb3f73d6",
"assets/assets/icons/tailwind.svg": "2ad98b725d589fbdf2ef81a0511a4be6",
"assets/assets/icons/typescript.svg": "592043280fe4eb45f61d1102064bdb30",
"assets/assets/icons/visual-studio-code.svg": "577b64cd99fad3e4fd45132442120e21",
"assets/assets/icons/whatsapp.svg": "32be358bc5cee58650a696d1dc6fe9ed",
"assets/assets/illustrations/boy.svg": "6352bbd6c7783e09eff2e130ce7687af",
"assets/assets/logos/avatar.png": "d807a6a4e545a3fe9f25c814ad25f40c",
"assets/assets/logos/brainium.svg": "8660c8d8bac69a040ac98dacdf12401d",
"assets/assets/logos/logo.png": "cc6e02d01752388f510a283f2d9a9c74",
"assets/assets/logos/snapwork_technologies_logo.jpg": "e1c99fc8a68d26cb19fb85fbf9e44cd7",
"assets/assets/logos/techblue.svg": "68b0a600212008ae721147bceaa4ad10",
"assets/assets/logos/uasaero_logo.jpg": "82ea7935a28d1b941750ba351875dda1",
"assets/assets/logos/zoom.svg": "2ee9c6968d63b8f703139b10c71d93ff",
"assets/assets/resume/resume.pdf": "701a2c33f78ca127d6ab308ad2bcd616",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "6881072084425848c37a63f2ac643eda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "b79cb2c5fd971208d746ebce1aed9b66",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "b09f653543076ab2e48f0cbb73e7b877",
"icons/Icon-192.png": "2616615e8c606917044bd3c87fca4fa7",
"icons/Icon-512.png": "e136fa7670e4e4c32f825595b544a6e7",
"icons/Icon-maskable-192.png": "2616615e8c606917044bd3c87fca4fa7",
"icons/Icon-maskable-512.png": "e136fa7670e4e4c32f825595b544a6e7",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "5c9be0260a236a54361e89589fc63c32",
"manifest.json": "3c00bfb5fa6c03e5efff656e896ed43c",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
