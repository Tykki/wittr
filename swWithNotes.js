var staticCacheName = 'wittr-static-v8';
var contentImgsCache = 'wittr-content-imgs';
var allCaches = [
  staticCacheName,
  contentImgsCache
];

// Installs SW on first page load and opens a cache -staticCacheName-
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      // Adds needed elements for page start up to opened cache
      return cache.addAll([
        '/skeleton',
        'js/main.js',
        'css/main.css',
        'imgs/icon.png',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
  );
});

// On Activation, deletes old SW and updates to new one.
self.addEventListener('activate', function(event) {
  event.waitUntil(
    // Gets cache keys of all available caches, then return Promise with all Names
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        // Return filtered names that start with cacheName but are not cacheName
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('wittr-') &&
                 !allCaches.includes(cacheName);
        }).map(function(cacheName) {
          // Deleted the returned caches that are older.
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Calls to cache and then Server to populate Views when a fetch call to server is made
self.addEventListener('fetch', function(event) {
  // intercept the fetch call url and check if it matches to cached values
  // if it does, then return the cached values 
  var requestUrl = new URL(event.request.url);

  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname === '/') {
      event.respondWith(caches.match('/skeleton'));
      return;
    }
    if (requestUrl.pathname.startsWith('/photos/')) {
      event.respondWith(servePhoto(event.request));
      return;
    }
    // respond to avatar urls by responding with
    // the return value of serveAvatar(event.request)
    if (requestUrl.pathname.startsWith('/avatars/')){
      event.respondWith(serveAvatar(event.request));
      return;
    }
  }
  // Fetch JS and others CSS ish
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

function serveAvatar(request) {
  // Avatar urls look like:
  // avatars/sam-2x.jpg
  // But storageUrl has the -2x.jpg bit missing.
  // Use this url to store & match the image in the cache.
  // This means you only store one copy of each avatar.
  var storageUrl = request.url.replace(/-\dx\.jpg$/, '');

  // return images from the "wittr-content-imgs" cache
  // if they're in there. But afterwards, go to the network
  // to update the entry in the cache.
  //
  // Note that this is slightly different to servePhoto!
  return caches.open(contentImgsCache).then(function(cache){
    return cache.match(storageUrl).then(function(response){
      var networkFetch = fetch(request).then(function(networkResponse){
        cache.put(storageUrl, networkResponse.clone());
        return networkResponse;
        });
      return response || networkFetch;
    });
  });
}

function servePhoto(request) {
  var storageUrl = request.url.replace(/-\d+px\.jpg$/, '');

  return caches.open(contentImgsCache).then(function(cache) {
    return cache.match(storageUrl).then(function(response) {
      if (response) return response;

      return fetch(request).then(function(networkResponse) {
        cache.put(storageUrl, networkResponse.clone());
        return networkResponse;
      });
    });
  });
}

self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});