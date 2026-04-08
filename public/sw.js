const CACHE_NAME = "springbase-schools-v3";

// Keep this list small and stable. SPA routes should not be precached as separate
// URLs; the entry HTML should always be fetched fresh when possible.
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/images/springbase-logo.png",
];

// Install event
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(PRECACHE_URLS);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  // Let the browser handle non-GET and special paths (e.g. Vercel well-known)
  const url = new URL(event.request.url);
  if (
    event.request.method !== "GET" ||
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/.well-known/")
  ) {
    return;
  }

  // For document navigations, prefer the network so users don't get stuck
  // on an old HTML shell after a deploy.
  if (event.request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(event.request, { cache: "no-store" });
        const cache = await caches.open(CACHE_NAME);
        cache.put("/", networkResponse.clone());
        cache.put("/index.html", networkResponse.clone());
        return networkResponse;
      } catch (err) {
        const cached = await caches.match("/index.html") || await caches.match("/");
        return cached || new Response("Offline", { status: 503, statusText: "Service Unavailable" });
      }
    })());
    return;
  }

  // For same-origin static assets, use cache-first with background refresh.
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(event.request);

      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.ok) cache.put(event.request, response.clone());
          return response;
        })
        .catch(() => undefined);

      return cached || (await fetchPromise) || new Response("Offline", { status: 503, statusText: "Service Unavailable" });
    })());
  }
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
          return undefined;
        })
      );
      await self.clients.claim();
    })()
  );
});

// Allow the page to trigger immediate activation on updates.
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
