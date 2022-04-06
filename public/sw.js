/**
 *
 */
const CACHE_KEY = "v1";

const assets = [
  "/groceries",
  "/static/js/bundle.js",
  "/assets/maskable_icon_x144.png",
  "/favicon.ico",
  "/api/groceries",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_KEY).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

/**
 * Handle fetch events
 */
self.addEventListener("fetch", (event) => {
  console.log("sw fetch", event.request.url);
});

/**
 *
 */
self.addEventListener("sync", (event) => {
  console.log("sync", event);
});
