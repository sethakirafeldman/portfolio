import {descComp} from "./global.js";

const siteDescription = (value) => {
    // on default set description
    descComp.innerText = value.description;
};

export {siteDescription}