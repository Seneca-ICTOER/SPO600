(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"9c6abfea8c34535919f821b8dad1f07a","url":"404.html"},{"revision":"fa1eeba936e1864f6a1b4bac42337c3d","url":"A-Classes/test-file.html"},{"revision":"4a30e0992a6a9401f7f666bf4fc5df74","url":"assets/css/styles.099fe1a9.css"},{"revision":"ff2bd430da05670bead85c7818d0f928","url":"assets/js/033e68ca.87f74ae7.js"},{"revision":"ab60a3541b420ca2a02c1e62257a6242","url":"assets/js/070dcbd0.e2584365.js"},{"revision":"c88bd3bee2b776036f0845ba700e351b","url":"assets/js/09b8132e.4d320fd9.js"},{"revision":"e7c344110f1cbb4eafaca221cee8a767","url":"assets/js/0e7cc042.78a966ff.js"},{"revision":"8b3626373594cdfeaae416d62df80f0d","url":"assets/js/1257d0f3.9fe77030.js"},{"revision":"4ced65bc3fc6302e7ff627d9c8cd0390","url":"assets/js/17896441.b3a03207.js"},{"revision":"394ff1ae28df61c0ce1bb790103779d5","url":"assets/js/1be78505.e7ce12d2.js"},{"revision":"634b19220f382df3e9c2477ecc529033","url":"assets/js/225528e8.b89ff459.js"},{"revision":"d557f057218efe61568c0558aa7aff67","url":"assets/js/2539.1f0c2329.js"},{"revision":"de83fdb5da97f6495d99587384df63cd","url":"assets/js/26ebd8b9.04065e35.js"},{"revision":"98c4f7eb09cd2731d55a72c8e95a62c0","url":"assets/js/2eda4a81.317a2b4f.js"},{"revision":"aceb8df6eb50d45aadb6afde8d3f107e","url":"assets/js/42f00bc3.bb890f78.js"},{"revision":"8f7f4104605861cb53d2c0d6afd4eec5","url":"assets/js/430898e8.8703441b.js"},{"revision":"f4bc4c5803b39d17f98a22902b449655","url":"assets/js/4972.e5532f23.js"},{"revision":"f105aec08ede455a32347a55306eec74","url":"assets/js/4cba2add.fb7e9ed5.js"},{"revision":"4b3a9c410138747cfddfc3034a590d0d","url":"assets/js/5131.48037fe3.js"},{"revision":"ecbdcb01720ddde7742b11f71e039f9c","url":"assets/js/5283.defef4fb.js"},{"revision":"0621f855e85f516275d3c0ecb0fe9bec","url":"assets/js/533eccc6.6bf77e10.js"},{"revision":"eff20eef9294e666af6b123523c08dcf","url":"assets/js/54dda273.8346bca1.js"},{"revision":"a84eb0758cf4cd893c2648f68f47db07","url":"assets/js/56501bb5.dfba900c.js"},{"revision":"e34e38cd280159c8a08012d0af547f8b","url":"assets/js/58f9aafe.9eb0f605.js"},{"revision":"474eab6490c2176128c4c1c8cef47cc5","url":"assets/js/5d1cf74c.350b0bb4.js"},{"revision":"aeadcf5cefa3573d90f1bf44ed6f27d5","url":"assets/js/5d9bfc84.c4d71e4e.js"},{"revision":"abeddf632551fe06de6d4aa68f951b10","url":"assets/js/60ce6b01.2828d528.js"},{"revision":"7e1ae9cb456eba07851cc94ec423c24f","url":"assets/js/61e438b9.b03194a1.js"},{"revision":"48fda07089636d21d36950d1f9ea52ab","url":"assets/js/6612d8c0.edd5aed8.js"},{"revision":"3846726c03406791672fa8132521090a","url":"assets/js/67a59e3f.c4e79541.js"},{"revision":"6b3d22cff75c3414b31c4b693cc75864","url":"assets/js/6e6ecafc.39752c5b.js"},{"revision":"8c47db74eb750da79e028ed10db47567","url":"assets/js/722c29ae.ef659991.js"},{"revision":"51910ff3c42e3b55caf066b428550410","url":"assets/js/7648650d.95624597.js"},{"revision":"5fa4beadef0e419e6a27056bc8825a08","url":"assets/js/7bae9d2b.9a2d225d.js"},{"revision":"8dca97bf2c7cf529a589352147470037","url":"assets/js/913b6d78.3acd539e.js"},{"revision":"00a9bed787f690418d7667bac3f1dd8b","url":"assets/js/935f2afb.a928880e.js"},{"revision":"846696dfe8277af48f63ad40e355b630","url":"assets/js/961d9c09.884871e5.js"},{"revision":"ac963dfcca45e417ea37d7921a65232b","url":"assets/js/987b6960.1570842c.js"},{"revision":"0c5fb14fa2c8c5de8ad9bb647800e74e","url":"assets/js/9971a819.cb53d0c5.js"},{"revision":"7b42d9931155d61d8f94e85ecff3efe0","url":"assets/js/a3de741b.7b58ea76.js"},{"revision":"b8063db81d126325808f2b6aee4a172a","url":"assets/js/a8eb60ee.8e435065.js"},{"revision":"3a9950a46b7aaa6e963137810193684f","url":"assets/js/b39f369e.77aabc46.js"},{"revision":"5641e5872d24f0e669663a89d7c764d1","url":"assets/js/c0e20c00.b5518b75.js"},{"revision":"ae7549c933c056ef84e96c5d11f95922","url":"assets/js/c4a3f623.6015aaba.js"},{"revision":"50e37d65cdc970775f4c701487f8f69e","url":"assets/js/c948e316.0c70cdca.js"},{"revision":"30ce768b52903f2755c3966f71a9807d","url":"assets/js/cf356839.6c0014f5.js"},{"revision":"2545ad72a01bef8528dd665aba7c8096","url":"assets/js/dba95e2e.4437d3b7.js"},{"revision":"f804f9d07bb39c77ff25da6b543de23d","url":"assets/js/dccbb3cb.7133d381.js"},{"revision":"7f805a344726849d68601097c487b8d3","url":"assets/js/dec2c56f.00c3eee3.js"},{"revision":"f7343b6d0001532e2baa74348babf2b9","url":"assets/js/e14830b1.4c809540.js"},{"revision":"689a3883665cecd315e4b5411ebd19f7","url":"assets/js/e8a61396.af74ba71.js"},{"revision":"62babbdfd4d4ddcd386145291ccc97a5","url":"assets/js/ea2f98a7.1f6e8f58.js"},{"revision":"8c8eb3092321b0226143db982db9e72d","url":"assets/js/eb6a5da1.ac993b1e.js"},{"revision":"5d428fc105224184d14bcf55b86847f3","url":"assets/js/eec0bb42.15f4c00e.js"},{"revision":"76bff585fb841ff557697d746b38f5d0","url":"assets/js/f6ff9515.7cf9915f.js"},{"revision":"4100d693b4daeb176d1d6901563935ca","url":"assets/js/fa186723.8305b628.js"},{"revision":"90403f928f2785537acb138e7f0fe0ab","url":"assets/js/main.6c09a687.js"},{"revision":"55f0a0b094e65240ccd35c4d8ee7e964","url":"assets/js/runtime~main.ad18d5de.js"},{"revision":"daca000a0ceb3fa1b4b0ad233fac5812","url":"B-Labs/lab1.html"},{"revision":"2ac0a6d5d4c294c4f2d01795b475b217","url":"B-Labs/lab2.html"},{"revision":"91f43df50234e84a1a1ec56035f052ba","url":"B-Labs/lab3.html"},{"revision":"a5e43282aa8f62773492edcdc277d1f0","url":"B-Labs/lab4.html"},{"revision":"1f353bd282ab1e8d1a5195d85546bc1d","url":"B-Labs/lab5.html"},{"revision":"536bc78cebf9b2b7503b783d4af5647f","url":"C-Projects/project.html"},{"revision":"7071e7c3c1583d3713cc0290b3494821","url":"D-ExtraResources/active-learning-classroom.html"},{"revision":"74eff832752d96783bb4f409e0480ff9","url":"D-ExtraResources/benchmarking.html"},{"revision":"8342ad1f233f0cac07869af77432992f","url":"D-ExtraResources/blog-guidelines.html"},{"revision":"dfa656a13eb0fa5452a2d0fbafcde6cb","url":"D-ExtraResources/communication-tools.html"},{"revision":"4513f705e403c9f65ca70bdb5731bdae","url":"D-ExtraResources/compiler-optimizations.html"},{"revision":"4588a1c3046fc2287c8549f6add72a07","url":"D-ExtraResources/course-policies.html"},{"revision":"9a2d62532dc61b4c85289f90a6d01972","url":"D-ExtraResources/host-setup.html"},{"revision":"95655a4b1a76231eaf4763d72fae4467","url":"D-ExtraResources/information-for-prospective-students.html"},{"revision":"ef18d4809f532dc7f236dfe94884c39e","url":"D-ExtraResources/irc.html"},{"revision":"97726809e274a9aae7eaaa395da14b00","url":"D-ExtraResources/irssi-tutorial.html"},{"revision":"0ba866553785b60db432f6f8ec483be5","url":"D-ExtraResources/link-time-optimization.html"},{"revision":"379c66cc1b48fbf7d378ead0c36b229b","url":"D-ExtraResources/make-and-makefiles.html"},{"revision":"4b557e7ac4364369576721943f0f6390","url":"D-ExtraResources/open-source-professional-option-student-agreement.html"},{"revision":"4adc41ede2bbfe738d97d67c214039aa","url":"D-ExtraResources/overview-of-the-build-and-release-process.html"},{"revision":"df7cd433ed146501f28fedd101686ebb","url":"D-ExtraResources/participants-and-project-table.html"},{"revision":"9d1be2481fcbcb0c9e41cde2df62247e","url":"D-ExtraResources/personal-aarch64-systems.html"},{"revision":"4beb534b3e93eeec4e380e9495c7cf6d","url":"D-ExtraResources/profile-guided-optimization.html"},{"revision":"c77bd561057d20b1ee3fe373718ba2f6","url":"D-ExtraResources/profiling.html"},{"revision":"23cb2a75b260ca1a7c190ec3802bd886","url":"D-ExtraResources/public-key-cryptography.html"},{"revision":"094cf7874c8a06f022871abc93d50268","url":"D-ExtraResources/remote-x.html"},{"revision":"06a7d8581a4aa741abaff83cbd648402","url":"D-ExtraResources/rpm-packaging-process.html"},{"revision":"e63445b9cf4e230d8f8c7977b517b6b8","url":"D-ExtraResources/screen-tutorial.html"},{"revision":"d3b79f6535e9c44b953da3d1a178aa96","url":"D-ExtraResources/servers.html"},{"revision":"aeaf4c15f81e4e576029d0f1ddacecd5","url":"D-ExtraResources/ssh.html"},{"revision":"b7ea1c29b615f7deeff3466455c552a3","url":"E-ComputerArchitecture/topic-file-1.html"},{"revision":"e1cb3791a358ce04fa75c6bdcfc68afd","url":"F-AssemblyLanguage/aarch64-register-and-instruction-quick-start.html"},{"revision":"8938ce5c6471e6ccc140d1fed435ee8e","url":"F-AssemblyLanguage/assembler-basics.html"},{"revision":"a2229c505965aa483653324209e4ca53","url":"F-AssemblyLanguage/assembly-language.html"},{"revision":"99510c208d0b1a4547a9fcdd2698c740","url":"F-AssemblyLanguage/executable-and-linkable-format.html"},{"revision":"2ca612106decc0e9d87f9d0b3f12ddf2","url":"F-AssemblyLanguage/inline-assembly-language.html"},{"revision":"7717caf2b39ea34d095554cbb563f979","url":"F-AssemblyLanguage/symbol.html"},{"revision":"ec56d362f4e5c41b59c28372d2a7370c","url":"F-AssemblyLanguage/syscalls.html"},{"revision":"38052c74c009c19f2f805b71a6388264","url":"F-AssemblyLanguage/x86-64-register-and-instruction-quick-start.html"},{"revision":"fd0f2262fda72411e2fb7e435a87324c","url":"G-6502/topic-file-1.html"},{"revision":"666b357ac24c7ff6157a3756af6296d5","url":"H-ARM/armv8.html"},{"revision":"9a4914a618966ef4879c5674f9c216fe","url":"H-ARM/sve2.html"},{"revision":"e8457a16fb56a8ec22fb903e14956401","url":"index.html"},{"revision":"2524df02c6e551be5aef857403777080","url":"manifest.json"},{"revision":"ea9261317d38249078ef5ffd1e4eaf6b","url":"weekly-schedule.html"},{"revision":"2d286e3961546ad785914196aefa0a00","url":"assets/images/Alc-panel-35be89a1c9007fad4d7e625e11f99b24.jpg"},{"revision":"43b39310c73bca4cabe5e6245f367495","url":"assets/images/Alc-pod-35e5a7c655602a6278e7aa75f2ff7c89.jpg"},{"revision":"1cbd4d09565a5e8338fe10403f997ff4","url":"img/6502_Emulator_Screenshot.png"},{"revision":"2d286e3961546ad785914196aefa0a00","url":"img/Alc-panel.jpg"},{"revision":"43b39310c73bca4cabe5e6245f367495","url":"img/Alc-pod.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"b1168f827dec36255814888d8c41d781","url":"img/MOS_6502_1.jpg"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();