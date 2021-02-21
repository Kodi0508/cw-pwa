var cacheName = 'cw1-v1';
var cacheFiles = [
    'IndividualCoursework-1.html',
    'products.js',
    'cw1.webmanifest',
    'French.jpg',
    'Book.jpg',
    'Spanish.jpg',
    'Sports.jpg',
    'Theatre.jpg',
    'Geography.jpg',
    'Music.jpg',
    'Literature.jpg',
    'History.jpg',
    'Cooking.jpg',
    'Wallpaper.png'
];

self.addEventListener('install', (e) => { 
    console.log('[Service Worker] Install'); 
    e.waitUntil(
        caches.open(cacheName).then((cache) => { 
            console.log('[Service Worker] Caching all the files'); 
            return cache.addAll(cacheFiles); 
        })
        ); 
    });

    self.addEventListener('fetch', function (e) {    
        e.respondWith(
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: '              
            + e.request.url);
            return r         
        })    
        );
    }
    );