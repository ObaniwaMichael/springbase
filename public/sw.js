const CACHE_NAME = 'springbase-schools-v1';
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
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
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
