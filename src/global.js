const displayContainer = document.getElementById("display-site-container");
const gitSite = "https://sethakirafeldman.github.io/";
const descComp = document.getElementById("site-description");

//pass in as strings
const elMaker = (el, id, parent, txt)=> {
    let newEl = document.createElement(el);
    let appendTo = document.getElementById(parent);
    
    newEl.id = id;
    newEl.innerHTML = txt;
    appendTo.appendChild(newEl);
};

const introTxt = `Welcome to my portfolio. Here you will find some examples of my personal projects.
 These were built as part of <a href='https://theodinproject.com' target ='_blank'>The Odin Project</a> Foundations and Full Stack Javascript Courses.
  Select a site from the drop-down menu below to view. This page was built with vanilla JS and bundled using Webpack. You can view this page's repository <a href='https://github.com/sethakirafeldman/portfolio' target ='_blank'>here</a>.`

const sites = [
    {   "name": "Weather Getter",
        "url": "weatherAPI/homepage.html",
        "value": "weather",
        "git": `weatherAPI`,
        "description": `This app makes calls to two separate APIs using Async Await, one to <a href ='https://openweathermap.org/' target='_blank'>Openweather</a>, and another <a href ='https://unsplash.com/developers' target='_blank'>Unsplash</a>. 
        It fetches weather data and a pseudorandom photo of the chosen city. 
        Written in HTML, CSS, and vanilla JS. Unsplash limits hourly API calls to 50, if you notice the image is not changing, then this limit has likely been reached.`
    },
    {
        "name": "Restaurant Page",
        "url": "restaurant/",
        "value": "restaurant",
        "git": `restaurant`,
        "description": `Demo page for a responsive restaurant website. Bundled using Webpack and uses bootstrap for some styling. Otherwise, built with HTML, CSS, and JS.`
    },   
    {
        "name": "Tic Tac Toe",
        "url": "tictactoe/homepage.html",
        "value": "tictactoe",
        "git": `tictactoe`,
        "description": "Vanilla JS with a simple computer AI algorithm."

    },
    {
        "name": "Etch A Sketch",
        "url": "etch/homepage.html",
        "value": "etch",
        "git": `etch`,
        "description": `Vanilla JS. Early project using mostly pre-ECMA 5 syntax. 
        Fixed scrollbar so that it can size the grid recently. 
        As with a real Etch A Sketch, you must draw from whichever point you start in one continuous motion.`  
    }
];




export { displayContainer, elMaker, gitSite, descComp, sites, introTxt}
