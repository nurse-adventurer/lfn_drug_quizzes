const CACHE_NAME = 'lfn-drug-quizzes-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './quizzes/lidocaine_12_46.html',
  './quizzes/hypertonic_saline_12_39.html',
  './quizzes/labetalol_12_43.html'
];

// Install — cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
