/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={425:(e,t,n)=>{function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,f=l("undefined"),d=c("ArrayBuffer"),p=l("string"),h=l("function"),m=l("number"),y=e=>null!==e&&"object"==typeof e,b=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=c("Date"),w=c("File"),E=c("Blob"),R=c("FileList"),O=c("URLSearchParams"),[S,v,T,A]=["ReadableStream","Request","Response","Headers"].map(c);function x(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function C(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n.g,N=e=>!f(e)&&e!==j,P=(U="undefined"!=typeof Uint8Array&&s(Uint8Array),e=>U&&e instanceof U);var U;const L=c("HTMLFormElement"),_=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),F=c("RegExp"),B=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};x(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},k=c("AsyncFunction"),D=(q="function"==typeof setImmediate,M=h(j.postMessage),q?setImmediate:M?(I=`axios@${Math.random()}`,z=[],j.addEventListener("message",(({source:e,data:t})=>{e===j&&t===I&&z.length&&z.shift()()}),!1),e=>{z.push(e),j.postMessage(I,"*")}):e=>setTimeout(e));var q,M,I,z;const H="undefined"!=typeof queueMicrotask?queueMicrotask.bind(j):"undefined"!=typeof process&&process.nextTick||D;var $={isArray:u,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=i(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:b,isReadableStream:S,isRequest:v,isResponse:T,isHeaders:A,isUndefined:f,isDate:g,isFile:w,isBlob:E,isRegExp:F,isFunction:h,isStream:e=>y(e)&&h(e.pipe),isURLSearchParams:O,isTypedArray:P,isFileList:R,forEach:x,merge:function e(){const{caseless:t}=N(this)&&this||{},n={},r=(r,o)=>{const s=t&&C(n,o)||o;b(n[s])&&b(r)?n[s]=e(n[s],r):b(r)?n[s]=e({},r):u(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&x(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(x(t,((t,o)=>{n&&h(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:L,hasOwnProperty:_,hasOwnProp:_,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:C,global:j,isContextDefined:N,isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=u(e)?[]:{};return x(e,((e,t)=>{const s=n(e,r+1);!f(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:k,isThenable:e=>e&&(y(e)||h(e))&&h(e.then)&&h(e.catch),setImmediate:D,asap:H};function J(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}$.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.status}}});const W=J.prototype,K={};function V(e){return $.isPlainObject(e)||$.isArray(e)}function X(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function G(e,t,n){return e?e.concat(t).map((function(e,t){return e=X(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{K[e]={value:e}})),Object.defineProperties(J,K),Object.defineProperty(W,"isAxiosError",{value:!0}),J.from=(e,t,n,r,o,s)=>{const i=Object.create(W);return $.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),J.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Q=$.toFlatObject($,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Z(e,t,n){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=$.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!$.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if($.isDate(e))return e.toISOString();if(!a&&$.isBlob(e))throw new J("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(e)||$.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if($.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if($.isArray(e)&&function(e){return $.isArray(e)&&!e.some(V)}(e)||($.isFileList(e)||$.endsWith(n,"[]"))&&(a=$.toArray(e)))return n=X(n),a.forEach((function(e,r){!$.isUndefined(e)&&null!==e&&t.append(!0===i?G([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!V(e)||(t.append(G(o,n,s),c(e)),!1)}const u=[],f=Object.assign(Q,{defaultVisitor:l,convertValue:c,isVisitable:V});if(!$.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!$.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),$.forEach(n,(function(n,s){!0===(!($.isUndefined(n)||null===n)&&o.call(t,n,$.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t}function Y(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ee(e,t){this._pairs=[],e&&Z(e,this,t)}const te=ee.prototype;function ne(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function re(e,t,n){if(!t)return e;const r=n&&n.encode||ne;$.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let s;if(s=o?o(t,n):$.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}te.append=function(e,t){this._pairs.push([e,t])},te.toString=function(e){const t=e?function(t){return e.call(this,t,Y)}:Y;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var oe=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){$.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},se={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ie={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ee,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const ae="undefined"!=typeof window&&"undefined"!=typeof document,ce="object"==typeof navigator&&navigator||void 0,le=ae&&(!ce||["ReactNative","NativeScript","NS"].indexOf(ce.product)<0),ue="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,fe=ae&&window.location.href||"http://localhost";var de={...Object.freeze({__proto__:null,hasBrowserEnv:ae,hasStandardBrowserWebWorkerEnv:ue,hasStandardBrowserEnv:le,navigator:ce,origin:fe}),...ie};function pe(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&$.isArray(r)?r.length:s,a?($.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&$.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&$.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if($.isFormData(e)&&$.isFunction(e.entries)){const n={};return $.forEachEntry(e,((e,r)=>{t(function(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const he={transitional:se,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=$.isObject(e);if(o&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return r?JSON.stringify(pe(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e)||$.isReadableStream(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Z(e,new de.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return de.isNode&&$.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=$.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Z(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e){if($.isString(e))try{return(0,JSON.parse)(e),$.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||he.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if($.isResponse(e)||$.isReadableStream(e))return e;if(e&&$.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw J.from(e,J.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],(e=>{he.headers[e]={}}));var me=he;const ye=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),be=Symbol("internals");function ge(e){return e&&String(e).trim().toLowerCase()}function we(e){return!1===e||null==e?e:$.isArray(e)?e.map(we):String(e)}function Ee(e,t,n,r,o){return $.isFunction(r)?r.call(this,t,n):(o&&(t=n),$.isString(t)?$.isString(r)?-1!==t.indexOf(r):$.isRegExp(r)?r.test(t):void 0:void 0)}class Re{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ge(t);if(!o)throw new Error("header name must be a non-empty string");const s=$.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=we(e))}const s=(e,t)=>$.forEach(e,((e,n)=>o(e,n,t)));if($.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if($.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ye[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if($.isHeaders(e))for(const[t,r]of e.entries())o(r,t,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ge(e)){const n=$.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if($.isFunction(t))return t.call(this,e,n);if($.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ge(e)){const n=$.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ee(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ge(e)){const o=$.findKey(n,e);!o||t&&!Ee(0,n[o],o,t)||(delete n[o],r=!0)}}return $.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Ee(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return $.forEach(this,((r,o)=>{const s=$.findKey(n,o);if(s)return t[s]=we(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=we(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return $.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&$.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[be]=this[be]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ge(e);t[r]||(function(e,t){const n=$.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return $.isArray(e)?e.forEach(r):r(e),this}}Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),$.reduceDescriptors(Re.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),$.freezeMethods(Re);var Oe=Re;function Se(e,t){const n=this||me,r=t||n,o=Oe.from(r.headers);let s=r.data;return $.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ve(e){return!(!e||!e.__CANCEL__)}function Te(e,t,n){J.call(this,null==e?"canceled":e,J.ERR_CANCELED,t,n),this.name="CanceledError"}function Ae(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}$.inherits(Te,J,{__CANCEL__:!0});const xe=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n,r,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(n=e,r||(r=setTimeout((()=>{r=null,i(n)}),s-a)))},()=>n&&i(n)]}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s,e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},Ce=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},je=e=>(...t)=>$.asap((()=>e(...t)));var Ne=de.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,de.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(de.origin),de.navigator&&/(msie|trident)/i.test(de.navigator.userAgent)):()=>!0,Pe=de.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];$.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),$.isString(r)&&i.push("path="+r),$.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ue(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&r||0==n?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Le=e=>e instanceof Oe?{...e}:e;function _e(e,t){t=t||{};const n={};function r(e,t,n,r){return $.isPlainObject(e)&&$.isPlainObject(t)?$.merge.call({caseless:r},e,t):$.isPlainObject(t)?$.merge({},t):$.isArray(t)?t.slice():t}function o(e,t,n,o){return $.isUndefined(t)?$.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function s(e,t){if(!$.isUndefined(t))return r(void 0,t)}function i(e,t){return $.isUndefined(t)?$.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t,n)=>o(Le(e),Le(t),0,!0)};return $.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);$.isUndefined(i)&&s!==a||(n[r]=i)})),n}var Fe=e=>{const t=_e({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Oe.from(a),t.url=re(Ue(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),$.isFormData(r))if(de.hasStandardBrowserEnv||de.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(de.hasStandardBrowserEnv&&(o&&$.isFunction(o)&&(o=o(t)),o||!1!==o&&Ne(t.url))){const e=s&&i&&Pe.read(i);e&&a.set(s,e)}return t},Be="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Fe(e);let o=r.data;const s=Oe.from(r.headers).normalize();let i,a,c,l,u,{responseType:f,onUploadProgress:d,onDownloadProgress:p}=r;function h(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function y(){if(!m)return;const r=Oe.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Ae((function(e){t(e),h()}),(function(e){n(e),h()}),{data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(n(new J("Request aborted",J.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new J("Network Error",J.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||se;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new J(t,o.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&$.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),$.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),f&&"json"!==f&&(m.responseType=r.responseType),p&&([c,u]=xe(p,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,l]=xe(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new Te(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const b=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);b&&-1===de.protocols.indexOf(b)?n(new J("Unsupported protocol "+b+":",J.ERR_BAD_REQUEST,e)):m.send(o||null)}))},ke=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof J?t:new Te(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new J(`timeout ${t} of ms exceeded`,J.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>$.asap(i),a}};const De=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},qe=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}}(e))yield*De(n,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=i+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(e){throw a(e),e}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},Me="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Ie=Me&&"function"==typeof ReadableStream,ze=Me&&("function"==typeof TextEncoder?(He=new TextEncoder,e=>He.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var He;const $e=(e,...t)=>{try{return!!e(...t)}catch(e){return!1}},Je=Ie&&$e((()=>{let e=!1;const t=new Request(de.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),We=Ie&&$e((()=>$.isReadableStream(new Response("").body))),Ke={stream:We&&(e=>e.body)};var Ve;Me&&(Ve=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Ke[e]&&(Ke[e]=$.isFunction(Ve[e])?t=>t[e]():(t,n)=>{throw new J(`Response type '${e}' is not supported`,J.ERR_NOT_SUPPORT,n)})})));const Xe={http:null,xhr:Be,fetch:Me&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=Fe(e);l=l?(l+"").toLowerCase():"text";let p,h=ke([o,s&&s.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(c&&Je&&"get"!==n&&"head"!==n&&0!==(y=await(async(e,t)=>{const n=$.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if($.isBlob(e))return e.size;if($.isSpecCompliantForm(e)){const t=new Request(de.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return $.isArrayBufferView(e)||$.isArrayBuffer(e)?e.byteLength:($.isURLSearchParams(e)&&(e+=""),$.isString(e)?(await ze(e)).byteLength:void 0)})(t):n})(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if($.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Ce(y,xe(je(c)));r=qe(n.body,65536,e,t)}}$.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...d,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let s=await fetch(p);const i=We&&("stream"===l||"response"===l);if(We&&(a||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=$.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&Ce(t,xe(je(a),!0))||[];s=new Response(qe(s.body,65536,n,(()=>{r&&r(),m&&m()})),e)}l=l||"text";let b=await Ke[$.findKey(Ke,l)||"text"](s,e);return!i&&m&&m(),await new Promise(((t,n)=>{Ae(t,n,{data:b,headers:Oe.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:p})}))}catch(t){if(m&&m(),t&&"TypeError"===t.name&&/fetch/i.test(t.message))throw Object.assign(new J("Network Error",J.ERR_NETWORK,e,p),{cause:t.cause||t});throw J.from(t,t&&t.code,e,p)}})};$.forEach(Xe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ge=e=>`- ${e}`,Qe=e=>$.isFunction(e)||null===e||!1===e;var Ze=e=>{e=$.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Qe(n)&&(r=Xe[(t=String(n)).toLowerCase()],void 0===r))throw new J(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new J("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Ge).join("\n"):" "+Ge(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Ye(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Te(null,e)}function et(e){return Ye(e),e.headers=Oe.from(e.headers),e.data=Se.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ze(e.adapter||me.adapter)(e).then((function(t){return Ye(e),t.data=Se.call(e,e.transformResponse,t),t.headers=Oe.from(t.headers),t}),(function(t){return ve(t)||(Ye(e),t&&t.response&&(t.response.data=Se.call(e,e.transformResponse,t.response),t.response.headers=Oe.from(t.response.headers))),Promise.reject(t)}))}const tt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{tt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const nt={};tt.transitional=function(e,t,n){function r(e,t){return"[Axios v1.8.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new J(r(o," has been removed"+(t?" in "+t:"")),J.ERR_DEPRECATED);return t&&!nt[o]&&(nt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}},tt.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};var rt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new J("option "+s+" must be "+n,J.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new J("Unknown option "+s,J.ERR_BAD_OPTION)}},validators:tt};const ot=rt.validators;class st{constructor(e){this.defaults=e,this.interceptors={request:new oe,response:new oe}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}catch(e){}}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=_e(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&rt.assertOptions(n,{silentJSONParsing:ot.transitional(ot.boolean),forcedJSONParsing:ot.transitional(ot.boolean),clarifyTimeoutError:ot.transitional(ot.boolean)},!1),null!=r&&($.isFunction(r)?t.paramsSerializer={serialize:r}:rt.assertOptions(r,{encode:ot.function,serialize:ot.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),rt.assertOptions(t,{baseUrl:ot.spelling("baseURL"),withXsrfToken:ot.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&$.merge(o.common,o[t.method]);o&&$.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Oe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[et.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=et.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return re(Ue((e=_e(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}$.forEach(["delete","get","head","options"],(function(e){st.prototype[e]=function(t,n){return this.request(_e(n||{},{method:e,url:t,data:(n||{}).data}))}})),$.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(_e(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}st.prototype[e]=t(),st.prototype[e+"Form"]=t(!0)}));var it=st;class at{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Te(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new at((function(t){e=t})),cancel:e}}}var ct=at;const lt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lt).forEach((([e,t])=>{lt[t]=e}));var ut=lt;const ft=function e(t){const n=new it(t),o=r(it.prototype.request,n);return $.extend(o,it.prototype,n,{allOwnKeys:!0}),$.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(_e(t,n))},o}(me);ft.Axios=it,ft.CanceledError=Te,ft.CancelToken=ct,ft.isCancel=ve,ft.VERSION="1.8.2",ft.toFormData=Z,ft.AxiosError=J,ft.Cancel=ft.CanceledError,ft.all=function(e){return Promise.all(e)},ft.spread=function(e){return function(t){return e.apply(null,t)}},ft.isAxiosError=function(e){return $.isObject(e)&&!0===e.isAxiosError},ft.mergeConfig=_e,ft.AxiosHeaders=Oe,ft.formToJSON=e=>pe($.isHTMLForm(e)?new FormData(e):e),ft.getAdapter=Ze,ft.HttpStatusCode=ut,ft.default=ft,e.exports=ft}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();const r=document.getElementById("movie-container"),o=n(425);(async()=>{try{const t=await o.get("http://localhost:3000/movies");e=t.data,r.innerHTML="",e.forEach((e=>{const t=document.createElement("div");t.classList.add("movie-card");const n=document.createElement("button");n.innerText="X",n.classList.add("delete-button"),n.onclick=async()=>{try{if(!(await fetch(`http://localhost:3000/movies/${e._id}`,{method:"DELETE"})).ok)throw new Error("No se pudo eliminar la película");t.remove(),console.log("Película eliminada:",e.title)}catch(e){console.error("Error al eliminar la película:",e)}},t.innerHTML=`\n            <img src="${e.poster}" alt="${e.title}">\n            <div class="movie-info">\n                <h2>${e.title}</h2>\n                <p class="duration">${e.duration}</p>\n                <p class="year">${e.year}</p>\n                <p class="director">Director: ${e.director}</p>\n                <p class="rate">Rating: ${e.rate}</p>\n                <div class="genre">\n                    ${e.genre.map((e=>`<span>${e}</span>`)).join("")}\n                </div>\n            </div>\n        `,t.appendChild(n),r.appendChild(t)}))}catch(e){console.error("Error al obtener las películas:",e),document.getElementById("movie-container").innerHTML="<p>Error al cargar las películas. Intenta nuevamente.</p>"}var e})()})();