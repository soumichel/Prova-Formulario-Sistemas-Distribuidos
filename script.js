document.addEventListener('DOMContentLoaded', function() {
    const projectsTab = document.getElementById('projectsTab');
    const membersTab = document.getElementById('membersTab');
    const eventsTab = document.getElementById('eventsTab');

    const projectsSection = document.getElementById('projectsSection');
    const membersSection = document.getElementById('membersSection');
    const eventsSection = document.getElementById('eventsSection');

    projectsTab.addEventListener('click', function() {
        showSection(projectsSection);
    });

    membersTab.addEventListener('click', function() {
        showSection(membersSection);
    });

    eventsTab.addEventListener('click', function() {
        showSection(eventsSection);
    });

    function showSection(section) {
        projectsSection.classList.remove('active');
        membersSection.classList.remove('active');
        eventsSection.classList.remove('active');

        section.classList.add('active');
    }

    // Inicialmente, mostra a seção de projetos
    showSection(projectsSection);

    // Gerenciamento de projetos
    document.getElementById('projectForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const projectName = document.getElementById('projectName').value;
        const projectDescription = document.getElementById('projectDescription').value;

        const projectList = document.getElementById('projectList');
        const projectItem = document.createElement('li');
        projectItem.textContent = `${projectName}: ${projectDescription}`;
        projectList.appendChild(projectItem);

        this.reset();
    });

    // Gerenciamento de membros
    document.getElementById('memberForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const memberName = document.getElementById('memberName').value;
        const memberRole = document.getElementById('memberRole').value;

        const memberList = document.getElementById('memberList');
        const memberItem = document.createElement('li');
        memberItem.textContent = `${memberName} - ${memberRole}`;
        memberList.appendChild(memberItem);

        this.reset();
    });

    // Gerenciamento de eventos
    document.getElementById('eventForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value;
        const eventDescription = document.getElementById('eventDescription').value;

        const eventList = document.getElementById('eventList');
        const eventItem = document.createElement('li');
        eventItem.textContent = `${eventName} - ${eventDate} - ${eventLocation}: ${eventDescription}`;
        eventList.appendChild(eventItem);

        this.reset();
    });
});
