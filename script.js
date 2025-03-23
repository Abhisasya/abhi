const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    "task4": { "title": "Project 4", "url": "works/task4/index.html" },
    "task5": { "title": "Project 5", "url": "works/task5/index.html" },
    "task6": { "title": "Project 6", "url": "works/task6/index.html" },
    "task7": { "title": "Project 7", "url": "works/task7/index.html" },
    "task8": { "title": "Project 8", "url": "works/task8/index.html" },
    "task9": { "title": "Project 9", "url": "works/task9/index.html" },
    "task10": { "title": "Project 10", "url": "works/task10/index.html" },
    "task11": { "title": "Project 11", "url": "works/task11/index.html" },
    "task12": { "title": "Project 12", "url": "works/task12/index.html" },
    "task13": { "title": "Project 13", "url": "works/task13/index.html" },
    "task14": { "title": "Project 14", "url": "works/task14/index.html" },
    "task15": { "title": "Project 15", "url": "works/task15/index.html" },
    "task16": { "title": "Project 16", "url": "works/task16/index.html" }
}

const workFrame = document.getElementById("workFrame");
const projectsContainer = document.getElementById("projects-container");

Object.keys(works).forEach(key => {
    const button = document.createElement("button");
    button.textContent = works[key].title;
    button.onclick = () => {
        workFrame.src = works[key].url;
    };
    projectsContainer.appendChild(button);
});