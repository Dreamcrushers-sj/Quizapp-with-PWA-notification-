let cacheData = "appv1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((data) => {
      data.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/App.tsx",
        "/index.tsx",
        "/opentdb.com/api.php?amount=5&diffculty=easy&type=multiple",
        "/"
      ])
    })
  )
})

// self.addEventListener("activate", function(e) {
// console.log("[ServiceWorker] Activate");
//   });
//   
//   self.addEventListener('install', function(e) {
// console.log('[ServiceWorker] Install');
// e.waitUntil(
//  caches.open(cacheName).then(function(cache) {
// console.log('[ServiceWorker] Caching app shell');
// return cache.addAll(filesToCache);
//   })
// );
//   });
//   
self.addEventListener('fetch', function (e) {
  if (!navigator.online) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(e.request);


      })
    );
  }
});