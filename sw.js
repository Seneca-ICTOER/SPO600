(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"0a96453a3e3e3a0fb21f9bd426b8dcdc","url":"404.html"},{"revision":"70e7414f9fed3d163f62d775189b562d","url":"A-Classes/week1-class1.html"},{"revision":"119961f171db5c27820aea2ff39bc483","url":"A-Classes/week1-class2.html"},{"revision":"b3a0595a88460b6d17544538900a86dc","url":"A-Classes/week10-class1.html"},{"revision":"2f1de8db003b7a32aa25b889db873a8f","url":"A-Classes/week10-class2.html"},{"revision":"b9b677a83071d124b90865f13086e093","url":"A-Classes/week11-class1.html"},{"revision":"121b1c7fe8f3a43acb070d151b009db6","url":"A-Classes/week11-class2.html"},{"revision":"d954ff4da7439af939b28a015b00de44","url":"A-Classes/week12-class1.html"},{"revision":"115fb59180831df487a0aaec0700ce58","url":"A-Classes/week12-class2.html"},{"revision":"b3372211d219407200b6e66544a8ddcd","url":"A-Classes/week13-class1.html"},{"revision":"5f0d990e2a451ad7a86591eee2a881ef","url":"A-Classes/week13-class2.html"},{"revision":"3d732946182e48c0b240e3d335223c82","url":"A-Classes/week14-class1.html"},{"revision":"d9446b437b7aa50931a28188309c0f65","url":"A-Classes/week2-class1.html"},{"revision":"3f3048fbb171964278cb0fdbe54eb609","url":"A-Classes/week2-class2.html"},{"revision":"3d410ab89ce0b3e9e8d4790af4c51d4c","url":"A-Classes/week3-class1.html"},{"revision":"9239c353ab1f4f04b1eb334d931449b0","url":"A-Classes/week3-class2.html"},{"revision":"d17154441f75e2b8a8fbc67907aebecd","url":"A-Classes/week4-class1.html"},{"revision":"f6cc7c5dfe921655aa8048955c028a58","url":"A-Classes/week4-class2.html"},{"revision":"e6c700e35ac56856c995a7e0c638ce8c","url":"A-Classes/week5-class1.html"},{"revision":"2555a2cc4fc9f904eaef92203412a49d","url":"A-Classes/week5-class2.html"},{"revision":"f2d2a30e574124132eee945764316629","url":"A-Classes/week6-class1.html"},{"revision":"587833b5b8f2e591b6e9f7ba0190d94d","url":"A-Classes/week6-class2.html"},{"revision":"08afe6d34630ff5a658142d5a171855c","url":"A-Classes/week7-class1.html"},{"revision":"b3c5dabfa92446e062ec7aa45d17df58","url":"A-Classes/week7-class2.html"},{"revision":"4de1f4c5fb4c927db35f6a1ec559d86f","url":"A-Classes/week8-class1.html"},{"revision":"cbd868689bad2c964f3c2c659a35464b","url":"A-Classes/week8-class2.html"},{"revision":"8c751bbff09e8092e1949991d4e45dbe","url":"A-Classes/week9-class1.html"},{"revision":"a4e87c221ea0de6746f7af30e44955aa","url":"A-Classes/week9-class2.html"},{"revision":"4a30e0992a6a9401f7f666bf4fc5df74","url":"assets/css/styles.099fe1a9.css"},{"revision":"ff2bd430da05670bead85c7818d0f928","url":"assets/js/033e68ca.87f74ae7.js"},{"revision":"f3dcf9193ef72f6bf54c3020da6aea5e","url":"assets/js/05c1c8f8.9e99bf07.js"},{"revision":"cbd7deedadda0e8c8e9ac83dc1da2fb2","url":"assets/js/070dcbd0.39ee0d43.js"},{"revision":"67e55f2223a7db662b7473f9cb1f6c60","url":"assets/js/09a5756a.1b8c3a16.js"},{"revision":"c88bd3bee2b776036f0845ba700e351b","url":"assets/js/09b8132e.4d320fd9.js"},{"revision":"e7c344110f1cbb4eafaca221cee8a767","url":"assets/js/0e7cc042.78a966ff.js"},{"revision":"c789e870d0aaf73137f8ec29cece5ada","url":"assets/js/0f19be50.3394a13f.js"},{"revision":"8b3626373594cdfeaae416d62df80f0d","url":"assets/js/1257d0f3.9fe77030.js"},{"revision":"4ced65bc3fc6302e7ff627d9c8cd0390","url":"assets/js/17896441.b3a03207.js"},{"revision":"394ff1ae28df61c0ce1bb790103779d5","url":"assets/js/1be78505.e7ce12d2.js"},{"revision":"5f9d73c703915b21155a1ca05a4bc7bb","url":"assets/js/1f68bbc6.13c17e45.js"},{"revision":"1f5a93d2ada336ee39807a1ce0b3ebd8","url":"assets/js/1ff3587b.fe475f63.js"},{"revision":"6b07d064f2bd2682a7f545366de6bf97","url":"assets/js/23bcc23a.c29c1a09.js"},{"revision":"d557f057218efe61568c0558aa7aff67","url":"assets/js/2539.1f0c2329.js"},{"revision":"8fd562975842b850edefab84dd9b1a00","url":"assets/js/26ebd8b9.eefd89a3.js"},{"revision":"a7d15c2f360619bc474c6831c6929128","url":"assets/js/27036443.d8543ed3.js"},{"revision":"6a9838807385315464740319684a9959","url":"assets/js/2772a16a.bfb8b4ec.js"},{"revision":"b5218ff1cde49131d4a85049a5a3b8c1","url":"assets/js/2b62d437.c33c7a31.js"},{"revision":"98c4f7eb09cd2731d55a72c8e95a62c0","url":"assets/js/2eda4a81.317a2b4f.js"},{"revision":"f70cd8b2eaa73edce1b1ec2575684423","url":"assets/js/2f35438e.de55202d.js"},{"revision":"328e59e965f94890b763f871f476d7e3","url":"assets/js/369bb7ad.eb7f7ad1.js"},{"revision":"c22638f2c6069d87467fabc1823910cf","url":"assets/js/3c43deee.8329786c.js"},{"revision":"fe28f40ddae7f1b6e7303b6441a9246c","url":"assets/js/3d0e6e25.447e74a8.js"},{"revision":"3e2533dbf2201d37aff4bd121051f3a7","url":"assets/js/3dfdc299.fb5421a6.js"},{"revision":"8b04eb6fbf623cfdf7c8e12f562b8bb2","url":"assets/js/4047fb27.eefb777c.js"},{"revision":"4765b60313b1780689bef635c663e6de","url":"assets/js/418a49b2.ce872202.js"},{"revision":"2a9556c7190fe9febb40aa30370baaa7","url":"assets/js/41c29472.684b2255.js"},{"revision":"aceb8df6eb50d45aadb6afde8d3f107e","url":"assets/js/42f00bc3.bb890f78.js"},{"revision":"3ef5a667fe1b7f3bbe6e994afd6d016d","url":"assets/js/430898e8.09c01173.js"},{"revision":"b48ba1a30e8929704d5b137c3636d7d1","url":"assets/js/496cb6e0.d3e54973.js"},{"revision":"f4bc4c5803b39d17f98a22902b449655","url":"assets/js/4972.e5532f23.js"},{"revision":"921ad4cf405fe70fb7dd1dd658254458","url":"assets/js/4cba2add.a1cc2495.js"},{"revision":"211955564ee7ec84add8e9ad80190401","url":"assets/js/4cba3fa6.c29d36a4.js"},{"revision":"4b3a9c410138747cfddfc3034a590d0d","url":"assets/js/5131.48037fe3.js"},{"revision":"105c9046cab77f5f61faf3f07ca9e0e5","url":"assets/js/51f7cc25.d9ba66e0.js"},{"revision":"ecbdcb01720ddde7742b11f71e039f9c","url":"assets/js/5283.defef4fb.js"},{"revision":"0621f855e85f516275d3c0ecb0fe9bec","url":"assets/js/533eccc6.6bf77e10.js"},{"revision":"df8c8027c833d16e6dfa7bdb1dfa37be","url":"assets/js/54dda273.628ec41b.js"},{"revision":"c2c1ec9df14007697a46f206af48029d","url":"assets/js/56501bb5.b581d5ae.js"},{"revision":"e83ac359384acbb712b6e68a928320bf","url":"assets/js/58f9aafe.f87f966c.js"},{"revision":"f279730f62da2e0863897ef4fbc5e0d7","url":"assets/js/59965a6e.fba36bab.js"},{"revision":"71ae1a1fa1001e8dab2dcdd390f7eac6","url":"assets/js/5ca43399.94e0461c.js"},{"revision":"501de6395dd7f0ddc4f10d3cd597b736","url":"assets/js/5d1cf74c.0d92502c.js"},{"revision":"aeadcf5cefa3573d90f1bf44ed6f27d5","url":"assets/js/5d9bfc84.c4d71e4e.js"},{"revision":"38a07bde986850b5607495243026e49e","url":"assets/js/609b6124.71960418.js"},{"revision":"f0cce174e734304abccc3ba0a6a578ed","url":"assets/js/60ce6b01.9c5d95bf.js"},{"revision":"7e1ae9cb456eba07851cc94ec423c24f","url":"assets/js/61e438b9.b03194a1.js"},{"revision":"264c58426aa57ec5c5712c91df38d803","url":"assets/js/63ab32f5.f23a0896.js"},{"revision":"137122980c1cd87c06d073bfb790bcf9","url":"assets/js/650d0ada.e1dea44c.js"},{"revision":"5048d256d807a9404efd8a18b60da47a","url":"assets/js/65335ee5.7da34ed7.js"},{"revision":"5ed7317efaa6f43b14b203dc05be7822","url":"assets/js/6612d8c0.3f5846e6.js"},{"revision":"0c910cd9c9446948fd8a39a271e0ae18","url":"assets/js/671a7b5f.aa0ccbf4.js"},{"revision":"3846726c03406791672fa8132521090a","url":"assets/js/67a59e3f.c4e79541.js"},{"revision":"bc6a2413d13e0d29bdc033175df7ef13","url":"assets/js/6a09155e.04051023.js"},{"revision":"8c5182102c30bc4b4e9935ee87c4289b","url":"assets/js/6e6ecafc.576430e1.js"},{"revision":"c632a1c7ede98b26dbd05cfb0a4506fe","url":"assets/js/722c29ae.da572560.js"},{"revision":"611e3c78aea9dbf2fc3a72caedcecd41","url":"assets/js/729a980f.2999110c.js"},{"revision":"088f22b42c8977db699ae6b748ae84aa","url":"assets/js/73d5976c.8d51f9b5.js"},{"revision":"51910ff3c42e3b55caf066b428550410","url":"assets/js/7648650d.95624597.js"},{"revision":"5fa4beadef0e419e6a27056bc8825a08","url":"assets/js/7bae9d2b.9a2d225d.js"},{"revision":"f23950cda1940026f0fbcdbdc3706d6c","url":"assets/js/7cb7babd.340a7a39.js"},{"revision":"e5895d3f8a02d85502dce48751565d8b","url":"assets/js/829d4204.502f554f.js"},{"revision":"d97f5d8d9388fba5d9e81b053100cba8","url":"assets/js/83ae96eb.a2b26631.js"},{"revision":"4a3c8e1b75cd761aefde823d46df4d82","url":"assets/js/88350fbf.705e9f3a.js"},{"revision":"79454f3c3e172df50537fe5cdbaa0897","url":"assets/js/8aa7edbd.03ce7193.js"},{"revision":"43953c45d8c07659b4fbe7cbd9d8a1a9","url":"assets/js/8b20174c.0c46ac7b.js"},{"revision":"bc7aa4383c2c6165b3fc3ad219bc729c","url":"assets/js/8f3a3115.9eac424b.js"},{"revision":"1cb46b043fec5a5258b193c6e60c19e0","url":"assets/js/913b6d78.42d22fd6.js"},{"revision":"a8cf849b37b8437a800809c144179941","url":"assets/js/9238d6b7.83eadf6a.js"},{"revision":"8424bd25709ed451a412371851107b0f","url":"assets/js/935f2afb.092647aa.js"},{"revision":"153c7386b2946ba78f43ea4c9227ecfb","url":"assets/js/94fecb0e.76c8cced.js"},{"revision":"846696dfe8277af48f63ad40e355b630","url":"assets/js/961d9c09.884871e5.js"},{"revision":"9cc2ece1e8b9b55ad131e4ddbd92ac6f","url":"assets/js/966306ed.adbec3df.js"},{"revision":"211d6b9f7b790c1750aa2b2a37ee1db7","url":"assets/js/96907fa4.9573760a.js"},{"revision":"b854eda4a0a55fbae83717e20c64a9b4","url":"assets/js/984d412d.490480da.js"},{"revision":"9ec4f35e50656bb10abb58db82372b18","url":"assets/js/987b6960.3440fbdb.js"},{"revision":"41a072c081ed84d369d20e760c5bdb65","url":"assets/js/9971a819.eaca0b7f.js"},{"revision":"966d6e0d6e208b75f98f5778b19b1b72","url":"assets/js/9b1b6ea8.17fd762e.js"},{"revision":"7adff2d1b578230a211fa107d6b3e406","url":"assets/js/a3825058.338b55ed.js"},{"revision":"f93ff4b0f1643aa54b2c25920b8e9e0a","url":"assets/js/a54fe4cc.80b43789.js"},{"revision":"374e40d68e7b2c66532fca7d58d08bec","url":"assets/js/a8eb60ee.ad194079.js"},{"revision":"ad518836ebc440fac76e1291595fa44f","url":"assets/js/aa698566.923854fe.js"},{"revision":"3a9950a46b7aaa6e963137810193684f","url":"assets/js/b39f369e.77aabc46.js"},{"revision":"c07bbded7a26c2098aa946c6363bf6e2","url":"assets/js/b4a17f1b.db237243.js"},{"revision":"162839b6415c8ab5676c9d7d18764c29","url":"assets/js/b756d074.4e1fd187.js"},{"revision":"3584019066048b195a27d060bbd7b746","url":"assets/js/b991333b.5706c048.js"},{"revision":"6c87ca14587341421723b19eff627b31","url":"assets/js/bc72fd28.4a90831b.js"},{"revision":"e26b8885b6f434c3d731a10fb18397bb","url":"assets/js/bdab6820.2b4357bd.js"},{"revision":"b5bfbe25ac0ec10335072730ed1cd1fc","url":"assets/js/c0e20c00.1f0f895d.js"},{"revision":"4a43ff9fa90e09ba680e59614c5b4816","url":"assets/js/c5bb51cd.d17c63d0.js"},{"revision":"9baf5fa1763a9d3a8b3a784d3738482e","url":"assets/js/c948e316.03616bdf.js"},{"revision":"109579139263ad783b477360a80b74a6","url":"assets/js/cbcce855.c40c8824.js"},{"revision":"710d9e9d4ef72e790a5cb9bed4919216","url":"assets/js/cf356839.632eeea7.js"},{"revision":"d4969a4084e2e3b1f882eb907dd33689","url":"assets/js/cf385294.1bffcb06.js"},{"revision":"38095d7cdd7324b8ed54c9c83f43396e","url":"assets/js/d0bccbd1.355d6ad7.js"},{"revision":"28f159dd2e0717f4dc62066c76b49752","url":"assets/js/d5510972.547d53ca.js"},{"revision":"e38a44a7e5fdc0f79d11cdd80dcd0430","url":"assets/js/da1a0d95.65dfe2a1.js"},{"revision":"2545ad72a01bef8528dd665aba7c8096","url":"assets/js/dba95e2e.4437d3b7.js"},{"revision":"4608231c66c23608bd4d9581feed7dce","url":"assets/js/dccbb3cb.97abf59d.js"},{"revision":"7f805a344726849d68601097c487b8d3","url":"assets/js/dec2c56f.00c3eee3.js"},{"revision":"f7343b6d0001532e2baa74348babf2b9","url":"assets/js/e14830b1.4c809540.js"},{"revision":"111ec1d54e277b01b94fff1098b3d3fb","url":"assets/js/e1817432.e8e3a4f4.js"},{"revision":"6a0df99a05a10226a8c3013dffdd6f81","url":"assets/js/e21a5e60.8772ab0a.js"},{"revision":"a47bb34dc48ad49ef0f8d93bc55e855a","url":"assets/js/e402629c.463132c8.js"},{"revision":"92c110f9b756a5b71fbc235f4f9cc758","url":"assets/js/e5a14eec.31f3e16a.js"},{"revision":"dc7ce12adac307e943f983737f1d4bb8","url":"assets/js/e75d7d85.c25699a6.js"},{"revision":"689a3883665cecd315e4b5411ebd19f7","url":"assets/js/e8a61396.af74ba71.js"},{"revision":"62babbdfd4d4ddcd386145291ccc97a5","url":"assets/js/ea2f98a7.1f6e8f58.js"},{"revision":"c52d6f15d3cdecb057cb09cb228dfc3e","url":"assets/js/eb2345f4.b7dfd3ac.js"},{"revision":"f310a220b9c2a14628b9850a3f7d78ed","url":"assets/js/eb6a5da1.bb0fabd1.js"},{"revision":"5d428fc105224184d14bcf55b86847f3","url":"assets/js/eec0bb42.15f4c00e.js"},{"revision":"d643a1fe7b2255e66ea31b003e6bf7d8","url":"assets/js/ef37998f.e813c0c8.js"},{"revision":"6b645b51aa3ca8035096bfa20f3dd874","url":"assets/js/ef7e89d4.5dc9166c.js"},{"revision":"6c1ff1afd45a911af343106b64eb8591","url":"assets/js/f5d9aa21.1efd4114.js"},{"revision":"d5dbdc3f7ebcd50537c3f4ecbfad3682","url":"assets/js/f6ff9515.712dd9eb.js"},{"revision":"6e89ce398a5b33065ce21be36acec886","url":"assets/js/f92bfd67.ea8b0326.js"},{"revision":"088ccb7cec5560e80afb1e92ba755655","url":"assets/js/fa186723.5fc2c2ee.js"},{"revision":"edffcea400c7122525889bb8d5c60483","url":"assets/js/main.48ab27b2.js"},{"revision":"6f06d44e660461f31069eeed2a73b990","url":"assets/js/runtime~main.03efe957.js"},{"revision":"c9a818c4747125dcea30714571bb2ee6","url":"B-Labs/lab1.html"},{"revision":"8af59f870c02bdc4055bdd8a40ac3b84","url":"B-Labs/lab2.html"},{"revision":"fd92655037874fd69cc4f84676f4413d","url":"B-Labs/lab3.html"},{"revision":"7084abd571ee86cab47319e153fd5f4c","url":"B-Labs/lab4.html"},{"revision":"af444c8241414a3238247ab35257a371","url":"B-Labs/lab5.html"},{"revision":"6b830475ebade700e36ac044dd0f0b15","url":"C-Projects/project.html"},{"revision":"44fde6fc04c08f55c7c85bb26b034305","url":"D-ExtraResources/active-learning-classroom.html"},{"revision":"72b8c5b4717db0c6bc07f7d8f5c148d9","url":"D-ExtraResources/benchmarking.html"},{"revision":"629589dfd6d87782b3722cf8e8473b79","url":"D-ExtraResources/blog-guidelines.html"},{"revision":"559e4bd124f28f66eda092da7004d143","url":"D-ExtraResources/communication-tools.html"},{"revision":"a51ebf0b7fcb099d34760b34c445d8a1","url":"D-ExtraResources/compiler-optimizations.html"},{"revision":"2aa2833c548af2b0c7937f6507fc11d2","url":"D-ExtraResources/course-policies.html"},{"revision":"2a98f5936672d67dbe71793d380317b4","url":"D-ExtraResources/host-setup.html"},{"revision":"80b5d137f0a04c354de6c9b41c462fe2","url":"D-ExtraResources/information-for-prospective-students.html"},{"revision":"4f46f93edd91952f38b2d6740d823041","url":"D-ExtraResources/irc.html"},{"revision":"7ee50892418a6d9c60b6dfc00c194ee7","url":"D-ExtraResources/irssi-tutorial.html"},{"revision":"ba03805d7a9daee10bd4915606e1dc0f","url":"D-ExtraResources/link-time-optimization.html"},{"revision":"aaa5c9b6449ca9181e7e3c900d47614d","url":"D-ExtraResources/make-and-makefiles.html"},{"revision":"87d391e2bac70e9afcb5d03f7f481f85","url":"D-ExtraResources/open-source-professional-option-student-agreement.html"},{"revision":"6387a1391e45e85cd31c205a38d2b730","url":"D-ExtraResources/overview-of-the-build-and-release-process.html"},{"revision":"34d3ba9a0c72a2c1874677d3eec9b978","url":"D-ExtraResources/participants-and-project-table.html"},{"revision":"0d44756e775cb8e3085d449f714e70da","url":"D-ExtraResources/personal-aarch64-systems.html"},{"revision":"a187b96c1af668e12132ea52ab108fce","url":"D-ExtraResources/profile-guided-optimization.html"},{"revision":"aac47f3b212cc0ecc0403b56e8b5e16f","url":"D-ExtraResources/profiling.html"},{"revision":"4149305618767bdb418b27a3f38851a8","url":"D-ExtraResources/public-key-cryptography.html"},{"revision":"b3b028d9eee9cf32e1523b3270b3cb09","url":"D-ExtraResources/remote-x.html"},{"revision":"59bf584e4f4aebd19c66824a61a65f56","url":"D-ExtraResources/rpm-packaging-process.html"},{"revision":"511edc73112d00f6b0681aa03abf5752","url":"D-ExtraResources/screen-tutorial.html"},{"revision":"e7a7112b24516c5a9c08d5e87f7e9b80","url":"D-ExtraResources/servers.html"},{"revision":"1843a1754f3a34139c43821b29ada3f5","url":"D-ExtraResources/ssh.html"},{"revision":"33ed66c2e2a2f1e3ffbe669e100bbde3","url":"E-ComputerArchitecture/address.html"},{"revision":"bbf39a8c857d31858360e8d6c0a2807a","url":"E-ComputerArchitecture/addressing-mode.html"},{"revision":"5274063681bf64522598f6506bbea6bc","url":"E-ComputerArchitecture/assembler.html"},{"revision":"d5d6963ea5f571818266b727664df0e3","url":"E-ComputerArchitecture/atomic-operation.html"},{"revision":"aea22f5c498a8166ec034adfec4b21c3","url":"E-ComputerArchitecture/bcd.html"},{"revision":"a2548e789ce3066b0e5a76b18ae4d177","url":"E-ComputerArchitecture/bitwise-operations.html"},{"revision":"35947dae7f10bd0647db52657b7b6de3","url":"E-ComputerArchitecture/clock.html"},{"revision":"1c74f10bdda842e2c2e0fbecc0f0653e","url":"E-ComputerArchitecture/compiler-intrinsics.html"},{"revision":"5fa4918dd77f5958ded5da600416ee2f","url":"E-ComputerArchitecture/compiler.html"},{"revision":"76307ef2c37cb355fd685abaca737029","url":"E-ComputerArchitecture/computer-architecture.html"},{"revision":"4323c8414afb8c2a36fe9bb9b60bcb5d","url":"E-ComputerArchitecture/debugger.html"},{"revision":"c9dca40502853485cc6146d4487d9454","url":"E-ComputerArchitecture/disassembler.html"},{"revision":"7f6d2f0f3018854f41f2c2aa0d50a70d","url":"E-ComputerArchitecture/endian.html"},{"revision":"c0dbf4d9a651a5f7cdb7f504d4d0b0a5","url":"E-ComputerArchitecture/expensive.html"},{"revision":"27a7936fc612274c1fc1eff33c6c469f","url":"E-ComputerArchitecture/flags.html"},{"revision":"417ed1b70f3ba54ba497d71a384871b5","url":"E-ComputerArchitecture/ieee-754.html"},{"revision":"306cc6e6e50054f0c6795871dda05157","url":"E-ComputerArchitecture/immediate-value.html"},{"revision":"dc0669cdcba38b61e04987bfeaf75b30","url":"E-ComputerArchitecture/instruction-encoding.html"},{"revision":"be1e79c75de6a3a67a25db58212cba57","url":"E-ComputerArchitecture/instruction-set-architecture.html"},{"revision":"035d2a39c71b792f4fc46653c0250417","url":"E-ComputerArchitecture/instruction.html"},{"revision":"c97ae92023e195aee5d2e3c24e260c4c","url":"E-ComputerArchitecture/machine-language.html"},{"revision":"dded22324628079d04b39589baf223c7","url":"E-ComputerArchitecture/memory-prefetch.html"},{"revision":"d44660891cb8d159e2786a0c489b0bfb","url":"E-ComputerArchitecture/opcode.html"},{"revision":"9ba679852096c72e4c471b814db9ac4a","url":"E-ComputerArchitecture/operation.html"},{"revision":"24bf84453dc7b855089bc02d50956f51","url":"E-ComputerArchitecture/portable.html"},{"revision":"d35c21ab12b89b292f853e35a1ff414c","url":"E-ComputerArchitecture/register.html"},{"revision":"26c93a539d512474e5c73c137bbae188","url":"E-ComputerArchitecture/signed.html"},{"revision":"929728161f070700ce85a982ef44481f","url":"E-ComputerArchitecture/stack.html"},{"revision":"c6844d7645f03151675a8b33fb8dfaa4","url":"E-ComputerArchitecture/truth-table.html"},{"revision":"a68f3232ab04b0028bcd34b911723690","url":"E-ComputerArchitecture/volatile.html"},{"revision":"4d848a969a6dce72a4236e3805c7d3cb","url":"E-ComputerArchitecture/word.html"},{"revision":"c2c36d7e5a1286ffd46066ca6d2cadbb","url":"F-AssemblyLanguage/aarch64-register-and-instruction-quick-start.html"},{"revision":"1a90d2f903e2b29e83c6939d5f2c0403","url":"F-AssemblyLanguage/assembler-basics.html"},{"revision":"b2199f942e6f75b3810b2dc6aa382888","url":"F-AssemblyLanguage/assembly-language.html"},{"revision":"ddf5c5c579dea72b52dd357339fd2472","url":"F-AssemblyLanguage/executable-and-linkable-format.html"},{"revision":"50a0bb0115e496577b0ade0e0afc6486","url":"F-AssemblyLanguage/inline-assembly-language.html"},{"revision":"be5a9b678997fcc63cf52d374746de73","url":"F-AssemblyLanguage/symbol.html"},{"revision":"00ba8b6f8bcfeac4d46e528bd7226803","url":"F-AssemblyLanguage/syscalls.html"},{"revision":"d2382b05ce69e1c1e4624dd01257750e","url":"F-AssemblyLanguage/x86-64-register-and-instruction-quick-start.html"},{"revision":"37b760915396f34766cbbe91cfa63fc7","url":"G-6502/6502-addressing-modes.html"},{"revision":"4555de1f8aefcf8423feb993273f33d2","url":"G-6502/6502-counting-loop-example.html"},{"revision":"814fa4ff598fc2559d25bde466d87926","url":"G-6502/6502-emulator-example-code.html"},{"revision":"306aeae1dd0b7cafebd247d23994f034","url":"G-6502/6502-emulator.html"},{"revision":"ef9b34bc4301f1bca4755eadc4784623","url":"G-6502/6502-instructions-introduction.html"},{"revision":"dc610ce0d72ff44b31b4e088cf1b4667","url":"G-6502/6502-jumps-branches-and-procedures.html"},{"revision":"e8e12857fa9db4de31c1a5bd2345a07c","url":"G-6502/6502-math.html"},{"revision":"487d81ad5a873f97110661f0effbdf1e","url":"G-6502/6502.html"},{"revision":"3767a33fb38a3c985f67fb37ec77cdf9","url":"G-6502/8x8-bitmap-patterns-for-digits.html"},{"revision":"e01990c602cbe26e282eb69f0135c071","url":"H-ARM/armv8.html"},{"revision":"a9f4f3cfb0fc5c2ffa2a98d7e8ff96b3","url":"H-ARM/sve2.html"},{"revision":"b73264815df942acab8b9ecb385446ef","url":"index.html"},{"revision":"2524df02c6e551be5aef857403777080","url":"manifest.json"},{"revision":"6392c7918915d38cc46ba0c69bf30bf4","url":"weekly-schedule.html"},{"revision":"2d286e3961546ad785914196aefa0a00","url":"assets/images/Alc-panel-35be89a1c9007fad4d7e625e11f99b24.jpg"},{"revision":"43b39310c73bca4cabe5e6245f367495","url":"assets/images/Alc-pod-35e5a7c655602a6278e7aa75f2ff7c89.jpg"},{"revision":"b1168f827dec36255814888d8c41d781","url":"assets/images/MOS_6502_1-cbbcddfd8fe2a8df9b8949c3d1a4ee42.jpg"},{"revision":"1cbd4d09565a5e8338fe10403f997ff4","url":"img/6502_Emulator_Screenshot.png"},{"revision":"2d286e3961546ad785914196aefa0a00","url":"img/Alc-panel.jpg"},{"revision":"43b39310c73bca4cabe5e6245f367495","url":"img/Alc-pod.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"b1168f827dec36255814888d8c41d781","url":"img/MOS_6502_1.jpg"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();