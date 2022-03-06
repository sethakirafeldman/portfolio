import { buildIframe } from "../display-site.js";
import { elMaker } from "./index.js";
import { sites } from "./index.js";

const dropDown = ()=> {
    elMaker("select", "selector", "dropdown-menu", "");
    let selector = document.getElementById("selector");

    sites.forEach((item) => {
        let option = document.createElement("option");
        option.value = item.value;
        option.innerText = item.name;
        selector.appendChild(option);
    });

    selector.addEventListener("change", buildIframe);
};

export {dropDown}