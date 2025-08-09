           document.addEventListener('DOMContentLoaded', function() {
            // Theme Toggle Functionality
            const themeToggle = document.querySelector('.theme-toggle');
            const themeIcon = themeToggle.querySelector('i');
            
            // Check for saved theme preference or respect OS preference
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme === 'light' || (!savedTheme && !prefersDarkScheme.matches)) {
                document.body.classList.add('light-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('light-mode');
                
                if (document.body.classList.contains('light-mode')) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'light');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'dark');
                }
            });

            // Navigation functionality
            const navLinks = document.querySelectorAll('.nav-list li');
            const sections = document.querySelectorAll('.section');
            let currentSection = 'home';

            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    const sectionId = this.getAttribute('data-section');

                    document.querySelector('.nav-list li.active')?.classList.remove('active');
                    this.classList.add('active');

                    document.querySelector(`.section.active`)?.classList.remove('active');
                    document.querySelector(`.section.${sectionId}`)?.classList.add('active');

                    currentSection = sectionId;
                });
            });

            // Resume Tabs
            const resumeLists = document.querySelectorAll('.resume-list');
            const resumeBoxes = document.querySelectorAll('.resume-box');

            resumeLists.forEach((list, idx) => {
                list.addEventListener('click', () => {
                    document.querySelector('.resume-list.active')?.classList.remove('active');
                    list.classList.add('active');

                    document.querySelector('.resume-box.active')?.classList.remove('active');
                    resumeBoxes[idx]?.classList.add('active');
                });
            });

            // Portfolio Tabs
            const portfolioTabLists = document.querySelectorAll('.portfolio-tab-list');
            const portfolioTabContents = document.querySelectorAll('.portfolio-tab-content');

            portfolioTabLists.forEach((list) => {
                list.addEventListener('click', () => {
                    const tabId = list.getAttribute('data-tab');
                    
                    // Update active tab
                    document.querySelector('.portfolio-tab-list.active')?.classList.remove('active');
                    list.classList.add('active');
                    
                    // Update active content
                    document.querySelector('.portfolio-tab-content.active')?.classList.remove('active');
                    document.querySelector(`.portfolio-tab-content.${tabId}`)?.classList.add('active');
                });
            });

            // Tooltip functionality
            const tooltipElements = document.querySelectorAll('[data-tooltip]');

            tooltipElements.forEach(el => {
                const tooltip = document.createElement('span');
                tooltip.className = 'tooltip';
                tooltip.textContent = el.getAttribute('data-tooltip');
                el.appendChild(tooltip);

                el.addEventListener('mouseenter', () => {
                    tooltip.style.visibility = 'visible';
                    tooltip.style.opacity = '1';
                });

                el.addEventListener('mouseleave', () => {
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = '0';
                });
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;

                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // Rotating Roles Animation
            const roles = document.querySelectorAll('.role');
            let currentRole = 0;

            roles[currentRole].style.opacity = '1';
            roles[currentRole].style.transform = 'translateY(0)';

            setInterval(() => {
                roles[currentRole].style.opacity = '0';
                roles[currentRole].style.transform = 'translateY(-100%)';

                currentRole = (currentRole + 1) % roles.length;

                roles[currentRole].style.opacity = '1';
                roles[currentRole].style.transform = 'translateY(0)';

                const nextRole = (currentRole + 1) % roles.length;
                roles[nextRole].style.transform = 'translateY(100%)';
            }, 4000);

            for (let i = 1; i < roles.length; i++) {
                roles[i].style.transform = 'translateY(100%)';
            }

            // Skills Animation
            const skillProgressBars = document.querySelectorAll('.skill-progress');

            skillProgressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = '0';

                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 100);
            });
        });
  