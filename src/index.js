require('./style/main.scss');
import projectSidebarHandler from './components/sidebar';

const tasksContainer = document.querySelector('.tasks-container');
const addTaskButton = document.querySelector('.add-task-button')
const addProjectButton = document.querySelector('.add-project-button');


function app(){
    //set parameters
    let filter = 'all';
    let tasks = [];

    

    //Sidebar
    const projectSidebar = projectSidebarHandler();
    addProjectButton.addEventListener("click", () => {
        projectSidebar.showProjectForm();
    })
    

    //Add Task Button
    addTaskButton.addEventListener("click", () => {
        const temporaryTask = document.createElement('div');
        temporaryTask.textContent = "Temporary Task";
        tasksContainer.appendChild(temporaryTask);
    })
}

app();