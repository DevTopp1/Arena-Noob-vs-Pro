
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('game-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/box2d.wasm',
        '/pathfind.js',
        '/redblackset.js',
        '/waker.js',
        '/data.json',
        '/media/bang.webm',
        '/media/coin.webm',
        '/media/counting_rank.mp3',
        '/media/death.mp3',
        '/media/limit 70.mp3',
        '/media/point.mp3',
        '/media/shot.mp3',
        '/media/timer.mp3',
        '/media/woohoo.mp3'
        // Add all other assets, including images, scripts, etc.
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
