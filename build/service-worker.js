"use strict";var precacheConfig=[["/frontinsampa/index.html","6dbebe1077387b85ae950759e53a2db6"],["/frontinsampa/static/css/main.350f1aea.css","91cf5dc77cdf508e2b5bc845ec0c0469"],["/frontinsampa/static/js/main.683b7728.js","62888313129d3dcc0a3e9198cac1d1d2"],["/frontinsampa/static/media/Roboto-Bold.ee7b96fa.ttf","ee7b96fa85d8fdb8c126409326ac2d2b"],["/frontinsampa/static/media/Roboto-Regular.3e1af3ef.ttf","3e1af3ef546b9e6ecef9f3ba197bf7d2"],["/frontinsampa/static/media/apresentador.f17a8e1f.png","f17a8e1fa9dce0c377b5aae8dff12e76"],["/frontinsampa/static/media/background-dots.3cf32ff3.png","3cf32ff3fd855d04ca52f74ffb82891b"],["/frontinsampa/static/media/construtores_dan.bbec7072.png","bbec70720ee4a2b6f709c59e80272ab2"],["/frontinsampa/static/media/construtores_deivid.bbec7072.png","bbec70720ee4a2b6f709c59e80272ab2"],["/frontinsampa/static/media/construtores_keit.80680cd6.png","80680cd625c9c3dbf8ac48a0c2968a6c"],["/frontinsampa/static/media/construtores_marco.bbec7072.png","bbec70720ee4a2b6f709c59e80272ab2"],["/frontinsampa/static/media/hero.d9dd097a.jpg","d9dd097a8504934925fe3fd6b9db919c"],["/frontinsampa/static/media/maksoud1.3b4b8a8c.png","3b4b8a8cd0d3936512e6162fa22d29c7"],["/frontinsampa/static/media/maksoud2.da3de762.png","da3de7626ff4d3c9e3add1cb31c09b0d"],["/frontinsampa/static/media/maksoud3.59633015.png","59633015d7a8ecd464683d944473c92f"],["/frontinsampa/static/media/maksoud4.af26c19b.png","af26c19be9b034208840a05d8fe61499"],["/frontinsampa/static/media/maksoud5.d7cbc72d.png","d7cbc72d32cd4726eca744850231366d"],["/frontinsampa/static/media/maksoud6.b2a223f3.png","b2a223f396482cd43f0628b55b0a1c5b"],["/frontinsampa/static/media/speaker_1.3fd80da5.png","3fd80da5eab38b860f39778b672feba8"],["/frontinsampa/static/media/speaker_2.e7269fb4.png","e7269fb4fd43fb45338ae12c1c1a2ea5"],["/frontinsampa/static/media/speaker_3.18c0a370.png","18c0a370f38d62aef9d856eeed74e45d"],["/frontinsampa/static/media/speaker_4.63167006.png","63167006f5fc501bc39f4c050e89f1d5"],["/frontinsampa/static/media/speaker_julian.bb78e85a.png","bb78e85af4e8d837d35119c3138c39c2"],["/frontinsampa/static/media/speaker_rfabeni.b0836876.png","b0836876549606afa222d06522158ebc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/frontinsampa/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});