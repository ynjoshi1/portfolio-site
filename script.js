// ===================================
// MECHANICAL ENGINEERING PORTFOLIO
// Interactive Functionality
// ===================================

// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Populate content from config
    populateContent();

    // Initialize scroll animations
    initScrollAnimations();

    // Smooth scroll for navigation links
    initSmoothScroll();

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        const spans = mobileBtn.querySelectorAll('span'); // Define spans here to be accessible by both listeners
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animate hamburger to X
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ========== POPULATE CONTENT FROM CONFIG ==========
function populateContent() {
    if (typeof portfolioConfig === 'undefined') {
        console.warn('portfolioConfig not found. Please ensure config.js is loaded.');
        return;
    }

    const config = portfolioConfig;

    // Update page title
    document.title = `${config.personal.name} | Portfolio`;

    // Update logo
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        const initials = config.personal.name.split(' ').map(n => n[0]).join('');
        navLogo.textContent = initials;
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `Professional portfolio of ${config.personal.name}, a Mechanical Engineering student at ${config.personal.university}.`);
    }

    // Hero section
    // Hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && config.personal.profilePhoto) {
        // Add profile photo wrapper if it doesn't exist
        let profileWrapper = document.querySelector('.hero-profile-wrapper');
        let profileImg;

        if (!profileWrapper) {
            profileWrapper = document.createElement('div');
            profileWrapper.className = 'hero-profile-wrapper';

            profileImg = document.createElement('img');
            profileImg.className = 'hero-profile-photo';
            profileWrapper.appendChild(profileImg);

            // Insert wrapper at top of hero content
            heroContent.insertBefore(profileWrapper, heroContent.firstChild);

            // Remove old standalone image if it exists (cleanup)
            const oldImg = heroContent.querySelector('img.hero-profile-photo');
            if (oldImg && oldImg.parentNode === heroContent) {
                heroContent.removeChild(oldImg);
            }
        } else {
            profileImg = profileWrapper.querySelector('.hero-profile-photo');
        }

        if (profileImg) {
            profileImg.src = config.personal.profilePhoto;
            profileImg.alt = config.personal.name;
        }
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Name Only
        heroTitle.innerHTML = `<span class="mono">${config.personal.name}</span>`;
    }

    // Role (Job Title) - Create dynamic element if doesn't exist to ensure correct order
    let heroRole = document.querySelector('.hero-role-block');
    if (!heroRole && heroTitle) {
        heroRole = document.createElement('div');
        heroRole.className = 'hero-role-block'; // New class for block-level role
        heroTitle.after(heroRole);
    }
    if (heroRole) {
        heroRole.textContent = `${config.personal.jobTitle} at ${config.personal.university}`;
    }

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) {
        // Tagline Only
        heroDesc.innerHTML = `<span class="hero-tagline-large">${config.personal.tagline}</span>`;
    }

    // Projects
    populateProjects(config.projects);

    // Miscellaneous Projects
    populateMiscProjects(config.miscellaneousProjects);

    // About Me
    populateAboutMe(config.aboutMe);

    // Toolbox
    populateToolbox(config.toolbox);

    // Timeline Chart
    populateTimelineChart(config.timelineChart);

    // Footer
    populateFooter(config);
}

function populateProjects(projects) {
    const projectsGrid = document.querySelector('#projects .grid');
    if (!projectsGrid) return;

    // Remove existing modals to ensure fresh data is shown
    document.querySelectorAll('.modal[id^="modal-"]').forEach(modal => modal.remove());

    projectsGrid.innerHTML = '';

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';

        const techTags = project.technologies.map(tech =>
            `<span class="project-tile-tech">${tech}</span>`
        ).join('');

        projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-tile-technologies">${techTags}</div>
        <p class="project-description">${project.shortDescription}</p>
        <button class="btn btn-primary" onclick="openModal(${index})">Details</button>
      </div>
    `;

        projectsGrid.appendChild(projectCard);

        // Create modal for this project
        createProjectModal(project, index);
    });
}

function createProjectModal(project, index) {
    const highlightsList = project.highlights.map(h =>
        `<li><strong>${h.title}:</strong> ${h.description}</li>`
    ).join('');

    // Generate flexible gallery images based on how many images exist
    const galleryImages = project.galleryImages || [project.image];
    const imageCount = galleryImages.length;

    // Determine image widths and styles based on count
    let galleryHTML = '';
    if (imageCount === 1) {
        // Single image - centered and larger
        galleryHTML = `
          <img src="${galleryImages[0]}" alt="${project.title}" style="width: 60%; max-width: 500px; border-radius: 4px;">
        `;
    } else if (imageCount === 2) {
        // Two images - equal width side by side
        galleryHTML = galleryImages.map((img, i) =>
            `<img src="${img}" alt="${project.title} Detail ${i + 1}" style="width: 45%; border-radius: 4px;">`
        ).join('');
    } else if (imageCount === 3) {
        // Three images - classic layout with center emphasis
        galleryHTML = `
          <img src="${galleryImages[0]}" alt="${project.title} Detail 1" style="width: 30%; border-radius: 4px; opacity: 0.85;">
          <img src="${galleryImages[1]}" alt="${project.title} Detail 2" style="width: 38%; border-radius: 4px;">
          <img src="${galleryImages[2]}" alt="${project.title} Detail 3" style="width: 30%; border-radius: 4px; opacity: 0.85;">
        `;
    } else if (imageCount === 4) {
        // Four images - 2x2 grid
        galleryHTML = galleryImages.map((img, i) =>
            `<img src="${img}" alt="${project.title} Detail ${i + 1}" style="width: 45%; border-radius: 4px;">`
        ).join('');
    } else {
        // 5+ images - flexible wrap with equal sizing
        const imgWidth = imageCount <= 6 ? '30%' : '22%';
        galleryHTML = galleryImages.map((img, i) =>
            `<img src="${img}" alt="${project.title} Detail ${i + 1}" style="width: ${imgWidth}; border-radius: 4px;">`
        ).join('');
    }

    const modal = document.createElement('div');
    modal.id = `modal-${index}`;
    modal.className = 'modal';
    modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal(${index})" aria-label="Close modal">&times;</button>
      <div class="modal-body" style="line-height: 2;">
        <h2 style="text-align: center;">${project.title}</h2>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 0.75rem; margin: 1.5rem 0;">
          ${galleryHTML}
        </div>
        <h3 style="margin: 1.5rem 0 0.75rem;">Project Overview</h3>
        <p style="margin-bottom: 1.5rem;">${project.overview}</p>
        <h3 style="margin: 1.5rem 0 0.75rem;">Technical Highlights</h3>
        <ul style="color: var(--silver-300); margin: 0.75rem 0 1.5rem; padding-left: 1.25rem;">
          ${highlightsList}
        </ul>
      </div>
    </div>
  `;

    document.body.appendChild(modal);
}

function populateAboutMe(aboutMe) {
    if (!aboutMe) return;

    // Populate bio
    const bio = document.querySelector('.about-bio');
    if (bio) {
        bio.textContent = aboutMe.bio;
    }

    // Populate interests
    const interestsList = document.querySelector('.interests-list');
    if (interestsList && aboutMe.interests) {
        interestsList.innerHTML = aboutMe.interests
            .map(interest => `<li>${interest}</li>`)
            .join('');
    }

    // Populate fun facts
    const funFactsList = document.querySelector('.fun-facts-list');
    if (funFactsList && aboutMe.funFacts) {
        funFactsList.innerHTML = aboutMe.funFacts
            .map(fact => `<li>${fact}</li>`)
            .join('');
    }
}

function populateMiscProjects(miscProjects) {
    const miscGrid = document.querySelector('.misc-projects-grid');
    if (!miscGrid || !miscProjects || miscProjects.length === 0) return;

    miscGrid.innerHTML = '';

    miscProjects.forEach(project => {
        // Support both old 'image' field and new 'images' array for backward compatibility
        const images = project.images || (project.image ? [project.image] : []);
        const layout = project.layout || 'side-by-side'; // Default to side-by-side
        const imageCount = Math.min(images.length, 2); // Limit to 2 images

        const card = document.createElement('div');
        card.className = 'misc-project-card fade-in-up';

        // Generate image HTML based on count and layout
        let imageHTML = '';
        if (imageCount === 1) {
            imageHTML = `
                <div class="misc-project-image-wrapper">
                    <img src="${images[0]}" alt="${project.caption}" class="misc-project-image">
                </div>
            `;
        } else if (imageCount === 2) {
            const layoutClass = layout === 'stacked' ? 'misc-images-stacked' : 'misc-images-side-by-side';
            imageHTML = `
                <div class="misc-project-images ${layoutClass}">
                    <div class="misc-project-image-wrapper">
                        <img src="${images[0]}" alt="${project.caption} - Image 1" class="misc-project-image">
                    </div>
                    <div class="misc-project-image-wrapper">
                        <img src="${images[1]}" alt="${project.caption} - Image 2" class="misc-project-image">
                    </div>
                </div>
            `;
        }

        card.innerHTML = `
            ${imageHTML}
            <p class="misc-project-caption">${project.caption}</p>
        `;
        miscGrid.appendChild(card);
    });
}

function populateToolbox(tools) {
    const toolboxGrid = document.querySelector('.toolbox-grid');
    if (!toolboxGrid) return;

    toolboxGrid.innerHTML = '';

    tools.forEach(tool => {
        const toolItem = document.createElement('div');
        toolItem.className = 'tool-item';
        toolItem.innerHTML = `
      <div class="tool-icon">${tool.icon}</div>
      <div class="tool-name">${tool.name}</div>
    `;
        toolboxGrid.appendChild(toolItem);
    });
}

function populateTimelineChart(chartConfig) {
    if (!chartConfig) return;

    const chartLabels = document.querySelector('.chart-labels');
    const chartGrid = document.querySelector('.chart-grid');
    const chartBars = document.querySelector('.chart-bars');
    const chartContainer = document.querySelector('.chart-container');
    const timelineChart = document.querySelector('.timeline-chart');

    if (!chartGrid || !chartBars) return;

    const { items } = chartConfig;
    const currentYear = new Date().getFullYear();
    // Calculate start year as one year before the earliest item
    const startYear = Math.floor(Math.min(...items.map(i => i.yearStart))) - 1;
    const endYear = Math.max(currentYear + 1, ...items.map(i => i.yearEnd)) + 1;
    const yearCount = endYear - startYear;

    // Set CSS variable for grid
    chartContainer.style.setProperty('--year-count', yearCount);

    // Clear existing content
    if (chartLabels) chartLabels.innerHTML = '';
    chartGrid.innerHTML = '';
    chartBars.innerHTML = '';

    // Hide the labels column since labels are now on bars
    if (chartLabels) chartLabels.style.display = 'none';

    // Create year labels
    const yearsDiv = document.createElement('div');
    yearsDiv.className = 'chart-years';
    for (let year = startYear; year <= endYear; year++) {
        const yearLabel = document.createElement('div');
        yearLabel.className = 'chart-year';
        yearLabel.textContent = year;
        yearsDiv.appendChild(yearLabel);
    }
    chartGrid.appendChild(yearsDiv);

    // Store bar-label pairs to check fit after rendering
    const barLabelPairs = [];

    // Separate education items from other items
    const educationItems = items.filter(item => item.category === 'education');
    const otherItems = items.filter(item => item.category !== 'education');

    // Curated color palette that fits the dark theme
    const colorPalette = [
        { start: '#F59E0B', end: '#FBBF24' },  // Amber/Gold
        { start: '#3B82F6', end: '#60A5FA' },  // Blue
        { start: '#14B8A6', end: '#2DD4BF' },  // Teal
        { start: '#8B5CF6', end: '#A78BFA' },  // Purple
        { start: '#EC4899', end: '#F472B6' },  // Pink
        { start: '#EF4444', end: '#F87171' },  // Red
        { start: '#10B981', end: '#34D399' },  // Emerald
        { start: '#F97316', end: '#FB923C' },  // Orange
        { start: '#06B6D4', end: '#22D3EE' },  // Cyan
    ];

    // Shuffle the palette for randomness
    const shuffledPalette = [...colorPalette].sort(() => Math.random() - 0.5);
    let colorIndex = 0;

    // Helper function to create a bar element
    const createBar = (item) => {
        // Calculate positions accounting for space-between distribution
        // Year labels are distributed at: 0%, 1/(n-1)*100%, 2/(n-1)*100%, etc.
        // where n is the total number of year labels (yearCount + 1)
        const numYearLabels = yearCount + 1;
        const yearLabelSpacing = 100 / (numYearLabels - 1); // Percentage between each year label

        // Calculate bar position: find the percentage for the start year
        const startIndex = item.yearStart - startYear;
        const endIndex = item.yearEnd - startYear;

        const barStart = startIndex * yearLabelSpacing;
        const barEnd = endIndex * yearLabelSpacing;
        const barWidth = barEnd - barStart;

        const bar = document.createElement('div');
        bar.className = `chart-bar ${item.category || 'project'}`;
        bar.style.left = `${barStart}%`;
        bar.style.width = `${barWidth}%`;

        // Assign a color from the shuffled palette
        const color = shuffledPalette[colorIndex % shuffledPalette.length];
        bar.style.background = `linear-gradient(90deg, ${color.start}, ${color.end})`;
        colorIndex++;

        const barLabel = document.createElement('span');
        barLabel.className = 'chart-bar-label';
        barLabel.textContent = item.label;
        bar.appendChild(barLabel);

        bar.title = `${item.label}: ${item.yearStart} - ${item.yearEnd}`;
        barLabelPairs.push({ bar, barLabel });

        return bar;
    };

    // Create education row with all education items on the same line
    if (educationItems.length > 0) {
        const educationRow = document.createElement('div');
        educationRow.className = 'chart-row';
        educationItems.forEach((item, index) => {
            const bar = createBar(item);
            // Add spacing between bars on the same line by reducing width
            if (index < educationItems.length - 1) {
                bar.style.width = `calc(${bar.style.width} - 2px)`;
            }
            educationRow.appendChild(bar);
        });
        chartBars.appendChild(educationRow);
    }

    // Create individual rows for other items
    otherItems.forEach(item => {
        const row = document.createElement('div');
        row.className = 'chart-row';
        const bar = createBar(item);
        row.appendChild(bar);
        chartBars.appendChild(row);
    });

    // After rendering, check if labels fit inside bars
    requestAnimationFrame(() => {
        barLabelPairs.forEach(({ bar, barLabel }) => {
            const barWidth = bar.offsetWidth;
            const labelWidth = barLabel.scrollWidth + 16; // 16px for padding
            if (labelWidth > barWidth) {
                barLabel.classList.add('outside');
            }
        });
    });
}

function populateFooter(config) {
    const footerConfig = config.footer || {};

    // Update footer section titles
    const footerSections = document.querySelectorAll('.footer-section');
    if (footerSections.length >= 1 && footerConfig.contactSectionTitle) {
        const contactTitle = footerSections[0].querySelector('h3');
        if (contactTitle) contactTitle.textContent = footerConfig.contactSectionTitle;
    }
    if (footerSections.length >= 2) {
        const resumeTitle = footerSections[1].querySelector('h3');
        const resumeDesc = footerSections[1].querySelector('p');
        if (resumeTitle && footerConfig.resumeSectionTitle) {
            resumeTitle.textContent = footerConfig.resumeSectionTitle;
        }
        if (resumeDesc && footerConfig.resumeDescription) {
            resumeDesc.textContent = footerConfig.resumeDescription;
        }
    }

    // Update contact description text
    const contactDesc = footerSections[0]?.querySelector('p');
    if (contactDesc && footerConfig.contactDescription) {
        contactDesc.textContent = footerConfig.contactDescription;
    }

    // Update email contact buttons to copy email to clipboard
    const contactButtons = document.querySelectorAll('a[href^="mailto:"]');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', async function (e) {
            e.preventDefault();
            const email = config.personal.email;

            try {
                await navigator.clipboard.writeText(email);

                // Visual feedback
                const originalText = btn.textContent;
                const originalWidth = btn.offsetWidth;

                // If it's a social link (icon only), show tooltip
                if (btn.classList.contains('social-link')) {
                    showToast(`Email copied: ${email}`);
                } else {
                    // For buttons with text
                    btn.style.width = `${originalWidth}px`; // Prevent layout shift
                    btn.textContent = "Email Copied! ✓";
                    btn.classList.add('btn-success');

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.width = '';
                        btn.classList.remove('btn-success');
                    }, 2000);
                }
            } catch (err) {
                console.error('Failed to copy: ', err);
                // Fallback to mailto if copy fails
                window.location.href = `mailto:${email}`;
            }
        });
    });

    // Update social links
    const linkedinLink = document.querySelector('a[aria-label="LinkedIn"]');
    if (linkedinLink) linkedinLink.href = config.social.linkedin;

    // Update GitHub link
    const githubLink = document.querySelector('a[aria-label="GitHub"]');
    if (githubLink && config.social.github) {
        githubLink.href = config.social.github;
    }



    // Update resume link
    const resumeLinks = document.querySelectorAll('a[download]');
    resumeLinks.forEach(link => {
        link.href = config.social.resumePDF;
        link.download = config.social.resumePDF;
    });

    // Update copyright
    const copyright = document.querySelector('.footer-copyright .mono');
    if (copyright) {
        const year = new Date().getFullYear();
        const copyrightName = footerConfig.copyrightName || config.personal.name;
        copyright.innerHTML = `&copy; <span id="year">${year}</span> ${copyrightName}.`;
    }
}

// Toast Notification
function showToast(message) {
    // Check if toast container exists, if not create it
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.textContent = message;

    container.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
        setTimeout(() => {
            container.removeChild(toast);
            if (container.children.length === 0) {
                document.body.removeChild(container);
            }
        }, 300);
    }, 3000);
}


// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Skip if it's just "#" or modal-related
            if (targetId === '#' || targetId.startsWith('#modal')) {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

// ========== MODAL FUNCTIONS ==========
function openModal(index) {
    const modal = document.getElementById(`modal-${index}`);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(index) {
    const modal = document.getElementById(`modal-${index}`);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal when clicking outside content
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add parallax effect to hero section (optional enhancement)
let ticking = false;
window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');

            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }

            ticking = false;
        });
        ticking = true;
    }
});
