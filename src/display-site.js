import { sites } from "./global.js";
import { displayContainer } from "./global.js";
import { gitSite } from "./global.js";
import { siteDescription } from "./site-description.js";

 const displaySite = (e) => {

    if (document.getElementById("iframe") !== null) {
        document.getElementById("iframe").remove();
    }

    sites.forEach((v)=>{
        if (v.value === e.target.value) {
            let iframe = document.createElement("iframe");
            iframe.src= gitSite + v.url;
            iframe.id = "iframe";
       
            displayContainer.appendChild(iframe);

            //set description
            siteDescription(v);

        }
    });
}

export {displaySite};