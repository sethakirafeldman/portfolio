import {buildPage} from './build-page.js';
import { dropDown } from './drop-down.js';


const displayContainer = document.getElementById("display-site-container");
const gitSite = "https://sethakirafeldman.github.io/";

const elMaker = (el, id, parent, txt)=> {
    console.log(parent);
    let newEl = document.createElement(el);
    let appendTo = document.getElementById(parent);
    
    newEl.id = id;
    newEl.innerText = txt;
    // console.log(appendTo);
    appendTo.appendChild(newEl);

    // return newEl;
};

const sites = [
    {   "name": "Weather Getter",
        "url": "weatherAPI/homepage.html",
        "value": "weather"
    },
    {
        "name": "Restaraunt Page",
        "url": "restaurant/",
        "value": "restaraunt"
    },   
    {
        "name": "Tic Tac Toe",
        "url": "tictactoe/homepage.html",
        "value": "tictactoe"
    },
    {
        "name": "Etch A Sketch",
        "url": "etch/homepage.html",
        "value": "etch"   
    }
];


buildPage();
dropDown();

export {displayContainer, elMaker, gitSite}
export {sites}