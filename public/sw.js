/**
 *
 */
self.addEventListener("install", (event) => {
  console.log("install");
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll(["/groceries"]);
    })
  );
});

async function sendMessage() {
    console.log("sending")
}

// Background sync
self.addEventListener("sync", (event) => {
    event.waitUntil(sendMessages())
})
