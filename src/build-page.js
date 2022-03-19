import { elMaker } from "./global.js";
import { sites } from "./global.js";
import { displayContainer } from "./global.js";
import { gitSite } from "./global";
import { introTxt } from "./global.js";

const buildPage = ()=> {

    let gitText = `The repository is available on my <a href ='https://github.com/sethakirafeldman/${sites[0].git}' target='_blank'>GitHub</a>.`;
    let standalone = `You may also view this site independently <a href ='https://sethakirafeldman.github.io/${sites[0].url}'target='_blank'>here</a>.`;


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
    document.getElementById("desc-text").innerHTML = sites[0].description + gitText +standalone;
}
export {buildPage};