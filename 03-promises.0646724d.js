function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=r);var u=r("eWCmQ");const i=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),s=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function d(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delayAsNumber:o}):n({position:e,delayAsNumber:o})}),o)}))}i.addEventListener("submit",(function(o){o.preventDefault();let t=l.valueAsNumber;const n=s.valueAsNumber,r=a.valueAsNumber;for(let o=1;o<=r;o++)d(o,t).then((({position:t,delayAsNumber:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:t,delayAsNumber:n})=>{e(u).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.0646724d.js.map