
const siteDescription = (value) => {
    // on default set description
    document.getElementById("desc-text").innerHTML = value.description +value.git;
};

export {siteDescription}