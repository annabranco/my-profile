"use strict";var precacheConfig=[["./index.html","990136ba49e70cae492931bb521b375a"],["./static/css/main.d29e8058.css","ddce1bf68f0eca566d3bd2665691942a"],["./static/js/main.4029eab4.js","133dabfcc61c3f68bb518b2eda134b29"],["./static/media/annabranco.dbce0765.png","dbce07658e68e3d23253d60f98f94dc6"],["./static/media/bg-mac.3dc888b3.jpg","3dc888b36f67ad67933a774310c96687"],["./static/media/bootstrap.5c0f17e5.png","5c0f17e5bb91e9b117a952072ef6d6f8"],["./static/media/css3.cfab9157.png","cfab915769b677d18b8f9c2fa605a5ab"],["./static/media/floatingLeft.0459e19a.gif","0459e19a3d85862675622a1d89671f6c"],["./static/media/floatingRight.96da1471.gif","96da1471e8b25c510c97e02d9bc72233"],["./static/media/git.3eb77fc3.png","3eb77fc310d600edd1964170611dfcf6"],["./static/media/github.7ac8e341.png","7ac8e3411a5f6118fba71d7e7c03116d"],["./static/media/html5.2060bf3d.png","2060bf3d7eee7b82e1a4d815a9e1b56d"],["./static/media/js.5c47f97c.png","5c47f97c885f98c05fb1f6878652685c"],["./static/media/swimmingLeft.1d096d35.gif","1d096d35b5d4b8df0ad70a68f0d0fe27"],["./static/media/swimmingRight.d29b979d.gif","d29b979d9b3e30a99949e49b5b06fbdf"],["./static/media/thumbnail-an-adventure.3fd262cb.jpg","3fd262cbdd1560afe3d42b202fac8492"],["./static/media/thumbnail-awesome-profile-cards.80379503.jpg","803795031d88a1c59a0de7f5e29cff6c"],["./static/media/thumbnail-harry-potter-database.416c7dff.jpg","416c7dff8e2aec92372404f30620d69d"],["./static/media/thumbnail-my-profile.aa1cf865.jpg","aa1cf865453179f28f249a7e53043ea8"],["./static/media/thumbnail-ni-piter.3d4fd964.jpg","3d4fd964798e45e03e4bd5b9d4ecd232"],["./static/media/thumbnail-toy-story.a668022e.jpg","a668022e9f159e293d13efa9ccd62ef5"],["./static/media/thumbnail-tv-series-finder.23b9a077.jpg","23b9a077b231f45976a3648b979b70aa"],["./static/media/zeplin.559f129e.png","559f129e319967dc8a229698db34d19b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});