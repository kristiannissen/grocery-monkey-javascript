/**
 *
 */
const CACHE_KEY = "v1";

const assets = ["/groceries", "/static/js/bundle.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_KEY).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

/**
 *
 */
