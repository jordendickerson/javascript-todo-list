require('./style/main.scss');
import projectSidebarHandler from './components/sidebar';

const listTitle = document.querySelector('.list-title');
const tasksContainer = document.querySelector('.tasks-container');
const addTaskButton = document.querySelector('.add-task-button')
const addProjectButton = document.querySelector('.add-project-button');


function app(){
    //set parameters
    let filter = 'all';
    let tasks = [];

    //Sidebar
    const projectSidebar = projectSidebarHandler();
    let projectNum = 1;
    addProjectButton.addEventListener("click", () => {
        projectSidebar.addItem("Project "+projectNum);
        projectNum++;
    })

    //Add Task Button
    addTaskButton.addEventListener("click", () => {
        const temporaryTask = document.createElement('div');
        temporaryTask.textContent = "Temporary Task";
        tasksContainer.appendChild(temporaryTask);
    })
}

app();