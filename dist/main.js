(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{r4:()=>a,$R:()=>l,XO:()=>n,tc:()=>r}),document.getElementById("container");const t=e=>{null!==document.getElementById("iframe")&&(console.log("iframe exists"),document.getElementById("iframe").remove()),r.forEach((t=>{if(t.value===e.target.value){let e=document.createElement("iframe");e.src="https://sethakirafeldman.github.io/"+t.url,e.id="iframe",e.height="1000",e.width="1000",a.appendChild(e)}}))},a=document.getElementById("display-site-container"),n="https://sethakirafeldman.github.io/",l=(e,t,a,n)=>{console.log(a);let l=document.createElement(e),r=document.getElementById(a);l.id=t,l.innerText=n,r.appendChild(l)},r=[{name:"Weather Getter",url:"weatherAPI/homepage.html",value:"weather"},{name:"Restaraunt Page",url:"restaurant/",value:"restaraunt"},{name:"Tic Tac Toe",url:"tictactoe/homepage.html",value:"tictactoe"},{name:"Etch A Sketch",url:"etch/homepage.html",value:"etch"}];(()=>{l("h2","title-text","title","Portfolio");let e=document.createElement("iframe");e.src=n+r[0].url,e.id="iframe",e.height="1000",e.width="1000",a.appendChild(e)})(),(()=>{l("select","selector","dropdown-menu","");let e=document.getElementById("selector");r.forEach((t=>{let a=document.createElement("option");a.value=t.value,a.innerText=t.name,e.appendChild(a)})),e.addEventListener("change",t)})()})();