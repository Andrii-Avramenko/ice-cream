function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire401b;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var r=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,r.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){o[e]=r},t.parcelRequire401b=i),i.register("kyEFX",(function(r,t){var n,o;e(r.exports,"register",(function(){return n}),(function(e){return n=e})),e(r.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},o=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.019476ab.js","ifp9M":"reviews-per1.9af0d616.jpg","hoQrv":"reviews-per2.e4c70e0b.jpg","7fvF4":"reviews-per3.948491b2.jpg"}')),(()=>{const e=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=()=>{const t="true"===r.getAttribute("aria-expanded")||!1;r.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};r.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();var u;u=new URL(i("kyEFX").resolve("ifp9M"),import.meta.url).toString();var a;a=new URL(i("kyEFX").resolve("hoQrv"),import.meta.url).toString();var s;s=new URL(i("kyEFX").resolve("7fvF4"),import.meta.url).toString();const l=[{image:r(u),quote:"Nullam viverra consectetur. Quisque cursus et, porttitor risus.",author:"Emily, Los Angeles"},{image:r(a),quote:"Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.",author:"John, New York"},{image:r(s),quote:"Lorem ipsum primis in nibh vel risus.",author:"Sophia, Chicago"}];window.changeTestimonial=function(e){document.getElementById("reviews-img").src=l[e].image,document.getElementById("reviews-text").innerText=l[e].quote,document.getElementById("reviews-person").innerText=l[e].author};
//# sourceMappingURL=index.019476ab.js.map
