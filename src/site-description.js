
const siteDescription = (value) => {
    let gitText = `The repository is available on my <a href ='https://github.com/sethakirafeldman/${value.git}' target='_blank'>GitHub</a>.`;
    let standalone = `You may also view this site independently <a href ='https://sethakirafeldman.github.io/${value.url}'target='_blank'>here</a>.`;
    let descText = document.getElementById("desc-text");
    // on default set description
    descText.innerHTML = value.description + gitText +standalone;
 
};

export {siteDescription}