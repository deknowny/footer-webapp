"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99],{7664:(e,t,n)=>{let r,o;n.d(t,{i$:()=>aX});var l,i,a,s,c,u,d,h,g=n(5984),f=n(5720),p=n(5020),m=n(4617),w=n(2818),v=Object.defineProperty,C=Object.defineProperties,y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&S(e,n,t[n]);if(x)for(var n of x(t))k.call(t,n)&&S(e,n,t[n]);return e},$=(e,t)=>C(e,y(t)),L=(e,t,n)=>(S(e,"symbol"!=typeof t?t+"":t,n),n),A=(e,t,n)=>new Promise((r,o)=>{var l=e=>{try{a(n.next(e))}catch(e){o(e)}},i=e=>{try{a(n.throw(e))}catch(e){o(e)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,i);a((n=n.apply(e,t)).next())});let T={},E=Symbol("solid-proxy"),_=Symbol("solid-track"),R={equals:(e,t)=>e===t},W=eo,I={owned:null,cleanups:null,context:null,owner:null},N={};var P=null;let B=null,H=null,V=null,D=0;function O(e,t){let n=B,r=P,o=0===e.length,l=o?I:{owned:null,cleanups:null,context:null,owner:void 0===t?r:t},i=o?e:()=>e(()=>Z(()=>ea(l)));P=l,B=null;try{return er(i,!0)}finally{B=n,P=r}}function F(e,t){let n={value:e,observers:null,observerSlots:null,comparator:(t=t?Object.assign({},R,t):R).equals||void 0};return[J.bind(n),e=>("function"==typeof e&&(e=e(n.value)),X(n,e))]}function K(e,t,n){ee(et(e,t,!0,1))}function U(e,t,n){ee(et(e,t,!1,1))}function q(e,t,n){W=el;let r=et(e,t,!1,1);r.user=!0,V?V.push(r):ee(r)}function j(e,t,n){n=n?Object.assign({},R,n):R;let r=et(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ee(r),J.bind(r)}function Z(e){if(null===B)return e();let t=B;B=null;try{return e()}finally{B=t}}function z(e){return null===P||(null===P.cleanups?P.cleanups=[e]:P.cleanups.push(e)),e}function G(e,t){let n=Symbol("context");return{id:n,Provider:function(e){let t;return U(()=>t=Z(()=>(P.context={[n]:e.value},Q(()=>e.children))),void 0),t},defaultValue:e}}function Y(e){let t;return void 0!==(t=function e(t,n){return t?t.context&&void 0!==t.context[n]?t.context[n]:e(t.owner,n):void 0}(P,e.id))?t:e.defaultValue}function Q(e){let t=j(e),n=j(()=>(function e(t){if("function"==typeof t&&!t.length)return e(t());if(Array.isArray(t)){let n=[];for(let r=0;r<t.length;r++){let o=e(t[r]);Array.isArray(o)?n.push.apply(n,o):n.push(o)}return n}return t})(t()));return n.toArray=()=>{let e=n();return Array.isArray(e)?e:null!=e?[e]:[]},n}function J(){if(this.sources&&this.state){if(1===this.state)ee(this);else{let e=H;H=null,er(()=>ei(this),!1),H=e}}if(B){let e=this.observers?this.observers.length:0;B.sources?(B.sources.push(this),B.sourceSlots.push(e)):(B.sources=[this],B.sourceSlots=[e]),this.observers?(this.observers.push(B),this.observerSlots.push(B.sources.length-1)):(this.observers=[B],this.observerSlots=[B.sources.length-1])}return this.value}function X(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&er(()=>{for(let t=0;t<e.observers.length;t+=1){let n=e.observers[t];n.state||(n.pure?H.push(n):V.push(n),n.observers&&function e(t){for(let n=0;n<t.observers.length;n+=1){let r=t.observers[n];!r.state&&(r.state=2,r.pure?H.push(r):V.push(r),r.observers&&e(r))}}(n)),n.state=1}if(H.length>1e6)throw H=[],Error()},!1)),t}function ee(e){if(!e.fn)return;ea(e);let t=P,n=B,r=D;B=P=e,function(e,t,n){let r;try{r=e.fn(t)}catch(t){e.pure&&(e.state=1,e.owned&&e.owned.forEach(ea),e.owned=null),ec(t)}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?X(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),B=n,P=t}function et(e,t,n,r=1,o){let l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:P,context:null,pure:n};return null===P||P!==I&&(P.owned?P.owned.push(l):P.owned=[l]),l}function en(e){if(0===e.state)return;if(2===e.state)return ei(e);if(e.suspense&&Z(e.suspense.inFallback))return e.suspense.effects.push(e);let t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)ee(e);else if(2===e.state){let n=H;H=null,er(()=>ei(e,t[0]),!1),H=n}}function er(e,t){if(H)return e();let n=!1;t||(H=[]),V?n=!0:V=[],D++;try{let t=e();return function(e){if(H&&(eo(H),H=null),e)return;let t=V;V=null,t.length&&er(()=>W(t),!1)}(n),t}catch(e){n||(V=null),H=null,ec(e)}}function eo(e){for(let t=0;t<e.length;t++)en(e[t])}function el(e){let t,n=0;for(t=0;t<e.length;t++){let r=e[t];r.user?e[n++]=r:en(r)}for(T.context&&(T.context=void 0),t=0;t<n;t++)en(e[t])}function ei(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){let r=e.sources[n];r.sources&&(1===r.state?r!==t&&en(r):(2===r.state||null)&&ei(r,t))}}function ea(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){let e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)ea(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function es(e){return e instanceof Error||"string"==typeof e?e:Error("Unknown error")}function ec(e){throw e=es(e)}let eu=Symbol("fallback");function ed(e){for(let t=0;t<e.length;t++)e[t]()}function eh(e,t){return Z(()=>e(t||{}))}function eg(){return!0}let ef={get:(e,t,n)=>t===E?n:e.get(t),has:(e,t)=>t===E||e.has(t),set:eg,deleteProperty:eg,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:eg,deleteProperty:eg}),ownKeys:e=>e.keys()};function ep(e){return(e="function"==typeof e?e():e)?e:{}}function em(...e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];t=t||!!r&&E in r,e[n]="function"==typeof r?(t=!0,j(r)):r}if(t)return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){let r=ep(e[n])[t];if(void 0!==r)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in ep(e[n]))return!0;return!1},keys(){let t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(ep(e[n])));return[...new Set(t)]}},ef);let n={};for(let t=e.length-1;t>=0;t--)if(e[t]){let r=Object.getOwnPropertyDescriptors(e[t]);for(let t in r)t in n||Object.defineProperty(n,t,{enumerable:!0,get(){for(let n=e.length-1;n>=0;n--){let r=(e[n]||{})[t];if(void 0!==r)return r}}})}return n}function ew(e,...t){let n=new Set(t.flat());if(E in e){let r=t.map(t=>new Proxy({get:n=>t.includes(n)?e[n]:void 0,has:n=>t.includes(n)&&n in e,keys:()=>t.filter(t=>t in e)},ef));return r.push(new Proxy({get:t=>n.has(t)?void 0:e[t],has:t=>!n.has(t)&&t in e,keys:()=>Object.keys(e).filter(e=>!n.has(e))},ef)),r}let r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(e=>!n.has(e))),t.map(t=>{let n={};for(let o=0;o<t.length;o++){let l=t[o];l in e&&Object.defineProperty(n,l,r[l]?r[l]:{get:()=>e[l],set:()=>!0,enumerable:!0})}return n})}function ev(e){let t="fallback"in e&&{fallback:()=>e.fallback};return j(function(e,t,n={}){let r=[],o=[],l=[],i=0,a=t.length>1?[]:null;return z(()=>ed(l)),()=>{let s=e()||[],c,u;return s[_],Z(()=>{let e=s.length,t,h,g,f,p,m,w,v,C;if(0===e)0!==i&&(ed(l),l=[],r=[],o=[],i=0,a&&(a=[])),n.fallback&&(r=[eu],o[0]=O(e=>(l[0]=e,n.fallback())),i=1);else if(0===i){for(u=0,o=Array(e);u<e;u++)r[u]=s[u],o[u]=O(d);i=e}else{for(g=Array(e),f=Array(e),a&&(p=Array(e)),m=0,w=Math.min(i,e);m<w&&r[m]===s[m];m++);for(w=i-1,v=e-1;w>=m&&v>=m&&r[w]===s[v];w--,v--)g[v]=o[w],f[v]=l[w],a&&(p[v]=a[w]);for(t=new Map,h=Array(v+1),u=v;u>=m;u--)C=s[u],c=t.get(C),h[u]=void 0===c?-1:c,t.set(C,u);for(c=m;c<=w;c++)C=r[c],void 0!==(u=t.get(C))&&-1!==u?(g[u]=o[c],f[u]=l[c],a&&(p[u]=a[c]),u=h[u],t.set(C,u)):l[c]();for(u=m;u<e;u++)u in g?(o[u]=g[u],l[u]=f[u],a&&(a[u]=p[u],a[u](u))):o[u]=O(d);o=o.slice(0,i=e),r=s.slice(0)}return o});function d(e){if(l[u]=e,a){let[e,n]=F(u);return a[u]=n,t(s[u],e)}return t(s[u])}}}(()=>e.each,e.children,t||void 0))}function eC(e){let t=!1,n=e.keyed,r=j(()=>e.when,void 0,{equals:(e,n)=>t?e===n:!e==!n});return j(()=>{let o=r();if(o){let r=e.children,l="function"==typeof r&&r.length>0;return t=n||l,l?Z(()=>r(o)):r}return e.fallback},void 0,void 0)}function ey(e){let t=!1,n=!1,r=Q(()=>e.children),o=j(()=>{let e=r();Array.isArray(e)||(e=[e]);for(let t=0;t<e.length;t++){let r=e[t].when;if(r)return n=!!e[t].keyed,[t,r,e[t]]}return[-1]},void 0,{equals:(e,n)=>e[0]===n[0]&&(t?e[1]===n[1]:!e[1]==!n[1])&&e[2]===n[2]});return j(()=>{let[r,l,i]=o();if(r<0)return e.fallback;let a=i.children,s="function"==typeof a&&a.length>0;return t=n||s,s?Z(()=>a(l)):a},void 0,void 0)}function ex(e){return e}let eb=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline","allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"]),ek=new Set(["innerHTML","textContent","innerText","children"]),eS=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),eM=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),e$=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),eL=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),eA={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},eT="_$DX_DELEGATE";function eE(e,t,n){if("undefined"==typeof window)return null;let r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function e_(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function eR(e,t){null==t?e.removeAttribute("class"):e.className=t}function eW(e,t={},n,r){let o={};return r||U(()=>o.children=eV(e,t.children,o.children)),U(()=>t.ref&&t.ref(e)),U(()=>(function(e,t,n,r,o={},l=!1){for(let r in t||(t={}),o)if(!(r in t)){if("children"===r)continue;o[r]=eB(e,r,null,o[r],n,l)}for(let i in t){if("children"===i){r||eV(e,t.children);continue}let a=t[i];o[i]=eB(e,i,a,o[i],n,l)}})(e,t,n,!0,o,!0)),o}function eI(e,t,n){return Z(()=>e(t,n))}function eN(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return eV(e,t,r,n);U(r=>eV(e,t(),r,n),r)}function eP(e,t,n){let r=t.trim().split(/\s+/);for(let t=0,o=r.length;t<o;t++)e.classList.toggle(r[t],n)}function eB(e,t,n,r,o,l){let i,a,s;if("style"===t)return function(e,t,n){let r,o;if(!t)return n?e_(e,"style"):t;let l=e.style;if("string"==typeof t)return l.cssText=t;for(o in"string"==typeof n&&(l.cssText=n=void 0),n||(n={}),t||(t={}),n)null==t[o]&&l.removeProperty(o),delete n[o];for(o in t)(r=t[o])!==n[o]&&(l.setProperty(o,r),n[o]=r);return n}(e,n,r);if("classList"===t)return function(e,t,n={}){let r,o;let l=Object.keys(t||{}),i=Object.keys(n);for(r=0,o=i.length;r<o;r++){let o=i[r];o&&"undefined"!==o&&!t[o]&&(eP(e,o,!1),delete n[o])}for(r=0,o=l.length;r<o;r++){let o=l[r],i=!!t[o];o&&"undefined"!==o&&n[o]!==i&&i&&(eP(e,o,!0),n[o]=i)}return n}(e,n,r);if(n===r)return r;if("ref"===t)l||n(e);else if("on:"===t.slice(0,3)){let o=t.slice(3);r&&e.removeEventListener(o,r),n&&e.addEventListener(o,n)}else if("oncapture:"===t.slice(0,10)){let o=t.slice(10);r&&e.removeEventListener(o,r,!0),n&&e.addEventListener(o,n,!0)}else if("on"===t.slice(0,2)){let o=t.slice(2).toLowerCase(),l=e$.has(o);if(!l&&r){let t=Array.isArray(r)?r[0]:r;e.removeEventListener(o,t)}(l||n)&&(!function(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n)}(e,o,n,l),l&&function(e,t=window.document){let n=t[eT]||(t[eT]=new Set);for(let r=0,o=e.length;r<o;r++){let o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,eH))}}([o]))}else if((s=ek.has(t))||!o&&(eM[t]||(a=eb.has(t)))||(i=e.nodeName.includes("-")))"class"===t||"className"===t?eR(e,n):!i||a||s?e[eM[t]||t]=n:e[t.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())]=n;else{let r=o&&t.indexOf(":")>-1&&eA[t.split(":")[0]];r?null==n?e.removeAttributeNS(r,t):e.setAttributeNS(r,t,n):e_(e,eS[t]||t,n)}return n}function eH(e){let t=`$$${e.type}`,n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n||document}),T.registry&&!T.done&&(T.done=!0,document.querySelectorAll("[id^=pl-]").forEach(t=>{for(;t&&8!==t.nodeType&&t.nodeValue!=="pl-"+e;){let e=t.nextSibling;t.remove(),t=e}t&&t.remove()}));n;){let r=n[t];if(r&&!n.disabled){let o=n[`${t}Data`];if(void 0!==o?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function eV(e,t,n,r,o){for(T.context&&!n&&(n=[...e.childNodes]);"function"==typeof n;)n=n();if(t===n)return n;let l=typeof t,i=void 0!==r;if(e=i&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l){if(T.context)return n;if("number"===l&&(t=t.toString()),i){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=eO(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===l){if(T.context)return n;n=eO(e,n,r)}else if("function"===l)return U(()=>{let o=t();for(;"function"==typeof o;)o=o();n=eV(e,o,n,r)}),()=>n;else if(Array.isArray(t)){let l=[],a=n&&Array.isArray(n);if(function e(t,n,r,o){let l=!1;for(let i=0,a=n.length;i<a;i++){let a=n[i],s=r&&r[i];if(a instanceof Node)t.push(a);else if(null==a||!0===a||!1===a);else if(Array.isArray(a))l=e(t,a,s)||l;else if("function"==typeof a){if(o){for(;"function"==typeof a;)a=a();l=e(t,Array.isArray(a)?a:[a],Array.isArray(s)?s:[s])||l}else t.push(a),l=!0}else{let e=String(a);s&&3===s.nodeType&&s.data===e?t.push(s):t.push(document.createTextNode(e))}}return l}(l,t,n,o))return U(()=>n=eV(e,l,n,r,!0)),()=>n;if(T.context){if(!l.length)return n;for(let e=0;e<l.length;e++)if(l[e].parentNode)return n=l}if(0===l.length){if(n=eO(e,n,r),i)return n}else a?0===n.length?eD(e,l,r):function(e,t,n){let r=n.length,o=t.length,l=r,i=0,a=0,s=t[o-1].nextSibling,c=null;for(;i<o||a<l;){if(t[i]===n[a]){i++,a++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===i){let t=l<r?a?n[a-1].nextSibling:n[l-a]:s;for(;a<l;)e.insertBefore(n[a++],t)}else if(l===a)for(;i<o;)c&&c.has(t[i])||t[i].remove(),i++;else if(t[i]===n[l-1]&&n[a]===t[o-1]){let r=t[--o].nextSibling;e.insertBefore(n[a++],t[i++].nextSibling),e.insertBefore(n[--l],r),t[o]=n[l]}else{if(!c){c=new Map;let e=a;for(;e<l;)c.set(n[e],e++)}let r=c.get(t[i]);if(null!=r){if(a<r&&r<l){let s=i,u=1,d;for(;++s<o&&s<l&&null!=(d=c.get(t[s]))&&d===r+u;)u++;if(u>r-a){let o=t[i];for(;a<r;)e.insertBefore(n[a++],o)}else e.replaceChild(n[a++],t[i++])}else i++}else t[i++].remove()}}}(e,n,l):(n&&eO(e),eD(e,l));n=l}else if(t instanceof Node){if(T.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=eO(e,n,r,t);eO(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}return n}function eD(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function eO(e,t,n,r){if(void 0===n)return e.textContent="";let o=r||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){let i=t[l];if(o!==i){let t=i.parentNode===e;r||l?t&&i.remove():t?e.replaceChild(o,i):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function eF(e,t=!1){return t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)}function eK(e){let{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function o(){if(!T.context)return()=>e.children;{let[t,n]=F(!1);return queueMicrotask(()=>n(!0)),()=>t()&&e.children}}if(r instanceof HTMLHeadElement){let[e,t]=F(!1),n=()=>t(!0);O(t=>eN(r,()=>e()?t():o()(),null)),z(()=>{T.context?queueMicrotask(n):n()})}else{let l=eF(e.isSVG?"g":"div",e.isSVG),i=t&&l.attachShadow?l.attachShadow({mode:"open"}):l;Object.defineProperty(l,"_$host",{get:()=>n.parentNode,configurable:!0}),eN(i,o()),r.appendChild(l),e.ref&&e.ref(l),z(()=>r.removeChild(l))}return n}function eU(e){let[t,n]=ew(e,["component"]),r=j(()=>t.component);return j(()=>{let e=r();switch(typeof e){case"function":return Z(()=>e(n));case"string":let t,o;let l=eL.has(e),i=T.context?T.context&&(t=T.registry.get(o=function(){let e=T.context;return`${e.id}${e.count++}`}()))?(T.completed&&T.completed.add(t),T.registry.delete(o),t):(void 0).cloneNode(!0):eF(e,l);return eW(i,n,l),i}})}var eq=(e=>(e.DARK="DARK",e.LIGHT="LIGHT",e))(eq||{});let ej={data:""},eZ=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ej,ez=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,eG=/\/\*[^]*?\*\/|  +/g,eY=/\n+/g,eQ=(e,t)=>{let n="",r="",o="";for(let l in e){let i=e[l];"@"==l[0]?"i"==l[1]?n=l+" "+i+";":r+="f"==l[1]?eQ(i,l):l+"{"+eQ(i,"k"==l[1]?"":t)+"}":"object"==typeof i?r+=eQ(i,t?t.replace(/([^,])+/g,e=>l.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):l):null!=i&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=eQ.p?eQ.p(l,i):l+":"+i+";")}return n+(t&&o?t+"{"+o+"}":o)+r},eJ={},eX=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+eX(e[n]);return t}return e},e1=(e,t,n,r,o)=>{let l=eX(e),i=eJ[l]||(eJ[l]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(l));if(!eJ[i]){let t=l!==e?e:(e=>{let t,n,r=[{}];for(;t=ez.exec(e.replace(eG,""));)t[4]?r.shift():t[3]?(n=t[3].replace(eY," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(eY," ").trim();return r[0]})(e);eJ[i]=eQ(o?{["@keyframes "+i]:t}:t,n?"":"."+i)}let a=n&&eJ.g?eJ.g:null;return n&&(eJ.g=eJ[i]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(eJ[i],t,r,a),i},e0=(e,t,n)=>e.reduce((e,r,o)=>{let l=t[o];if(l&&l.call){let e=l(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;l=t?"."+t:e&&"object"==typeof e?e.props?"":eQ(e,""):!1===e?"":e}return e+r+(null==l?"":l)},"");function e2(e){let t=this||{},n=e.call?e(t.p):e;return e1(n.unshift?n.raw?e0(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,eZ(t.target),t.g,t.o,t.k)}e2.bind({g:1});let e5=e2.bind({k:1}),e4=G();function e3(e){return eh(e4.Provider,{value:e.theme,get children(){return e.children}})}function e9(){return Y(e4)}function e8(e){let t=this||{};return(...n)=>{let r=r=>{let o;let l=em(r,{theme:Y(e4)}),[i,a]=ew(em(l,{get class(){let e=l.class,r="class"in l&&/^go[0-9]+/.test(e);return[e,e2.apply({target:t.target,o:r,p:l,g:t.g},n)].filter(Boolean).join(" ")}}),["as","theme"]),s=i.as||e;return"function"==typeof s?o=s(a):1==t.g?eW(o=document.createElement(s),a):o=eU(em({component:s},a)),o};return r.class=e=>Z(()=>e2.apply({target:t.target,p:e,g:t.g},n)),r}}let e6=new Proxy(e8,{get:(e,t)=>e(t)});function e7(){let e=e8.call({g:1},"div").apply(null,arguments);return function(t){return e(t),null}}let te="tc-root",tt="tc-disable-scroll",tn="tc-using-mouse",tr=()=>(document.body.addEventListener("mousedown",()=>document.body.classList.add(tn)),document.body.addEventListener("keydown",e=>{"Tab"===e.key&&document.body.classList.remove(tn)}),eh(e7`
    ${te} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${te} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${te} *:focus {
        outline: #08f auto 2px;
    }
    
    ${te} li {
        list-style: none;
    }
    
    ${te} button {
        outline: none;
    }
    
    body.${tt} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${tn} ${te} *:focus {
        outline: none;
    }
`,{}));function to(e,t){return"#"===e[0]&&(e=function(e){"#"===e[0]&&(e=e.slice(1));let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t].join(",")}(e)),`rgba(${e}, ${t})`}function tl(e){return e.toString()+"px"}let ti=class{constructor(){L(this,"storage",{})}static getInstance(){return ti.instance||(ti.instance=new ti),ti.instance}get length(){return Object.keys(this.storage).length}clear(){this.storage={}}getItem(e){var t;return null!=(t=this.storage[e])?t:null}key(e){var t;let n=Object.keys(this.storage);return e<0||e>=n.length?null:null!=(t=n[e])?t:null}removeItem(e){delete this.storage[e]}setItem(e,t){this.storage[e]=t}};L(ti,"instance");class ta extends g.K3{constructor(...e){super(...e),Object.setPrototypeOf(this,ta.prototype)}}function ts(...e){try{console.debug("[TON_CONNECT_UI]",...e)}catch(e){}}function tc(e,t="_self"){ts("openLink",e,t),window.open(e,t,"noopener noreferrer")}function tu(e){tc(e,"_blank")}function td(e,t){let n=()=>{tw("safari")||tm("android")&&tw("firefox")||t()},r=setTimeout(()=>n(),200);window.addEventListener("blur",()=>clearTimeout(r),{once:!0}),tc(e,"_self")}function th(e){return A(this,null,function*(){yield new Promise(e=>requestAnimationFrame(e)),e()})}function tg(){if("undefined"!=typeof window)return window}function tf(){if(function(){try{return"undefined"!=typeof localStorage}catch(e){return!1}}())return localStorage;if(void 0!==w&&null!=w.versions&&null!=w.versions.node)throw new ta("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");return ti.getInstance()}function tp(){var e,t,n;let r,o;let l=new f().getResult(),i=null==(e=l.os.name)?void 0:e.toLowerCase(),a=null==(t=l.device.model)?void 0:t.toLowerCase();switch(!0){case"ipad"===a:r="ipad";break;case"ios"===i:r="ios";break;case"android"===i:r="android";break;case"mac os"===i:r="macos";break;case"linux"===i:r="linux";break;case null==i?void 0:i.includes("windows"):r="windows"}let s=null==(n=l.browser.name)?void 0:n.toLowerCase();switch(!0){case"chrome"===s:o="chrome";break;case"firefox"===s:o="firefox";break;case null==s?void 0:s.includes("safari"):o="safari";break;case null==s?void 0:s.includes("opera"):o="opera"}return{os:r,browser:o}}function tm(...e){return e.includes(tp().os)}function tw(...e){return e.includes(tp().browser)}function tv(e,t){return t+new URL(e).search}class tC{constructor(){L(this,"localStorage"),L(this,"storageKey","ton-connect-ui_wallet-info"),this.localStorage=tf()}setWalletInfo(e){this.localStorage.setItem(this.storageKey,JSON.stringify(e))}getWalletInfo(){let e=this.localStorage.getItem(this.storageKey);return e?JSON.parse(e):null}removeWalletInfo(){this.localStorage.removeItem(this.storageKey)}}class ty{constructor(){L(this,"localStorage"),L(this,"storageKey","ton-connect-ui_preferred-wallet"),this.localStorage=tf()}setPreferredWalletAppName(e){this.localStorage.setItem(this.storageKey,e)}getPreferredWalletAppName(){return this.localStorage.getItem(this.storageKey)||void 0}}class tx{constructor(){L(this,"localStorage"),L(this,"storageKey","ton-connect-ui_last-selected-wallet-info"),this.localStorage=tf()}setLastSelectedWalletInfo(e){this.localStorage.setItem(this.storageKey,JSON.stringify(e))}getLastSelectedWalletInfo(){let e=this.localStorage.getItem(this.storageKey);return e?JSON.parse(e):null}removeLastSelectedWalletInfo(){this.localStorage.removeItem(this.storageKey)}}let[tb,tk]=F({status:"closed",closeReason:null}),tS=j(()=>"opened"===tb().status),[tM,t$]=F({status:"closed",closeReason:null}),tL=j(()=>"opened"===tM().status),tA=j(()=>{let e=tM();return"opened"===e.status?e.walletInfo:null}),tT="undefined"!=typeof window?new tx:void 0,[tE,t_]=F((null==tT?void 0:tT.getLastSelectedWalletInfo())||null),tR=e=>{tT||(tT=new tx),e?tT.setLastSelectedWalletInfo(e):tT.removeLastSelectedWalletInfo(),t_(e)},[tW,tI]=F(null),tN={en:tP({common:{close:"Close",openWallet:"Open wallet",copyLink:"Copy Link",linkCopied:"Link Copied",copied:"Copied",yourWallet:"Your Wallet",retry:"Retry",get:"GET",mobile:"Mobile",browserExtension:"Browser Extension",desktop:"Desktop"},button:{connectWallet:"Connect Wallet",dropdown:{copy:"Copy address",copied:"Address copied!",disconnect:"Disconnect"}},notifications:{confirm:{header:"Open {{ name }} to\xa0confirm the\xa0transaction."},transactionSent:{header:"Transaction sent",text:"Your transaction\xa0will be\xa0processed in\xa0a\xa0few seconds."},transactionCanceled:{header:"Transaction canceled",text:"There will be no changes to\xa0your account."},dataSigned:{header:"Data signed"},signDataCanceled:{header:"Sign data canceled"}},walletItem:{walletOn:"Wallet in",recent:"Recent",installed:"Installed",popular:"Popular"},walletModal:{loading:"Loading wallets",wallets:"Wallets",mobileUniversalModal:{connectYourWallet:"Connect your TON\xa0wallet",openWalletOnTelegramOrSelect:"Use Wallet in Telegram or choose other application",openWalletOnTelegram:"Connect Wallet in Telegram",chooseOtherApplication:"Choose other application",openLink:"Open Link",scan:"Scan with your mobile\xa0wallet"},desktopUniversalModal:{connectYourWallet:"Connect your TON wallet",scan:"Scan with your mobile wallet",availableWallets:"Available wallets"},mobileConnectionModal:{showQR:"Show QR Code",scanQR:"Scan the\xa0QR code below with your phone’s\xa0or\xa0{{ name }}’s camera",missingFeatures:"Please update {{ name }}, your version does not support required features for this dApp",notSupportedWallet:"{{ name }} doesn’t support the requested action. Please connect another wallet that supports it",continueIn:"Continue in {{ name }}…",updateWallet:"Update {{ name }}",chooseAnotherWallet:"Choose Another Wallet",connectionDeclined:"Connection declined"},desktopConnectionModal:{scanQR:"Scan the\xa0QR code below with your phone’s\xa0or\xa0{{ name }}’s camera",continueInExtension:"Continue in\xa0{{ name }} browser extension…",dontHaveExtension:"Seems you don't have installed {{ name }}\xa0browser\xa0extension",missingFeatures:"Please update {{ name }}, your version does not support required features for this dApp",notSupportedWallet:"{{ name }} doesn’t support the requested action. Please connect another wallet that supports it",getWallet:"Get {{ name }}",updateWallet:"Update {{ name }}",chooseAnotherWallet:"Choose Another Wallet",continueOnDesktop:"Continue in\xa0{{ name }} on desktop…",openWalletOnTelegram:"Connect Wallet in Telegram on desktop",connectionDeclined:"Connection declined"},infoModal:{whatIsAWallet:"What is a wallet",secureDigitalAssets:"Secure digital assets storage",walletProtects:"A wallet protects and manages your digital assets\xa0including TON, tokens and collectables.",controlIdentity:"Control your Web3 identity",manageIdentity:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in\xa0the\xa0blockchain ecosystem.",effortlessCryptoTransactions:"Effortless crypto transactions",easilySend:"Easily send, receive, monitor your cryptocurrencies.\xa0Streamline your operations with\xa0decentralized applications.",getAWallet:"Get a Wallet"},restoreModal:{title:"Restore",step1:{title:"Find your current recovery phrase",text:"Open your wallet settings and locate the\xa0recovery\xa0phrase"},step2:{title:"Copy your recovery phrase",text:"Write it down or copy it to a safe place"},step3:{title:"Restore in a supported wallet",text:"Enter the recovery phrase to access your wallet"}},allWallets:{walletsBelowNotSupported:"The wallets below don’t support all features of\xa0the connected service. You can use your recovery phrase in one of the supported wallets above.",walletNotSupportService:"{{ name }} doesn’t support connected service"},featureNotSupported:{wallet:{title:"{{ name }} doesn’t support the requested\xa0action",description:"Install a supported wallet from the list below, restore it with your recovery phrase, then connect it and try again.",info:"Learn how to restore your wallet"},version:{description:"Your current version of {{ name }} or wallet contract type doesn't support the required features. Please update it to continue.",updateButton:"Update {{ name }}",aboutW5:"About W5"},disconnect:{title:"Confirm Disconnect",description:"You will be disconnected from your current wallet and redirected to connect {{ name }}.",button:"Disconnect"}}},actionModal:{confirmTransaction:{header:"Confirm the\xa0transaction in\xa0{{ name }}",text:"It will only take a\xa0moment."},signData:{header:"Sign the\xa0data in\xa0{{ name }}",text:"It will only take a\xa0moment."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled",dataSigned:"$notifications.dataSigned",signDataCanceled:"$notifications.signDataCanceled"}}),ru:tP({common:{close:"Закрыть",openWallet:"Открыть кошелёк",copyLink:"Скопировать",linkCopied:"Ссылка скопирована",copied:"Скопировано",yourWallet:"Ваш кошелёк",retry:"Повторить",get:"Скачать",mobile:"Мобильный",browserExtension:"Расширение",desktop:"Десктоп"},button:{connectWallet:"Подключить кошелёк",dropdown:{copy:"Скопировать адрес",copied:"Адрес скопирован!",disconnect:"Отключить кошелёк"}},notifications:{confirm:{header:"Откройте {{ name }}, чтобы\xa0подтвердить транзакцию."},transactionSent:{header:"Транзакция отправлена",text:"Ваша транзакция\xa0будет обработана через\xa0несколько секунд."},transactionCanceled:{header:"Транзакция отменена",text:"Состояние вашего счёта не\xa0изменится."},dataSigned:{header:"Данные подписаны"},signDataCanceled:{header:"Подпись данных отменена"}},walletItem:{walletOn:"Wallet в",recent:"Недавний",installed:"Установлен",popular:"Популярен"},walletModal:{loading:"Кошельки загружаются",wallets:"Кошельки",mobileUniversalModal:{connectYourWallet:"Подключите TON\xa0кошелёк",openWalletOnTelegramOrSelect:"Подключите Wallet в\xa0Telegram или\xa0выберете другое приложение",openWalletOnTelegram:"Открыть Wallet в Telegram",chooseOtherApplication:"Выберите другое приложение",openLink:"Открыть",scan:"Отсканируйте камерой вашего\xa0телефона"},desktopUniversalModal:{connectYourWallet:"Подключите TON кошелёк",scan:"Отсканируйте QR-код камерой вашего\xa0телефона",availableWallets:"Доступные кошельки"},mobileConnectionModal:{showQR:"Показать QR-код",scanQR:"Отсканируйте QR-код ниже камерой в\xa0приложении {{ name }}, или\xa0камерой телефона",missingFeatures:"Обновите {{ name }}, ваша версия не поддерживает необходимые функции для этого dApp",notSupportedWallet:"{{ name }} не поддерживает запрошенное действие. Пожалуйста, подключите другой кошелёк, который поддерживает это",continueIn:"Продолжите в {{ name }}…",updateWallet:"Обновить {{ name }}",chooseAnotherWallet:"Выбрать другой кошелёк",connectionDeclined:"Подключение отклонено"},desktopConnectionModal:{scanQR:"Отсканируйте QR-код ниже камерой в\xa0приложении {{ name }}, или\xa0камерой телефона",continueInExtension:"Откройте браузерное расширение {{ name }}",dontHaveExtension:"Похоже, у вас не\xa0установлено браузерное\xa0расширение\xa0{{ name }}",missingFeatures:"Обновите {{ name }}, ваша версия не поддерживает необходимые функции для этого dApp",notSupportedWallet:"{{ name }} не поддерживает запрошенное действие. Пожалуйста, подключите другой кошелёк, который поддерживает это",getWallet:"Скачать {{ name }}",updateWallet:"Обновить {{ name }}",chooseAnotherWallet:"Выбрать другой кошелёк",continueOnDesktop:"Откройте {{ name }} на\xa0компьютере…",openWalletOnTelegram:"Открыть Wallet в\xa0Telegram",connectionDeclined:"Подключение отклонено"},infoModal:{whatIsAWallet:"Что такое кошелёк?",secureDigitalAssets:"Надежное хранилище цифровых активов",walletProtects:"Кошелёк защищает ваши цифровые активы, включая TON, токены и\xa0предметы коллекционирования, и\xa0управляет ими.",controlIdentity:"Контроль своей личности Web3",manageIdentity:"Управляйте своей цифровой идентификацией и\xa0с\xa0легкостью получайте доступ к\xa0децентрализованным приложениям. Сохраняйте контроль над\xa0своими данными и\xa0безопасно участвуйте в\xa0экосистеме\xa0блокчейна.",effortlessCryptoTransactions:"Простые криптотранзакции",easilySend:"Легко отправляйте, получайте и\xa0отслеживайте свои криптовалюты. Оптимизируйте свои операции с\xa0помощью децентрализованных приложений.",getAWallet:"Скачать кошелёк"},restoreModal:{title:"Восстановление",step1:{title:"Найдите вашу текущую фразу восстановления",text:"Откройте настройки кошелька и найдите фразу\xa0восстановления"},step2:{title:"Скопируйте вашу фразу восстановления",text:"Запишите её или сохраните в безопасном месте"},step3:{title:"Восстановите в поддерживаемом кошельке",text:"Введите фразу восстановления для доступа\xa0к\xa0вашему\xa0кошельку"}},allWallets:{walletsBelowNotSupported:"Кошельки ниже не поддерживают все функции подключённого сервиса. Вы можете использовать свою фразу восстановления в одном из поддерживаемых выше кошельков.",walletNotSupportService:"{{ name }} не поддерживает подключённый сервис"},featureNotSupported:{wallet:{title:"{{ name }} не поддерживает запрошенное\xa0действие",description:"Установите поддерживаемый кошелёк из списка ниже, восстановите его с помощью фразы восстановления, затем подключитесь и попробуйте снова.",info:"Узнать, как восстановить кошелёк"},version:{description:"Текущая версия {{ name }} или тип контракта кошелька не поддерживает необходимые функции. Обновите кошелёк, чтобы продолжить.",updateButton:"Обновить {{ name }}",aboutW5:"Про W5"},disconnect:{title:"Подтвердите отключение",description:"Вы будете отключены от текущего кошелька и перенаправлены на подключение {{ name }}.",button:"Отключиться"}}},actionModal:{confirmTransaction:{header:"Подтвердите действие в\xa0{{ name }}",text:"Это займет пару секунд."},signData:{header:"Подпишите данные в\xa0{{ name }}",text:"Это займет пару секунд."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled",dataSigned:"$notifications.dataSigned",signDataCanceled:"$notifications.signDataCanceled"}})};function tP(e){let t=n=>{Object.entries(n).forEach(([r,o])=>{if("object"==typeof o&&o)return t(o);if("string"==typeof o){if("$"===o[0]){let t=o.slice(1).split("."),l=e;t.forEach(e=>{if(e in l)l=l[e];else throw Error(`Cannot parse translations: there is no property ${e} in translation`)}),n[r]=l}"\\$"===o.slice(0,2)&&(n[r]=o.slice(1))}})};return t(e),e}let tB=G(),tH=Symbol("store-raw"),tV=Symbol("store-node"),tD=Symbol("store-name");function tO(e,t){let n=e[E];if(!n&&(Object.defineProperty(e,E,{value:n=new Proxy(e,tz)}),!Array.isArray(e))){let t=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,l=t.length;o<l;o++){let l=t[o];r[l].get&&Object.defineProperty(e,l,{enumerable:r[l].enumerable,get:r[l].get.bind(n)})}}return n}function tF(e){let t;return null!=e&&"object"==typeof e&&(e[E]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function tK(e,t=new Set){let n,r,o,l;if(n=null!=e&&e[tH])return n;if(!tF(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,l=e.length;n<l;n++)(r=tK(o=e[n],t))!==o&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);let n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let a=0,s=n.length;a<s;a++)i[l=n[a]].get||(r=tK(o=e[l],t))===o||(e[l]=r)}return e}function tU(e){let t=e[tV];return t||Object.defineProperty(e,tV,{value:t={}}),t}function tq(e,t,n){return e[t]||(e[t]=tZ(n))}function tj(e){if(B){let t=tU(e);(t._||(t._=tZ()))()}}function tZ(e){let[t,n]=F(e,{equals:!1,internal:!0});return t.$=n,t}let tz={get(e,t,n){if(t===tH)return e;if(t===E)return n;if(t===_)return tj(e),n;let r=tU(e),o=r.hasOwnProperty(t),l=o?r[t]():e[t];if(t===tV||"__proto__"===t)return l;if(!o){let n=Object.getOwnPropertyDescriptor(e,t);B&&("function"!=typeof l||e.hasOwnProperty(t))&&!(n&&n.get)&&(l=tq(r,t,l)())}return tF(l)?tO(l):l},has(e,t){return t===tH||t===E||t===_||t===tV||"__proto__"===t||(this.get(e,t,e),t in e)},set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){return tj(e),Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(e,t){let n=Reflect.getOwnPropertyDescriptor(e,t);return n&&!n.get&&n.configurable&&t!==E&&t!==tV&&t!==tD&&(delete n.value,delete n.writable,n.get=()=>e[E][t]),n}};function tG(e,t,n,r=!1){if(!r&&e[t]===n)return;let o=e[t],l=e.length;void 0===n?delete e[t]:e[t]=n;let i=tU(e),a;(a=tq(i,t,o))&&a.$(()=>n),Array.isArray(e)&&e.length!==l&&(a=tq(i,"length",l))&&a.$(e.length),(a=i._)&&a.$()}function tY(e,t){let n=Object.keys(t);for(let r=0;r<n.length;r+=1){let o=n[r];tG(e,o,t[o])}}function tQ(...[e,t]){let n=tK(e||{}),r=Array.isArray(n);return[tO(n),function(...e){er(()=>{r&&1===e.length?function(e,t){if("function"==typeof t&&(t=t(e)),Array.isArray(t=tK(t))){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){let r=t[n];e[n]!==r&&tG(e,n,r)}tG(e,"length",r)}else tY(e,t)}(n,e[0]):function e(t,n,r=[]){let o,l=t;if(n.length>1){let i=typeof(o=n.shift()),a=Array.isArray(t);if(Array.isArray(o)){for(let l=0;l<o.length;l++)e(t,[o[l]].concat(n),r);return}if(a&&"function"===i){for(let l=0;l<t.length;l++)o(t[l],l)&&e(t,[l].concat(n),r);return}if(a&&"object"===i){let{from:l=0,to:i=t.length-1,by:a=1}=o;for(let o=l;o<=i;o+=a)e(t,[o].concat(n),r);return}if(n.length>1){e(t[o],n,[o].concat(r));return}l=t[o],r=[o].concat(r)}let i=n[0];("function"!=typeof i||(i=i(l,r))!==l)&&(void 0!==o||void 0!=i)&&(i=tK(i),void 0===o||tF(l)&&tF(i)&&!Array.isArray(i)?tY(l,i):tG(t,o,i))}(n,e)},!1)}]}let tJ={constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#0098EA",telegramButton:"#0098EA",icon:{primary:"#0F0F0F",secondary:"#7A8999",tertiary:"#C1CAD2",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#FFFFFF",secondary:"#F1F3F5",segment:"#FFFFFF",tint:"#F1F3F5",qr:"#F1F3F5"},text:{primary:"#0F0F0F",secondary:"#6A7785"}};function tX(e){return"[object Object]"===Object.prototype.toString.call(e)}function t1(e){var t,n;return!1!==tX(e)&&(void 0===(t=e.constructor)||!1!==tX(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))}function t0(e,t){return e?p(t,e,{arrayMerge:(e,t,n)=>t,isMergeableObject:t1}):t}let[t2,t5]=tQ({theme:eq.LIGHT,colors:tJ,borderRadius:"m"}),t4={[eq.LIGHT]:tJ,[eq.DARK]:{constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#E5E5EA",telegramButton:"#31A6F5",icon:{primary:"#E5E5EA",secondary:"#909099",tertiary:"#434347",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#121214",secondary:"#18181A",segment:"#262629",tint:"#222224",qr:"#FFFFFF"},text:{primary:"#E5E5EA",secondary:"#7D7D85"}}},t3={[eq.LIGHT]:void 0,[eq.DARK]:void 0};function t9(e,t){t&&(t3[eq.DARK]=t0(t[eq.DARK],t3[eq.DARK]),t3[eq.LIGHT]=t0(t[eq.LIGHT],t3[eq.LIGHT])),t5({theme:e,colors:t0(t3[e],t4[e])})}let t8=e6.div`
    background-color: ${e=>e.theme.colors.background.secondary};
`,t6=e=>{let t;let[n,r]=F(null);return q(()=>{let t=new window.Image;return(t.src=e.src,t.alt=e.alt||"",t.setAttribute("draggable","false"),e.class&&t.classList.add(e.class),t.complete)?r(t):(t.addEventListener("load",()=>r(t)),()=>t.removeEventListener("load",()=>r(t)))}),[eh(eC,{get when(){return n()},get children(){return n()}}),eh(eC,{get when(){return!n()},get children(){return eh(t8,{get class(){return e.class},ref(e){let n=t;"function"==typeof n?n(e):t=e}})}})]},t7={};try{let e=location.hash.toString();t7=function(e){e=e.replace(/^#/,"");let t={};if(!e.length)return t;if(0>e.indexOf("=")&&0>e.indexOf("?"))return t._path=nc(e),t;let n=e.indexOf("?");if(n>=0){let r=e.substr(0,n);t._path=nc(r),e=e.substr(n+1)}let r=function(e){let t,n,r,o,l={};if(!e.length)return l;let i=e.split("&");for(t=0;t<i.length;t++)r=nc((n=i[t].split("="))[0]),o=null==n[1]?null:nc(n[1]),l[r]=o;return l}(e);for(let e in r)t[e]=r[e];return t}(e)}catch(e){}let ne="unknown";if((null==t7?void 0:t7.tgWebAppPlatform)&&(ne=null!=(l=t7.tgWebAppPlatform)?l:"unknown"),"unknown"===ne){let e=tg();ne=null!=(s=null==(a=null==(i=null==e?void 0:e.Telegram)?void 0:i.WebApp)?void 0:a.platform)?s:"unknown"}let nt="6.0";if((null==t7?void 0:t7.tgWebAppVersion)&&(nt=t7.tgWebAppVersion),!nt){let e=tg();nt=null!=(d=null==(u=null==(c=null==e?void 0:e.Telegram)?void 0:c.WebApp)?void 0:u.version)?d:"6.0"}function nn(...e){return e.includes(ne)}function nr(){var e;return"unknown"!==ne||!!(null==(e=tg())?void 0:e.TelegramWebviewProxy)}function no(){var e;let t=!!(null==(e=tg())?void 0:e.TelegramWebview);return(nr()||t)&&"unknown"===ne}function nl(){ns("web_app_expand",{})}function ni(e,t){let n=new URL(e);if("http:"!==n.protocol&&"https:"!==n.protocol){if(t)return t();throw new ta(`Url protocol is not supported: ${n}`)}if("t.me"!==n.hostname){if(t)return t();throw new ta(`Url host is not supported: ${n}`)}let r=n.pathname+n.search;na()||function(e,t){let n,r,o,l;"string"!=typeof e&&(e=""),"string"!=typeof t&&(t="");let i=e.replace(/^\s+|\s+$/g,"").split("."),a=t.replace(/^\s+|\s+$/g,"").split(".");for(r=0,n=Math.max(i.length,a.length);r<n;r++)if((o=parseInt(i[r])||0)!==(l=parseInt(a[r])||0)){if(o>l)return 1;return -1}return 0}(nt,"6.1")>=0?ns("web_app_open_tg_link",{path_full:r}):tu("https://t.me"+r)}function na(){try{let e=tg();if(!e)return!1;return null!=e.parent&&e!==e.parent}catch(e){return!1}}function ns(e,t){try{let n=tg();if(!n)throw new ta("Can't post event to parent window: window is not defined");if(void 0!==n.TelegramWebviewProxy)ts("postEvent",e,t),n.TelegramWebviewProxy.postEvent(e,JSON.stringify(t));else if(n.external&&"notify"in n.external)ts("postEvent",e,t),n.external.notify(JSON.stringify({eventType:e,eventData:t}));else if(na()){let r=JSON.stringify({eventType:e,eventData:t});ts("postEvent",e,t),n.parent.postMessage(r,"*")}else throw new ta("Can't post event to TMA")}catch(e){!function(...e){try{console.error("[TON_CONNECT_UI]",...e)}catch(e){}}(`Can't post event to parent window: ${e}`)}}function nc(e){try{return e=e.replace(/\+/g,"%20"),decodeURIComponent(e)}catch(t){return e}}let nu={mobile:440,tablet:1020};function nd(e){let t=tg();if(!t)return"desktop"===e;if(nn("weba"))return!0;let n=t.innerWidth;switch(e){case"desktop":return n>nu.tablet;case"tablet":return n>nu.mobile;default:return n<=nu.mobile||tm("ios","android","ipad")}}function nh(e){switch(e){case"mobile":return`@media (max-width: ${nu.mobile}px)`;case"tablet":return`@media (max-width: ${nu.tablet}px) (min-width: ${nu.mobile}px)`;default:return`@media (min-width: ${nu.tablet}px)`}}let ng="@media (hover: none)",nf="@media not all and (hover: none)",np={m:"100vh",s:"8px",none:"0"},nm={s:.02,m:.04},nw=e6.button`
    display: ${e=>e.leftIcon||e.rightIcon?"flex":"inline-block"};
    gap: ${e=>e.leftIcon||e.rightIcon?"6px":"unset"};
    align-items: ${e=>e.leftIcon||e.rightIcon?"center":"unset"};
    justify-content: ${e=>e.leftIcon||e.rightIcon?"space-between":"unset"};
    background-color: ${e=>"flat"===e.appearance?"transparent":"secondary"===e.appearance?e.theme.colors.background.tint:to(e.theme.colors.accent,.12)};
    color: ${e=>"secondary"===e.appearance?e.theme.colors.text.primary:e.theme.colors.accent};

    padding: ${e=>"flat"===e.appearance?"0":"9px 16px"};
    padding-left: ${e=>e.leftIcon&&"flat"!==e.appearance?"12px":"16px"};
    padding-right: ${e=>e.rightIcon&&"flat"!==e.appearance?"12px":"16px"};
    border: none;
    border-radius: ${e=>np[e.theme.borderRadius]};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 510;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${nf} {
        &:hover {
            transform: ${e=>e.disabled?"unset":`scale(${1+nm[e.scale]})`};
        }
    }

    &:active {
        transform: ${e=>e.disabled?"unset":`scale(${1-nm[e.scale]})`};
    }

    ${ng} {
        &:active {
            transform: ${e=>e.disabled?"unset":`scale(${1-2*nm[e.scale]})`};
        }
    }
`;function nv(e){let t=Z(()=>Object.keys(e).filter(e=>e.startsWith("data-"))),[n]=ew(e,t);return n}let nC=e=>{let t=nv(e);return eh(nw,em({get appearance(){return e.appearance||"primary"},get class(){return e.class},onClick:t=>{var n;return null==(n=e.onClick)?void 0:n.call(e,t)},onMouseEnter:t=>{var n;return null==(n=e.onMouseEnter)?void 0:n.call(e,t)},onMouseLeave:t=>{var n;return null==(n=e.onMouseLeave)?void 0:n.call(e,t)},ref(t){let n=e.ref;"function"==typeof n?n(t):e.ref=t},get disabled(){return e.disabled},get scale(){return e.scale||"m"},get leftIcon(){return!!e.leftIcon},get rightIcon(){return!!e.rightIcon},"data-tc-button":"true"},t,{get children(){return[j(()=>e.leftIcon),j(()=>e.children),j(()=>e.rightIcon)]}}))};function ny(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let nx=e=>{let t;let n=!0,[r,o]=F(),[l,i]=F(),a=Q(()=>e.children),{onBeforeEnter:s,onEnter:c,onAfterEnter:u,onBeforeExit:d,onExit:h,onAfterExit:g}=e,f=j(()=>{let t=e.name||"s";return{enterActiveClass:e.enterActiveClass||t+"-enter-active",enterClass:e.enterClass||t+"-enter",enterToClass:e.enterToClass||t+"-enter-to",exitActiveClass:e.exitActiveClass||t+"-exit-active",exitClass:e.exitClass||t+"-exit",exitToClass:e.exitToClass||t+"-exit-to"}});function p(t,a){if(!n||e.appear){let n=function(s){t&&(!s||s.target===t)&&(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),t.classList.remove(...h),t.classList.remove(...g),er(()=>{r()!==t&&o(t),l()===t&&i(void 0)},!1),u&&u(t),"inout"===e.mode&&m(t,a))},d=f().enterClass.split(" "),h=f().enterActiveClass.split(" "),g=f().enterToClass.split(" ");s&&s(t),t.classList.add(...d),t.classList.add(...h),ny(()=>{t.classList.remove(...d),t.classList.add(...g),c&&c(t,()=>n()),(!c||c.length<2)&&(t.addEventListener("transitionend",n),t.addEventListener("animationend",n))})}a&&!e.mode?i(t):o(t)}function m(t,n){let l=f().exitClass.split(" "),i=f().exitActiveClass.split(" "),a=f().exitToClass.split(" ");if(!n.parentNode)return s();function s(l){l&&l.target!==n||(n.removeEventListener("transitionend",s),n.removeEventListener("animationend",s),n.classList.remove(...i),n.classList.remove(...a),r()===n&&o(void 0),g&&g(n),"outin"===e.mode&&p(t,n))}d&&d(n),n.classList.add(...l),n.classList.add(...i),ny(()=>{n.classList.remove(...l),n.classList.add(...a)}),h&&h(n,()=>s()),(!h||h.length<2)&&(n.addEventListener("transitionend",s),n.addEventListener("animationend",s))}return K(r=>{for(t=a();"function"==typeof t;)t=t();return Z(()=>(t&&t!==r&&("outin"!==e.mode?p(t,r):n&&o(t)),r&&r!==t&&"inout"!==e.mode&&m(t,r),n=!1,t))}),[r,l]};function nb(e){let{top:t,bottom:n,left:r,right:o,width:l,height:i}=e.getBoundingClientRect(),a=e.parentNode.getBoundingClientRect();return{top:t-a.top,bottom:n,left:r-a.left,right:o,width:l,height:i}}let nk=e=>{let t=Q(()=>e.children),n=j(()=>{let t=e.name||"s";return{enterActiveClass:e.enterActiveClass||t+"-enter-active",enterClass:e.enterClass||t+"-enter",enterToClass:e.enterToClass||t+"-enter-to",exitActiveClass:e.exitActiveClass||t+"-exit-active",exitClass:e.exitClass||t+"-exit",exitToClass:e.exitToClass||t+"-exit-to",moveClass:e.moveClass||t+"-move"}}),{onBeforeEnter:r,onEnter:o,onAfterEnter:l,onBeforeExit:i,onExit:a,onAfterExit:s}=e,[c,u]=F(),d=[],h=!0;return K(()=>{let e=t(),c=[...e],g=new Set(e),f=new Set(d),p=n().enterClass.split(" "),m=n().enterActiveClass.split(" "),w=n().enterToClass.split(" "),v=n().exitClass.split(" "),C=n().exitActiveClass.split(" "),y=n().exitToClass.split(" ");for(let t=0;t<e.length;t++){let n=e[t];if(!h&&!f.has(n)){let e=function(t){n&&(!t||t.target===n)&&(n.removeEventListener("transitionend",e),n.removeEventListener("animationend",e),n.classList.remove(...m),n.classList.remove(...w),l&&l(n))};r&&r(n),n.classList.add(...p),n.classList.add(...m),ny(()=>{n.classList.remove(...p),n.classList.add(...w),o&&o(n,()=>e()),(!o||o.length<2)&&(n.addEventListener("transitionend",e),n.addEventListener("animationend",e))})}}for(let e=0;e<d.length;e++){let t=d[e];if(!g.has(t)&&t.parentNode){let n=function(e){e&&e.target!==t||(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),t.classList.remove(...C),t.classList.remove(...y),s&&s(t),u(d=d.filter(e=>e!==t)))};c.splice(e,0,t),i&&i(t),t.classList.add(...v),t.classList.add(...C),ny(()=>{t.classList.remove(...v),t.classList.add(...y)}),a&&a(t,()=>n()),(!a||a.length<2)&&(t.addEventListener("transitionend",n),t.addEventListener("animationend",n))}}d=c,u(c)}),q(e=>{let t=c();return(t.forEach(t=>{let n;(n=e.get(t))?n.new&&(n.new=!1,n.newPos=nb(t)):e.set(t,n={pos:nb(t),new:!h}),n.new&&t.addEventListener("transitionend",()=>{n.new=!1,t.parentNode&&(n.newPos=nb(t))},{once:!0}),n.newPos&&(n.pos=n.newPos),n.newPos=nb(t)}),h)?h=!1:(t.forEach(t=>{let n=e.get(t),r=n.pos,o=n.newPos,l=r.left-o.left,i=r.top-o.top;if(l||i){n.moved=!0;let e=t.style;e.transform=`translate(${l}px,${i}px)`,e.transitionDuration="0s"}}),document.body.offsetHeight,t.forEach(t=>{let r=e.get(t);if(r.moved){let e=function(n){(!n||n.target===t)&&t.parentNode&&(!n||/transform$/.test(n.propertyName))&&(t.removeEventListener("transitionend",e),t.classList.remove(...l))};r.moved=!1;let o=t.style,l=n().moveClass.split(" ");t.classList.add(...l),o.transform=o.transitionDuration="",t.addEventListener("transitionend",e)}})),e},new Map),c},nS="androidBackHandler",nM={[nS]:!0},n$=eE('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>',4,!0),nL={left:0,top:90,right:180,bottom:270},nA=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.secondary,r=()=>e.direction||"left";return eh(e6("svg")`
        transform: rotate(${e=>nL[e.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",get svgDirection(){return r()},get children(){let e=n$.cloneNode(!0);return U(()=>e_(e,"fill",n())),e}})},nT=eE('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),nE=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=nT.cloneNode(!0),t=e.firstChild;return U(()=>e_(t,"fill",n())),e})()},n_=e6.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${e=>e.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${nf} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${ng} {
        &:active {
            transform: scale(0.92);
        }
    }
`,nR=e=>{let t=nv(e),n=()=>e.icon||"close";return eh(n_,em({get class(){return e.class},onClick:()=>e.onClick(),"data-tc-icon-button":"true"},t,{get children(){return[eh(eC,{get when(){return!!e.children},get children(){return e.children}}),eh(eC,{get when(){return!e.children},get children(){return eh(ey,{get children(){return[eh(ex,{get when(){return"close"===n()},get children(){return eh(nE,{get fill(){return e.fill}})}}),eh(ex,{get when(){return"arrow"===n()},get children(){return eh(nA,{get fill(){return e.fill}})}}),eh(ex,{get when(){return"question"===n()},get children(){return eh(rj,{get fill(){return e.fill}})}}),eh(ex,{get when(){return"string"!=typeof n()},get children(){return n()}})]}})}})]}}))},nW={m:"24px",s:"16px",none:"0"},nI=e6.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${nh("mobile")} {
        padding-bottom: 0;
    }
`,nN=e2`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${nh("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,nP=e6.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>nW[e.theme.borderRadius]};

    ${nh("mobile")} {
        width: 100%;
    }
`,nB=e6(nR)`
    position: absolute;
    right: 16px;
    top: 16px;
`,nH=e6.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${e=>nW[e.theme.borderRadius]}
        ${e=>nW[e.theme.borderRadius]};
`,nV=e6(nR)`
    background-color: ${e=>to(e.theme.colors.icon.secondary,.12)};
`;class nD{constructor(){L(this,"currentTime",0)}}let nO=class{constructor(){L(this,"currentTime",0),L(this,"playbackRate",1),L(this,"startTime",null),L(this,"timeline",new nD),L(this,"finished",Promise.resolve(this)),L(this,"effect",null),L(this,"id",""),L(this,"pending",!1),L(this,"playState","finished"),L(this,"replaceState","active"),L(this,"ready",Promise.resolve(this)),L(this,"oncancel",null),L(this,"onfinish",null),L(this,"onremove",null)}static create(){return nO._instance||(function(...e){try{console.warn("[TON_CONNECT_UI]",...e)}catch(e){}}("Animation is not supported in this environment: please consider using the `web-animations-js` polyfill to provide a fallback implementation of the Web Animations API."),nO._instance=new nO),nO._instance}cancel(){}finish(){}pause(){}play(){}reverse(){}addEventListener(e,t,n){}dispatchEvent(e){return!1}removeEventListener(e,t,n){}updatePlaybackRate(e){}commitStyles(){}persist(){}};function nF(e,t,n){return"animate"in e?e.animate(t,n):nO.create()}L(nO,"_instance",null);let nK=eE("<div></div>"),nU=function(e,t){let n=n=>{var r;return!e.contains(n.target)&&(null==(r=t())?void 0:r())};document.body.addEventListener("click",n),z(()=>document.body.removeEventListener("click",n))},nq=function(e,t){let n=e=>{var n,r;"Escape"===e.key&&(null==(n=document.activeElement)||n.blur(),null==(r=t())||r())};document.body.addEventListener("keydown",n),z(()=>document.body.removeEventListener("keydown",n))},nj=function(e,t){let{isEnabled:n,onClose:r}=t();if(!n||"android"!==tp().os)return;window.history.pushState(nM,"");let o=e=>{e.preventDefault(),r()};window.addEventListener("popstate",o,{once:!0}),z(()=>{window.removeEventListener("popstate",o),th(()=>{var e;(null==(e=window.history.state)?void 0:e[nS])===!0&&window.history.back()})})},nZ=e=>{let t=e9(),n=nv(e);return q(()=>{e.opened?document.documentElement.scrollHeight!==document.documentElement.clientHeight&&(document.body.style.top=tl(-document.documentElement.scrollTop),document.body.classList.add(tt)):(document.body.classList.remove(tt),document.documentElement.scrollTo({top:-parseFloat(getComputedStyle(document.body).top)}),document.body.style.top="auto")}),eh(nx,{onBeforeEnter:e=>{let t=nd("mobile")?200:100;nF(e,[{opacity:0},{opacity:1}],{duration:t}),nd("mobile")&&nF(e.firstElementChild,[{transform:"translateY(390px)"},{transform:"translateY(0)"}],{duration:t})},onExit:(e,t)=>{let n=nd("mobile")?200:100,r=nF(e,[{opacity:1},{opacity:0}],{duration:n});if(nd("mobile")){let o=nF(e.firstElementChild,[{transform:"translateY(0)"},{transform:"translateY(390px)"}],{duration:n});Promise.all([r.finished,o.finished]).then(t)}else r.finished.then(t)},get children(){return eh(eC,{get when(){return e.opened},get children(){return eh(nI,em({"data-tc-modal":"true"},n,{get children(){let n=nK.cloneNode(!0);return eI(nj,n,()=>({isEnabled:e.enableAndroidBackHandler,onClose:()=>e.onClose()})),eI(nq,n,()=>()=>e.onClose()),eI(nU,n,()=>()=>e.onClose()),eN(n,eh(nP,{get class(){return e.class},get children(){return[eh(nB,{icon:"close",onClick:()=>e.onClose()}),j(()=>e.children)]}}),null),eN(n,eh(eC,{get when(){return e.onClickQuestion&&e.showFooter},get children(){return eh(nH,{get children(){return[eh(rU,{}),eh(nV,{get onClick(){return e.onClickQuestion},icon:"question"})]}})}}),null),U(()=>eR(n,m(nN,e2`
                                border-radius: ${nW[t.borderRadius]};
                                background-color: ${t.colors.background.tint};

                                ${nh("mobile")} {
                                    border-radius: ${nW[t.borderRadius]}
                                        ${nW[t.borderRadius]} 0 0;
                                }
                            `))),n}}))}})}})},nz={m:"22px",s:"12px",none:"0"},nG={m:"18px",s:"8px",none:"0"},nY=e6.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${e=>nz[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.secondary};
`,nQ=e6.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${e=>nG[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.segment};

    transform: ${e=>e.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,nJ=e6.input`
    display: none;
`,nX=e6.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${e=>e.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${e=>e.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${e=>e.isActive?"":`color: ${e.theme.colors.text.secondary};`}
    }
`,n1={m:"16px",s:"12px",none:"0"},n0={m:"12px",s:"8px",none:"0"},n2=e6.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,n5=e6.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${e=>e.theme.colors.background.qr};
    border-radius: ${e=>n1[e.theme.borderRadius]};
    padding: ${tl(24)} 0;
    height: ${tl(304)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${nf} {
        &:hover {
            ${n2.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${n2.class} {
            transform: scale(0.96);
        }
    }

    ${ng} {
        &:active {
            ${n2.class} {
                transform: scale(0.92);
            }
        }
    }
`,n4=e6.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${e=>e.theme.colors.constant.black};
    }
`,n3=e6.div`
    position: absolute;
    width: ${tl(60)};
    height: ${tl(60)};
    background: ${e=>e.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,n9=e6(t6)`
    width: ${e=>tl(e.size)};
    height: ${e=>tl(e.size)};
    border-radius: ${e=>n0[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.qr};
`,n8=e6.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`;var n6={exports:{}};!function(e,t){var n,r=function(){var e,t,n,r,o,l,i,a=function(e,t){var n=e,r=c[t],o=null,l=0,i=null,a=[],s={},u=function(e,t){o=function(e){for(var t=Array(e),n=0;n<e;n+=1){t[n]=Array(e);for(var r=0;r<e;r+=1)t[n][r]=null}return t}(l=4*n+17),h(0,0),h(l-7,0),h(0,l-7),b(),x(),M(e,t),n>=7&&k(e),null==i&&(i=A(n,r,a)),$(i,t)},h=function(e,t){for(var n=-1;n<=7;n+=1)if(!(e+n<=-1)&&!(l<=e+n))for(var r=-1;r<=7;r+=1)t+r<=-1||l<=t+r||(0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4?o[e+n][t+r]=!0:o[e+n][t+r]=!1)},y=function(){for(var e=0,t=0,n=0;n<8;n+=1){u(!0,n);var r=d.getLostPoint(s);(0==n||e>r)&&(e=r,t=n)}return t},x=function(){for(var e=8;e<l-8;e+=1)null==o[e][6]&&(o[e][6]=e%2==0);for(var t=8;t<l-8;t+=1)null==o[6][t]&&(o[6][t]=t%2==0)},b=function(){for(var e=d.getPatternPosition(n),t=0;t<e.length;t+=1)for(var r=0;r<e.length;r+=1){var l=e[t],i=e[r];if(null==o[l][i])for(var a=-2;a<=2;a+=1)for(var s=-2;s<=2;s+=1)-2==a||2==a||-2==s||2==s||0==a&&0==s?o[l+a][i+s]=!0:o[l+a][i+s]=!1}},k=function(e){for(var t=d.getBCHTypeNumber(n),r=0;r<18;r+=1){var i=!e&&(t>>r&1)==1;o[Math.floor(r/3)][r%3+l-8-3]=i}for(var r=0;r<18;r+=1){var i=!e&&(t>>r&1)==1;o[r%3+l-8-3][Math.floor(r/3)]=i}},M=function(e,t){for(var n=r<<3|t,i=d.getBCHTypeInfo(n),a=0;a<15;a+=1){var s=!e&&(i>>a&1)==1;a<6?o[a][8]=s:a<8?o[a+1][8]=s:o[l-15+a][8]=s}for(var a=0;a<15;a+=1){var s=!e&&(i>>a&1)==1;a<8?o[8][l-a-1]=s:a<9?o[8][15-a-1+1]=s:o[8][15-a-1]=s}o[l-8][8]=!e},$=function(e,t){for(var n=-1,r=l-1,i=7,a=0,s=d.getMaskFunction(t),c=l-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var u=0;u<2;u+=1)if(null==o[r][c-u]){var h=!1;a<e.length&&(h=(e[a]>>>i&1)==1),s(r,c-u)&&(h=!h),o[r][c-u]=h,-1==(i-=1)&&(a+=1,i=7)}if((r+=n)<0||l<=r){r-=n,n=-n;break}}},L=function(e,t){for(var n=0,r=0,o=0,l=Array(t.length),i=Array(t.length),a=0;a<t.length;a+=1){var s=t[a].dataCount,c=t[a].totalCount-s;r=Math.max(r,s),o=Math.max(o,c),l[a]=Array(s);for(var u=0;u<l[a].length;u+=1)l[a][u]=255&e.getBuffer()[u+n];n+=s;var h=d.getErrorCorrectPolynomial(c),f=g(l[a],h.getLength()-1).mod(h);i[a]=Array(h.getLength()-1);for(var u=0;u<i[a].length;u+=1){var p=u+f.getLength()-i[a].length;i[a][u]=p>=0?f.getAt(p):0}}for(var m=0,u=0;u<t.length;u+=1)m+=t[u].totalCount;for(var w=Array(m),v=0,u=0;u<r;u+=1)for(var a=0;a<t.length;a+=1)u<l[a].length&&(w[v]=l[a][u],v+=1);for(var u=0;u<o;u+=1)for(var a=0;a<t.length;a+=1)u<i[a].length&&(w[v]=i[a][u],v+=1);return w},A=function(e,t,n){for(var r=f.getRSBlocks(e,t),o=p(),l=0;l<n.length;l+=1){var i=n[l];o.put(i.getMode(),4),o.put(i.getLength(),d.getLengthInBits(i.getMode(),e)),i.write(o)}for(var a=0,l=0;l<r.length;l+=1)a+=r[l].dataCount;if(o.getLengthInBits()>8*a)throw"code length overflow. ("+o.getLengthInBits()+">"+8*a+")";for(o.getLengthInBits()+4<=8*a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*a)&&(o.put(236,8),!(o.getLengthInBits()>=8*a));)o.put(17,8);return L(o,r)};s.addData=function(e,t){var n=null;switch(t=t||"Byte"){case"Numeric":n=m(e);break;case"Alphanumeric":n=w(e);break;case"Byte":n=v(e);break;case"Kanji":n=C(e);break;default:throw"mode:"+t}a.push(n),i=null},s.isDark=function(e,t){if(e<0||l<=e||t<0||l<=t)throw e+","+t;return o[e][t]},s.getModuleCount=function(){return l},s.make=function(){if(n<1){for(var e=1;e<40;e++){for(var t=f.getRSBlocks(e,r),o=p(),l=0;l<a.length;l++){var i=a[l];o.put(i.getMode(),4),o.put(i.getLength(),d.getLengthInBits(i.getMode(),e)),i.write(o)}for(var s=0,l=0;l<t.length;l++)s+=t[l].dataCount;if(o.getLengthInBits()<=8*s)break}n=e}u(!1,y())},s.createTableTag=function(e,t){e=e||2;var n="";n+='<table style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: '+(t=void 0===t?4*e:t)+'px;"><tbody>';for(var r=0;r<s.getModuleCount();r+=1){n+="<tr>";for(var o=0;o<s.getModuleCount();o+=1)n+='<td style=" border-width: 0px; border-style: none; border-collapse: collapse; padding: 0px; margin: 0px; width: '+e+"px; height: "+e+"px; background-color: "+(s.isDark(r,o)?"#000000":"#ffffff")+';"/>';n+="</tr>"}return n+"</tbody></table>"},s.createSvgTag=function(e,t,n,r){var o={};"object"==typeof arguments[0]&&(o=arguments[0],e=o.cellSize,t=o.margin,n=o.alt,r=o.title),e=e||2,t=void 0===t?4*e:t,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-description":null,(r="string"==typeof r?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||"qrcode-title":null;var l,i,a,c,u=s.getModuleCount()*e+2*t,d="";for(c="l"+e+",0 0,"+e+" -"+e+",0 0,-"+e+"z ",d+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"'+(o.scalable?"":' width="'+u+'px" height="'+u+'px"')+(' viewBox="0 0 '+u+" ")+u+'"  preserveAspectRatio="xMinYMin meet"'+(r.text||n.text?' role="img" aria-labelledby="'+T([r.id,n.id].join(" ").trim())+'"':"")+">"+(r.text?'<title id="'+T(r.id)+'">'+T(r.text)+"</title>":"")+(n.text?'<description id="'+T(n.id)+'">'+T(n.text)+"</description>":"")+'<rect width="100%" height="100%" fill="white" cx="0" cy="0"/><path d="',i=0;i<s.getModuleCount();i+=1)for(l=0,a=i*e+t;l<s.getModuleCount();l+=1)s.isDark(i,l)&&(d+="M"+(l*e+t)+","+a+c);return d+'" stroke="transparent" fill="black"/></svg>'},s.createDataURL=function(e,t){e=e||2,t=void 0===t?4*e:t;var n=s.getModuleCount()*e+2*t,r=t,o=n-t;return S(n,n,function(t,n){if(!(r<=t)||!(t<o)||!(r<=n)||!(n<o))return 1;var l=Math.floor((t-r)/e),i=Math.floor((n-r)/e);return s.isDark(i,l)?0:1})},s.createImgTag=function(e,t,n){e=e||2,t=void 0===t?4*e:t;var r=s.getModuleCount()*e+2*t,o="";return o+="<img",o+=' src="',o+=s.createDataURL(e,t),o+='"',o+=' width="',o+=r,o+='"',o+=' height="',o+=r,o+='"',n&&(o+=' alt="',o+=T(n),o+='"'),o+="/>"};var T=function(e){for(var t="",n=0;n<e.length;n+=1){var r=e.charAt(n);switch(r){case"<":t+="&lt;";break;case">":t+="&gt;";break;case"&":t+="&amp;";break;case'"':t+="&quot;";break;default:t+=r}}return t},E=function(e){e=void 0===e?2:e;var t,n,r,o,l,i=1*s.getModuleCount()+2*e,a=e,c=i-e,u={"██":"█","█ ":"▀"," █":"▄","  ":" "},d={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(t=0;t<i;t+=2){for(n=0,r=Math.floor((t-a)/1),o=Math.floor((t+1-a)/1);n<i;n+=1)l="█",a<=n&&n<c&&a<=t&&t<c&&s.isDark(r,Math.floor((n-a)/1))&&(l=" "),a<=n&&n<c&&a<=t+1&&t+1<c&&s.isDark(o,Math.floor((n-a)/1))?l+=" ":l+="█",h+=e<1&&t+1>=c?d[l]:u[l];h+="\n"}return i%2&&e>0?h.substring(0,h.length-i-1)+Array(i+1).join("▀"):h.substring(0,h.length-1)};return s.createASCII=function(e,t){if((e=e||1)<2)return E(t);e-=1,t=void 0===t?2*e:t;var n,r,o,l,i=s.getModuleCount()*e+2*t,a=t,c=i-t,u=Array(e+1).join("██"),d=Array(e+1).join("  "),h="",g="";for(n=0;n<i;n+=1){for(r=0,o=Math.floor((n-a)/e),g="";r<i;r+=1)l=1,a<=r&&r<c&&a<=n&&n<c&&s.isDark(o,Math.floor((r-a)/e))&&(l=0),g+=l?u:d;for(o=0;o<e;o+=1)h+=g+"\n"}return h.substring(0,h.length-1)},s.renderTo2dContext=function(e,t){t=t||2;for(var n=s.getModuleCount(),r=0;r<n;r++)for(var o=0;o<n;o++)e.fillStyle=s.isDark(r,o)?"black":"white",e.fillRect(r*t,o*t,t,t)},s};a.stringToBytesFuncs={default:function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t.push(255&r)}return t}},a.stringToBytes=a.stringToBytesFuncs.default,a.createStringToBytes=function(e,t){var n=function(){for(var n=b(e),r=function(){var e=n.read();if(-1==e)throw"eof";return e},o=0,l={};;){var i=n.read();if(-1==i)break;var a=r(),s=r(),c=r(),u=String.fromCharCode(i<<8|a),d=s<<8|c;l[u]=d,o+=1}if(o!=t)throw o+" != "+t;return l}();return function(e){for(var t=[],r=0;r<e.length;r+=1){var o=e.charCodeAt(r);if(o<128)t.push(o);else{var l=n[e.charAt(r)];"number"==typeof l?(255&l)==l?t.push(l):(t.push(l>>>8),t.push(255&l)):t.push(63)}}return t}};var s={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},c={L:1,M:0,Q:3,H:2},u={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d=(e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t={},n=function(e){for(var t=0;0!=e;)t+=1,e>>>=1;return t},t.getBCHTypeInfo=function(e){for(var t=e<<10;n(t)-n(1335)>=0;)t^=1335<<n(t)-n(1335);return(e<<10|t)^21522},t.getBCHTypeNumber=function(e){for(var t=e<<12;n(t)-n(7973)>=0;)t^=7973<<n(t)-n(7973);return e<<12|t},t.getPatternPosition=function(t){return e[t-1]},t.getMaskFunction=function(e){switch(e){case u.PATTERN000:return function(e,t){return(e+t)%2==0};case u.PATTERN001:return function(e,t){return e%2==0};case u.PATTERN010:return function(e,t){return t%3==0};case u.PATTERN011:return function(e,t){return(e+t)%3==0};case u.PATTERN100:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case u.PATTERN101:return function(e,t){return e*t%2+e*t%3==0};case u.PATTERN110:return function(e,t){return(e*t%2+e*t%3)%2==0};case u.PATTERN111:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw"bad maskPattern:"+e}},t.getErrorCorrectPolynomial=function(e){for(var t=g([1],0),n=0;n<e;n+=1)t=t.multiply(g([1,h.gexp(n)],0));return t},t.getLengthInBits=function(e,t){if(1<=t&&t<10)switch(e){case s.MODE_NUMBER:return 10;case s.MODE_ALPHA_NUM:return 9;case s.MODE_8BIT_BYTE:case s.MODE_KANJI:return 8;default:throw"mode:"+e}else if(t<27)switch(e){case s.MODE_NUMBER:return 12;case s.MODE_ALPHA_NUM:return 11;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 10;default:throw"mode:"+e}else if(t<41)switch(e){case s.MODE_NUMBER:return 14;case s.MODE_ALPHA_NUM:return 13;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 12;default:throw"mode:"+e}else throw"type:"+t},t.getLostPoint=function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r+=1)for(var o=0;o<t;o+=1){for(var l=0,i=e.isDark(r,o),a=-1;a<=1;a+=1)if(!(r+a<0)&&!(t<=r+a))for(var s=-1;s<=1;s+=1)o+s<0||t<=o+s||0==a&&0==s||i!=e.isDark(r+a,o+s)||(l+=1);l>5&&(n+=3+l-5)}for(var r=0;r<t-1;r+=1)for(var o=0;o<t-1;o+=1){var c=0;e.isDark(r,o)&&(c+=1),e.isDark(r+1,o)&&(c+=1),e.isDark(r,o+1)&&(c+=1),e.isDark(r+1,o+1)&&(c+=1),(0==c||4==c)&&(n+=3)}for(var r=0;r<t;r+=1)for(var o=0;o<t-6;o+=1)e.isDark(r,o)&&!e.isDark(r,o+1)&&e.isDark(r,o+2)&&e.isDark(r,o+3)&&e.isDark(r,o+4)&&!e.isDark(r,o+5)&&e.isDark(r,o+6)&&(n+=40);for(var o=0;o<t;o+=1)for(var r=0;r<t-6;r+=1)e.isDark(r,o)&&!e.isDark(r+1,o)&&e.isDark(r+2,o)&&e.isDark(r+3,o)&&e.isDark(r+4,o)&&!e.isDark(r+5,o)&&e.isDark(r+6,o)&&(n+=40);for(var u=0,o=0;o<t;o+=1)for(var r=0;r<t;r+=1)e.isDark(r,o)&&(u+=1);return n+Math.abs(100*u/t/t-50)/5*10},t),h=function(){for(var e=Array(256),t=Array(256),n=0;n<8;n+=1)e[n]=1<<n;for(var n=8;n<256;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(var n=0;n<255;n+=1)t[e[n]]=n;var r={};return r.glog=function(e){if(e<1)throw"glog("+e+")";return t[e]},r.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e[t]},r}();function g(e,t){if(void 0===e.length)throw e.length+"/"+t;var n=function(){for(var n=0;n<e.length&&0==e[n];)n+=1;for(var r=Array(e.length-n+t),o=0;o<e.length-n;o+=1)r[o]=e[o+n];return r}(),r={};return r.getAt=function(e){return n[e]},r.getLength=function(){return n.length},r.multiply=function(e){for(var t=Array(r.getLength()+e.getLength()-1),n=0;n<r.getLength();n+=1)for(var o=0;o<e.getLength();o+=1)t[n+o]^=h.gexp(h.glog(r.getAt(n))+h.glog(e.getAt(o)));return g(t,0)},r.mod=function(e){if(r.getLength()-e.getLength()<0)return r;for(var t=h.glog(r.getAt(0))-h.glog(e.getAt(0)),n=Array(r.getLength()),o=0;o<r.getLength();o+=1)n[o]=r.getAt(o);for(var o=0;o<e.getLength();o+=1)n[o]^=h.gexp(h.glog(e.getAt(o))+t);return g(n,0).mod(e)},r}var f=(r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o=function(e,t){var n={};return n.totalCount=e,n.dataCount=t,n},l={},i=function(e,t){switch(t){case c.L:return r[(e-1)*4+0];case c.M:return r[(e-1)*4+1];case c.Q:return r[(e-1)*4+2];case c.H:return r[(e-1)*4+3];default:return}},l.getRSBlocks=function(e,t){var n=i(e,t);if(void 0===n)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+t;for(var r=n.length/3,l=[],a=0;a<r;a+=1)for(var s=n[3*a+0],c=n[3*a+1],u=n[3*a+2],d=0;d<s;d+=1)l.push(o(c,u));return l},l),p=function(){var e=[],t=0,n={};return n.getBuffer=function(){return e},n.getAt=function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},n.put=function(e,t){for(var r=0;r<t;r+=1)n.putBit((e>>>t-r-1&1)==1)},n.getLengthInBits=function(){return t},n.putBit=function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1},n},m=function(e){var t=s.MODE_NUMBER,n={};n.getMode=function(){return t},n.getLength=function(t){return e.length},n.write=function(t){for(var n=0;n+2<e.length;)t.put(r(e.substring(n,n+3)),10),n+=3;n<e.length&&(e.length-n==1?t.put(r(e.substring(n,n+1)),4):e.length-n==2&&t.put(r(e.substring(n,n+2)),7))};var r=function(e){for(var t=0,n=0;n<e.length;n+=1)t=10*t+o(e.charAt(n));return t},o=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-48;throw"illegal char :"+e};return n},w=function(e){var t=s.MODE_ALPHA_NUM,n={};n.getMode=function(){return t},n.getLength=function(t){return e.length},n.write=function(t){for(var n=0;n+1<e.length;)t.put(45*r(e.charAt(n))+r(e.charAt(n+1)),11),n+=2;n<e.length&&t.put(r(e.charAt(n)),6)};var r=function(e){if("0"<=e&&e<="9")return e.charCodeAt(0)-48;if("A"<=e&&e<="Z")return e.charCodeAt(0)-65+10;switch(e){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+e}};return n},v=function(e){var t=s.MODE_8BIT_BYTE,n=a.stringToBytes(e),r={};return r.getMode=function(){return t},r.getLength=function(e){return n.length},r.write=function(e){for(var t=0;t<n.length;t+=1)e.put(n[t],8)},r},C=function(e){var t=s.MODE_KANJI,n=a.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(e,t){var r=n("友");if(2!=r.length||(r[0]<<8|r[1])!=38726)throw"sjis not supported."}(0,0);var r=n(e),o={};return o.getMode=function(){return t},o.getLength=function(e){return~~(r.length/2)},o.write=function(e){for(var t=0;t+1<r.length;){var n=(255&r[t])<<8|255&r[t+1];if(33088<=n&&n<=40956)n-=33088;else if(57408<=n&&n<=60351)n-=49472;else throw"illegal char at "+(t+1)+"/"+n;n=(n>>>8&255)*192+(255&n),e.put(n,13),t+=2}if(t<r.length)throw"illegal char at "+(t+1)},o},y=function(){var e=[],t={};return t.writeByte=function(t){e.push(255&t)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,r){n=n||0,r=r||e.length;for(var o=0;o<r;o+=1)t.writeByte(e[o+n])},t.writeString=function(e){for(var n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return e},t.toString=function(){var t="";t+="[";for(var n=0;n<e.length;n+=1)n>0&&(t+=","),t+=e[n];return t+"]"},t},x=function(){var e=0,t=0,n=0,r="",o={},l=function(e){r+=String.fromCharCode(i(63&e))},i=function(e){if(e<0);else if(e<26)return 65+e;else if(e<52)return 97+(e-26);else if(e<62)return 48+(e-52);else if(62==e)return 43;else if(63==e)return 47;throw"n:"+e};return o.writeByte=function(r){for(e=e<<8|255&r,t+=8,n+=1;t>=6;)l(e>>>t-6),t-=6},o.flush=function(){if(t>0&&(l(e<<6-t),e=0,t=0),n%3!=0)for(var o=3-n%3,i=0;i<o;i+=1)r+="="},o.toString=function(){return r},o},b=function(e){var t=0,n=0,r=0,o={};o.read=function(){for(;r<8;){if(t>=e.length){if(0==r)return -1;throw"unexpected end of file./"+r}var o=e.charAt(t);if(t+=1,"="==o)return r=0,-1;o.match(/^\s$/)||(n=n<<6|l(o.charCodeAt(0)),r+=6)}var i=n>>>r-8&255;return r-=8,i};var l=function(e){if(65<=e&&e<=90)return e-65;if(97<=e&&e<=122)return e-97+26;if(48<=e&&e<=57)return e-48+52;if(43==e)return 62;if(47==e)return 63;throw"c:"+e};return o},k=function(e,t){var n=Array(e*t),r={};r.setPixel=function(t,r,o){n[r*e+t]=o},r.write=function(n){n.writeString("GIF87a"),n.writeShort(e),n.writeShort(t),n.writeByte(128),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(0),n.writeByte(255),n.writeByte(255),n.writeByte(255),n.writeString(","),n.writeShort(0),n.writeShort(0),n.writeShort(e),n.writeShort(t),n.writeByte(0);var r=l(2);n.writeByte(2);for(var o=0;r.length-o>255;)n.writeByte(255),n.writeBytes(r,o,255),o+=255;n.writeByte(r.length-o),n.writeBytes(r,o,r.length-o),n.writeByte(0),n.writeString(";")};var o=function(e){var t=0,n=0,r={};return r.write=function(r,o){if(r>>>o!=0)throw"length over";for(;t+o>=8;)e.writeByte(255&(r<<t|n)),o-=8-t,r>>>=8-t,n=0,t=0;n=r<<t|n,t+=o},r.flush=function(){t>0&&e.writeByte(n)},r},l=function(e){for(var t=1<<e,r=(1<<e)+1,l=e+1,a=i(),s=0;s<t;s+=1)a.add(String.fromCharCode(s));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(r));var c=y(),u=o(c);u.write(t,l);var d=0,h=String.fromCharCode(n[0]);for(d+=1;d<n.length;){var g=String.fromCharCode(n[d]);d+=1,a.contains(h+g)?h+=g:(u.write(a.indexOf(h),l),4095>a.size()&&(a.size()==1<<l&&(l+=1),a.add(h+g)),h=g)}return u.write(a.indexOf(h),l),u.write(r,l),u.flush(),c.toByteArray()},i=function(){var e={},t=0,n={};return n.add=function(r){if(n.contains(r))throw"dup key:"+r;e[r]=t,t+=1},n.size=function(){return t},n.indexOf=function(t){return e[t]},n.contains=function(t){return void 0!==e[t]},n};return r},S=function(e,t,n){for(var r=k(e,t),o=0;o<t;o+=1)for(var l=0;l<e;l+=1)r.setPixel(l,o,n(l,o));var i=y();r.write(i);for(var a=x(),s=i.toByteArray(),c=0;c<s.length;c+=1)a.writeByte(s[c]);return a.flush(),"data:image/gif;base64,"+a};return a}();r.stringToBytesFuncs["UTF-8"]=function(e){return function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t.push(r):r<2048?t.push(192|r>>6,128|63&r):r<55296||r>=57344?t.push(224|r>>12,128|r>>6&63,128|63&r):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return t}(e)},n=function(){return r},e.exports=n()}(n6);let n7=n6.exports;function re(e){return A(this,null,function*(){try{if(!(null==navigator?void 0:navigator.clipboard))throw new ta("Clipboard API not available");return yield navigator.clipboard.writeText(e)}catch(e){}!function(e){let t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}finally{document.body.removeChild(t)}}(e)})}let rt=eE("<div></div>"),rn=e=>{let t,n,r;let[o,l]=F(!1),[i,a]=F(48);q(()=>{let o=n7(0,"L");o.addData(e.sourceUrl),o.make(),t.innerHTML=o.createSvgTag(4,0);let l=t.firstElementChild.clientWidth,i=Math.round(256/l*1e5)/1e5;if(r){let e=4*Math.ceil(60/(4*i)),t=tl(4*Math.ceil((l-e)/8));r.style.top=t,r.style.left=t,r.style.height=tl(e),r.style.width=tl(e),a(Math.round(48/i))}n.style.transform=`scale(${i})`});let s=null;return eh(n5,{get class(){return e.class},onClick:()=>{l(!0),re(e.sourceUrl),null!=s&&clearTimeout(s),s=setTimeout(()=>l(!1),1500)},get children(){return[eh(n4,{ref(e){let t=n;"function"==typeof t?t(e):n=e},get children(){return[(()=>{let e=rt.cloneNode(!0),n=t;return"function"==typeof n?eI(n,e):t=e,e})(),eh(eC,{get when(){return e.imageUrl},get children(){return eh(n3,{ref(e){let t=r;"function"==typeof t?t(e):r=e},get children(){return eh(n9,{get src(){return e.imageUrl},alt:"",get size(){return i()}})}})}})]}}),eh(nx,{onBeforeEnter:e=>{nF(e,[{opacity:0,transform:"translate(-50%, 44px)"},{opacity:1,transform:"translate(-50%, 0)"}],{duration:150,easing:"ease-out"})},onExit:(e,t)=>{nF(e,[{opacity:1,transform:"translate(-50%, 0)"},{opacity:0,transform:"translate(-50%, 44px)"}],{duration:150,easing:"ease-out"}).finished.then(()=>{t()})},get children(){return eh(eC,{get when(){return o()&&!e.disableCopy},get children(){return eh(n8,{get children(){return[eh(rI,{size:"xs"}),eh(rc,{translationKey:"common.linkCopied",children:"Link Copied"})]}})}})}}),eh(eC,{get when(){return!e.disableCopy},get children(){return eh(n2,{get children(){return eh(oo,{})}})}})]}})};var rr=(e,t,n)=>{let r=t.trim().split(".").reduce((e,t)=>e?e[t]:void 0,e);return void 0!==r?r:n},ro=(e,t,n=/{{(.*?)}}/g)=>e.replace(n,(e,n)=>rr(t,n,"")),rl=(e={},t=navigator.language in e?navigator.language:Object.keys(e)[0])=>{let[n,r]=F(t),[o,l]=tQ(e);return[(e,t,r)=>{let l=rr(o[n()],e,r||"");return"function"==typeof l?l(t):"string"==typeof l?ro(l,t||{}):l},{add(e,t){l(e,e=>Object.assign(e||{},t))},locale:e=>e?r(e):n(),dict:e=>rr(o,e)}]},ri=G({}),ra=()=>Y(ri);let rs=e6.div`
    font-style: normal;
    font-weight: ${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    line-height: ${e=>e.lineHeight};

    color: ${e=>e.color};
`,rc=e=>{let t;let n=e9(),[r]=ra(),o=()=>e.color||n.colors.text.primary,l=em({fontSize:"14px",fontWeight:"510",lineHeight:"130%"},e);return q(()=>{t&&"unset"!==l.cursor&&"pointer"!==getComputedStyle(t).cursor&&(t.style.cursor="default")}),eh(rs,{get fontSize(){return l.fontSize},get fontWeight(){return l.fontWeight},get lineHeight(){return l.lineHeight},get color(){return o()},get class(){return l.class},ref(e){let n=t;"function"==typeof n?n(e):t=e},"data-tc-text":"true",get children(){var i;return j(()=>!!l.translationKey)()?r(l.translationKey,l.translationValues,null==(i=l.children)?void 0:i.toString()):l.children}})},ru=e6.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);
        border-radius: inherit;
    }
`,rd=e6(t6)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,rh=e=>eh(ru,{get class(){return e.class},get children(){return[eh(rd,{get src(){return e.src}}),j(()=>e.badge)]}}),rg={m:"16px",s:"12px",none:"0"},rf={m:"6px",s:"6px",none:"0"},rp=e6.ul`
    display: flex;
    gap: 0;
    width: 100%;
    overflow-x: auto;
    padding: 8px 12px 16px 12px;
    margin: 0;
    list-style: none;
    flex-wrap: nowrap;

    &&::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        display: flex;
        flex: 1;
        min-width: 78px;
        height: fit-content;
    }

    > li > button {
        width: 100%;
    }
`,rm=e6.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 100%;
    min-width: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${nf} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${ng} {
        &:active {
            transform: scale(0.92);
        }
    }
`,rw=e6(rh)`
    width: 60px;
    height: 60px;
    border-radius: ${e=>rg[e.theme.borderRadius]};
    margin-bottom: 8px;
    position: relative;
`,rv=e6(t6)`
    position: absolute;
    right: -6px;
    bottom: -6px;
    width: 24px;
    height: 24px;
    border-radius: ${e=>rf[e.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,rC=e6(rc)`
    max-width: 90px;
    font-weight: 510;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${nh("mobile")} {
        max-width: 80px;
    }
`,ry=e6(rc)`
    font-weight: ${e=>e.colorPrimary?"510":"400"};
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${e=>e.colorPrimary?e.theme.colors.text.primary:e.theme.colors.text.secondary};

    ${nh("mobile")} {
        max-width: 80px;
    }
`,rx=eE("<div></div>"),rb=e=>{var t;let n=null,r=()=>{let e=null==n?void 0:n.querySelector("div");if(e&&e.scrollWidth>e.clientWidth){let t=0;for(;e.scrollWidth>e.clientWidth&&t>=-.4;)t-=.05,e.style.letterSpacing=`${t}px`;0!==t&&(t-=.05,e.style.letterSpacing=`${t}px`)}};return t=()=>r(),q(()=>Z(t)),q(()=>{r()}),eh(rm,{get class(){return e.class},onClick:()=>e.onClick(),"data-tc-wallet-item":"true",get children(){return[j(()=>j(()=>"string"==typeof e.icon)()?eh(rw,{get src(){return e.icon},get badge(){return j(()=>!!e.badgeUrl)()&&eh(rv,{get src(){return e.badgeUrl}})}}):e.icon),(()=>{let t=rx.cloneNode(!0);return eI(e=>n=e,t),eN(t,eh(rC,{get children(){return e.name}})),t})(),j(()=>j(()=>!!e.secondLine)()&&eh(ry,{get colorPrimary(){var t;return null==(t=e.secondLineColorPrimary)||t},get children(){return e.secondLine}}))]}})},rk=e6.h1`
    font-style: normal;
    font-weight: 590;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,rS=e=>{let[t]=ra();return eh(rk,{get class(){return e.class},"data-tc-h1":"true",get children(){var n;return j(()=>!!e.translationKey)()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},rM=e6.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${e=>e.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,r$=e=>{let[t]=ra();return eh(rM,{get class(){return e.class},"data-tc-h2":"true",get children(){var n;return j(()=>!!e.translationKey)()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},rL=e6.h3`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;

    color: ${e=>e.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,rA=e=>{let[t]=ra();return eh(rL,{"data-tc-h3":"true",get class(){return e.class},get children(){var n;return j(()=>!!e.translationKey)()?t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString()):e.children}})},rT=eE('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),rE=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=rT.cloneNode(!0),t=e.firstChild;return U(()=>e_(t,"fill",n())),e})()},r_=eE('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),rR=eE('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),rW=eE('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),rI=e=>{let t=e9(),n=()=>e.size||"s",r=()=>e.fill||t.colors.icon.success;return j((()=>{let o=j(()=>"xs"===n());return()=>o()?(()=>{let n=r_.cloneNode(!0),o=n.firstChild.firstChild,l=o.nextSibling;return U(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$&&e_(n,"class",i._v$=a),s!==i._v$2&&e_(o,"fill",i._v$2=s),c!==i._v$3&&e_(l,"stroke",i._v$3=c),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})():(()=>{let o=j(()=>"s"===n());return()=>o()?(()=>{let n=rR.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return U(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$4&&e_(n,"class",i._v$4=a),s!==i._v$5&&e_(o,"fill",i._v$5=s),c!==i._v$6&&e_(l,"fill",i._v$6=c),i},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})():(()=>{let n=rW.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return U(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$7&&e_(n,"class",i._v$7=a),s!==i._v$8&&e_(o,"fill",i._v$8=s),c!==i._v$9&&e_(l,"fill",i._v$9=c),i},{_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})()})()})())},rN=eE('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),rP=eE('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),rB=eE('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),rH=e=>{let t=e9(),n=()=>e.size||"m",r=()=>e.fill||t.colors.icon.error;return j((()=>{let o=j(()=>"m"===n());return()=>o()?(()=>{let n=rN.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return U(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$&&e_(n,"class",i._v$=a),s!==i._v$2&&e_(o,"fill",i._v$2=s),c!==i._v$3&&e_(l,"fill",i._v$3=c),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})():(()=>{let o=j(()=>"s"===n());return()=>o()?(()=>{let n=rP.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return U(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$4&&e_(n,"class",i._v$4=a),s!==i._v$5&&e_(o,"fill",i._v$5=s),c!==i._v$6&&e_(l,"stroke",i._v$6=c),i},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})():(()=>{let n=rB.cloneNode(!0),o=n.firstChild,l=o.nextSibling;return U(i=>{let a=e.class,s=r(),c=t.colors.constant.white;return a!==i._v$7&&e_(n,"class",i._v$7=a),s!==i._v$8&&e_(o,"fill",i._v$8=s),c!==i._v$9&&e_(l,"fill",i._v$9=c),i},{_v$7:void 0,_v$8:void 0,_v$9:void 0}),n})()})()})())},rV=eE('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),rD=eE('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),rO=eE('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),rF=e=>{let t=e9(),n=()=>e.size||"xs",r=()=>e.fill||t.colors.icon.tertiary,o=e5`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `,l=e2`
        animation: ${o} 1s linear infinite;
    `;return j((()=>{let t=j(()=>"xs"===n());return()=>t()?(()=>{let t=rV.cloneNode(!0),n=t.firstChild;return U(o=>{let i=m(l,e.class),a=r();return i!==o._v$&&e_(t,"class",o._v$=i),a!==o._v$2&&e_(n,"fill",o._v$2=a),o},{_v$:void 0,_v$2:void 0}),t})():(()=>{let t=j(()=>"s"===n());return()=>t()?(()=>{let t=rD.cloneNode(!0),n=t.firstChild;return U(o=>{let i=m(l,e.class),a=r();return i!==o._v$3&&e_(t,"class",o._v$3=i),a!==o._v$4&&e_(n,"fill",o._v$4=a),o},{_v$3:void 0,_v$4:void 0}),t})():(()=>{let t=rO.cloneNode(!0),n=t.firstChild;return U(o=>{let i=m(l,e.class),a=r();return i!==o._v$5&&e_(t,"class",o._v$5=i),a!==o._v$6&&e_(n,"stroke",o._v$6=a),o},{_v$5:void 0,_v$6:void 0}),t})()})()})())},rK=eE('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),rU=()=>{let e=e9(),t=()=>e.theme===eq.DARK?e.colors.constant.white:e.colors.constant.black;return(()=>{let e=rK.cloneNode(!0),n=e.firstChild.nextSibling.nextSibling;return U(()=>e_(n,"fill",t())),e})()},rq=eE('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),rj=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=rq.cloneNode(!0),t=e.firstChild;return U(()=>e_(t,"fill",n())),e})()},rZ=eE('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),rz=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=rZ.cloneNode(!0),t=e.firstChild;return U(()=>e_(t,"fill",n())),e})()},rG=eE('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),rY=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=rG.cloneNode(!0),t=e.firstChild;return U(()=>e_(t,"fill",n())),e})()},rQ=eE('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),rJ=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=rQ.cloneNode(!0),t=e.firstChild;return U(()=>e_(t,"fill",n())),e})()},rX=eE('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),r1=e=>{let t=e9(),n=()=>e.fill||t.colors.accent;return(()=>{let e=rX.cloneNode(!0),t=e.firstChild.firstChild;return U(()=>e_(t,"fill",n())),e})()},r0=eE('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),r2=e=>{let t=e9(),n=()=>e.fill||t.colors.accent;return(()=>{let e=r0.cloneNode(!0),t=e.firstChild;return U(()=>e_(t,"fill",n())),e})()},r5=eE('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),r4=e=>{let t=e9(),n=()=>e.fill||t.colors.accent;return(()=>{let e=r5.cloneNode(!0),t=e.firstChild.firstChild;return U(()=>e_(t,"fill",n())),e})()},r3=eE('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),r9=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let t=r3.cloneNode(!0),r=t.firstChild;return U(o=>{let l=e.class,i=n();return l!==o._v$&&e_(t,"class",o._v$=l),i!==o._v$2&&e_(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},r8=eE('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),r6=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let t=r8.cloneNode(!0),r=t.firstChild;return U(o=>{let l=e.class,i=n();return l!==o._v$&&e_(t,"class",o._v$=l),i!==o._v$2&&e_(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},r7=eE('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),oe=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let t=r7.cloneNode(!0),r=t.firstChild;return U(o=>{let l=e.class,i=n();return l!==o._v$&&e_(t,"class",o._v$=l),i!==o._v$2&&e_(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},ot=eE('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),on=e=>{let t=e9(),n=()=>e.fill||t.colors.constant.white;return(()=>{let t=ot.cloneNode(!0),r=t.firstChild;return U(o=>{let l=e.class,i=n();return l!==o._v$&&e_(t,"class",o._v$=l),i!==o._v$2&&e_(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},or=eE('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),oo=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=or.cloneNode(!0),t=e.firstChild;return U(r=>{let o=n(),l=n();return o!==r._v$&&e_(e,"fill",r._v$=o),l!==r._v$2&&e_(t,"fill",r._v$2=l),r},{_v$:void 0,_v$2:void 0}),e})()},ol=eE('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),oi=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.secondary;return(()=>{let e=ol.cloneNode(!0),t=e.firstChild;return U(()=>e_(t,"fill",n())),e})()},oa={m:"16px",s:"12px",none:"0"},os={m:"6px",s:"6px",none:"0"},oc=e6.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${e=>oa[e.theme.borderRadius]};
    background-color: ${e=>e.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,ou=e6(rh)`
    width: 20px;
    height: 20px;
    border-radius: ${e=>os[e.theme.borderRadius]};
`,od=e=>eh(rb,{get name(){return e.labelLine1},get secondLine(){return e.labelLine2},get icon(){return eh(oc,{get children(){return eh(ev,{each:[0,1,2,3],children:t=>eh(ou,{get src(){return e.images[t]}})})}})},onClick:()=>e.onClick()}),oh="telegram-wallet",og={TON:"https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",TG:"https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png"},of=e=>{let[t]=ra(),n=()=>e.wallet.appName===oh?void 0:"isPreferred"in e.wallet&&e.wallet.isPreferred?t("walletItem.recent",{},"Recent"):(0,g.Ee)(e.wallet)?t("walletItem.installed",{},"Installed"):"Tonkeeper"===e.wallet.name?t("walletItem.popular",{},"Popular"):void 0;return j((()=>{let r=j(()=>e.wallet.appName===oh);return()=>r()?eh(rb,{get icon(){return e.wallet.imageUrl},get name(){return t("walletItem.walletOn",{},"Wallet in")},secondLine:"Telegram",get badgeUrl(){return og.TG},onClick:()=>e.onClick(),get class(){return e.class}}):eh(rb,{get icon(){return e.wallet.imageUrl},get name(){return e.wallet.name},get secondLine(){return n()},secondLineColorPrimary:!1,onClick:()=>e.onClick(),get class(){return e.class}})})())},op=e6.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${e=>e.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,om=e6.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${nh("mobile")} {
        width: 100%;
        margin: 0;
    }
`,[ow,ov]=F((null==(h=tg())?void 0:h.innerHeight)||0);tg()&&window.addEventListener("resize",()=>ov(window.innerHeight));let[oC,oy]=F(nd("mobile")),ox=()=>oy(nd("mobile"));tg()&&(window.addEventListener("resize",()=>ox()),window.addEventListener("load",()=>ox(),{once:!0}));let ob=e=>{let[t,n]=F(!1),r=()=>oC()?150:200,o=()=>void 0!==e.maxHeight?`${e.maxHeight}px`:`${ow()-r()}px`;return[eh(om,{get isShown(){return t()}}),eh(op,{get maxHeight(){return o()},onScroll:e=>{n(e.target.scrollTop>0)},get class(){return e.class},get children(){return e.children}})]},ok=e6.a`
    display: block;
    text-decoration: unset;
`,oS=e=>eh(ok,em({get href(){return e.href},get target(){return e.blank?"_blank":"_self"},get class(){return e.class}},()=>e.blank?{rel:"noreferrer noopener"}:{},{get children(){return e.children}})),oM=G(),o$=eE('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),oL=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let t=o$.cloneNode(!0),r=t.firstChild;return U(o=>{let l=e.class,i=n();return l!==o._v$&&e_(t,"class",o._v$=l),i!==o._v$2&&e_(r,"fill",o._v$2=i),o},{_v$:void 0,_v$2:void 0}),t})()},oA=eE('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),oT=e=>{let t=e9(),n=()=>e.fill||t.colors.icon.primary;return(()=>{let e=oA.cloneNode(!0),t=e.firstChild,r=t.nextSibling;return U(e=>{let o=n(),l=n();return o!==e._v$&&e_(t,"fill",e._v$=o),l!==e._v$2&&e_(r,"fill",e._v$2=l),e},{_v$:void 0,_v$2:void 0}),e})()},oE={m:"8px",s:"4px",none:"0"},o_={m:"16px",s:"8px",none:"0"},oR=e6.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>o_[e.theme.borderRadius]};

    background-color: ${e=>e.theme.colors.background.primary}
           
    color: ${e=>e.theme.colors.text.primary}
`,oW=e6.ul`
    background-color: ${e=>e.theme.colors.background.primary};
    padding: 8px;
`,oI=e6.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${e=>e.theme.colors.background.primary};
    border: none;
    border-radius: ${e=>oE[e.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,oN=eE("<li></li>"),oP=e=>eh(rc,{get translationKey(){return e.translationKey},fontSize:"15px",fontWeight:"590",get children(){return e.children}}),oB={m:"16px",s:"8px",none:"0"},oH=e6.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${e=>e.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${e=>oB[e.theme.borderRadius]};
`,oV=e6.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,oD=e6(rc)`
    margin-top: 4px;
    color: ${e=>e.theme.colors.text.secondary};
`,oO=e=>{let t=nv(e);return eh(oH,em({get class(){return e.class},"data-tc-notification":"true"},t,{get children(){return[eh(oV,{get children(){return[eh(rA,{get translationKey(){return e.header.translationKey},get translationValues(){return e.header.translationValues},get children(){return e.children}}),eh(eC,{get when(){return e.text},get children(){return eh(oD,{get translationKey(){return e.text.translationKey},get translationValues(){return e.text.translationValues}})}})]}}),j(()=>e.icon)]}}))},oF=e6(rF)`
    align-self: center;
`,oK=e=>{let t=Y(oM),[n]=ra(),r=()=>t.wallet&&"name"in t.wallet?t.wallet.name:n("common.yourWallet",{},"Your wallet");return eh(oO,{get header(){return{translationKey:"notifications.confirm.header",translationValues:{name:r()}}},get class(){return e.class},get icon(){return eh(oF,{})},"data-tc-notification-confirm":"true",children:"Confirm operation in your wallet"})},oU=e6(rH)`
    margin-top: 2px;
`,oq=e=>eh(oO,{header:{translationKey:"notifications.transactionCanceled.header"},text:{translationKey:"notifications.transactionCanceled.text"},get icon(){return eh(oU,{size:"xs"})},get class(){return e.class},"data-tc-notification-tx-cancelled":"true",children:"Transaction cancelled"}),oj=e6(rI)`
    margin-top: 2px;
`,oZ=e=>eh(oO,{header:{translationKey:"notifications.transactionSent.header"},text:{translationKey:"notifications.transactionSent.text"},get icon(){return eh(oj,{})},get class(){return e.class},"data-tc-notification-tx-sent":"true",children:"Transaction sent"}),oz=e2`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,oG={timeout:4500},[oY,oQ]=F(null),oJ=e6(rH)`
    margin-top: 2px;
`,oX=e=>eh(oO,{header:{translationKey:"notifications.signDataCanceled.header"},get icon(){return eh(oJ,{size:"xs"})},get class(){return e.class},"data-tc-notification-sign-data-cancelled":"true",children:"Sign data canceled"}),o1=e=>eh(oO,{header:{translationKey:"notifications.dataSigned.header"},get icon(){return eh(oj,{})},get class(){return e.class},"data-tc-notification-data-signed":"true",children:"Data signed"}),o0=eE('<div data-tc-list-notifications="true"></div>'),o2=e6(nC)`
    background-color: ${e=>e.theme.colors.connectButton.background};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${to(e.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,o5=e6(o2)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${e=>e.theme.colors.background.primary};
`,o4=e6(nC)`
    min-width: 148px;
    height: 40px;

    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.connectButton.foreground};
    box-shadow: ${e=>`0 4px 24px ${to(e.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,o3=e6(rF)`
    height: 18px;
    width: 18px;
`,o9=e6.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,o8=e6(e=>{let t=Y(oM),[n,r]=F(!1),o=()=>A(void 0,null,function*(){let e=(0,g.Sq)(t.account.address,t.account.chain===g.S5.TESTNET);yield re(e),r(!0),setTimeout(()=>r(!1),1e3)}),l=()=>{t.disconnect(),e.onClose()};return eh(oR,{ref(t){let n=e.ref;"function"==typeof n?n(t):e.ref=t},get class(){return e.class},"data-tc-dropdown":"true",get children(){return eh(oW,{get children(){return[(()=>{let e=oN.cloneNode(!0);return eN(e,eh(oI,{onClick:()=>o(),get children(){return[eh(oL,{}),eh(eC,{get when(){return!n()},get children(){return eh(oP,{translationKey:"button.dropdown.copy",children:"Copy address"})}}),eh(eC,{get when(){return n()},get children(){return eh(oP,{translationKey:"button.dropdown.copied",children:"Address copied!"})}})]}})),e})(),(()=>{let e=oN.cloneNode(!0);return eN(e,eh(oI,{onClick:()=>l(),get children(){return[eh(oT,{}),eh(oP,{translationKey:"button.dropdown.disconnect",children:"Disconnect"})]}})),e})()]}})}})})`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,o6=e6(e=>{let t=function(e){let{timeout:t}=M(M({},oG),void 0),[n,r]=F([]),[o,l]=F([]);return q(function(e,t,n){let r,o;let l=Array.isArray(e);return n=>{let i;if(l){i=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]()}else i=e();if(o){o=!1;return}let a=Z(()=>t(i,r,n));return r=i,a}}(tW,e=>{var n,o;if(!e||!e.showNotification){r(e=>e.filter(e=>"confirm-transaction"!==e.action));return}if(oY()===e)return;let i=(null==(n=oY())?void 0:n.name)==="confirm-transaction"&&"confirm-transaction"===e.name,a=(null==(o=oY())?void 0:o.name)==="confirm-sign-data"&&"confirm-sign-data"===e.name;if(i||a)return;oQ(e),r(e=>e.filter(e=>"confirm-transaction"!==e.action&&"confirm-sign-data"!==e.action));let s={action:e.name};r(e=>[...e,s]);let c=setTimeout(()=>{r(e=>e.filter(e=>e!==s)),l(e=>e.filter(e=>e!==c))},t);l(e=>[...e,c])})),z(()=>{o().forEach(e=>clearTimeout(e))}),n}();return(()=>{let n=o0.cloneNode(!0);return eN(n,eh(nk,{onBeforeEnter:e=>{nF(e,[{opacity:0,transform:"translateY(0)"},{opacity:1,transform:"translateY(-8px)"}],{duration:200})},onExit:(e,t)=>{nF(e,[{opacity:1,transform:"translateY(-8px)"},{opacity:0,transform:"translateY(-30px)"}],{duration:200}).finished.then(t)},get children(){return eh(ev,{get each(){return t()},children:e=>eh(ey,{get children(){return[eh(ex,{get when(){return"transaction-sent"===e.action},get children(){return eh(oZ,{class:oz})}}),eh(ex,{get when(){return"transaction-canceled"===e.action},get children(){return eh(oq,{class:oz})}}),eh(ex,{get when(){return"data-signed"===e.action},get children(){return eh(o1,{class:oz})}}),eh(ex,{get when(){return"sign-data-canceled"===e.action},get children(){return eh(oX,{class:oz})}}),eh(ex,{get when(){return"confirm-transaction"===e.action||"confirm-sign-data"===e.action},get children(){return eh(oK,{class:oz})}})]}})})}})),U(()=>eR(n,e.class)),n})()})`
    > div:first-child {
        margin-top: 20px;
    }
`;function o7(e){return e.split("-")[0]}function le(e,t,n){let r,{reference:o,floating:l}=e,i=o.x+o.width/2-l.width/2,a=o.y+o.height/2-l.height/2,s=["top","bottom"].includes(o7(t))?"x":"y",c="y"===s?"height":"width",u=o[c]/2-l[c]/2,d=o7(t),h="x"===s;switch(d){case"top":r={x:i,y:o.y-l.height};break;case"bottom":r={x:i,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:a};break;case"left":r={x:o.x-l.width,y:a};break;default:r={x:o.x,y:o.y}}switch(t.split("-")[1]){case"start":r[s]-=u*(n&&h?-1:1);break;case"end":r[s]+=u*(n&&h?-1:1)}return r}let lt=(e,t,n)=>A(void 0,null,function*(){let{placement:r="bottom",strategy:o="absolute",middleware:l=[],platform:i}=n,a=l.filter(Boolean),s=yield null==i.isRTL?void 0:i.isRTL(t);if(null==i&&console.error("Floating UI: `platform` property was not passed to config. If you want to use Floating UI on the web, install @floating-ui/dom instead of the /core package. Otherwise, you can create your own `platform`: https://floating-ui.com/docs/platform"),a.filter(e=>{let{name:t}=e;return"autoPlacement"===t||"flip"===t}).length>1)throw Error("Floating UI: duplicate `flip` and/or `autoPlacement` middleware detected. This will lead to an infinite loop. Ensure only one of either has been passed to the `middleware` array.");e&&t||console.error("Floating UI: The reference and/or floating element was not defined when `computePosition()` was called. Ensure that both elements have been created and can be measured.");let c=yield i.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=le(c,r,s),h=r,g={},f=0;for(let n=0;n<a.length;n++){let{name:l,fn:p}=a[n],{x:m,y:w,data:v,reset:C}=yield p({x:u,y:d,initialPlacement:r,placement:h,strategy:o,middlewareData:g,rects:c,platform:i,elements:{reference:e,floating:t}});if(u=null!=m?m:u,d=null!=w?w:d,g=$(M({},g),{[l]:M(M({},g[l]),v)}),f>50&&console.warn("Floating UI: The middleware lifecycle appears to be running in an infinite loop. This is usually caused by a `reset` continually being returned without a break condition."),C&&f<=50){f++,"object"==typeof C&&(C.placement&&(h=C.placement),C.rects&&(c=!0===C.rects?yield i.getElementRects({reference:e,floating:t,strategy:o}):C.rects),{x:u,y:d}=le(c,h,s)),n=-1;continue}}return{x:u,y:d,placement:h,strategy:o,middlewareData:g}});function ln(e){return $(M({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}function lr(e){var t;return(null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function lo(e){return lr(e).getComputedStyle(e)}function ll(e){return lc(e)?(e.nodeName||"").toLowerCase():""}function li(){if(o)return o;let e=navigator.userAgentData;return e&&Array.isArray(e.brands)?o=e.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function la(e){return e instanceof lr(e).HTMLElement}function ls(e){return e instanceof lr(e).Element}function lc(e){return e instanceof lr(e).Node}function lu(e){if("undefined"==typeof ShadowRoot)return!1;let t=lr(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function ld(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=lo(e);return/auto|scroll|overlay|hidden/.test(t+r+n)&&!["inline","contents"].includes(o)}function lh(e){let t=/firefox/i.test(li()),n=lo(e),r=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!r&&"none"!==r||t&&"filter"===n.willChange||t&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some(e=>n.willChange.includes(e))||["paint","layout","strict","content"].some(e=>{let t=n.contain;return null!=t&&t.includes(e)})}function lg(){return!/^((?!chrome|android).)*safari/i.test(li())}function lf(e){return["html","body","#document"].includes(ll(e))}let lp=Math.min,lm=Math.max,lw=Math.round,lv={x:1,y:1};function lC(e){let t=!ls(e)&&e.contextElement?e.contextElement:ls(e)?e:null;if(!t)return lv;let n=t.getBoundingClientRect(),r=lo(t);if("border-box"!==r.boxSizing)return la(t)?{x:t.offsetWidth>0&&lw(n.width)/t.offsetWidth||1,y:t.offsetHeight>0&&lw(n.height)/t.offsetHeight||1}:lv;let o=n.width/parseFloat(r.width),l=n.height/parseFloat(r.height);return o&&Number.isFinite(o)||(o=1),l&&Number.isFinite(l)||(l=1),{x:o,y:l}}function ly(e,t,n,r){var o,l,i,a;void 0===t&&(t=!1),void 0===n&&(n=!1);let s=e.getBoundingClientRect(),c=lv;t&&(r?ls(r)&&(c=lC(r)):c=lC(e));let u=ls(e)?lr(e):window,d=!lg()&&n,h=(s.left+(d&&null!=(o=null==(l=u.visualViewport)?void 0:l.offsetLeft)?o:0))/c.x,g=(s.top+(d&&null!=(i=null==(a=u.visualViewport)?void 0:a.offsetTop)?i:0))/c.y,f=s.width/c.x,p=s.height/c.y;return{width:f,height:p,top:g,right:h+f,bottom:g+p,left:h,x:h,y:g}}function lx(e){return((lc(e)?e.ownerDocument:e.document)||window.document).documentElement}function lb(e){return ls(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function lk(e){return ly(lx(e)).left+lb(e).scrollLeft}function lS(e){if("html"===ll(e))return e;let t=e.assignedSlot||e.parentNode||(lu(e)?e.host:null)||lx(e);return lu(t)?t.host:t}function lM(e){return la(e)&&"fixed"!==lo(e).position?e.offsetParent:null}function l$(e){let t=lr(e),n=lM(e);for(;n&&["table","td","th"].includes(ll(n))&&"static"===lo(n).position;)n=lM(n);return n&&("html"===ll(n)||"body"===ll(n)&&"static"===lo(n).position&&!lh(n))?t:n||function(e){let t=lS(e);for(;la(t)&&!lf(t);){if(lh(t))return t;t=lS(t)}return null}(e)||t}function lL(e,t){var n;void 0===t&&(t=[]);let r=function e(t){let n=lS(t);return lf(n)?t.ownerDocument.body:la(n)&&ld(n)?n:e(n)}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),l=lr(r);return o?t.concat(l,l.visualViewport||[],ld(r)?r:[]):t.concat(r,lL(r))}function lA(e,t,n){return"viewport"===t?ln(function(e,t){let n=lr(e),r=lx(e),o=n.visualViewport,l=r.clientWidth,i=r.clientHeight,a=0,s=0;if(o){l=o.width,i=o.height;let e=lg();(e||!e&&"fixed"===t)&&(a=o.offsetLeft,s=o.offsetTop)}return{width:l,height:i,x:a,y:s}}(e,n)):ls(t)?function(e,t){let n=ly(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,l=la(e)?lC(e):{x:1,y:1},i=e.clientWidth*l.x,a=e.clientHeight*l.y,s=o*l.x,c=r*l.y;return{top:c,left:s,right:s+i,bottom:c+a,x:s,y:c,width:i,height:a}}(t,n):ln(function(e){var t;let n=lx(e),r=lb(e),o=null==(t=e.ownerDocument)?void 0:t.body,l=lm(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=lm(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-r.scrollLeft+lk(e),s=-r.scrollTop;return"rtl"===lo(o||n).direction&&(a+=lm(n.clientWidth,o?o.clientWidth:0)-l),{width:l,height:i,x:a,y:s}}(lx(e)))}let lT={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,l=[..."clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let r=lL(e).filter(e=>ls(e)&&"body"!==ll(e)),o=null,l="fixed"===lo(e).position,i=l?lS(e):e;for(;ls(i)&&!lf(i);){let e=lo(i),t=lh(i);(l?t||o:!(!t&&"static"===e.position&&o&&["absolute","fixed"].includes(o.position)))?o=e:r=r.filter(e=>e!==i),i=lS(i)}return t.set(e,r),r}(t,this._c):[].concat(n),r],i=l[0],a=l.reduce((e,n)=>{let r=lA(t,n,o);return e.top=lm(r.top,e.top),e.right=lp(r.right,e.right),e.bottom=lp(r.bottom,e.bottom),e.left=lm(r.left,e.left),e},lA(t,i,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,o=la(n),l=lx(n);if(n===l)return t;let i={scrollLeft:0,scrollTop:0},a={x:1,y:1},s={x:0,y:0};if((o||!o&&"fixed"!==r)&&(("body"!==ll(n)||ld(l))&&(i=lb(n)),la(n))){let e=ly(n);a=lC(n),s.x=e.x+n.clientLeft,s.y=e.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-i.scrollLeft*a.x+s.x,y:t.y*a.y-i.scrollTop*a.y+s.y}},isElement:ls,getDimensions:function(e){if(la(e))return{width:e.offsetWidth,height:e.offsetHeight};let t=ly(e);return{width:t.width,height:t.height}},getOffsetParent:l$,getDocumentElement:lx,getScale:lC,getElementRects(e){return A(this,null,function*(){let{reference:t,floating:n,strategy:r}=e,o=this.getOffsetParent||l$,l=this.getDimensions;return{reference:function(e,t,n){let r=la(t),o=lx(t),l=ly(e,!0,"fixed"===n,t),i={scrollLeft:0,scrollTop:0},a={x:0,y:0};if(r||!r&&"fixed"!==n){if(("body"!==ll(t)||ld(o))&&(i=lb(t)),la(t)){let e=ly(t,!0);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else o&&(a.x=lk(o))}return{x:l.left+i.scrollLeft-a.x,y:l.top+i.scrollTop-a.y,width:l.width,height:l.height}}(t,(yield o(n)),r),floating:M({x:0,y:0},(yield l(n)))}})},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>"rtl"===lo(e).direction};function lE(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:l=!0,ancestorResize:i=!0,elementResize:a=!0,animationFrame:s=!1}=r,c=l&&!s,u=c||i?[...ls(e)?lL(e):e.contextElement?lL(e.contextElement):[],...lL(t)]:[];u.forEach(e=>{c&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)});let d=null;if(a){let r=!0;d=new ResizeObserver(()=>{r||n(),r=!1}),ls(e)&&!s&&d.observe(e),ls(e)||!e.contextElement||s||d.observe(e.contextElement),d.observe(t)}let h=s?ly(e):null;return s&&function t(){let r=ly(e);h&&(r.x!==h.x||r.y!==h.y||r.width!==h.width||r.height!==h.height)&&n(),h=r,o=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach(e=>{c&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)}),null==(e=d)||e.disconnect(),d=null,s&&cancelAnimationFrame(o)}}let l_=(e,t,n)=>{let r=new Map,o=M({platform:lT},n),l=$(M({},o.platform),{_c:r});return lt(e,t,$(M({},o),{platform:l}))},lR=eE('<tc-root data-tc-dropdown-container="true"></tc-root>'),lW=()=>{var e;let t;let n=e9(),r=Y(tB),o=Y(oM),[l,i]=F(!1),[a,s]=F(r.account),[c,u]=F(!r.account),[d,h]=F(),[f,p]=F(),m=function(e,t,n){let r=()=>{var e;return null!=(e=null==n?void 0:n.placement)?e:"bottom"},o=()=>{var e;return null!=(e=null==n?void 0:n.strategy)?e:"absolute"},[l,i]=F({x:null,y:null,placement:r(),strategy:o(),middlewareData:{}}),[a,s]=F();q(()=>{let e=a();if(e)throw e.value});let c=j(()=>(e(),t(),{}));function u(){let l=e(),a=t();if(l&&a){let e=c();l_(l,a,{middleware:null==n?void 0:n.middleware,placement:r(),strategy:o()}).then(t=>{e===c()&&i(t)},e=>{s(e)})}}return q(()=>{let l=e(),i=t();if(null==n||n.middleware,r(),o(),l&&i){if(null!=n&&n.whileElementsMounted){let e=n.whileElementsMounted(l,i,u);e&&z(e)}else u()}}),{get x(){return l().x},get y(){return l().y},get placement(){return l().placement},get strategy(){return l().strategy},get middlewareData(){return l().middlewareData},update:u}}(f,d,{whileElementsMounted:lE,placement:"bottom-end"}),w=()=>{let e=a();if(e){let t=(0,g.Sq)(e.address,e.chain===g.S5.TESTNET);return t.slice(0,4)+"…"+t.slice(-4)}return""};o.connectionRestored.then(()=>u(!1));let v=r.onStatusChange(e=>{if(!e){i(!1),s(null),u(!1);return}s(e.account),u(!1)}),C=e=>{if(!a()||!l())return;let n=f().contains(e.target),r=t.contains(e.target);n||r||i(!1)};return e=()=>{document.body.addEventListener("click",C)},q(()=>Z(e)),z(()=>{document.body.removeEventListener("click",C),v()}),eh(eU,{component:te,get children(){return[eh(eC,{get when(){return c()},get children(){return eh(o4,{disabled:!0,"data-tc-connect-button-loading":"true",get children(){return eh(o3,{})}})}}),eh(eC,{get when(){return!c()},get children(){return[eh(eC,{get when(){return!a()},get children(){return eh(o2,{onClick:()=>o.openModal(),"data-tc-connect-button":"true",scale:"s",get children(){return[eh(rE,{get fill(){return n.colors.connectButton.foreground}}),eh(rc,{translationKey:"button.connectWallet",fontSize:"15px",lineHeight:"18px",fontWeight:"590",get color(){return n.colors.connectButton.foreground},children:"Connect wallet"})]}})}}),eh(eC,{get when(){return a()},get children(){return eh(o9,{get children(){return[eh(o5,{onClick:()=>i(e=>!e),ref:p,"data-tc-dropdown-button":"true",scale:"s",get children(){return[eh(rc,{fontSize:"15px",fontWeight:"590",lineHeight:"18px",get children(){return w()}}),eh(nA,{direction:"bottom"})]}}),eh(eK,{get children(){let e=Z(()=>document.importNode(lR,!0));return eI(h,e),e.style.setProperty("z-index","999"),e._$owner=P,eN(e,eh(nx,{onBeforeEnter:e=>{nF(e,[{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"translateY(0)"}],{duration:150})},onExit:(e,t)=>{nF(e,[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-8px)"}],{duration:150}).finished.then(t)},get children(){return eh(eC,{get when(){return l()},get children(){return eh(o8,{get hidden(){return!l()},onClose:()=>i(!1),ref(e){let n=t;"function"==typeof n?n(e):t=e}})}})}}),null),eN(e,eh(o6,{}),null),U(t=>{var n,r;let o=m.strategy,l=`${null!=(n=m.y)?n:0}px`,i=`${null!=(r=m.x)?r:0}px`;return o!==t._v$&&e.style.setProperty("position",t._v$=o),l!==t._v$2&&e.style.setProperty("top",t._v$2=l),i!==t._v$3&&e.style.setProperty("left",t._v$3=i),t},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}})]}})}})]}})]}})},lI=e6(nZ)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${nh("mobile")} {
        padding-left: 0;
        padding-right: 0;
    }
`,lN=e6(rS)`
    margin-top: 12px;

    ${nh("mobile")} {
        padding: 0 10px;
    }
`,lP=e6.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${nh("mobile")} {
        height: 160px;
        align-items: center;
    }
`;e6(rc)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`,e6(e=>{let t="tabBar"+Math.floor(1e4*Math.random());return eh(nY,{get class(){return e.class},"data-tc-tab-bar":"true",get children(){return[eh(nQ,{get right(){return 1===e.selectedTabIndex}}),eh(nX,{get isActive(){return 0===e.selectedTabIndex},get children(){return[eh(nJ,{type:"radio",name:t,get checked(){return 0===e.selectedTabIndex},onInput:()=>{var t;return null==(t=e.onSelectedTabIndexChange)?void 0:t.call(e,0)}}),j(()=>e.tab1)]}}),eh(nX,{get isActive(){return 1===e.selectedTabIndex},get children(){return[eh(nJ,{type:"radio",get checked(){return 1===e.selectedTabIndex},name:t,onInput:()=>{var t;return null==(t=e.onSelectedTabIndexChange)?void 0:t.call(e,1)}}),j(()=>e.tab2)]}})]}})})`
    margin: 0 auto 22px;
`;let[lB,lH]=tQ({buttonRootId:null,language:"en",returnStrategy:"back",twaReturnUrl:void 0,walletsListConfiguration:{},enableAndroidBackHandler:!0});function lV(e){return"jsBridgeKey"in e?$(M({},e),{injected:g.GE.isWalletInjected(e.jsBridgeKey),embedded:g.GE.isInsideWalletBrowser(e.jsBridgeKey)}):e}function lD(e,t){var n,r,o,l;return t&&(null==(n=t.includeWallets)?void 0:n.length)&&(r="name",o=e,l=t.includeWallets.map(lV),e=o.map(e=>{let t=l.find(t=>t[r]===e[r]);return l=l.filter(t=>t[r]!==e[r]),void 0===t?e:t}).concat(l)),e}function lO(e){return e.platforms.some(e=>["macos","linux","windows"].includes(e))}function lF(e){return e.platforms.some(e=>["ios","android"].includes(e))}function lK(e){return e.platforms.some(e=>["chrome","firefox","safari"].includes(e))}function lU(e,t){return!!t&&(e.name.toLowerCase()===t.toLowerCase()||e.appName.toLowerCase()===t.toLowerCase())}let lq=e6.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,lj=e6(rS)`
    margin-bottom: 18px;
`;e6.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${e=>e.isShown?e.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${nh("mobile")} {
        width: 100%;
    }
`;let lZ=e6.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;
    list-style: none;

    > li {
        display: block;
        height: fit-content;
    }

    ${nh("mobile")} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;
        padding: 8px 12px 16px;
        max-width: none;

        > li {
            min-width: 78px;
            display: flex;
        }

        > li > * {
            width: 100%;
        }
    }
`;e6(nC)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;let lz=e6(nR)`
    position: absolute;
    top: 16px;
    left: 16px;
`,lG=e6(of)`
    opacity: ${e=>e.withOpacity?"0.4":"1"};
`,lY=e6.div`
    display: grid;
    grid-template-columns: auto 28px;
    gap: 16px;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 16px;
    color: ${e=>e.theme.colors.text.secondary};
    background: ${e=>e.theme.colors.background.tint};

    ${nh("mobile")} {
        margin-left: 16px;
        margin-right: 16px;
    }
`,lQ=e6(r$)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: left;
    margin: 0;
`,lJ=e6.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    text-wrap: nowrap;
    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${e=>e.theme.colors.background.segment};
`,lX=eE('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5122_10355)"><circle cx="8" cy="8" r="8"></circle><circle cx="8" cy="11" r="1"></circle><path d="M7.04994 4.99875C7.02277 4.45542 7.45598 4 8 4C8.54402 4 8.97723 4.45541 8.95006 4.99875L8.78745 8.25094C8.76647 8.67055 8.42014 9 8 9C7.57986 9 7.23353 8.67055 7.21255 8.25094L7.04994 4.99875Z"></path></g><defs><clipPath id="clip0_5122_10355"><rect width="16" height="16"></rect></clipPath></defs></svg>'),l1=eE('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="12"></circle><circle cx="14" cy="18.9" r="1.4"></circle><path d="M12.6658 8.89845C12.63 8.13698 13.2377 7.5 14 7.5C14.7623 7.5 15.37 8.13698 15.3342 8.89845L15.047 15.0013C15.0207 15.5604 14.5597 16.0002 14 16.0002C13.4403 16.0002 12.9793 15.5604 12.953 15.0013L12.6658 8.89845Z"></path></svg>'),l0=e=>{let t=e9(),n=()=>e.size,r=()=>e.fill||t.colors.icon.error;return j((()=>{let o=j(()=>"16"===n());return()=>o()?(()=>{let e=lX.cloneNode(!0),n=e.firstChild,o=n.firstChild,l=o.nextSibling,i=l.nextSibling,a=n.nextSibling.firstChild.firstChild;return U(e=>{let n=r(),s=t.colors.constant.white,c=t.colors.constant.white,u=t.colors.constant.white;return n!==e._v$&&e_(o,"fill",e._v$=n),s!==e._v$2&&e_(l,"fill",e._v$2=s),c!==e._v$3&&e_(i,"fill",e._v$3=c),u!==e._v$4&&e_(a,"fill",e._v$4=u),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})():(()=>{let o=j(()=>"28"===n());return()=>o()?(()=>{let n=l1.cloneNode(!0),o=n.firstChild,l=o.nextSibling,i=l.nextSibling;return U(a=>{let s=e.class,c=r(),u=t.colors.constant.white,d=t.colors.constant.white;return s!==a._v$5&&e_(n,"class",a._v$5=s),c!==a._v$6&&e_(o,"fill",a._v$6=c),u!==a._v$7&&e_(l,"fill",a._v$7=u),d!==a._v$8&&e_(i,"fill",a._v$8=d),a},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),n})():null})()})())},l2=eE("<li></li>"),l5=e=>{let t=()=>oC()?void 0:510,[n,r]=F(null),o=null,l=e=>{r(e),null!=o&&clearTimeout(o),o=setTimeout(()=>r(null),1500)},i=t=>{if(!t.isSupportRequiredFeatures&&"strict"===e.featureCheckMode){l(t);return}e.onSelect(t)},a=()=>oC()?e.walletsList.filter(lF):e.walletsList,s=()=>a().filter(e=>e.isSupportRequiredFeatures),c=()=>a().filter(e=>!e.isSupportRequiredFeatures);return eh(lq,{"data-tc-wallets-modal-list":"true",get children(){return[eh(lz,{icon:"arrow",onClick:()=>e.onBack()}),eh(lj,{translationKey:"walletModal.wallets",children:"Wallets"}),eh(ob,{get maxHeight(){return t()},get children(){return[eh(lZ,{get children(){return eh(ev,{get each(){return s()},children:t=>(()=>{let n=l2.cloneNode(!0);return eN(n,eh(lG,{wallet:t,onClick:()=>e.onSelect(t)})),n})()})}}),eh(eC,{get when(){return c().length>0&&"hide"!==e.featureCheckMode},get children(){return[eh(lY,{get children(){return[eh(lQ,{translationKey:"walletModal.allWallets.walletsBelowNotSupported",children:"The wallets below don’t support all features of the connected service. You can use your recovery phrase in one of the supported wallets above."}),eh(l0,{size:"28"})]}}),eh(lZ,{get children(){return eh(ev,{get each(){return c()},children:t=>(()=>{let n=l2.cloneNode(!0);return eN(n,eh(lG,{wallet:t,onClick:()=>i(t),get withOpacity(){return"strict"===e.featureCheckMode}})),n})()})}}),eh(nx,{onBeforeEnter:e=>{nF(e,[{opacity:0,transform:"translate(-50%, 44px)"},{opacity:1,transform:"translate(-50%, 0)"}],{duration:150,easing:"ease-out"})},onExit:(e,t)=>{nF(e,[{opacity:1,transform:"translate(-50%, 0)"},{opacity:0,transform:"translate(-50%, 44px)"}],{duration:150,easing:"ease-out"}).finished.then(()=>{t()})},get children(){return eh(eC,{get when(){return n()},get children(){return eh(lJ,{get children(){return[eh(rH,{size:"xs"}),eh(rc,{translationKey:"walletModal.allWallets.walletNotSupportService",get translationValues(){return{name:n().name}},get children(){return[j(()=>n().name)," doesn’t support connected service"]}})]}})}})}})]}})]}})]}})},l4={m:"16px",s:"12px",none:"0"},l3={m:"6px",s:"6px",none:"0"},l9=e6.div`
    display: flex;
    flex-direction: column;
`,l8=e6.div`
    flex: 1;
    margin-top: ${e=>e.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,l6=e6(rn)`
    margin-bottom: 24px;
`,l7=e6(rS)`
    max-width: 288px;
    margin: 0 auto 2px;
`,ie=e6(r$)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,it=e6(nR)`
    position: absolute;
    top: 16px;
    left: 16px;
`,ir=e6.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,io=e6(ir)`
    padding-bottom: 0;
`,il=e6(nC)`
    margin-bottom: 24px;
`,ii=e6(rF)`
    margin-bottom: 18px;
    margin-top: 2px;
`,ia=e6(rH)`
    margin-bottom: 16px;
`,is=e6(r$)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,ic=e6(nC)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${e=>l4[e.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,iu=e6(t6)`
    width: 32px;
    height: 32px;
    border-radius: ${e=>l3[e.theme.borderRadius]};
`,id=e=>{let[t]=ra();return j(()=>{var n;return t(e.translationKey,e.translationValues,null==(n=e.children)?void 0:n.toString())})};function ih(e,t){let n=function(e,t,n){let r=new URL(e);return r.searchParams.append("ret",n),r.toString()}(e,0,"string"==typeof t?t:nr()?t.twaReturnUrl||t.returnStrategy:"none");if(!(0,g.Vb)(e))return n;let r=n.slice(n.lastIndexOf("&")+1);return n.slice(0,n.lastIndexOf("&"))+"-"+(0,g.fB)(r)}function ig(e,t){t=M({},t);let n=new URL(function(e){let t=new URL(e);return t.searchParams.has("attach")&&(t.searchParams.delete("attach"),t.pathname+="/start"),t.toString()}(e));if(n.searchParams.has("startapp")||n.searchParams.append("startapp","tonconnect"),no())t.returnStrategy="back",tu(ih(n.toString(),t.returnStrategy));else if(nr())nn("ios","android","macos","tdesktop","web")?(t.returnStrategy="back",ni(ih(n.toString(),t.returnStrategy))):nn("weba")?ni(ih(n.toString(),t)):tu(ih(n.toString(),t));else if(tm("ios")){"back"===t.returnStrategy&&(tw("safari")?t.returnStrategy="back":tw("chrome")?t.returnStrategy="googlechrome://":tw("firefox")?t.returnStrategy="firefox://":tw("opera")?t.returnStrategy="opera-http://":t.returnStrategy=location.href);let e=tw("chrome"),r=tw("firefox");if((e||r)&&!t.forceRedirect){let e=ih(n.toString(),t.returnStrategy);td(im(e),()=>tu(e))}else tu(ih(n.toString(),t.returnStrategy))}else if(tm("android")){t.returnStrategy="back";let e=tw("chrome"),r=tw("firefox");if((e||r)&&!t.forceRedirect){let e=ih(n.toString(),t.returnStrategy);td(im(e),()=>tu(e))}else tu(ih(n.toString(),t.returnStrategy))}else if(tm("ipad")){"back"===t.returnStrategy&&(tw("safari")?t.returnStrategy="back":tw("chrome")?t.returnStrategy="googlechrome://":tw("firefox")?t.returnStrategy="firefox://":tw("opera")?t.returnStrategy="opera-http://":t.returnStrategy=location.href);let e=tw("chrome"),r=tw("firefox"),o=(e||r)&&!t.forceRedirect,l=ih(n.toString(),t.returnStrategy);o?td(im(l),()=>tu(l)):tu(l)}else if(tm("macos","windows","linux")){t.returnStrategy="back",t.twaReturnUrl=void 0;let e=ih(n.toString(),t.returnStrategy);t.forceRedirect?tu(e):td(im(e),()=>tu(e))}else tu(ih(n.toString(),t))}function ip(e,t,n,r){if(n=M({},n),no())tm("ios","android")?("back"===n.returnStrategy&&(n.returnStrategy="tg://resolve"),r("universal-link"),tc(ih(e,n.returnStrategy),"_self")):(r("universal-link"),tu(ih(e,n.returnStrategy)));else if(nr()){if(nn("ios","android")){"back"===n.returnStrategy&&(n.returnStrategy="tg://resolve"),r("universal-link");let t=ih(e,n.returnStrategy);ni(t,()=>{r("universal-link"),tu(t)})}else if(nn("macos","tdesktop")){"back"===n.returnStrategy&&(n.returnStrategy="tg://resolve");let o=ih(e,n.returnStrategy);t&&!n.forceRedirect?(r("custom-deeplink"),td(tv(o,t),()=>{r("universal-link"),tu(o)})):(r("universal-link"),tu(o))}else if(nn("weba")){"back"===n.returnStrategy&&(tw("safari")?n.returnStrategy=location.href:tw("chrome")?n.returnStrategy="googlechrome://":tw("firefox")?n.returnStrategy="firefox://":tw("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href);let o=ih(e,n.returnStrategy);t&&!n.forceRedirect?(r("custom-deeplink"),td(tv(o,t),()=>{r("universal-link"),tu(o)})):(r("universal-link"),tu(o))}else if(nn("web")){"back"===n.returnStrategy&&(tw("safari")?n.returnStrategy=location.href:tw("chrome")?n.returnStrategy="googlechrome://":tw("firefox")?n.returnStrategy="firefox://":tw("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href);let o=ih(e,n.returnStrategy);t&&!n.forceRedirect?(r("custom-deeplink"),td(tv(o,t),()=>{r("universal-link"),tu(o)})):(r("universal-link"),tu(o))}else r("universal-link"),tu(ih(e,n.returnStrategy))}else if(tm("ios"))"back"===n.returnStrategy&&(tw("safari")?n.returnStrategy="none":tw("chrome")?n.returnStrategy="googlechrome://":tw("firefox")?n.returnStrategy="firefox://":tw("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),tw("chrome")?(r("universal-link"),tc(ih(e,n.returnStrategy),"_self")):(r("universal-link"),tu(ih(e,n.returnStrategy)));else if(tm("android"))"back"===n.returnStrategy&&(tw("chrome")?n.returnStrategy="googlechrome://":tw("firefox")?n.returnStrategy="firefox://":tw("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),r("universal-link"),tu(ih(e,n.returnStrategy));else if(tm("ipad"))"back"===n.returnStrategy&&(tw("safari")?n.returnStrategy="none":tw("chrome")?n.returnStrategy="googlechrome://":tw("firefox")?n.returnStrategy="firefox://":tw("opera")?n.returnStrategy="opera-http://":n.returnStrategy=location.href),tw("chrome")?(r("universal-link"),tc(ih(e,n.returnStrategy),"_self")):(r("universal-link"),tu(ih(e,n.returnStrategy)));else if(tm("macos","windows","linux")){"back"===n.returnStrategy&&(tw("safari")?n.returnStrategy="none":tw("chrome")?n.returnStrategy="googlechrome://":tw("firefox")?n.returnStrategy="firefox://":tw("opera")?n.returnStrategy="opera-http://":n.returnStrategy="none");let o=ih(e,n.returnStrategy);t&&!n.forceRedirect?(r("custom-deeplink"),td(tv(o,t),()=>{r("universal-link"),tu(o)})):(r("universal-link"),tu(o))}else r("universal-link"),tu(ih(e,n.returnStrategy))}function im(e){let t=new URL(e),[,n,r]=t.pathname.split("/"),o=t.searchParams.get("startapp");return`tg://resolve?domain=${n}&appname=${r}&startapp=${o}`}let iw=e=>{let[t,n]=F("mobile"),[r,o]=F(null);q(()=>{var t;o(null!=(t=e.defaultError)?t:null)});let[l,i]=F(),[a,s]=F(!0),c=Y(tB);z(c.onStatusChange(()=>{},t=>{if(t instanceof g.iA){o("missing-features");return}e.wallet.appName!==oh&&o("connection-declined")}));let u=()=>{try{let t=c.connect({universalLink:e.wallet.universalLink,bridgeUrl:e.wallet.bridgeUrl},e.additionalRequest);i(t)}catch(e){}};q(()=>{"extension"!==Z(t)&&(lF(e.wallet)||lO(e.wallet))&&u()});let d=()=>{o(null),"extension"===t()&&u(),n("mobile"),tR($(M({},e.wallet),{openMethod:"qrcode"}))},h=()=>{if(o(null),"extension"===t()&&u(),n("desktop"),(0,g.Vb)(l()))f();else{let t=!a();s(!1),ip(l(),e.wallet.deepLink,{returnStrategy:lB.returnStrategy,forceRedirect:t},t=>{tR($(M({},e.wallet),{openMethod:t}))})}},f=()=>{let t=!a();s(!1),tR($(M({},e.wallet),{openMethod:"universal-link"})),ig(l(),{returnStrategy:lB.returnStrategy,twaReturnUrl:lB.twaReturnUrl,forceRedirect:t})},p=()=>{o(null),n("extension"),(0,g.Ee)(e.wallet)&&(tR(e.wallet),c.connect({jsBridgeKey:e.wallet.jsBridgeKey},e.additionalRequest))};return lF(e.wallet)?d():lK(e.wallet)?p():h(),eh(l9,{"data-tc-wallets-modal-connection-desktop":"true",get children(){return[eh(eC,{get when(){return!e.backDisabled},get children(){return eh(it,{icon:"arrow",onClick:()=>e.onBackClick()})}}),eh(l7,{get children(){return e.wallet.name}}),eh(eC,{get when(){return j(()=>"mobile"===t())()&&!r()},get children(){return eh(ie,{translationKey:"walletModal.desktopConnectionModal.scanQR",get translationValues(){return{name:e.wallet.name}},get children(){return["Scan the QR code below with your phone’s or ",j(()=>e.wallet.name),"’s camera"]}})}}),eh(l8,{get qr(){return"mobile"===t()},get children(){return eh(ey,{get children(){return[eh(ex,{get when(){return r()},get children(){return[eh(ia,{size:"s"}),eh(ey,{get children(){return[eh(ex,{get when(){return"missing-features"===r()},get children(){return eh(is,{translationKey:"walletModal.desktopConnectionModal.missingFeatures",get translationValues(){return{name:e.wallet.name}},children:"Please update Wallet, your version does not support required features for this dApp"})}}),eh(ex,{get when(){return"connection-declined"===r()},get children(){return eh(is,{translationKey:"walletModal.desktopConnectionModal.connectionDeclined",children:"Connection declined"})}}),eh(ex,{get when(){return"not-supported"===r()},get children(){return eh(is,{translationKey:"walletModal.desktopConnectionModal.notSupportedWallet",get translationValues(){return{name:e.wallet.name}},get children(){return[j(()=>e.wallet.name)," doesn’t support the requested action. Please connect another wallet that supports it."]}})}})]}}),eh(ir,{get children(){return[eh(eC,{get when(){return"not-supported"!==r()},get children(){return eh(nC,{get leftIcon(){return eh(r1,{})},get onClick(){return"extension"===t()?p:h},get children(){return eh(id,{translationKey:"common.retry",children:"Retry"})}})}}),eh(eC,{get when(){return"missing-features"===r()},get children(){return eh(oS,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return eh(nC,{get leftIcon(){return eh(r2,{})},get children(){return eh(id,{translationKey:"walletModal.desktopConnectionModal.updateWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Update ",j(()=>e.wallet.name)]}})}})}})}}),eh(eC,{get when(){return"not-supported"===r()},get children(){return eh(nC,{onClick:()=>e.onBackClick(),get children(){return eh(id,{translationKey:"walletModal.desktopConnectionModal.chooseAnotherWallet",children:"Choose Another Wallet"})}})}})]}})]}}),eh(ex,{get when(){return"mobile"===t()},get children(){return eh(l6,{disableCopy:!1,get sourceUrl(){return ih(l(),"none")},get imageUrl(){return e.wallet.imageUrl}})}}),eh(ex,{get when(){return"extension"===t()},get children(){return[eh(eC,{get when(){return(0,g.Ee)(e.wallet)},get children(){return[eh(ii,{size:"s"}),eh(is,{translationKey:"walletModal.desktopConnectionModal.continueInExtension",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",j(()=>e.wallet.name)," browser extension…"]}}),eh(ir,{get children(){return eh(nC,{get leftIcon(){return eh(r1,{})},onClick:p,get children(){return eh(id,{translationKey:"common.retry",children:"Retry"})}})}})]}}),eh(eC,{get when(){return!(0,g.Ee)(e.wallet)},get children(){return[eh(is,{translationKey:"walletModal.desktopConnectionModal.dontHaveExtension",get translationValues(){return{name:e.wallet.name}},get children(){return["Seems you don't have installed ",j(()=>e.wallet.name)," browser extension"]}}),eh(ir,{get children(){return eh(oS,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return eh(nC,{get rightIcon(){return eh(r2,{})},onClick:p,get children(){return eh(id,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Get ",j(()=>e.wallet.name)]}})}})}})}})]}})]}}),eh(ex,{get when(){return"desktop"===t()},get children(){return[eh(rF,{size:"m"}),eh(is,{translationKey:"walletModal.desktopConnectionModal.continueOnDesktop",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",j(()=>e.wallet.name)," on desktop…"]}}),eh(ir,{get children(){return[eh(nC,{get leftIcon(){return eh(r1,{})},onClick:h,get children(){return eh(id,{translationKey:"common.retry",children:"Retry"})}}),eh(oS,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return eh(nC,{get rightIcon(){return eh(r2,{})},get children(){return eh(id,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Get ",j(()=>e.wallet.name)]}})}})}})]}})]}})]}})}}),eh(eC,{get when(){return e.wallet.appName===oh},get children(){return eh(ic,{get rightIcon(){return eh(iu,{get src(){return og.TG}})},scale:"s",onClick:f,get children(){return eh(id,{translationKey:"walletModal.desktopConnectionModal.openWalletOnTelegram",children:"Open Wallet in Telegram on desktop"})}})}}),eh(eC,{get when(){return e.wallet.appName!==oh},get children(){return eh(io,{get children(){return[eh(eC,{get when(){return j(()=>"mobile"!==t())()&&lF(e.wallet)},get children(){return eh(il,{appearance:"secondary",get leftIcon(){return eh(rY,{})},onClick:d,get children(){return eh(id,{translationKey:"common.mobile",children:"Mobile"})}})}}),eh(eC,{get when(){return j(()=>"extension"!==t())()&&lK(e.wallet)},get children(){return eh(il,{appearance:"secondary",get leftIcon(){return eh(rz,{})},onClick:p,get children(){return eh(id,{translationKey:"common.browserExtension",children:"Browser Extension"})}})}}),eh(eC,{get when(){return j(()=>"desktop"!==t())()&&lO(e.wallet)},get children(){return eh(il,{appearance:"secondary",get leftIcon(){return eh(rJ,{})},onClick:h,get children(){return eh(id,{translationKey:"common.desktop",children:"Desktop"})}})}})]}})}})]}})},iv=e6.div``,iC=e6(nR)`
    position: absolute;
    top: 16px;
    left: 16px;
`,iy=e6(rS)`
    margin-bottom: 18px;
`,ix=e6.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,ib=e2`
    margin-bottom: 12px;
`,ik=e6(rA)`
    text-align: center;
    margin-bottom: 4px;
`,iS=e6(rc)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,iM=e6.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,i$={GET_A_WALLET:"https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"},iL=e=>eh(iv,{"data-tc-wallets-modal-info":"true",get children(){return[eh(iC,{icon:"arrow",onClick:()=>e.onBackClick()}),eh(iy,{translationKey:"walletModal.infoModal.whatIsAWallet",children:"What is a wallet"}),eh(ob,{get children(){return[eh(ix,{get children(){return[eh(r9,{class:ib}),eh(ik,{translationKey:"walletModal.infoModal.secureDigitalAssets",children:"Secure digital assets storage"}),eh(iS,{translationKey:"walletModal.infoModal.walletProtects",children:"A wallet protects and manages your digital assets including TON, tokens and collectables."})]}}),eh(ix,{get children(){return[eh(r6,{class:ib}),eh(ik,{translationKey:"walletModal.infoModal.controlIdentity",children:"Control your Web3 identity"}),eh(iS,{translationKey:"walletModal.infoModal.manageIdentity",children:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."})]}}),eh(ix,{get children(){return[eh(oe,{class:ib}),eh(ik,{translationKey:"walletModal.infoModal.effortlessCryptoTransactions",children:"Effortless crypto transactions"}),eh(iS,{translationKey:"walletModal.infoModal.easilySend",children:"Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."})]}}),eh(iM,{get children(){return eh(oS,{get href(){return i$.GET_A_WALLET},blank:!0,get children(){return eh(nC,{get rightIcon(){return eh(r4,{})},get children(){return eh(id,{translationKey:"walletModal.infoModal.getAWallet",children:"Get a Wallet"})}})}})}})]}})]}}),iA=e6.div``,iT=e6.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,iE=e6(rS)`
    max-width: 262px;
    margin: 0 auto 8px;
`,i_=e6(nR)`
    position: absolute;
    top: 16px;
    left: 16px;
`,iR=e6.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${e=>to(e.theme.colors.icon.secondary,.2)};
`,iW=e6(t6)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,iI=e6(oS)`
    margin-left: auto;
`,iN=e6(rF)`
    margin-bottom: 18px;
    margin-top: 2px;
`,iP=e6(rH)`
    margin-bottom: 16px;
`,iB=e6(r$)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,iH=e6.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,iV={m:"16px",s:"8px",none:"0"},iD=e6(rS)`
    margin-bottom: 2px;
    padding: 0 52px;
`,iO=e6(r$)`
    margin-bottom: 20px;
    padding: 0 64px;
`,iF=e6.div`
    padding: 0 24px 16px;
`,iK=e6.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 0 24px 24px;
    margin-top: 0;
`,iU=e6(nC)`
    width: 100%;
    height: 56px;
    border-radius: ${e=>iV[e.theme.borderRadius]};
    background-color: ${e=>to(e.theme.colors.accent,.12)};
    color: ${e=>e.theme.colors.accent};
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    padding: 17px 20px 19px 20px;
`,iq=e=>[eh(iD,{get children(){return e.walletInfo.name}}),eh(iO,{translationKey:"walletModal.mobileConnectionModal.scanQR",get translationValues(){return{name:e.walletInfo.name}},get children(){return["Scan the QR code below with your phone’s or ",j(()=>e.walletInfo.name),"’s camera"]}}),eh(iF,{get children(){return eh(rn,{get imageUrl(){return e.walletInfo.imageUrl},get sourceUrl(){return ih(e.universalLink,"none")},disableCopy:!0})}}),eh(iK,{get children(){return[eh(iU,{appearance:"secondary",onClick:()=>{var t;return null==(t=e.onOpenLink)?void 0:t.call(e)},get children(){return eh(id,{translationKey:"walletModal.mobileUniversalModal.openLink",children:"Open Link"})}}),eh(iU,{appearance:"secondary",onClick:()=>{var t;return null==(t=e.onCopy)?void 0:t.call(e)},get children(){return eh(id,{get translationKey(){return void 0!==e.isCopiedShown?"common.copied":"common.copyLink"},get children(){return void 0!==e.isCopiedShown?"Copied":"Copy Link"}})}})]}})],ij=e=>{let t=e9(),[n,r]=F(!0),[o,l]=F(!1),[i,a]=F(null);q(()=>{var t;a(null!=(t=e.defaultError)?t:null)});let s=Y(tB),c=s.onStatusChange(()=>{},()=>{a(null)}),u=j(()=>s.connect({universalLink:e.wallet.universalLink,bridgeUrl:e.wallet.bridgeUrl},e.additionalRequest)),d=()=>{tR($(M({},e.wallet),{openMethod:"universal-link"})),ig(u(),{returnStrategy:lB.returnStrategy,twaReturnUrl:lB.twaReturnUrl,forceRedirect:!0})},h=()=>{let t=u();if((0,g.Vb)(t))return d();a(null);let o=!n();r(!1),ip(u(),e.wallet.deepLink,{returnStrategy:lB.returnStrategy,forceRedirect:o},t=>{tR($(M({},e.wallet),{openMethod:t}))})},[f,p]=F(void 0),m=()=>A(void 0,null,function*(){void 0!==f()&&clearTimeout(f()),yield re(u());let e=setTimeout(()=>p(void 0),1500);p(e)}),w=()=>{a(null),l(!0),tR($(M({},e.wallet),{openMethod:"qrcode"}))},v=()=>{l(!1),tR($(M({},e.wallet),{openMethod:"universal-link"}))},C=()=>{o()?v():e.onBackClick()};return z(c),h(),eh(iA,{"data-tc-wallets-modal-connection-mobile":"true",get children(){return[eh(eC,{get when(){return!e.backDisabled||o()},get children(){return eh(i_,{icon:"arrow",onClick:C})}}),eh(eC,{get when(){return o()},get children(){return eh(iq,{get universalLink(){return u()},get walletInfo(){return e.wallet},onOpenLink:h,onCopy:m,get isCopiedShown(){return f()}})}}),eh(eC,{get when(){return!o()},get children(){return[eh(iE,{get children(){return e.wallet.name}}),eh(iT,{get children(){return[eh(eC,{get when(){return i()},get children(){return[eh(iP,{size:"s"}),eh(ey,{get children(){return[eh(ex,{get when(){return"missing-features"===i()},get children(){return eh(iB,{translationKey:"walletModal.mobileConnectionModal.missingFeatures",get translationValues(){return{name:e.wallet.name}},children:"Please update Wallet, your version does not support required features for this dApp"})}}),eh(ex,{get when(){return"connection-declined"===i()},get children(){return eh(iB,{translationKey:"walletModal.mobileConnectionModal.connectionDeclined",children:"Connection declined"})}}),eh(ex,{get when(){return"not-supported"===i()},get children(){return eh(iB,{translationKey:"walletModal.mobileConnectionModal.notSupportedWallet",get translationValues(){return{name:e.wallet.name}},get children(){return[j(()=>e.wallet.name)," doesn’t support the requested action. Please connect another wallet that supports it."]}})}})]}}),eh(iH,{get children(){return eh(ey,{get children(){return[eh(ex,{get when(){return"missing-features"===i()},get children(){return[eh(nC,{get leftIcon(){return eh(r1,{})},onClick:h,get children(){return eh(id,{translationKey:"common.retry",children:"Retry"})}}),eh(oS,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return eh(nC,{get leftIcon(){return eh(r2,{})},get children(){return eh(id,{translationKey:"walletModal.mobileConnectionModal.updateWallet",get translationValues(){return{name:e.wallet.name}},get children(){return["Update ",j(()=>e.wallet.name)]}})}})}})]}}),eh(ex,{get when(){return"not-supported"===i()},get children(){return eh(nC,{onClick:()=>e.onBackClick(),get children(){return eh(id,{translationKey:"walletModal.mobileConnectionModal.chooseAnotherWallet",children:"Choose Another Wallet"})}})}}),eh(ex,{get when(){return"connection-declined"===i()},get children(){return[eh(nC,{get leftIcon(){return eh(r1,{})},onClick:h,get children(){return eh(id,{translationKey:"common.retry",children:"Retry"})}}),eh(nC,{get leftIcon(){return eh(oi,{get fill(){return t.colors.accent}})},onClick:w,get children(){return eh(id,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}})}})]}}),eh(eC,{get when(){return!i()},get children(){return[eh(iN,{size:"s"}),eh(iB,{translationKey:"walletModal.mobileConnectionModal.continueIn",get translationValues(){return{name:e.wallet.name}},get children(){return["Continue in ",j(()=>e.wallet.name),"…"]}}),eh(iH,{get children(){return[eh(nC,{get leftIcon(){return eh(r1,{})},onClick:h,get children(){return eh(id,{translationKey:"common.retry",children:"Retry"})}}),eh(nC,{get leftIcon(){return eh(oi,{get fill(){return t.colors.accent}})},onClick:w,get children(){return eh(id,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}})]}}),eh(iR,{get children(){return[eh(iW,{get src(){return e.wallet.imageUrl}}),eh(rA,{get children(){return e.wallet.name}}),eh(iI,{get href(){return e.wallet.aboutUrl},blank:!0,get children(){return eh(nC,{get children(){return eh(id,{translationKey:"common.get",children:"GET"})}})}})]}})]}})]}})},iZ={m:"16px",s:"12px",none:"0"},iz={m:"6px",s:"6px",none:"0"};e6.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${nf} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${ng} {
        &:active {
            transform: scale(0.92);
        }
    }
`;let iG=e6(rS)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,iY=e6(r$)`
    margin: ${e=>{var t;return null!=(t=e.margin)?t:"0 0 28px 0"}};
    padding: ${e=>{var t;return null!=(t=e.padding)?t:"0 24px"}};
    min-height: ${e=>{var t;return null!=(t=e.padding)?t:"44px"}};
    max-width: ${e=>e.maxWidth}px;
    margin-left: ${e=>e.maxWidth?"auto":"0px"};
    margin-right: ${e=>e.maxWidth?"auto":"0px"};
`;e6(nC)`
    display: block;
    margin: 0 auto;
`;let iQ=e6(nC)`
    margin: 0 28px 24px;
    width: calc(100% - 56px);
    border-radius: ${e=>iZ[e.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${e=>e.theme.colors.telegramButton};

    color: ${e=>e.theme.colors.constant.white};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    @media (max-width: 375px) {
        margin: 0 16px 24px;
        width: calc(100% - 32px);
    }
`,iJ=e6(t6)`
    background-color: transparent;
    border-radius: ${e=>iz[e.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,iX=e6(nR)`
    position: absolute;
    top: 16px;
    left: 16px;
`,i1={m:"16px",s:"8px",none:"0"},i0=e6(rS)`
    margin-bottom: 2px;
    padding: 0 52px;
`,i2=e6(r$)`
    margin-bottom: 20px;
    padding: 0 64px;
`,i5=e6.div`
    padding: 0 24px 16px;
`,i4=e6.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 0 24px 24px;
    margin-top: 0;
`,i3=e6(nC)`
    width: 100%;
    height: 56px;
    border-radius: ${e=>i1[e.theme.borderRadius]};
    background-color: ${e=>to(e.theme.colors.accent,.12)};
    color: ${e=>e.theme.colors.accent};
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    padding: 17px 20px 19px 20px;
`,i9=e=>[eh(i0,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your TON wallet"}),eh(i2,{translationKey:"walletModal.mobileUniversalModal.scan",children:"Scan with your mobile wallet"}),eh(i5,{get children(){return eh(rn,{get imageUrl(){return og.TON},get sourceUrl(){return ih(e.universalLink,"none")},disableCopy:!0})}}),eh(i4,{get children(){return[eh(i3,{appearance:"secondary",onClick:()=>e.onOpenLink(),get children(){return eh(id,{translationKey:"walletModal.mobileUniversalModal.openLink",children:"Open Link"})}}),eh(i3,{appearance:"secondary",onClick:()=>e.onCopy(),get children(){return eh(id,{get translationKey(){return void 0!==e.isCopiedShown?"common.copied":"common.copyLink"},get children(){return void 0!==e.isCopiedShown?"Copied":"Copy Link"}})}})]}})];function i8(e){return Array.from(new Set(e.filter(g.ip).map(e=>e.bridgeUrl))).map(e=>({bridgeUrl:e}))}function i6(e,t){let n=new Set(null==e?void 0:e.map(e=>e.bridgeUrl)),r=new Set(null==t?void 0:t.map(e=>e.bridgeUrl));return n.size===r.size&&[...n].every(e=>r.has(e))}let i7=eE("<li></li>"),ae=eE('<div data-tc-wallets-modal-universal-mobile="true"></div>'),at=e=>{let[t,n]=F(!1),[r,o]=F(!0),[l,i]=F(null),a=lB.connector,s=()=>e.walletsList.filter(e=>lF(e)&&e.appName!==oh),c=()=>s().length>7,u=j(()=>i8(e.walletsList),null,{equals:i6}),d=j(()=>{var t,n;return null!=(n=null==(t=e.walletsList.find(e=>e.appName===oh))?void 0:t.isSupportRequiredFeatures)&&n},null),h=()=>(l()||i(a.connect(u(),e.additionalRequest)),l());tR({openMethod:"universal-link"});let[f,p]=F(void 0),m=()=>A(void 0,null,function*(){void 0!==f()&&clearTimeout(f()),yield re(h());let e=setTimeout(()=>p(void 0),1500);p(e)}),w=()=>{let e=!r();o(!1),ip(h(),void 0,{returnStrategy:lB.returnStrategy,forceRedirect:e},e=>{tR({openMethod:e})})},v=()=>{i(null);let t=e.walletsList.find(e=>e.appName===oh);if(!t||!(0,g.ip)(t))throw new ta("@wallet bot not found in the wallets list");let n=a.connect({bridgeUrl:t.bridgeUrl,universalLink:t.universalLink},e.additionalRequest),l=!r();o(!1),ig(n,{returnStrategy:lB.returnStrategy,twaReturnUrl:lB.twaReturnUrl,forceRedirect:l})},C=()=>{n(!0),tR({openMethod:"qrcode"})},y=()=>{n(!1),tR({openMethod:"universal-link"})},x=j(()=>s().filter(e=>e.isSupportRequiredFeatures),null),b=j(()=>x().slice(0,3),null),k=j(()=>s().filter(e=>!b().find(t=>t.appName===e.appName)).slice(0,4),null);return(()=>{let n=ae.cloneNode(!0);return eN(n,eh(eC,{get when(){return t()},get children(){return[eh(iX,{icon:"arrow",onClick:y}),eh(i9,{get universalLink(){return h()},get isCopiedShown(){return f()},onOpenLink:w,onCopy:m})]}}),null),eN(n,eh(eC,{get when(){return!t()},get children(){return[eh(iX,{get icon(){return eh(oi,{})},onClick:C}),eh(iG,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your TON wallet"}),eh(eC,{get when(){return d()},get children(){return[eh(iY,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",maxWidth:320,children:"Use Wallet in Telegram or choose other application"}),eh(iQ,{get leftIcon(){return eh(on,{})},get rightIcon(){return eh(iJ,{get src(){return og.TG}})},onClick:v,scale:"s",get children(){return eh(id,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegram",children:"Connect Wallet in Telegram"})}})]}}),eh(iY,{translationKey:"walletModal.mobileUniversalModal.chooseOtherApplication",maxWidth:342,padding:"0 24px 8px 24px",margin:"0",children:"Choose other application"}),eh(rp,{get children(){return[eh(ev,{get each(){return j(()=>!!c())()?b():x()},children:t=>(()=>{let n=i7.cloneNode(!0);return eN(n,eh(rb,{get icon(){return t.imageUrl},get name(){return t.name},onClick:()=>e.onSelect(t)})),n})()}),eh(eC,{get when(){return c()},get children(){let t=i7.cloneNode(!0);return eN(t,eh(od,{labelLine1:"View all",labelLine2:"wallets",get images(){return k().map(e=>e.imageUrl)},onClick:()=>e.onSelectAllWallets()})),t}})]}})]}}),null),n})()},an={m:"16px",s:"8px",none:"0"},ar={m:"8px",s:"4px",none:"0"},ao=e6.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,al=e6(r$)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,ai=e6(r$)`
    margin-bottom: 16px;
`,aa=e6(rn)`
    margin-bottom: 24px;
`,as=e6.ul`
    display: flex;
`;e6.div`
    display: flex;
    gap: 16px;
    width: 100%;
`,e6(nC)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${e=>an[e.theme.borderRadius]};

    &:hover {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${e=>e.disableEventsAnimation?"transform: unset;":""}
    }
`,e6.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${e=>e.theme.colors.background.primary};
    border-radius: ${e=>an[e.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`,e6.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${e=>ar[e.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${e=>e.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,e6(t6)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`,e6.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,e6(rc)`
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
`;let ac=eE("<li></li>"),au=e=>{let[t,n]=F(!1),r=lB.connector,o=j(()=>i8(e.walletsList),null,{equals:i6});tR({openMethod:"qrcode"});let l=j(()=>r.connect(o(),e.additionalRequest)),i=j(()=>e.walletsList.filter(e=>e.isSupportRequiredFeatures),null),a=j(()=>i().slice(0,3),null),s=j(()=>e.walletsList.filter(e=>!a().find(t=>t.appName===e.appName)).slice(0,4),null);return eh(ao,{onClick:()=>n(!1),"data-tc-wallets-modal-universal-desktop":"true",get children(){return[eh(rS,{translationKey:"walletModal.desktopUniversalModal.connectYourWallet",children:"Connect your wallet"}),eh(al,{translationKey:"walletModal.desktopUniversalModal.scan",children:"Scan with your mobile wallet"}),eh(aa,{get sourceUrl(){return ih(l(),"none")},get disableCopy(){return t()},get imageUrl(){return og.TON}}),eh(ai,{translationKey:"walletModal.desktopUniversalModal.availableWallets",children:"Available wallets"}),eh(as,{get children(){return[eh(ev,{get each(){return a()},children:t=>(()=>{let n=ac.cloneNode(!0);return eN(n,eh(of,{wallet:t,onClick:()=>e.onSelect(t)})),n})()}),eh(od,{labelLine1:"View all",labelLine2:"wallets",get images(){return s().map(e=>e.imageUrl)},onClick:()=>e.onSelectAllWallets()})]}})]}})},ad={m:"16px",s:"8px",none:"0"},ah=e6(rS)`
    max-width: 288px;
    margin: 0 auto 38px;
`,ag=e6.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,af=e6(nR)`
    position: absolute;
    top: 16px;
    left: 16px;
`,ap=e6(rS)`
    text-align: center;
    font-size: 20px;
    line-height: 28px;
`,am=e6(rc)`
    margin-top: 12px;
    margin-bottom: 24px;
    text-align: center;
    max-width: 360px;
    font-weight: 400;
    color: ${e=>e.theme.colors.text.secondary};
`;e6.button`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    color: ${e=>e.theme.colors.accent};
    text-decoration: underline;
    cursor: pointer;
    font: inherit;
`;let aw=e6.div`
    margin-bottom: 46px;
`,av=e6(rH)`
    margin-bottom: 16px;
`;e6.ul`
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
    list-style: none;
    padding: 0;
`;let aC=e6(nC)`
    max-width: 320px;
    width: 100%;
    height: 48px;
    font-size: 16px;
    line-height: 20px;
    border-radius: ${e=>ad[e.theme.borderRadius]};
    margin-bottom: 28px;
`,ay=e6(r$)`
    color: ${e=>e.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,ax=e6.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 31px;
`,ab=e6.div`
    margin: 0 8px 16px 8px;
`,ak=e6(nR)`
    position: absolute;
    top: 16px;
    left: 16px;
`,aS=e6(rS)`
    margin-bottom: 18px;
    text-align: center;
`,aM=e6.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;e6.div`
    margin-bottom: 12px;
`;let a$=e6(rA)`
    text-align: center;
    margin-bottom: 4px;
`,aL=e6(rc)`
    text-align: center;
    max-width: 352px;
    color: ${e=>e.theme.colors.text.secondary};
`,aA=e6.div`
    width: 44px;
    height: 44px;
    border-radius: 20px;
    background-color: ${e=>{var t;return null==(t=e.theme)?void 0:t.colors.icon.secondary}};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    font-weight: 700;
    font-size: 22px;
    color: ${e=>{var t;return null==(t=e.theme)?void 0:t.colors.text.primary}};
`,aT=e=>eh(ab,{"data-tc-wallets-modal-restore":"true",get children(){return[eh(ak,{icon:"arrow",get onClick(){return e.onBackClick}}),eh(aS,{translationKey:"walletModal.restoreInfoModal.title",children:"Restore"}),eh(ob,{get children(){return[eh(aM,{get children(){return[eh(aA,{children:"1"}),eh(a$,{translationKey:"walletModal.restoreModal.step1.title",children:"Find your current recovery phrase"}),eh(aL,{translationKey:"walletModal.restoreModal.step1.text",children:"Open your wallet settings and locate the\xa0recovery\xa0phrase"})]}}),eh(aM,{get children(){return[eh(aA,{children:"2"}),eh(a$,{translationKey:"walletModal.restoreModal.step2.title",children:"Copy your recovery phrase"}),eh(aL,{translationKey:"walletModal.restoreModal.step2.text",children:"Write it down or copy it to a safe place"})]}}),eh(aM,{get children(){return[eh(aA,{children:"3"}),eh(a$,{translationKey:"walletModal.restoreModal.step3.title",children:"Restore in a supported wallet from\xa0the\xa0list\xa0below"}),eh(aL,{translationKey:"walletModal.restoreModal.step3.text",children:"Enter the recovery phrase to access your wallet"})]}})]}})]}}),aE=e=>{let[t,n]=F(null),[r,o]=F(!1),l=j(()=>e.walletsList.find(t=>t.appName===e.currentWallet.device.appName||t.name===e.currentWallet.device.appName)),i=j(()=>{var t,n,r,o;return(null!=(n=null==(t=l())?void 0:t.appName)?n:e.currentWallet.device.appName)===oh?"Wallet in Telegram":null!=(o=null==(r=l())?void 0:r.name)?o:e.currentWallet.device.appName}),a=j(()=>{let t=l();if(!(null==t?void 0:t.features))return!1;let n=e.walletsModalState.requiredFeature,r=n?{[n.featureName]:n.value}:{},o=(0,g._0)(t.features,r),i=(0,g._0)(e.currentWallet.device.features,r);return o&&!i}),s=()=>A(void 0,null,function*(){yield e.onDisconnect(),e.onSelect(t())});return eh(ag,{get children(){return eh(ey,{get children(){return[eh(ex,{get when(){return r()},get children(){return eh(aT,{onBackClick:()=>o(!1)})}}),eh(ex,{get when(){return t()},get children(){return[eh(aw,{}),eh(ag,{get children(){return[eh(af,{icon:"arrow",onClick:()=>n(null)}),eh(ap,{translationKey:"walletModal.featureNotSupported.disconnect.title",children:"Confirm Disconnect"}),eh(am,{translationKey:"walletModal.featureNotSupported.disconnect.description",get translationValues(){return{name:t().name}},get children(){return["You will be disconnected from your current wallet and redirected to connect ",j(()=>{var e;return null==(e=t())?void 0:e.name}),"."]}}),eh(aC,{onClick:()=>s(),get children(){return eh(id,{translationKey:"walletModal.featureNotSupported.disconnect.button",children:"Disconnect"})}})]}})]}}),eh(ex,{get when(){return a()},get children(){return[eh(ah,{get children(){return i()}}),eh(av,{size:"s"}),eh(ay,{translationKey:"walletModal.featureNotSupported.version.description",get translationValues(){return{name:i()}},get children(){return["Your current version of ",j(()=>i())," or wallet contract type doesn't support the required features. Please update it to continue."]}}),eh(ax,{get children(){return[eh(oS,{get href(){return l().aboutUrl},blank:!0,get children(){return eh(nC,{get leftIcon(){return eh(r2,{})},get children(){return eh(id,{translationKey:"walletModal.featureNotSupported.version.updateButton",get translationValues(){return{name:i()}},get children(){return["Update ",j(()=>i())]}})}})}}),eh(oS,{href:"https://tonkeeper.helpscoutdocs.com/article/102-w5",blank:!0,get children(){return eh(nC,{get leftIcon(){return eh(r2,{})},get children(){return eh(id,{translationKey:"walletModal.featureNotSupported.version.aboutW5",children:"About W5"})}})}})]}})]}}),eh(ex,{when:!0,get children(){return[eh(aw,{}),eh(av,{size:"s"}),eh(ap,{translationKey:"walletModal.featureNotSupported.wallet.title",get translationValues(){return{name:i()}},get children(){return[j(()=>i())," doesn’t support the requested\xa0action"]}}),eh(aw,{})]}})]}})}})},a_=()=>{let{locale:e}=ra()[1];q(()=>e(lB.language)),q(()=>{tS()?ox():(i(null),u("universal"),h(!1))});let t=Y(tB),n=Y(oM),[o]=function(e,t,n){let o,l,i;2==arguments.length&&"object"==typeof t||1==arguments.length?(o=!0,l=e,i=t||{}):(o=e,l=t,i=n||{});let a=null,s=N,c=null,u=!1,d="initialValue"in i,h="function"==typeof o&&j(o),g=new Set,[f,p]=(i.storage||F)(i.initialValue),[m,w]=F(void 0),[v,C]=F(void 0,{equals:!1}),[y,x]=F(d?"ready":"unresolved");if(T.context){let e;c=`${T.context.id}${T.context.count++}`,"initial"===i.ssrLoadFrom?s=i.initialValue:T.load&&(e=T.load(c))&&(s=e[0])}function b(e,t,n,r){return a===e&&(a=null,d=!0,(e===s||t===s)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(r,{value:t})),s=N,er(()=>{for(let e of(void 0===n&&p(()=>t),x(void 0!==n?"errored":"ready"),w(n),g.keys()))e.decrement();g.clear()},!1)),t}function k(){let e=f(),t=m();if(void 0!==t&&!a)throw t;return B&&!B.user&&r&&K(()=>{v(),a&&(r.resolved||g.has(r)||(r.increment(),g.add(r)))}),e}function S(e=!0){if(!1!==e&&u)return;u=!1;let t=h?h():o;if(null==t||!1===t){b(a,Z(f));return}let n=s!==N?s:Z(()=>l(t,{value:f(),refetching:e}));return"object"==typeof n&&n&&"then"in n?(a=n,u=!0,queueMicrotask(()=>u=!1),er(()=>{x(d?"refreshing":"pending"),C()},!1),n.then(e=>b(n,e,void 0,t),e=>b(n,void 0,es(e),t))):(b(a,n,void 0,t),n)}return Object.defineProperties(k,{state:{get:()=>y()},error:{get:()=>m()},loading:{get(){let e=y();return"pending"===e||"refreshing"===e}},latest:{get(){if(!d)return k();let e=m();if(e&&!a)throw e;return f()}}}),h?K(()=>S(!1)):S(!1),[k,{refetch:S,mutate:p}]}(()=>n.getWallets()),[l,i]=F(null),[a,s]=F(null),[c,u]=F("universal"),[d,h]=F(!1),f=j(()=>{let e=tb();return"type"in e&&"wallet-not-support-feature"===e.type}),p=j(()=>{var e;if("ready"!==o.state)return null;let t=lD(o(),lB.walletsListConfiguration),r=t.filter(g.Ee),l=t.filter(e=>!(0,g.Ee)(e));t=(r||[]).concat(l);let i=lB.preferredWalletAppName,a=t.find(e=>lU(e,i)),s=t.filter(e=>lU(e,i)).length>=2;i&&a&&!s&&(t=[$(M({},a),{isPreferred:!0})].concat(t.filter(e=>!lU(e,i))));let c=t.find(e=>lU(e,oh));c&&(t=[c].concat(t.filter(e=>!lU(e,oh))));let u=null!=(e=null==n?void 0:n.walletsRequiredFeatures)?e:null==n?void 0:n.walletsPreferredFeatures;return t.map(e=>{var t;return $(M({},e),{isSupportRequiredFeatures:!u||(0,g._0)(null!=(t=e.features)?t:[],u)})})}),m=()=>{var e;return(null==(e=lB.connectRequestParameters)?void 0:e.state)==="loading"},w=j(()=>{var e;if(!m())return null==(e=lB.connectRequestParameters)?void 0:e.value}),v=e=>{n.closeModal(e)},C=t.onStatusChange(e=>{e&&v("wallet-selected")},e=>{var t;if(e instanceof g.iA){let n=e.cause.connectEvent.device.appName.toLowerCase(),r=null==(t=p())?void 0:t.find(e=>e.appName.toLowerCase()===n);if(!r)throw new g.K3("Wallet not found");s(r.isSupportRequiredFeatures?"missing-features":"not-supported"),i(r)}}),y=()=>{u("all-wallets")},x=()=>{u("universal")},b=e=>{i(e),az.openWalletsModal()},k=()=>{i(null),s(null)};return z(()=>{i(null),s(null),h(!1)}),z(C),eh(lI,{get opened(){return tS()},get enableAndroidBackHandler(){return lB.enableAndroidBackHandler},onClose:()=>v("action-cancelled"),onClickQuestion:()=>h(e=>!e),get showFooter(){return!f()},"data-tc-wallets-modal-container":"true",get children(){return[eh(eC,{get when(){return d()},get children(){return eh(iL,{onBackClick:()=>h(!1)})}}),eh(eC,{get when(){return!d()},get children(){return[eh(eC,{get when(){return m()||!p()},get children(){return[eh(lN,{translationKey:"walletModal.loading",children:"Wallets list is loading"}),eh(lP,{get children(){return eh(rF,{size:"m"})}})]}}),eh(eC,{get when(){return j(()=>!m())()&&p()},get children(){return eh(ey,{get children(){return[eh(ex,{get when(){return f()},get children(){return eh(aE,{get walletsList(){return p()},get currentWallet(){return null==n?void 0:n.wallet},onSelect:b,onSelectAllWallets:y,onDisconnect:()=>t.disconnect(),get walletsModalState(){return tb()},onClose:()=>v("action-cancelled")})}}),eh(ex,{get when(){return l()},get children(){return eh(eU,{get component(){return oC()?ij:iw},get wallet(){return l()},get additionalRequest(){return w()},onBackClick:k,get defaultError(){return a()}})}}),eh(ex,{get when(){return"universal"===c()},get children(){return eh(eU,{get component(){return oC()?at:au},onSelect:i,get walletsList(){return p()},get additionalRequest(){return w()},onSelectAllWallets:y})}}),eh(ex,{get when(){return"all-wallets"===c()},get children(){return eh(l5,{get walletsList(){return p()},get featureCheckMode(){return(null==n?void 0:n.walletsRequiredFeatures)?"strict":"soft"},onBack:x,onSelect:i})}})]}})}})]}})]}})},aR=e6.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,aW=e6(rS)`
    margin-top: 16px;
`,aI=e6(rc)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${e=>e.theme.colors.text.secondary};
`,aN=e6(nC)`
    min-width: 112px;
    margin-top: 32px;
`,aP=e6(rF)`
    height: 16px;
    width: 16px;
`,aB=e6(nC)`
    margin-top: 32px;
`,aH=e=>{let t,n;let r=nv(e),o=Y(oM),[l,i]=F(!0),[a,s]=F(!1),[c,u]=F(!1),[d,h]=F(!1);q(()=>{let e=tW();s(!!e&&("sent"in e&&e.sent||"transaction-sent"===e.name)),u(!!e&&("signed"in e&&e.signed||"data-signed"===e.name)),h(!!e&&("transaction-canceled"===e.name||"sign-data-canceled"===e.name))}),(null==o?void 0:o.wallet)&&"universalLink"in o.wallet&&("universal-link"===o.wallet.openMethod||(0,g.Vb)(o.wallet.universalLink)&&nr())&&(t=o.wallet.universalLink),(null==o?void 0:o.wallet)&&"deepLink"in o.wallet&&("custom-deeplink"===o.wallet.openMethod||(0,g.Vb)(o.wallet.deepLink)&&nr())&&(n=o.wallet.deepLink);let f=()=>{let e=tW(),r="returnStrategy"in e?e.returnStrategy:lB.returnStrategy,o=!l();i(!1),(0,g.Vb)(t)?ig(t,{returnStrategy:r,twaReturnUrl:"twaReturnUrl"in e?e.twaReturnUrl:lB.twaReturnUrl,forceRedirect:o}):ip(t,n,{returnStrategy:r,forceRedirect:o},()=>{})};return eh(aR,em(r,{get children(){return[j(()=>e.icon),eh(aW,{get translationKey(){return e.headerTranslationKey},get translationValues(){return e.headerTranslationValues}}),eh(aI,{get translationKey(){return e.textTranslationKey},get translationValues(){return e.textTranslationValues}}),eh(eC,{get when(){return!a()&&!c()&&!d()&&("open-wallet"===e.showButton&&t||"open-wallet"!==e.showButton)},get children(){return eh(aN,{disabled:!0,"data-tc-connect-button-loading":"true",get children(){return eh(aP,{})}})}}),eh(eC,{get when(){return a()||c()},get children(){return[eh(eC,{get when(){return"open-wallet"!==e.showButton},get children(){return eh(aB,{onClick:()=>e.onClose(),get children(){return eh(id,{translationKey:"common.close",children:"Close"})}})}}),eh(eC,{get when(){return"open-wallet"===e.showButton&&t},get children(){return eh(aB,{onClick:f,get children(){return eh(id,{translationKey:"common.openWallet",children:"Open wallet"})}})}})]}})]}}))},aV=e=>{let t=Y(oM),[n]=ra(),r=()=>t.wallet&&"name"in t.wallet?t.wallet.name:n("common.yourWallet",{},"Your wallet");return eh(aH,{headerTranslationKey:"actionModal.confirmTransaction.header",get headerTranslationValues(){return{name:r()}},textTranslationKey:"actionModal.confirmTransaction.text",get icon(){return eh(rF,{size:"m"})},onClose:()=>e.onClose(),showButton:"open-wallet","data-tc-confirm-modal":"true"})},aD=e=>eh(aH,{headerTranslationKey:"actionModal.transactionCanceled.header",textTranslationKey:"actionModal.transactionCanceled.text",get icon(){return eh(rH,{size:"m"})},onClose:()=>e.onClose(),"data-tc-transaction-canceled-modal":"true"}),aO=e=>eh(aH,{headerTranslationKey:"actionModal.transactionSent.header",textTranslationKey:"actionModal.transactionSent.text",get icon(){return eh(rI,{size:"m"})},showButton:"open-wallet",onClose:()=>e.onClose(),"data-tc-transaction-sent-modal":"true"}),aF=e=>{let t=Y(oM),[n]=ra(),r=()=>t.wallet&&"name"in t.wallet?t.wallet.name:n("common.yourWallet",{},"Your wallet");return eh(aH,{headerTranslationKey:"actionModal.signData.header",get headerTranslationValues(){return{name:r()}},textTranslationKey:"actionModal.signData.text",get icon(){return eh(rF,{size:"m"})},onClose:()=>e.onClose(),showButton:"open-wallet","data-tc-sign-data-confirm-modal":"true"})},aK=e=>eh(aH,{headerTranslationKey:"actionModal.signDataCanceled.header",get icon(){return eh(rH,{size:"m"})},onClose:()=>e.onClose(),"data-tc-sign-data-canceled-modal":"true"}),aU=e=>eh(aH,{headerTranslationKey:"actionModal.dataSigned.header",get icon(){return eh(rI,{size:"m"})},onClose:()=>e.onClose(),"data-tc-data-signed-modal":"true"}),aq=()=>eh(nZ,{get opened(){var e;return j(()=>null!==tW())()&&(null==(e=tW())?void 0:e.openModal)===!0},get enableAndroidBackHandler(){return lB.enableAndroidBackHandler},onClose:()=>tI(null),showFooter:!1,"data-tc-actions-modal-container":"true",get children(){return eh(ey,{get children(){return[eh(ex,{get when(){return"transaction-sent"===tW().name},get children(){return eh(aO,{onClose:()=>tI(null)})}}),eh(ex,{get when(){return"transaction-canceled"===tW().name},get children(){return eh(aD,{onClose:()=>tI(null)})}}),eh(ex,{get when(){return"confirm-transaction"===tW().name},get children(){return eh(aV,{onClose:()=>tI(null)})}}),eh(ex,{get when(){return"data-signed"===tW().name},get children(){return eh(aU,{onClose:()=>tI(null)})}}),eh(ex,{get when(){return"sign-data-canceled"===tW().name},get children(){return eh(aK,{onClose:()=>tI(null)})}}),eh(ex,{get when(){return"confirm-sign-data"===tW().name},get children(){return eh(aF,{onClose:()=>tI(null)})}})]}})}}),aj=()=>{let{locale:e}=ra()[1];q(()=>e(lB.language)),q(()=>{tL()&&ox()});let t=Y(tB),n=Y(oM),[r,o]=F(!1),l=()=>{var e;return(null==(e=lB.connectRequestParameters)?void 0:e.state)==="loading"},i=j(()=>{var e;if(!l())return null==(e=lB.connectRequestParameters)?void 0:e.value}),a=e=>{n.closeSingleWalletModal(e)};return z(t.onStatusChange(e=>{e&&a("wallet-selected")})),z(()=>{o(!1)}),eh(lI,{get opened(){return tL()},get enableAndroidBackHandler(){return lB.enableAndroidBackHandler},onClose:()=>a("action-cancelled"),onClickQuestion:()=>o(e=>!e),showFooter:!0,"data-tc-wallets-modal-container":"true",get children(){return[eh(eC,{get when(){return r()},get children(){return eh(iL,{onBackClick:()=>o(!1)})}}),eh(eC,{get when(){return!r()},get children(){return[eh(eC,{get when(){return l()},get children(){return[eh(lN,{translationKey:"walletModal.loading",children:"Wallets list is loading"}),eh(lP,{get children(){return eh(rF,{size:"m"})}})]}}),eh(eC,{get when(){return!l()},get children(){return eh(eU,{get component(){return oC()?ij:iw},get wallet(){return tA()},get additionalRequest(){return i()},onBackClick:()=>{},backDisabled:!0})}})]}})]}})},aZ=e=>{let t=rl(tN,lB.language);return customElements.define(te,class extends HTMLElement{}),document.body.hasAttribute("ontouchstart")||document.body.setAttribute("ontouchstart",""),eh(ri.Provider,{value:t,get children(){return eh(oM.Provider,{get value(){return e.tonConnectUI},get children(){return eh(tB.Provider,{get value(){return lB.connector},get children(){return[eh(tr,{}),eh(e3,{theme:t2,get children(){return[eh(eC,{get when(){return lB.buttonRootId},get children(){return eh(eK,{get mount(){return document.getElementById(lB.buttonRootId)},get children(){return eh(lW,{})}})}}),eh(eU,{component:te,get children(){return[eh(a_,{}),eh(aj,{}),eh(aq,{})]}})]}})]}})}})}})},az={openWalletsModal:()=>void setTimeout(()=>tk({status:"opened",closeReason:null})),closeWalletsModal:e=>void setTimeout(()=>tk({status:"closed",closeReason:e})),openSingleWalletModal:e=>{setTimeout(()=>t$({status:"opened",closeReason:null,walletInfo:e}))},closeSingleWalletModal:e=>void setTimeout(()=>t$({status:"closed",closeReason:e})),openWalletNotSupportFeatureModal:e=>void setTimeout(()=>tk({status:"opened",closeReason:null,type:"wallet-not-support-feature",requiredFeature:e.requiredFeature})),setAction:e=>void setTimeout(()=>tI(e)),clearAction:()=>void setTimeout(()=>tI(null)),getSelectedWalletInfo:()=>tE(),removeSelectedWalletInfo:()=>tR(null),renderApp:(e,t)=>(function(e,t,n,r={}){let o;return O(n=>{o=n,t===document?e():eN(t,e(),t.firstChild?null:void 0,void 0)},r.owner),()=>{o(),t.textContent=""}})(()=>eh(aZ,{tonConnectUI:t}),document.getElementById(e))};class aG{constructor(e){L(this,"connector"),L(this,"setConnectRequestParametersCallback"),L(this,"consumers",[]),L(this,"tracker"),L(this,"state",tb()),this.connector=e.connector,this.tracker=e.tracker,this.setConnectRequestParametersCallback=e.setConnectRequestParametersCallback,q(()=>{let e=tb();this.state=e,this.consumers.forEach(t=>t(e))})}open(){return A(this,null,function*(){this.tracker.trackConnectionStarted();let e=(yield this.connector.getWallets()).find(g.iw);return e?this.connectEmbeddedWallet(e):this.openWalletsModal()})}close(e="action-cancelled"){"action-cancelled"===e&&this.tracker.trackConnectionError("Connection was cancelled"),az.closeWalletsModal(e)}onStateChange(e){return this.consumers.push(e),()=>{this.consumers=this.consumers.filter(t=>t!==e)}}connectEmbeddedWallet(e){let t=t=>{tR(e),this.connector.connect({jsBridgeKey:e.jsBridgeKey},t)},n=lB.connectRequestParameters;(null==n?void 0:n.state)==="loading"?this.setConnectRequestParametersCallback(t):t(null==n?void 0:n.value)}openWalletsModal(){return A(this,null,function*(){return nr()&&nl(),az.openWalletsModal(),new Promise(e=>{let t=this.onStateChange(n=>{let{status:r}=n;"opened"===r&&(t(),e())})})})}}class aY{constructor(e){L(this,"connector"),L(this,"consumers",[]),this.connector=e.connector,q(()=>{let e=tW();this.consumers.forEach(t=>t(e))})}onStateChange(e){return this.consumers.push(e),()=>{this.consumers=this.consumers.filter(t=>t!==e)}}}class aQ{constructor(e){L(this,"connector"),L(this,"setConnectRequestParametersCallback"),L(this,"consumers",[]),L(this,"tracker"),L(this,"state",tM()),this.connector=e.connector,this.tracker=e.tracker,this.setConnectRequestParametersCallback=e.setConnectRequestParametersCallback,q(()=>{let e=tM();this.state=e,this.consumers.forEach(t=>t(e))})}open(e){return A(this,null,function*(){this.tracker.trackConnectionStarted();let t=lD((yield this.connector.getWallets()),lB.walletsListConfiguration),n=t.find(g.iw);if(n)return this.connectEmbeddedWallet(n);let r=t.filter(g.ip).find(t=>lU(t,e));if(r)return this.openSingleWalletModal(r);let o=`Trying to open modal window with unknown wallet "${e}".`;throw this.tracker.trackConnectionError(o),new ta(o)})}close(e="action-cancelled"){"action-cancelled"===e&&this.tracker.trackConnectionError("Connection was cancelled"),az.closeSingleWalletModal("action-cancelled")}onStateChange(e){return this.consumers.push(e),()=>{this.consumers=this.consumers.filter(t=>t!==e)}}connectEmbeddedWallet(e){let t=t=>{tR(e),this.connector.connect({jsBridgeKey:e.jsBridgeKey},t)},n=lB.connectRequestParameters;(null==n?void 0:n.state)==="loading"?this.setConnectRequestParametersCallback(t):t(null==n?void 0:n.value)}openSingleWalletModal(e){return A(this,null,function*(){return nr()&&nl(),az.openSingleWalletModal(e),new Promise(e=>{let t=this.onStateChange(n=>{let{status:r}=n;"opened"===r&&(t(),e())})})})}}class aJ{constructor(e){var t;L(this,"eventPrefix","ton-connect-ui-"),L(this,"tonConnectUiVersion"),L(this,"tonConnectSdkVersion",null),L(this,"eventDispatcher"),this.eventDispatcher=null!=(t=null==e?void 0:e.eventDispatcher)?t:new g.m_,this.tonConnectUiVersion=e.tonConnectUiVersion,this.init().catch()}get version(){return(0,g.BH)({ton_connect_sdk_lib:this.tonConnectSdkVersion,ton_connect_ui_lib:this.tonConnectUiVersion})}init(){return A(this,null,function*(){try{yield this.setRequestVersionHandler(),this.tonConnectSdkVersion=yield this.requestTonConnectSdkVersion()}catch(e){}})}setRequestVersionHandler(){return A(this,null,function*(){yield this.eventDispatcher.addEventListener("ton-connect-ui-request-version",()=>A(this,null,function*(){yield this.eventDispatcher.dispatchEvent("ton-connect-ui-response-version",(0,g.m5)(this.tonConnectUiVersion))}))})}requestTonConnectSdkVersion(){return A(this,null,function*(){return new Promise((e,t)=>A(this,null,function*(){try{yield this.eventDispatcher.addEventListener("ton-connect-response-version",t=>{e(t.detail.version)},{once:!0}),yield this.eventDispatcher.dispatchEvent("ton-connect-request-version",(0,g.Gz)())}catch(e){t(e)}}))})}dispatchUserActionEvent(e){var t;try{null==(t=this.eventDispatcher)||t.dispatchEvent(`${this.eventPrefix}${e.type}`,e).catch()}catch(e){}}trackConnectionStarted(...e){try{let t=(0,g.Es)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackConnectionCompleted(...e){try{let t=(0,g.sQ)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackConnectionError(...e){try{let t=(0,g.$e)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackConnectionRestoringStarted(...e){try{let t=(0,g.j9)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackConnectionRestoringCompleted(...e){try{let t=(0,g.NQ)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackConnectionRestoringError(...e){try{let t=(0,g.Mx)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackDisconnection(...e){try{let t=(0,g.dQ)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackTransactionSentForSignature(...e){try{let t=(0,g.aV)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackTransactionSigned(...e){try{let t=(0,g.TB)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackTransactionSigningFailed(...e){try{let t=(0,g.VA)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackDataSentForSignature(...e){try{let t=(0,g.q)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackDataSigned(...e){try{let t=(0,g.lp)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}trackDataSigningFailed(...e){try{let t=(0,g.Dg)(this.version,...e);this.dispatchUserActionEvent(t)}catch(e){}}}class aX{constructor(e){if(L(this,"walletInfoStorage",new tC),L(this,"preferredWalletStorage",new ty),L(this,"tracker"),L(this,"walletInfo",null),L(this,"systemThemeChangeUnsubscribe",null),L(this,"actionsConfiguration"),L(this,"walletsList"),L(this,"_walletsRequiredFeatures"),L(this,"_walletsPreferredFeatures"),L(this,"connectRequestParametersCallback"),L(this,"connector"),L(this,"modal"),L(this,"singleWalletModal"),L(this,"transactionModal"),L(this,"connectionRestored",Promise.resolve(!1)),e&&"connector"in e&&e.connector)this.connector=e.connector;else if(e&&"manifestUrl"in e&&e.manifestUrl)this.connector=new g.GE({manifestUrl:e.manifestUrl,eventDispatcher:e.eventDispatcher,walletsRequiredFeatures:e.walletsRequiredFeatures});else throw new ta("You have to specify a `manifestUrl` or a `connector` in the options.");this.tracker=new aJ({eventDispatcher:null==e?void 0:e.eventDispatcher,tonConnectUiVersion:"2.2.0"}),this.modal=new aG({connector:this.connector,tracker:this.tracker,setConnectRequestParametersCallback:e=>{this.connectRequestParametersCallback=e}}),this.singleWalletModal=new aQ({connector:this.connector,tracker:this.tracker,setConnectRequestParametersCallback:e=>{this.connectRequestParametersCallback=e}}),this.transactionModal=new aY({connector:this.connector}),this._walletsRequiredFeatures=e.walletsRequiredFeatures,this._walletsPreferredFeatures=e.walletsPreferredFeatures,this.walletsList=this.getWallets(),this.walletsList.then(e=>(function e(t){"complete"!==document.readyState?window.addEventListener("load",()=>th(()=>e(t)),{once:!0}):t.forEach(e=>{new window.Image().src=e})})([...new Set(e.map(e=>e.imageUrl))]));let t=this.normalizeWidgetRoot(null==e?void 0:e.widgetRootId);this.subscribeToWalletChange(),(null==e?void 0:e.restoreConnection)!==!1&&(this.connectionRestored=function(e){return A(this,null,function*(){return yield new Promise(e=>requestAnimationFrame(e)),e()})}(()=>A(this,null,function*(){return this.tracker.trackConnectionRestoringStarted(),yield this.connector.restoreConnection(),this.connector.connected?this.tracker.trackConnectionRestoringCompleted(this.wallet):(this.tracker.trackConnectionRestoringError("Connection was not restored"),this.walletInfoStorage.removeWalletInfo()),this.connector.connected}))),this.uiOptions=t0(e,{uiPreferences:{theme:"SYSTEM"}});let n=this.preferredWalletStorage.getPreferredWalletAppName();lH({connector:this.connector,preferredWalletAppName:n}),az.renderApp(t,this)}static getWallets(){return g.GE.getWallets()}get walletsRequiredFeatures(){return this._walletsRequiredFeatures}get walletsPreferredFeatures(){return this._walletsPreferredFeatures}get connected(){return this.connector.connected}get account(){return this.connector.account}get wallet(){return this.connector.wallet?M(M({},this.connector.wallet),this.walletInfo):null}set uiOptions(e){var t,n,r,o,l,i;(this.checkButtonRootExist(e.buttonRootId),this.actionsConfiguration=e.actionsConfiguration,"walletsRequiredFeatures"in e&&(this._walletsRequiredFeatures=e.walletsRequiredFeatures),"walletsPreferredFeatures"in e&&(this._walletsPreferredFeatures=e.walletsPreferredFeatures),null==(t=e.uiPreferences)?void 0:t.theme)?(null==(n=e.uiPreferences)?void 0:n.theme)!=="SYSTEM"?(null==(r=this.systemThemeChangeUnsubscribe)||r.call(this),t9(e.uiPreferences.theme,e.uiPreferences.colorsSet)):(t9(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?eq.LIGHT:eq.DARK,e.uiPreferences.colorsSet),this.systemThemeChangeUnsubscribe||(this.systemThemeChangeUnsubscribe=function(e){let t=t=>e(t.matches?eq.DARK:eq.LIGHT);return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t),()=>window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",t)}(t9))):(null==(o=e.uiPreferences)?void 0:o.colorsSet)&&(i=e.uiPreferences.colorsSet,t3[eq.DARK]=t0(i[eq.DARK],t3[eq.DARK]),t3[eq.LIGHT]=t0(i[eq.LIGHT],t3[eq.LIGHT]),t5(e=>({colors:t0(t3[e.theme],t4[e.theme])}))),(null==(l=e.uiPreferences)?void 0:l.borderRadius)&&t5({borderRadius:e.uiPreferences.borderRadius}),lH(t=>{var n,r;let o=t0(M(M(M(M({},e.language&&{language:e.language}),!!(null==(n=e.actionsConfiguration)?void 0:n.returnStrategy)&&{returnStrategy:e.actionsConfiguration.returnStrategy}),!!(null==(r=e.actionsConfiguration)?void 0:r.twaReturnUrl)&&{twaReturnUrl:e.actionsConfiguration.twaReturnUrl}),!!e.walletsListConfiguration&&{walletsListConfiguration:e.walletsListConfiguration}),tK(t));return void 0!==e.buttonRootId&&(o.buttonRootId=e.buttonRootId),void 0!==e.enableAndroidBackHandler&&(o.enableAndroidBackHandler=e.enableAndroidBackHandler),o})}setConnectRequestParameters(e){var t;lH({connectRequestParameters:e}),(null==e?void 0:e.state)!=="ready"&&e||null==(t=this.connectRequestParametersCallback)||t.call(this,null==e?void 0:e.value)}getWallets(){return A(this,null,function*(){return this.connector.getWallets()})}onStatusChange(e,t){return this.connector.onStatusChange(t=>A(this,null,function*(){if(t){let n=yield this.getSelectedWalletInfo(t);e(M(M({},t),n||this.walletInfoStorage.getWalletInfo()))}else e(t)}),t)}openModal(){return A(this,null,function*(){return this.modal.open()})}closeModal(e){this.modal.close(e)}onModalStateChange(e){return this.modal.onStateChange(e)}get modalState(){return this.modal.state}openSingleWalletModal(e){return A(this,null,function*(){return this.singleWalletModal.open(e)})}closeSingleWalletModal(e){this.singleWalletModal.close(e)}onSingleWalletModalStateChange(e){return this.singleWalletModal.onStateChange(e)}get singleWalletModalState(){return this.singleWalletModal.state}connectWallet(){return A(this,null,function*(){let e=(yield this.getWallets()).find(g.iw);return e?yield this.connectEmbeddedWallet(e):yield this.connectExternalWallet()})}disconnect(){return this.tracker.trackDisconnection(this.wallet,"dapp"),az.clearAction(),az.removeSelectedWalletInfo(),this.walletInfoStorage.removeWalletInfo(),this.connector.disconnect()}sendTransaction(e,t){return A(this,null,function*(){if(this.tracker.trackTransactionSentForSignature(this.wallet,e),!this.connected)throw this.tracker.trackTransactionSigningFailed(this.wallet,e,"Wallet was not connected"),new ta("Connect wallet to send a transaction.");nr()&&nl();let{notifications:n,modals:r,returnStrategy:o,twaReturnUrl:l}=this.getModalsAndNotificationsConfiguration(t);az.setAction({name:"confirm-transaction",showNotification:n.includes("before"),openModal:r.includes("before"),sent:!1});let i=new AbortController,a=this.onTransactionModalStateChange(e=>{(null==e||!e.openModal)&&(a(),e||i.abort())});try{let t=yield this.waitForSendTransaction({transaction:e,signal:i.signal},()=>{i.signal.aborted||(az.setAction({name:"confirm-transaction",showNotification:n.includes("before"),openModal:r.includes("before"),sent:!0}),this.redirectAfterRequestSent({returnStrategy:o,twaReturnUrl:l}))});return this.tracker.trackTransactionSigned(this.wallet,e,t),az.setAction({name:"transaction-sent",showNotification:n.includes("success"),openModal:r.includes("success")}),t}catch(e){if(e instanceof g.kT)throw az.clearAction(),az.openWalletNotSupportFeatureModal(e.cause),e;if(az.setAction({name:"transaction-canceled",showNotification:n.includes("error"),openModal:r.includes("error")}),e instanceof g.K3)throw e;throw console.error(e),new ta("Unhandled error:"+e)}finally{a()}})}signData(e){return A(this,null,function*(){if(this.tracker.trackDataSentForSignature(this.wallet,e),!this.connected)throw this.tracker.trackDataSigningFailed(this.wallet,e,"Wallet was not connected"),new ta("Connect wallet to send a transaction.");nr()&&nl();let{notifications:t,modals:n,returnStrategy:r,twaReturnUrl:o}=this.getModalsAndNotificationsConfiguration();az.setAction({name:"confirm-sign-data",showNotification:t.includes("before"),openModal:n.includes("before"),signed:!1});let l=new AbortController,i=this.onTransactionModalStateChange(e=>{(null==e||!e.openModal)&&(i(),e||l.abort())});try{let i=yield this.waitForSignData({data:e,signal:new AbortController().signal},()=>{l.signal.aborted||(az.setAction({name:"confirm-sign-data",showNotification:t.includes("before"),openModal:n.includes("before"),signed:!0}),this.redirectAfterRequestSent({returnStrategy:r,twaReturnUrl:o}))});return this.tracker.trackDataSigned(this.wallet,e,i),az.setAction({name:"data-signed",showNotification:t.includes("success"),openModal:n.includes("success")}),i}catch(e){if(e instanceof g.kT)throw az.clearAction(),az.openWalletNotSupportFeatureModal(e.cause),e;if(az.setAction({name:"sign-data-canceled",showNotification:t.includes("error"),openModal:n.includes("error")}),e instanceof g.K3)throw e;throw console.error(e),new ta("Unhandled error:"+e)}finally{i()}})}redirectAfterRequestSent({returnStrategy:e,twaReturnUrl:t}){this.walletInfo&&"universalLink"in this.walletInfo&&("universal-link"===this.walletInfo.openMethod||"custom-deeplink"===this.walletInfo.openMethod)&&((0,g.Vb)(this.walletInfo.universalLink)?ig(this.walletInfo.universalLink,{returnStrategy:e,twaReturnUrl:t||lB.twaReturnUrl,forceRedirect:!1}):ip(this.walletInfo.universalLink,this.walletInfo.deepLink,{returnStrategy:e,forceRedirect:!1},()=>{}))}connectEmbeddedWallet(e){return A(this,null,function*(){let t=t=>{tR(e),this.connector.connect({jsBridgeKey:e.jsBridgeKey},t)},n=lB.connectRequestParameters;return(null==n?void 0:n.state)==="loading"?this.connectRequestParametersCallback=t:t(null==n?void 0:n.value),yield this.waitForWalletConnection({ignoreErrors:!1})})}connectExternalWallet(){return A(this,null,function*(){let e=new AbortController;az.openWalletsModal();let t=this.onModalStateChange(n=>{let{status:r,closeReason:o}=n;"opened"!==r&&(t(),"action-cancelled"===o&&e.abort())});return yield this.waitForWalletConnection({ignoreErrors:!0,signal:e.signal})})}waitForWalletConnection(e){return A(this,null,function*(){return new Promise((t,n)=>{this.tracker.trackConnectionStarted();let{ignoreErrors:r=!1,signal:o=null}=e;if(o&&o.aborted)return this.tracker.trackConnectionError("Connection was cancelled"),n(new ta("Wallet was not connected"));let l=e=>A(this,null,function*(){if(e)this.tracker.trackConnectionCompleted(e),a(),t(e);else{if(this.tracker.trackConnectionError("Connection was cancelled"),r)return;a(),n(new ta("Wallet was not connected"))}}),i=e=>{this.tracker.trackConnectionError(e.message),r||(a(),n(e))},a=this.onStatusChange(e=>l(e),e=>i(e));o&&o.addEventListener("abort",()=>{a(),n(new ta("Wallet was not connected"))},{once:!0})})})}waitForSendTransaction(e,t){return A(this,null,function*(){return new Promise((n,r)=>{let{transaction:o,signal:l}=e;if(l.aborted)return this.tracker.trackTransactionSigningFailed(this.wallet,o,"Transaction was cancelled"),r(new ta("Transaction was not sent"));let i=e=>A(this,null,function*(){n(e)}),a=e=>{r(e)},s=()=>{this.tracker.trackTransactionSigningFailed(this.wallet,o,"Transaction was cancelled"),r(new ta("Transaction was not sent"))};l.addEventListener("abort",s,{once:!0}),this.connector.sendTransaction(o,{onRequestSent:t,signal:l}).then(e=>(l.removeEventListener("abort",s),i(e))).catch(e=>(l.removeEventListener("abort",s),a(e)))})})}waitForSignData(e,t){return A(this,null,function*(){return new Promise((n,r)=>{let{data:o,signal:l}=e;if(l.aborted)return this.tracker.trackDataSigningFailed(this.wallet,o,"SignData was cancelled"),r(new ta("SignData was not sent"));let i=e=>A(this,null,function*(){n(e)}),a=e=>{r(e)};l.addEventListener("abort",()=>{this.tracker.trackDataSigningFailed(this.wallet,o,"SignData was cancelled"),r(new ta("SignData was not sent"))},{once:!0}),this.connector.signData(o,{onRequestSent:t,signal:l}).then(e=>i(e)).catch(e=>a(e))})})}onTransactionModalStateChange(e){return this.transactionModal.onStateChange(e)}subscribeToWalletChange(){this.connector.onStatusChange(e=>A(this,null,function*(){var t;e?(yield this.updateWalletInfo(e),this.setPreferredWalletAppName((null==(t=this.walletInfo)?void 0:t.appName)||e.device.appName)):this.walletInfoStorage.removeWalletInfo()}))}setPreferredWalletAppName(e){this.preferredWalletStorage.setPreferredWalletAppName(e),lH({preferredWalletAppName:e})}getSelectedWalletInfo(e){return A(this,null,function*(){let t,n=az.getSelectedWalletInfo();if(!n)return null;if("name"in n)t=n;else{let r=lD((yield this.walletsList),lB.walletsListConfiguration).find(t=>lU(t,e.device.appName));if(!r)throw new ta(`Cannot find WalletInfo for the '${e.device.appName}' wallet`);t=M(M({},r),n)}return t})}updateWalletInfo(e){return A(this,null,function*(){let t=yield this.getSelectedWalletInfo(e);if(t){this.walletInfo=t,this.walletInfoStorage.setWalletInfo(t);return}let n=this.walletInfoStorage.getWalletInfo();if(n){this.walletInfo=n;return}this.walletInfo=(yield this.walletsList).find(t=>lU(t,e.device.appName))||null})}normalizeWidgetRoot(e){if(!e||!document.getElementById(e)){e="tc-widget-root";let t=document.createElement("div");t.id=e,document.body.appendChild(t)}return e}checkButtonRootExist(e){if(null!=e&&!document.getElementById(e))throw new ta(`${e} element not found in the document.`)}getModalsAndNotificationsConfiguration(e){var t,n,r,o,l,i;let a=["before","success","error"],s=a;(null==(t=this.actionsConfiguration)?void 0:t.notifications)&&(null==(n=this.actionsConfiguration)?void 0:n.notifications)!=="all"&&(s=this.actionsConfiguration.notifications),(null==e?void 0:e.notifications)&&(s="all"===e.notifications?a:e.notifications);let c=["before"];(null==(r=this.actionsConfiguration)?void 0:r.modals)&&(c="all"===this.actionsConfiguration.modals?a:this.actionsConfiguration.modals),(null==e?void 0:e.modals)&&(c="all"===e.modals?a:e.modals);let u=(null==e?void 0:e.returnStrategy)||(null==(o=this.actionsConfiguration)?void 0:o.returnStrategy)||"back",d=(null==e?void 0:e.twaReturnUrl)||(null==(l=this.actionsConfiguration)?void 0:l.twaReturnUrl),h=(null==e?void 0:e.skipRedirectToWallet)||(null==(i=this.actionsConfiguration)?void 0:i.skipRedirectToWallet)||"ios";return nr()&&(h="never"),{notifications:s,modals:c,returnStrategy:u,twaReturnUrl:d,skipRedirectToWallet:h}}}}}]);