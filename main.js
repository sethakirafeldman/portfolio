(()=>{"use strict";var e={914:(e,t,r)=>{e.exports=r.p+"5d8bde9c1570c46da300.png"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{const e=document.getElementById("display-site-container"),t="https://sethakirafeldman.github.io/",n=document.getElementById("site-description"),a=(e,t,r,n)=>{console.log(r);let a=document.createElement(e),i=document.getElementById(r);a.id=t,a.innerText=n,i.appendChild(a)},i=[{name:"Weather Getter",url:"weatherAPI/homepage.html",value:"weather",description:"This app makes calls to two separate APIs using Async Await, one to Openweather (https://openweathermap.org/), and another Unsplash (https://unsplash.com/developers). It fetches weather data and a pseudorandom photo of the entered city. Written in HTML, CSS, and vanilla JS."},{name:"Restaraunt Page",url:"restaurant/",value:"restaraunt",description:"Demo page for a responsive restaraunt website. Bundled using Webpack and has some bootstrap for styling. Otherwise, built with HTML, CSS, and JS."},{name:"Tic Tac Toe",url:"tictactoe/homepage.html",value:"tictactoe",description:"Vanilla JS with a simple computer AI algorithm."},{name:"Etch A Sketch",url:"etch/homepage.html",value:"etch",description:"Vanilla JS. Early project using mostly pre-ECMA 5 syntax. Fixed scrollbar so that it can size the grid recently."}],o=(document.getElementById("container"),r=>{null!==document.getElementById("iframe")&&(console.log("iframe exists"),document.getElementById("iframe").remove()),i.forEach((a=>{if(a.value===r.target.value){let r=document.createElement("iframe");r.src=t+a.url,r.id="iframe",r.height="1000",r.width="1000",e.appendChild(r),i=a,n.innerText=i.description}var i}))});r(914),(new Image).src=void 0,(()=>{a("h2","title-text","title","Seth Feldman's Portfolio");let r=document.createElement("iframe");r.src=t+i[0].url,r.id="iframe",r.height="1000",r.width="1000",e.appendChild(r),n.innerText=i[0].description})(),(()=>{a("select","selector","dropdown-menu","");let e=document.getElementById("selector");e.classList.add("dropdown-menu"),i.forEach((t=>{let r=document.createElement("option");r.value=t.value,r.classList.add("dropdown-item"),r.innerText=t.name,e.appendChild(r)})),e.addEventListener("change",o)})()})()})();