import { elMaker } from "./index.js";
import { sites } from "./index.js";
import { displayContainer } from "./index.js";
import { gitSite } from "./index.js";

const container = document.getElementById("container");

const buildPage = ()=> {
    elMaker("h2", "title-text", "title", "Portfolio");
    // default iframe
    let iframe = document.createElement("iframe");
    iframe.src= gitSite + sites[0].url;
    iframe.id = "iframe";
    iframe.height = "1000";
    iframe.width = "1000";
    displayContainer.appendChild(iframe);
}
export {buildPage};