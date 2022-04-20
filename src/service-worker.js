/**
 *
 *
 */
const CACHE_KEY = "v.1";

const assets = [
  "/assets/maskable_icon_x512.png",
  "/assets/maskable_icon_x192.png",
  "/assets/maskable_icon_x144.png",
  "/assets/maskable_icon_x64.png",
  "/assets/maskable_icon_x16.png",
];

self.addEventListener("install", (event) => {
  // console.log("sw: ", event);

  event.waitUntil(caches.open(CACHE_KEY).then((cache) => cache.addAll(assets)));
});
// Fetch Listener
self.addEventListener("fetch", (event) => {
  // console.log("fetching: ", event);
  // event.respondWith(fromCache(event.request));
  // event.waitUntil(updateCache(event.request).then(() => refreshClient()));
});
// Fetch from cache
const fromCache = (request) =>
  caches.open(CACHE_KEY).then((cache) => cache.match(request));
// Update cache
const updateCache = (request) =>
  caches.open(CACHE_KEY).then((cache) =>
    fetch(request)
      .then((response) => cache.put(request, response.clone()))
      .then(() => response)
  );
// Refresh
const refreshClient = (response) =>
  self.clients.matchAll().then((clients) =>
    clients.forEach((client) =>
      client.postMessage(
        JSON.stringify({
          type: "refresh",
          url: response.url,
          eTag: response.headers.get("ETag"),
        })
      )
    )
  );
/**
 *
 */
self.addEventListener("sync", (event) => {
  // console.log("sync: ", event);
});
