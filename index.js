module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";n.r(e);var r=n(0);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(r.useRef)(null),u=Object(r.useState)([]),i=o(u,2),c=i[0],f=i[1],a=function(t){for(var e=0;e<c.length;e++){var n=c[e];if(n&&"function"==typeof n.contains&&n.contains(t.target))return!1}return!0};function l(e){n&&n.current&&!n.current.contains(e.target)&&a(e)&&t(e)}return Object(r.useEffect)((function(){var t=[];e.forEach((function(e){var n=document.getElementById(e);n&&t.push(n)})),f(t)}),[]),Object(r.useEffect)((function(){return window.PointerEvent?document.addEventListener("pointerdown",l):(document.addEventListener("mousedown",l),document.addEventListener("touchstart",l)),function(){window.PointerEvent?document.removeEventListener("pointerdown",l):(document.removeEventListener("mousedown",l),document.removeEventListener("touchstart",l))}}),[t]),n}}]);