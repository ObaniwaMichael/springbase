const CACHE_NAME = 'springbase-schools-v2';
const urlsToCache = [
  '/',
  '/about',
  '/programs',
  '/facilities',
  '/admissions',
  '/student-life',
  '/contact',
  '/schedule-tour',
  '/gallery',
  '/manifest.json',
  '/favicon.ico',
  '/images/springbase-logo.png',
  '/images/WhatsApp Image 2025-09-05 at 15.11.21.jpeg'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  // Let the browser handle non-GET and special paths (e.g. Vercel well-known)
  if (event.request.method !== 'GET' || event.request.url.includes('/.well-known/')) {
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => caches.match('/').then((cached) => cached || caches.match('/index.html')))
      .then((response) => response || new Response('Offline', { status: 503, statusText: 'Service Unavailable' }))
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
