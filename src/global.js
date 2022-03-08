
const displayContainer = document.getElementById("display-site-container");
const gitSite = "https://sethakirafeldman.github.io/";
const descComp = document.getElementById("site-description");

//pass in as strings
const elMaker = (el, id, parent, txt)=> {
    console.log(parent);
    let newEl = document.createElement(el);
    let appendTo = document.getElementById(parent);
    
    newEl.id = id;
    newEl.innerText = txt;
    appendTo.appendChild(newEl);
};

const introTxt = "Welcome to my portfolio. Here you will find some examples of my work. Select a site from the drop-down menu below to view."

const sites = [
    {   "name": "Weather Getter",
        "url": "weatherAPI/homepage.html",
        "value": "weather",
        "description": "This app makes calls to two separate APIs using Async Await, one to Openweather (https://openweathermap.org/), and another Unsplash (https://unsplash.com/developers). It fetches weather data and a pseudorandom photo of the entered city. Written in HTML, CSS, and vanilla JS."
    },
    {
        "name": "Restaurant Page",
        "url": "restaurant/",
        "value": "restaurant",
        "description": "Demo page for a responsive restaraunt website. Bundled using Webpack and has some bootstrap for styling. Otherwise, built with HTML, CSS, and JS."
    },   
    {
        "name": "Tic Tac Toe",
        "url": "tictactoe/homepage.html",
        "value": "tictactoe",
        "description": "Vanilla JS with a simple computer AI algorithm."

    },
    {
        "name": "Etch A Sketch",
        "url": "etch/homepage.html",
        "value": "etch",
        "description": "Vanilla JS. Early project using mostly pre-ECMA 5 syntax. Fixed scrollbar so that it can size the grid recently."   
    }
];




export { displayContainer, elMaker, gitSite, descComp, sites, introTxt }
