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
 * https://gist.github.com/JMPerez/8ca8d5ffcc0cc45a8b4e1c279efd8a94
 */
self.addEventListener("fetch", (event) => {});

/**
 * BackgroundSync
 */
self.addEventListener("sync", (event) => {
  console.log("sync", event);
});

/**
 * Activate
 */
self.addEventListener("activate", (event) => {
  console.log("activate", event);
});
