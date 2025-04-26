'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "86359691265f3e28cce2c01a083777cc",
"assets/AssetManifest.bin.json": "d98643e56bdc448e831e9ac7c351f6fe",
"assets/AssetManifest.json": "1c3ca806311ba8103221422337667a4f",
"assets/assets/covers/camio.png": "91222c28efd70dbef2b7d4d500cccb48",
"assets/assets/covers/carbon-footprint.png": "b14f0a452dee00d9f3509b8aa714b895",
"assets/assets/covers/crisfood.png": "091cdb11a1714d0168886e5aa896b921",
"assets/assets/covers/groovi.png": "25ecd665ae2e311857d3410f27fd1a64",
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
"assets/assets/logos/brainium.svg": "8660c8d8bac69a040ac98dacdf12401d",
"assets/assets/logos/techblue.svg": "68b0a600212008ae721147bceaa4ad10",
"assets/assets/logos/zoom.svg": "2ee9c6968d63b8f703139b10c71d93ff",
"assets/assets/resume/resume.pdf": "701a2c33f78ca127d6ab308ad2bcd616",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "06a463bd4e69b589b8cb6e3ba756ebf8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "7f8a6ff6be490a8ba42d2f1e67da34d3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "205411f021408479bc1ab989210c2458",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
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
