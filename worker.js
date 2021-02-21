var cacheName = 'lessons';
var cacheFiles = [
    'index.html',
    'lesson.js',
    'lesson.webmanifest',
    'images/logo.png',
    'images/accounts.jpg',
    'images/art.jpg',
    'images/chemistry.jpg',
    'images/english.jpg',
    'images/history.jpg',
    'images/IT.jpg',
    'images/math.jpg',
    'images/physics.jpg',
    'images/programming.jpg',
    'images/pyscology.jpg',
    'images/science.jpg'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all files');
            return cache.addAll(cacheFiles);
        })
    );
});