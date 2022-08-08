require('./style/main.scss');

const todoContainer = document.getElementById('todos-container');
const addProjectButton = document.querySelector('.add-project-button');

function projectSidebarHandler(){
    const projectsSidebar = document.querySelector('.projects-wrapper');
    const projectsList = [];

    const addItem = (itemName) => {
        let item = itemName;
        projectsList.push(item);
        projectsSidebar.innerHTML = '';

        updateProjects();
    }


    const updateProjects = () => projectsList.map((item) => {
        const projectsSidebarItem = document.createElement('li');
        projectsSidebarItem.textContent = item;
        projectsSidebarItem.classList.add('project-sidebar-item');

        projectsSidebar.appendChild(projectsSidebarItem);
    });

    return {addItem, updateProjects};
}

const projectSidebar = projectSidebarHandler();
projectSidebar.updateProjects();
let projectNum = 1;
addProjectButton.addEventListener("click", () => {
    projectSidebar.addItem("Project "+projectNum);
    projectNum++;
})