import { elMaker } from "./global.js";
import { sites } from "./global";
import { displayContainer } from "./global";
import { gitSite } from "./global";
import { descComp } from "./global.js";
import { introTxt } from "./global.js";

const container = document.getElementById("container");

const buildPage = ()=> {

    elMaker("p", "intro-text","intro", introTxt);

    elMaker("h2", "title-text", "title", "Seth Feldman's Portfolio");
    // default iframe
    let iframe = document.createElement("iframe");
    iframe.src= gitSite + sites[0].url;
    iframe.id = "iframe";
    iframe.height = "1000";
    iframe.width = "1000";
    displayContainer.appendChild(iframe);

    // default description
    descComp.innerText = sites[0].description;
}
export {buildPage};