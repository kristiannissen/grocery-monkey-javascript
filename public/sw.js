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

const update = (request) =>
  caches
    .open(CACHE_KEY)
    .then((cache) =>
      fetch(request).then((response) => cache.put(request.url, response))
    );

const network = (request) =>
  new Promise((resolve, reject) => {
    fetch(request.clone()).then((response) => {
      resolve(response);
      // Update the cahce
      update(request);
    }, reject);
  });

const cached = (request) =>
  caches
    .open(CACHE_KEY)
    .then((cache) => cache.match(request.url).then((matching) => matching));

/**
 * Handle fetch events
 * https://gist.github.com/JMPerez/8ca8d5ffcc0cc45a8b4e1c279efd8a94
 */
self.addEventListener("fetch", (event) => {
  // Store in cache
  if (event.request.url.includes("/api/groceries")) {
    event.respondWith(
      network(event.request).catch(() => cached(event.request))
    );
    event.waitUntil(update(event.request));
  }
});

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
