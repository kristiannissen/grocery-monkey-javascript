/**
 *
 */
self.addEventListener("install", (event) => {
    console.log("install")
    event.waitUntil(
        caches.open("v1").then((cache) => {
            return cache.addAll(["/groceries"])
        })
    )
})

