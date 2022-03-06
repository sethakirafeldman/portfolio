import { elMaker } from "./index.js";

const container = document.getElementById("container");

const buildPage = ()=> {
    elMaker("h2", "title-text", "title", "Portfolio");
}

export {buildPage};