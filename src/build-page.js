import { elMaker } from "./global.js";
import { sites } from "./global.js";
import { displayContainer } from "./global.js";
import { gitSite } from "./global";
import { introTxt } from "./global.js";

import gitLogo from "./assets/GitHub-Mark-64px.png"

const gitIcon = new Image();
gitIcon.src = gitLogo;
gitIcon.style.width = "1rem"

const buildPage = ()=> {

    elMaker("p", "intro-text","intro", introTxt);
    
    elMaker("h2", "name-text", "title", "Seth Akira Feldman");
    elMaker("h2", "title-text", "title", "Developer Portfolio");
 
    // default iframe
    let iframe = document.createElement("iframe");
    iframe.src= gitSite + sites[0].url;
    iframe.id = "iframe";
    displayContainer.appendChild(iframe);

    // default description
    elMaker("h4", "description-heading", "about-site", "About this Project");
    elMaker("div", "desc-text", "about-site", "");
    document.getElementById("desc-text").innerHTML = sites[0].description + sites[0].git;
    // document.getElementById("desc-text").appendChild(gitIcon);
}
export {buildPage};