import gitLogo from "./assets/GitHub-Mark-64px.png"

// const gitIcon = new Image();
// gitIcon.src = gitLogo;
// gitIcon.style.width = "1rem"

const siteDescription = (value) => {
     let descText = document.getElementById("desc-text");
    // on default set description
    descText.innerHTML = value.description + value.git;
    // descText.appendChild(gitIcon);
};

export {siteDescription}