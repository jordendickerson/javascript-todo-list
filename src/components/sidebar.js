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

    return {addItem};
}

export default projectSidebarHandler;