// Guarda o app no aparelho para abrir sem internet. Ao publicar mudança, suba a VERSAO.
const VERSAO = 'dalu-v1.1.0';
const ARQUIVOS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'js/html2canvas.min.js',
  'fontes/montserrat.woff2',
  'fontes/poppins-700.woff2',
  'fontes/roboto.woff2',
  'icones/apple-touch-icon.png',
  'icones/icone-192.png',
  'icones/icone-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== VERSAO).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// rede primeiro (pega as atualizações); sem internet, usa a cópia guardada
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        const copia = r.clone();
        caches.open(VERSAO).then((c) => c.put(e.request, copia));
        return r;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
