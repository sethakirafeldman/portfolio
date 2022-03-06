import { sites } from "./src/index.js";
import { displayContainer } from "./src/index.js";

 const buildIframe = (e) => {


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
        }
    });
}

// need to set default site. currently looking for change event from event listener.

export {buildIframe};