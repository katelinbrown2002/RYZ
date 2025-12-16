const cacheName = 'ryez-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js'
];

// Install event
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Activate event
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// Fetch event
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
