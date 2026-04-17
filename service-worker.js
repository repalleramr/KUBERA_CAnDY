const CACHE_NAME = 'kubera-omega-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    self.clients.claim();
});

// A dummy fetch event is required by browsers to pass the PWA Install check
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => new Response('Kubera is running offline.'))
    );
});
