var __wpo = {"assets":{"main":["/client/93a2b06556deb55b214bb0cfbce8a4e0.png","/client/about-0e89dbf3d1f83bbf1929.js","/client/home-08f918a0661fa31dfaf1.js","/client/index-1f32a83f5ef95e709846.js","/client/index-1f32a83f5ef95e709846.css","/client/offline.html","https://cdn.polyfill.io/v2/polyfill.min.js","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/manifest.json","/mstile-150x150.png","/robots.txt","/safari-pinned-tab.svg"],"additional":[],"optional":[]},"externals":["https://cdn.polyfill.io/v2/polyfill.min.js","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/manifest.json","/mstile-150x150.png","/robots.txt","/safari-pinned-tab.svg"],"hashesMap":{"e9aae13db4209224617bd2bfffafabbcb6db4533":"/client/93a2b06556deb55b214bb0cfbce8a4e0.png","5c3d92727a332a83b2da8ece5c54e84160162973":"/client/about-0e89dbf3d1f83bbf1929.js","1dd1caee9deaa0f409e7f1695b98d918d6a74071":"/client/home-08f918a0661fa31dfaf1.js","9f967d4f81887f0ff615e7269de394729a45dc0d":"/client/index-1f32a83f5ef95e709846.js","2518187e11396f12575a42775a2296fb2eb20af4":"/client/index-1f32a83f5ef95e709846.css","7817f0e5fd5906e55840e2c964453737ad2716d2":"/client/offline.html"},"navigateFallbackURL":"/client/offline.html","strategy":"changed","responseStrategy":"cache-first","version":"2/7/2017, 11:37:59 PM","name":"webpack-offline","pluginVersion":"4.5.4","relativePaths":false};

!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/client/",function(){const n={modules:{},chunks:{__offline_serviceworker:0}};"undefined"!=typeof global?global.__CODE_SPLIT_MODULE_CHUNK_MAPPING__=n:"undefined"!=typeof window&&(window.__CODE_SPLIT_MODULE_CHUNK_MAPPING__=n)}(),e(e.s=1)}([function(n,e){},function(n,e,t){"use strict";function r(n,e){function t(){if(!S.additional.length)return Promise.resolve();s&&console.log("[SW]:","Caching additional");var n=void 0;return n="changed"===L?f("additional"):r("additional"),n.catch(function(n){console.error("[SW]:","Cache section `additional` failed to load")})}function r(e){var t=S[e];return caches.open(q).then(function(e){return O(e,t,{bust:n.version,request:n.prefetchRequest})}).then(function(){u("Cached assets: "+e,t)}).catch(function(n){throw console.error(n),n})}function f(e){return h().then(function(t){if(!t)return r(e);var o=t[0],i=t[1],c=t[2],a=c.hashmap,s=c.version;if(!c.hashmap||s===n.version)return r(e);var f=Object.keys(a).map(function(n){return a[n]}),l=i.map(function(n){var e=new URL(n.url);return e.search="",e.toString()}),h=S[e],d=[],v=h.filter(function(n){return l.indexOf(n)===-1||f.indexOf(n)===-1});Object.keys(b).forEach(function(n){var e=b[n];if(h.indexOf(e)!==-1&&v.indexOf(e)===-1&&d.indexOf(e)===-1){var t=a[n];t&&l.indexOf(t)!==-1?d.push([t,e]):v.push(e)}}),u("Changed assets: "+e,v),u("Moved assets: "+e,d);var p=Promise.all(d.map(function(n){return o.match(n[0]).then(function(e){return[n[1],e]})}));return caches.open(q).then(function(e){var t=p.then(function(n){return Promise.all(n.map(function(n){return e.put(n[0],n[1])}))});return Promise.all([t,O(e,v,{bust:n.version,request:n.prefetchRequest})])})})}function l(){return caches.keys().then(function(n){var e=n.map(function(n){if(0===n.indexOf(R)&&0!==n.indexOf(q))return console.log("[SW]:","Delete cache:",n),caches.delete(n)});return Promise.all(e)})}function h(){return caches.keys().then(function(n){for(var e=n.length,t=void 0;e--&&(t=n[e],0!==t.indexOf(R)););if(t){var r=void 0;return caches.open(t).then(function(n){return r=n,n.match(new URL(E,location).toString())}).then(function(n){if(n)return Promise.all([r,r.keys(),n.json()])})}})}function d(){return caches.open(q).then(function(e){var t=new Response(JSON.stringify({version:n.version,hashmap:b}));return e.put(new URL(E,location).toString(),t)})}function v(n,e,t){return o(t,q).then(function(r){if(r)return s&&console.log("[SW]:","URL ["+t+"]("+e+") from cache"),r;var o=fetch(n.request).then(function(n){return n.ok?(s&&console.log("[SW]:","URL ["+e+"] from network"),t===e&&!function(){var t=n.clone();caches.open(q).then(function(n){return n.put(e,t)}).then(function(){console.log("[SW]:","Cache asset: "+e)})}(),n):(s&&console.log("[SW]:","URL ["+e+"] wrong response: ["+n.status+"] "+n.type),n)});return o})}function p(n,e,t){return fetch(n.request).then(function(n){if(n.ok)return s&&console.log("[SW]:","URL ["+e+"] from network"),n;throw new Error("response is not ok")}).catch(function(){return s&&console.log("[SW]:","URL ["+e+"] from cache if possible"),o(t,q)})}function g(n){return n.catch(function(){}).then(function(n){return n&&n.ok?n:(s&&console.log("[SW]:","Loading navigation fallback ["+C+"] from cache"),o(C,q))})}function m(){Object.keys(S).forEach(function(n){S[n]=S[n].map(function(n){var e=new URL(n,location);return P.indexOf(n)===-1?e.search="":e.hash="",e.toString()})}),Object.keys(U).forEach(function(n){U[n]=U[n].map(function(n){var e=new URL(n,location);return P.indexOf(n)===-1?e.search="":e.hash="",e.toString()})}),b=Object.keys(b).reduce(function(n,e){var t=new URL(b[e],location);return t.search="",n[e]=t.toString(),n},{}),P=P.map(function(n){var e=new URL(n,location);return e.hash="",e.toString()})}function O(n,e,t){var r=t.allowLoaders!==!1,o=t&&t.bust,c=t.request||{credentials:"omit",mode:"cors"};return Promise.all(e.map(function(n){return o&&(n=i(n,o)),fetch(n,c)})).then(function(o){if(o.some(function(n){return!n.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],c=o.map(function(t,o){return r&&i.push(w(e[o],t)),n.put(e[o],t)});return i.length?!function(){var r=a(t);r.allowLoaders=!1;var o=c;c=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return e.length&&(o=o.concat(O(n,i,r))),Promise.all(o)})}():c=Promise.all(c),c})}function w(n,e){var t=Object.keys(U).map(function(t){var r=U[t];if(r.indexOf(n)!==-1&&x[t])return x[t](e.clone())}).filter(function(n){return!!n});return Promise.all(t).then(function(n){return[].concat.apply([],n)})}function _(n){var e=n.url,t=new URL(e),r=void 0;r="navigate"===n.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<k.length;o++){var i=k[o];if(i&&(!i.requestTypes||i.requestTypes.indexOf(r)!==-1)){var c=void 0;if(c="function"==typeof i.match?i.match(t,n):e.replace(i.match,i.to),c&&c!==e)return c}}}var x=e.loaders,k=e.cacheMaps,L=n.strategy,y=n.responseStrategy,S=n.assets,U=n.loaders||{},b=n.hashesMap,P=n.externals,R=n.name,W=n.version,q=R+":"+W,E="__offline_webpack__data";m();var j=[].concat(S.main,S.additional,S.optional),C=n.navigateFallbackURL;self.addEventListener("install",function(n){console.log("[SW]:","Install event");var e=void 0;e="changed"===L?f("main"):r("main"),n.waitUntil(e)}),self.addEventListener("activate",function(n){console.log("[SW]:","Activate event");var e=t();e=e.then(d),e=e.then(l),e=e.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),n.waitUntil(e)}),self.addEventListener("fetch",function(n){var e=n.request.url,t=new URL(e),r=void 0;P.indexOf(e)!==-1?r=e:(t.search="",r=t.toString());var o="GET"===n.request.method,i=j.indexOf(r)!==-1,a=r;if(!i){var u=_(n.request);u&&(a=u,i=!0)}if(!i&&o&&C&&c(n.request))return void n.respondWith(g(fetch(n.request)));if(!i||!o)return void(t.origin!==location.origin&&navigator.userAgent.indexOf("Firefox/44.")!==-1&&n.respondWith(fetch(n.request)));var s=void 0;s="network-first"===y?p(n,r,a):v(n,r,a),C&&c(n.request)&&(s=g(s)),n.respondWith(s)}),self.addEventListener("message",function(n){var e=n.data;if(e)switch(e.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}function o(n,e){return caches.match(n,{cacheName:e}).catch(function(){})}function i(n,e){var t=n.indexOf("?")!==-1;return n+(t?"&":"?")+"__uncache="+encodeURIComponent(e)}function c(n){return"navigate"===n.mode||n.headers.get("Upgrade-Insecure-Requests")||(n.headers.get("Accept")||"").indexOf("text/html")!==-1}function a(n){return Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{})}function u(n,e){console.groupCollapsed("[SW]:",n),e.forEach(function(n){console.log("Asset:",n)}),console.groupEnd()}if("undefined"==typeof s)var s=!1;r(__wpo,{loaders:{},cacheMaps:[]}),n.exports=t(0)}]);