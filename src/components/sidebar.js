function projectSidebarHandler(){
    const projectsSidebar = document.querySelector('.projects-wrapper');
    const addProjectForm = document.querySelector('.add-project-form');
    const projectTitleInput = document.querySelector('.project-title-input');
    const submitProjectButton = document.querySelector('.submit-project-button');
    const cancelButton = document.querySelector('.cancel-button');
    const listTitle = document.querySelector('.list-title');

    const projectsList = [];

    
    const addItem = (itemName) => {
        let item = itemName;
        projectsList.push(item);
        projectsSidebar.innerHTML = '';

        updateProjects();
    }


    const updateProjects = () => projectsList.map((item) => {
        const projectsSidebarItem = document.createElement('div');
        projectsSidebarItem.textContent = item;
        projectsSidebarItem.classList.add('project-sidebar-item');
        projectsSidebarItem.addEventListener("click", () => {
            listTitle.textContent = item + " Tasks";
        });

        projectsSidebar.appendChild(projectsSidebarItem);
    });

    const showProjectForm = () => {
        addProjectForm.classList.toggle('inactive');
    }

    submitProjectButton.addEventListener("click", () => {
        if (projectTitleInput.value){
            addItem(projectTitleInput.value);
        }
        projectTitleInput.value = '';
        addProjectForm.classList.toggle('inactive');
    })

    cancelButton.addEventListener("click", () => {
        addProjectForm.classList.toggle('inactive');
        projectTitleInput.value = '';
    })


    

    return {showProjectForm};
}



export default projectSidebarHandler;