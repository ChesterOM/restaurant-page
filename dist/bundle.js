(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(399),t.b),l=new URL(t(19),t.b),p=new URL(t(627),t.b),u=i()(r()),m=s()(d),f=s()(l),h=s()(p);u.push([n.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\n@font-face {\n    font-family: myFont-regular;\n    src: url(${m});\n}\n\n@font-face {\n    font-family: myFont-semibold;\n    src: url(${f});\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    font-family: myFont-regular;\n    background-image: url(${h});\n    background-size: cover;\n    background-repeat: no-repeat;\n    min-height: 100vh; \n}\n\nh1 {\n    color: rgba(216, 186, 16, 0.771);\n    font-family: myFont-semibold; \n    font-size: 7em;\n    text-shadow: 0px 0px 10px rgba(0,0,0,0.8);\n}\n\nh2 {\n    color: rgb(216, 186, 16); \n    text-shadow: 0px 0px 10px rgba(0,0,0,0.8);\n    font-size: 1.7em;\n}\n\np {\n    color: white;\n    font-family: myFont-regular;\n}\n\nbutton {\n    background-color: rgba(255, 0, 0, 0);\n    border: none;\n    border-radius: 1px;\n    color: rgb(169, 183, 114);\n    font-size: 20px;\n    margin: 25px;\n    padding-bottom: 5px;\n    transition: transform 0.2s ease;\n}\n\nbutton:hover {\n    transform: translateY(-3px) scale(1.12);\n}\n\nbutton:focus,\nbutton.focused {\n    border-bottom: 2px solid;\n    outline: none; \n    transform: translateY(-3px) scale(1.12);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh; \n}\n\n#header {\n    height: 7.5vh;\n    width: 100vw;\n    border-bottom: 1px solid rgba(255, 217, 0, 0.704);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-body {\n    flex: 1; \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#page-body h1 {\n    margin-top: -150px;\n}\n\n#page-body p {\n    font-size: 1.3em;\n    margin-top: -20px;\n    color: rgb(169, 183, 114);\n    text-shadow: -1px 1px 9px rgba(0,0,0,1);\n}\n\n#footer {\n    height: 5vh;\n    width: 100vw;\n    border-top: 1px solid rgba(255, 217, 0, 0.704);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#footer p {\n    color: rgb(169, 183, 114);\n}\n\n#menu-tab {\n    height: 80vh;\n    width: 27vw;\n    min-width: 400px;\n    display: grid;\n    grid-template-columns: 1fr;\n    background-color: rgba(0, 0, 0, 0.576);\n    justify-items: center;\n    padding-top: 50px;\n    border-radius: 2px;\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.513);\n}\n\n.menuItem {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom: 2px solid rgba(255, 217, 0, 0.704);\n    width: 20vw;\n    height: 75px;\n}\n\n#about-tab {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 80vh;\n    width: 40vw;\n    min-width: 400px;\n    background-color: rgba(0, 0, 0, 0.576);\n    padding-top: 50px;\n    border-radius: 2px;\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.513);\n}\n\n#image-wrapper {\n    height: 300px;\n    width: 300px;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-bottom: 60px;\n}\n\n#image{\n    width: 100%;\n    height: 100%;\n}\n\n#about-content {\n    padding: 30px;\n    color: rgb(169, 183, 114);\n    border-top: 2px solid rgba(255, 217, 0, 0.704);\n    border-bottom: 2px solid rgba(255, 217, 0, 0.704);\n}\n\n#signature{\n    display: flex;\n    justify-content: end;\n    color: rgb(169, 183, 114); \n    width: 40vw;\n    min-width: 400px;\n    padding-right: 50px ;\n}`,""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},627:(n,e,t)=>{n.exports=t.p+"c73e07460fbdf45dc2bc.jpg"},399:(n,e,t)=>{n.exports=t.p+"65bc44fbf8204991497c.otf"},19:(n,e,t)=>{n.exports=t.p+"d02fe6227fc221504b85.otf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"0659db44883a67c9c531.jpg";var e=t(379),o=t.n(e),r=t(795),a=t.n(r),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),m=t.n(u),f=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=()=>{y()},b=()=>{!function(){const n=document.getElementById("page-body");n.innerHTML="";const e=document.createElement("div");e.id="menu-tab";const t=["Italian beef sandwich","Meatball sub","Chicken parm sandwich","Baked mostaccioli","Soup of the day","Cannoli"];for(let n=0;n<t.length;n++){const o=document.createElement("div");o.classList.add("menuItem"),o.innerHTML="<h2>"+t[n]+"</h2>",e.appendChild(o)}n.appendChild(e)}()},v=()=>{!function(){const e=document.getElementById("page-body");e.innerHTML="";const t=document.createElement("div");t.id="about-tab";const o=document.createElement("div");o.id="image-wrapper";const r=document.createElement("img");r.id="image",r.src=n,o.appendChild(r),t.appendChild(o);const a=document.createElement("div");a.id="about-content",a.textContent="The Bear is my way of sharing my passion for Italian cuisine and honoring my family's legacy in Chicago's restaurant scene. After years working in high-end kitchens and Michelin star restaurants, I've come home to run my family's little River North joint. My mission is simple - serve unfussy, craveable Italian classics like my Nona used to make. I'm bringing The Bear back to its roots with slow-simmered sauces, hand-rolled pasta, and only the freshest ingredients. Diners can expect a cozy, bustling atmosphere with the warm hospitality that my family was known for. While the road hasn't been easy, I'm committed to preserving the heart of this place while evolving its culinary offerings. The Bear isn't about chasing accolades or trends - it's about delivering the authentic Italian comfort food experience that Chicagoans have loved for decades. I invite you to join us for a taste of the old neighborhood.",t.appendChild(a);const i=document.createElement("div");i.id="signature",i.textContent='-Carmen "Carmy" Berzatto',t.appendChild(i),e.appendChild(t)}()},y=()=>{document.getElementById("content").innerHTML="",function(){const n=document.getElementById("content"),e=function(){const n=document.createElement("div");n.id="header";const e=document.createElement("div");e.classList.add("nav");const t=document.createElement("button");t.id="home",t.classList.add("focused"),t.textContent="Home",t.setAttribute("autofocus","");const o=document.createElement("button");o.id="menu",o.textContent="Menu";const r=document.createElement("button");return r.id="about",r.textContent="About",e.appendChild(t),e.appendChild(o),e.appendChild(r),n.appendChild(e),n}(),t=function(){const n=document.createElement("div");n.id="page-body";const e=document.createElement("h1");e.textContent="The Bear";const t=document.createElement("p");return t.textContent="Come for the food, stay for the chaos.",n.appendChild(e),n.appendChild(t),n}(),o=function(){const n=document.createElement("div");n.id="footer";const e=document.createElement("p");return e.textContent="Created by C M Oxford-Mahoney",n.appendChild(e),n}();n.appendChild(e),n.appendChild(t),n.appendChild(o)}(),function(){const n=document.querySelectorAll("button");n.forEach((e=>{e.addEventListener("click",(function(){n.forEach((n=>n.classList.remove("focused"))),this.classList.add("focused")}))}))}(),x()},x=()=>{const n=document.getElementById("home"),e=document.getElementById("menu"),t=document.getElementById("about");n.removeEventListener("click",g),e.removeEventListener("click",b),t.removeEventListener("click",v),n.addEventListener("click",g),e.addEventListener("click",b),t.addEventListener("click",v)};document.addEventListener("DOMContentLoaded",(()=>{y()}))})()})();