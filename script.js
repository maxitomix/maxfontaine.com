let projects = [
    {
        name: "Calculator Exercise",
        description: "Practice basic JavaScript, variables, display update and design.",
        technology: "JavaScript",
        url: "http://maxfontaine.com/TOP-Project-Calculator/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "Restaurant Page",
        description: "Practice display update using JavaScript to destroy and re-load each page.",
        technology: "JavaScript",
        url: "http://maxfontaine.com/TOP_Restaurant-Page/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "To-Do App",
        description: "Practice responsive design, listening to events and object manipulation.",
        technology: "JavaScript, HTML, CSS",
        url: "https://maxfontaine.com/TOP_Todo_app/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "Library",
        description: "Practice manipulating the DOM.",
        technology: "JavaScript, HTML, CSS",
        url: "http://maxfontaine.com/TOP-Project-Library/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "Signup Form",
        description: "Practice data validation using JavaScript.",
        technology: "JavaScript, HTML, CSS",
        url: "http://maxfontaine.com/TOP_validating_forms_JS/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "Weather App",
        description: "A basic weather App to practice working with APIs.",
        technology: "JavaScript, HTML, CSS, APIs",
        url: "http://maxfontaine.com/TOP_WeatherApp/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "Knight's Pathfinding Algorithm",
        description: "Practice computer science, pathfinding algorithms. Deep Traverse and Breadth Traverse. Backtrack.",
        technology: "JavaScript, HTML, CSS",
        url: "http://maxfontaine.com/TOP_Knights/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "Battleships",
        description: "Practice computer science, coding game logic to play Battleship.",
        technology: "JavaScript, HTML, CSS",
        url: "http://maxfontaine.com/TOP_Battleships2/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "Inventory",
        description: "Practice thinking in React style. Hooks, props and states management",
        technology: "React, Node.js",
        url: "http://maxfontaine.com/react_inventory/",
        image: "./Placeholder Image.jpg"
    },
    {
        name: "Tick-Tack-Toe with react",
        description: "Using React to record changes of state and to record a hiostory of moves. Travel back in time",
        technology: "React, Node.js",
        url: "http://maxfontaine.com/react_ticktacktoe/",
        image: "./Placeholder Image.jpg"
    },
];

let projectContainer = document.getElementById('slider');

projects.forEach(project => {
    let projectCard = document.createElement('div');
    projectCard.className = "project-card";

    let projectName = document.createElement('h2');
    projectName.textContent = project.name;
    
    let projectImage = document.createElement('img');
    projectImage.src = project.image;
    projectImage.alt = project.name;
        
    let projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    
    let projectTechnology = document.createElement('p');
    projectTechnology.textContent = `Technology: ${project.technology}`;
    
    let projectLink = document.createElement('a');
    projectLink.href = project.url;
    projectLink.textContent = "Visit Project";
    
    projectCard.appendChild(projectName);
    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectTechnology);
    projectCard.appendChild(projectLink);

    projectContainer.appendChild(projectCard);
});