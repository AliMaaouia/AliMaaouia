document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.querySelector(".custom-cursor");
    const cursorSize = 30;

    document.addEventListener("mousemove", function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const cursorHalfSize = cursorSize / 2;

        customCursor.style.left = `${mouseX - cursorHalfSize}px`;
        customCursor.style.top = `${mouseY - cursorHalfSize}px`;

        customCursor.style.transition = "transform 0.1s ease";
    });

    document.addEventListener("mousedown", function () {
        customCursor.classList.add("active");
    });

    document.addEventListener("mouseup", function () {
        customCursor.classList.remove("active");
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop;
                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

   
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');
            if (href.charAt(0) === '#') {
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop;
                    window.scroll({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.location.href = href;
            }

            document.querySelectorAll('.menu a').forEach(a => {
                a.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    
    const socialTab = document.querySelector('.menu a[href="#social"]');
    if (socialTab) {
        socialTab.addEventListener('click', function (e) {
            e.preventDefault();
            const socialSection = document.getElementById('social');
            if (socialSection) {
                const offsetTop = socialSection.offsetTop;
                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById('project-list');
    const allBtn = document.getElementById('all-btn');
    const activeBtn = document.getElementById('active-btn');
    const pausedBtn = document.getElementById('paused-btn');
    const completedBtn = document.getElementById('completed-btn');

    const projects = [
        {
            name: 'BeanBrain',
            description: 'Made in 2023, BeanBrain was a game I made as a massive project lasting over 2 months for my game programming class',
            status: 'Paused',
            date: '2023-01-01'
        },
        {
            name: 'Personal Portfolio Website',
            description: 'This website made in 2024 is a project for clc 12 aimed at improving programming skills.',
            status: 'Active',
            date: '2024-01-01'
        },
        {
            name: 'Research Paper on AI in Criminal Justice Systems',
            description: 'A university-level research paper on the implementation of AI in criminal justice systems made in 2024.',
            status: 'Active',
            date: '2024-02-01'
        },
        {
            name: 'Discord Server Design',
            description: 'A Discord server completely designed by myself in 2021, still up and running today.',
            status: 'Paused',
            date: '2021-01-01'
        },
        {
            name: 'Small Java Programs',
            description: 'Includes connect four, Horse Race, and blackjack simulation made in 2023.',
            status: 'Completed',
            date: '2023-02-01'
        },
        {
            name: '2020 Minecraft Textured Skin',
            description: 'First textured skin created in Minecraft that led to the creation of a texture pack revolving around the skin.',
            status: 'Completed',
            date: '2020-01-01'
        }
       
    ];

   
    function renderProjects(projectArray) {
        projectList.innerHTML = '';
        projectArray.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort projects by date
        projectArray.forEach((project, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="project-number">${index + 1}</div>
                <div class="project-details">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                </div>
                <div class="project-status ${project.status.toLowerCase()}">${project.status}</div>
            `;
            projectList.appendChild(listItem);
        });
    }

 
    renderProjects(projects);


});

document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.querySelector(".custom-cursor");
    const cursorSize = 30;

    function updateCursorPosition(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const cursorHalfSize = cursorSize / 2;

        customCursor.style.left = `${mouseX - cursorHalfSize}px`;
        customCursor.style.top = `${mouseY - cursorHalfSize + window.scrollY}px`;

        customCursor.style.transition = "transform 0.1s ease";
    }

    document.addEventListener("mousemove", updateCursorPosition);

    document.addEventListener("mousedown", function () {
        customCursor.classList.add("active");
    });

    document.addEventListener("mouseup", function () {
        customCursor.classList.remove("active");
    });
});


