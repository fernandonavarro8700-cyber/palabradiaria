const CACHE = 'palabra-diaria-v1';
const ASSETS = [
  '/palabradiaria/',
  '/palabradiaria/index.html',
  '/palabradiaria/manifest.json',
  '/palabradiaria/icon-192.png',
  '/palabradiaria/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
