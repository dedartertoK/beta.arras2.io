self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", async () => {
    await self.registration.unregister();
    for (var e of await self.clients.matchAll({ type: "window" })) e.navigate(e.url)
}); 
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", async () => {
    await self.registration.unregister();
    for (var e of await self.clients.matchAll({ type: "window" })) e.navigate(e.url)
}); 
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/offline/',
          '/offline/style.css',
          '/offline/image.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
