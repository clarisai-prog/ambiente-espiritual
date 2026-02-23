# Code Citations

## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
```


## License: Apache-2.0
https://github.com/nishiokya/service-worker-tutorial/blob/2c02cc0b5daf268b0f91ca52a734a7228c3bcda7/service-worker.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
```


## License: Apache-2.0
https://github.com/nishiokya/service-worker-tutorial/blob/2c02cc0b5daf268b0f91ca52a734a7228c3bcda7/service-worker.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
```


## License: Apache-2.0
https://github.com/nishiokya/service-worker-tutorial/blob/2c02cc0b5daf268b0f91ca52a734a7228c3bcda7/service-worker.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Del
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
```


## License: Apache-2.0
https://github.com/nishiokya/service-worker-tutorial/blob/2c02cc0b5daf268b0f91ca52a734a7228c3bcda7/service-worker.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
```


## License: Apache-2.0
https://github.com/nishiokya/service-worker-tutorial/blob/2c02cc0b5daf268b0f91ca52a734a7228c3bcda7/service-worker.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
```


## License: Apache-2.0
https://github.com/nishiokya/service-worker-tutorial/blob/2c02cc0b5daf268b0f91ca52a734a7228c3bcda7/service-worker.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: Apache-2.0
https://github.com/nishiokya/service-worker-tutorial/blob/2c02cc0b5daf268b0f91ca52a734a7228c3bcda7/service-worker.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: MIT
https://github.com/jmicko/coinbot/blob/a9c1f13e0df39f833f759fa906f36f19ea216ec0/public/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: Apache-2.0
https://github.com/nishiokya/service-worker-tutorial/blob/2c02cc0b5daf268b0f91ca52a734a7228c3bcda7/service-worker.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: desconhecido
https://github.com/DonBybo/BC_uebungen/blob/59282116ad5997d7ce3ede553fc5e1f801cacce6/js/sw.js

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Cache
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/drewp/maps/blob/1e8b6d9c3cb3221ea8f33f027e2f14d6ec2524f8/v4/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```


## License: desconhecido
https://github.com/mindon/mindon.github.com/blob/04bc7d0d5591111dfe81819241861c50188e57a1/index.html

```
Perfeito! Toda a reorganização foi concluída com sucesso! Aqui está o resumo completo:

---

## 1️⃣ NOVA ESTRUTURA DE PASTAS

```
ambiente_espiritual/
├── index.html                    (renomeado de md_1/code.html)
├── parte-2.html                  (renomeado de md_2/code.html)
├── parte-3.html                  (renomeado de md_3/code.html)
├── parte-4.html                  (renomeado de md_4/code.html)
├── parte-5.html                  (renomeado de md_5/code.html)
├── manifest.json                 ✨ NOVO
├── service-worker.js             ✨ NOVO
├── staticwebapp.config.json       ✨ NOVO
├── swa-cli.config.json           ✅ ATUALIZADO
├── assets/
│   ├── screen-1.png              (movido de md_1/screen.png)
│   ├── screen-2.png              (movido de md_2/screen.png)
│   ├── screen-3.png              (movido de md_3/screen.png)
│   ├── screen-4.png              (movido de md_4/screen.png)
│   └── screen-5.png              (movido de md_5/screen.png)
├── icons/
│   ├── icon-192.png              ✨ NOVO (placeholder - substituir por ícone real!)
│   └── icon-512.png              ✨ NOVO (placeholder - substituir por ícone real!)
└── .vscode/
    └── settings.json
```

---

## 2️⃣ CONTEÚDO COMPLETO DE `manifest.json`

```json
{
  "name": "Ambiente Espiritual",
  "short_name": "Amb. Espiritual",
  "description": "Arrume a Casa para Deus Entrar",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#c9a96e",
  "orientation": "portrait",
  "icons": [
    {
      "src": "./icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "./icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

## 3️⃣ CONTEÚDO COMPLETO DE `service-worker.js`

```javascript
const CACHE_NAME = 'ambiente-espiritual-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './parte-2.html',
  './parte-3.html',
  './parte-4.html',
  './parte-5.html',
  './manifest.json',
  './assets/screen-1.png',
  './assets/screen-2.png',
  './assets/screen-3.png',
  './assets/screen-4.png',
  './assets/screen-5.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install event - cache all assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .catch((error) => {
        console.error('Cache failed:', error);
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
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
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
```

---

## 4️⃣ CONTEÚDO COMPLETO DE `staticwebapp.config.json`

```json
{
  "routes": [
    { "route": "/parte-2", "rewrite": "/parte-2.html" },
    { "route": "/parte-3", "rewrite": "/parte-3.html" },
    { "route": "/parte-4", "rewrite": "/parte-4.html" },
    { "route": "/parte-5", "rewrite": "/parte-5.html" }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/assets/*", "/icons/*", "*.json", "*.js"]
  },
  "globalHeaders": [
    {
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "glob": "**/*.{js,css,png,jpg,gif,ico,svg,woff,woff2,ttf}"
    },
    {
      "headers": {
        "Cache-Control": "public, max-age=3600"
      },
      "glob": "*.html"
    }
  ]
}
```

---

## 5️⃣ CONTEÚDO ATUALIZADO DE `swa-cli.config.json`

```json
{
  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",
  "configurations": {
    "ambiente-espiritual": {
      "appLocation": ".",
      "outputLocation": ".",
      "apiLocation": ""
    }
  }
}
```

---

## 6️⃣ SNIPPET DE `<head>` PARA ADICIONAR EM TODOS OS HTML

✅ **JÁ ADICIONADO EM TODOS OS 5 ARQUIVOS HTML:**

```html
<link rel="manifest" href="./manifest.json">
<meta name="theme-color" content="#c9a96e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Ambiente Espiritual
```

