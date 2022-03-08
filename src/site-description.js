import {descComp} from "./global.js";

const siteDescription = (value) => {
    // on default set description
    descComp.innerHTML = value.description +value.git;
};

export {siteDescription}