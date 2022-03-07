import { displaySite } from "../display-site.js";
import { elMaker } from "./global.js";
import { sites } from "./global.js";

const dropDown = ()=> {
    elMaker("select", "selector", "dropdown-menu", "");
    let selector = document.getElementById("selector");
    selector.classList.add("dropdown-menu");
    sites.forEach((item) => {
        let option = document.createElement("option");
        option.value = item.value;
        option.classList.add("dropdown-item");
        option.innerText = item.name;
        selector.appendChild(option);
    });

    selector.addEventListener("change", displaySite);
};

export {dropDown}