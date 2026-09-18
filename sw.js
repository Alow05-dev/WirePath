const CACHE="wirepath-v2";
const ASSETS=["./","./index.html","./manifest.webmanifest"];

self.addEventListener("install", event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate", event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch", event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=="GET") return;

  // Always try the network first for the app shell so GitHub Pages updates
  // appear on the installed PWA. Fall back to cache when offline.
  if(url.pathname.endsWith("/index.html") || url.pathname.endsWith("/WirePath/")){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(c=>c.put("./index.html",copy));
          return response;
        })
        .catch(()=>caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>cached || fetch(event.request))
  );
});
