import { sites } from "./src/global.js";
import { displayContainer } from "./src/global.js";
import { gitSite } from "./src/global.js";
import { siteDescription } from "./src/site-description.js";

 const displaySite = (e) => {

    if (document.getElementById("iframe") !== null) {
        console.log("iframe exists");
        document.getElementById("iframe").remove();
    }

    sites.forEach((v)=>{
        if (v.value === e.target.value) {
            let iframe = document.createElement("iframe");
            iframe.src= gitSite + v.url;
            iframe.id = "iframe";
            iframe.height = "1000";
            iframe.width = "1000";
            displayContainer.appendChild(iframe);

            //set description
            siteDescription(v);
        }
    });
}

export {displaySite};