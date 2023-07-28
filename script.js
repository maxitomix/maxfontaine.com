let projects = [
    {
        name: "Calculator Exercise",
        description: "Practice basic JavaScript, variables, display update and design.",
        technology: "JavaScript",
        url: "http://maxfontaine.com/TOP-Project-Calculator/",
        image: "./projectImages/Calculator.jpg"
    },
    {
        name: "Restaurant Page",
        description: "Practice display update using JavaScript to destroy and re-load each page.",
        technology: "JavaScript",
        url: "http://maxfontaine.com/TOP_Restaurant-Page/",
        image: "./projectImages/pizza.jpg"
    },
    {
        name: "To-Do App",
        description: "Practice responsive design, listening to events and object manipulation.",
        technology: "JavaScript, HTML, CSS",
        url: "https://maxfontaine.com/TOP_Todo_app/",
        image: "./projectImages/todo.jpg"
    },
    {
        name: "Library",
        description: "Practice manipulating the DOM.",
        technology: "JavaScript, HTML, CSS",
        url: "http://maxfontaine.com/TOP-Project-Library/",
        image: "./projectImages/bookList.jpg"
    },
    {
        name: "Signup Form",
        description: "Practice data validation using JavaScript.",
        technology: "JavaScript, HTML, CSS",
        url: "http://maxfontaine.com/TOP_validating_forms_JS/",
        image: "./projectImages/signUpForm.jpg"
    },
    {
        name: "Weather App",
        description: "A basic weather App to practice working with APIs.",
        technology: "JavaScript, HTML, CSS, APIs",
        url: "http://maxfontaine.com/TOP_WeatherApp/",
        image: "./projectImages/weather_page.jpg"
    },
    {
        name: "Knight's Pathfinding Algorithm",
        description: "Practice computer science, pathfinding algorithms. Deep Traverse and Breadth Traverse. Backtrack.",
        technology: "JavaScript, HTML, CSS",
        url: "http://maxfontaine.com/TOP_Knights/",
        image: "./projectImages/knightPath.jpg"
    },
    {
        name: "Battleships",
        description: "Practice computer science, coding game logic to play Battleship.",
        technology: "JavaScript, HTML, CSS",
        url: "http://maxfontaine.com/TOP_Battleships2/",
        image: "./projectImages/battleship.jpg"
    },
    {
        name: "Inventory",
        description: "Practice thinking in React style. Hooks, props and states management",
        technology: "Reacts",
        url: "http://maxfontaine.com/react_inventory/",
        image: "./projectImages/inventory.jpg"
    },
    {
        name: "Tick-Tack-Toe with react",
        description: "Using React to record changes of state and to record a hiostory of moves. Travel back in time",
        technology: "React",
        url: "http://maxfontaine.com/react_ticktacktoe/",
        image: "./projectImages/ticktack.jpg"
    },
    {
        name: "CV Editor with react",
        description: "And interactive editor. Solidifies best practices on passind data between modules using state management and hooks",
        technology: "React",
        url: "http://maxfontaine.com/top_cv_app/",
        image: "./projectImages/cveditor.jpg"
    },
    {
        name: "Memory Game",
        description: "An interactive game of memory using React and APIs. Also a bit of animations and responsiveness",
        technology: "React, Rest API",
        url: "http://maxfontaine.com/top_memory_game/",
        image: "./projectImages/memoryGame.jpg"
    },
        {
        name: "Store Page",
        description: "A marketplace store in react to practice creating checkout carts",
        technology: "React + Vite",
        url: "https://maxfontaine.com/top_shopping_cart/",
        image: "./projectImages/store.jpg"
    },
    {
        name: "Where are they?",
        description: "Find Wally clone. Photo tagging app using React with backend in Firebase - Google Cloud",
        technology: "React + Vite, Firebase Firestore Database and Hosting.",
        url: "https://where-are-they-c60c3.web.app/",
        image: "./projectImages/wherearethey.jpg"
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


document.documentElement.setAttribute('data-theme', '0');

const themeButton = document.getElementById('themeButton');
let currentThemeIndex = 0;

themeButton.addEventListener('click', () => {
    if (currentThemeIndex === 4){
       currentThemeIndex = 0
       document.documentElement.setAttribute('data-theme', `${currentThemeIndex}`)
    } else {
        currentThemeIndex = currentThemeIndex  + 1;
        document.documentElement.setAttribute('data-theme', `${currentThemeIndex}`)
       
    }
});