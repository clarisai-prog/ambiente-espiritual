const CACHE_NAME = 'ambiente-espiritual-v5';

// Lista de versões antigas para limpeza agressiva
const OLD_CACHE_VERSIONS = ['ambiente-espiritual-v1', 'ambiente-espiritual-v2', 'ambiente-espiritual-v0', 'ambiente-espiritual-v3', 'ambiente-espiritual-v4'];

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './tutorial-abertura.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './checklist.html',
  './wallpapers.html',
  './design-tokens.css',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/capa-video.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Montserrat:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    // Primeiro, limpar todos os caches antigos
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && (cacheName.includes('ambiente-espiritual') || OLD_CACHE_VERSIONS.includes(cacheName))) {
            console.log('🧹 Limpando cache antiga na instalação:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Depois, abrir e cachear novos assets
      return caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('✅ Cacheando nova estrutura com design-tokens...');
          return cache.addAll(ASSETS_TO_CACHE);
        });
    }).catch((error) => {
      console.error('❌ Erro ao cachear:', error);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Remover TUDO que não for v3
          if (cacheName !== CACHE_NAME) {
            console.log('🧹 Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Limpeza de cache concluída');
      return self.clients.matchAll();
    }).then((clients) => {
      // Notificar todos os clientes sobre a atualização
      clients.forEach((client) => {
        client.postMessage({
          type: 'CACHE_CLEARED',
          message: 'Cache foi limpo e app está atualizado com design-tokens!'
        });
      });
    })
  );
  self.clients.claim();
});

// Fetch event - Cache-First strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // Try network request
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache successful responses
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Fallback to index.html for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
            return null;
          });
      })
  );
});
