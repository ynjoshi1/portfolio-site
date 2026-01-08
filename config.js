// ===================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio with your own information
// ===================================

const portfolioConfig = {
    // ========== PERSONAL INFORMATION ==========
    personal: {
        name: "Yash Joshi",
        university: "Purdue University",
        tagline: "Learn. Design. Build.",
        jobTitle: "First Year Mechanical Engineering Student",
        email: "yashnjoshi1@gmail.com",
        profilePhoto: "images/profile_pic.PNG" // Your professional headshot
    },

    // ========== ABOUT ME ==========
    aboutMe: {
        bio: "My first engineering project was repairing a toy drone I had previously crashed. That initial curious tinkering led me to mechanical engineering, a field through which I am learning to design and build solutions to the problems I face. As I grow, I hope to use the skills I develop to tackle more technical challenges and contribute meaningfully to future innovation.",
        interests: [
            "Control systems",
            "Process optimization",
            "Design for manufacturing"

        ],
        funFacts: [
            "I am a huge motorsport fan (F1, WEC, and more)",
            "My favorite book is \"Ender's Game\"",
            "I love playing and listening to many genres of music"
        ]
    },

    // ========== SOCIAL LINKS ==========
    social: {
        linkedin: "https://linkedin.com/in/yashnjoshi1",
        github: "https://github.com/ynjoshi1", // Add your GitHub username
        resumePDF: "Yash Joshi Resume SP26.pdf" // Place your resume PDF in the same folder
    },

    // ========== PROJECTS ==========
    // Add or remove projects as needed. Each project should have these fields:
    projects: [
        {
            title: "YASA Axial Flux Motor",
            shortDescription: "In the process of designing and building a YASA axial flux motor from scratch to use in an EV go-kart for competition in the Purdue EV Grand Prix under the ASME Racing team.",
            image: "images/test motor  cad.jpg",
            galleryImages: [
                "images/test motor  cad.jpg",
                "images/YASA inspo pic.png"
            ],
            technologies: ["FUSION360", "ANSYS", "MotorXP"],

            // Modal content (detailed view)
            overview: "Our goal is to be the first Purdue Grand Prix team to race with a fully custom motor and do so using a YASA Axial Flux motor design, which is known for its lightweight and compact yet high performance design.",
            highlights: [
                { title: "Initial Research", description: "Worked with teammates to find the optimal stator and rotor specifications to meet power needs" },
                { title: "Preliminary Design", description: "Used Fusion360 to create a test motor design and assemble a TLA" },
                { title: "Performance Validation", description: "Ran simulations in Ansys Motor to validate performance viablitiy and adjust design accordingly" },
                { title: "Next Steps", description: "Put together a 3D printed test motor and tune specifications before moving on to machining and final assembly" }
            ]
        },
        {
            title: "Lunar Robot Gearbox Systems",
            shortDescription: "Designing and prototyping gearbox mechanisms for Purdue Lunabotics' robot in the NASA Lunabotics competition.",
            image: "images/lunabotics rover pic.png",
            galleryImages: [
                "images/IMG_6587.jpg",
                "images/lunabotics rover pic.png",
                "images/gearbox isometric.jpg"
            ],
            technologies: ["SOLIDWORKS", "3D PRINTING"],

            overview: "The focus of this project is high efficiency and ease of assembly, meaning a large part of the design process was calculating the optimal gear ratios and testing numerous configurations before finalizing a layout.",
            highlights: [
                { title: "Initial Calculations", description: "Began by understanding our constraints and requirements before finding optimal values for performance" },
                { title: "Design", description: "Used the determined 1.6:1 gear ratio and 2\" x 3\" box tube to create an initial design in Solidworks" },
                { title: "Communication", description: "Put together a guide for gear box assembly to ensure fellow teammates are informed and validate the design before manufacturing" },
                { title: "Next Steps", description: "Prepare for critical design review followed by manufacturing and final testing" }
            ]
        },
        {
            title: "Modified Elbow Air Engine",
            shortDescription: "Used Siemens NX to model and create industry level engineering drawings of a modified elbow air engine.",
            image: "images/Lab_4_Exploded_Drawing_YNJ.png",
            galleryImages: [
                "images/elbow engine drawing.jpg",
                "images/Lab_4_Exploded_Drawing_YNJ.png"
            ],
            technologies: ["Siemens NX", "GD&T", "ASME Standards"],

            overview: "Worked with various custom and imported CAD models to put together a unique and thoroughly designed air engine with the proper fits and tolerancing to function efficiently if manufactured.",
            highlights: [
                { title: "Planning", description: "Generated the initial idea and logistics of modeling and drawing to make the process more efficient" },
                { title: "Modeling", description: "Used a top-down modeling approach to ensure clarity and functionality with interchangeable parts" },
                { title: "Drawing", description: "Followed ASME Y14.5 standards to create a full set of engineering drawings for the engine" },
                { title: "Next Steps", description: "Would like to 3D print and assemble parts of this to test the fit and tolerance choices (and have some fun with an air engine)" }
            ]
        }
    ],

    // ========== MISCELLANEOUS PROJECTS ==========
    // Smaller projects displayed as a compact gallery (images + short phrase)
    // Each project can have 1-2 images. Use 'images' array (up to 2 images).
    // 'layout' can be: "side-by-side" (images next to each other) or "stacked" (images on top of each other)
    miscellaneousProjects: [
        {
            images: ["images/headphone holder final.png"],
            caption: "Custom desk-mounted headphone holder"
        },
        {
            images: ["images/STEAM Dream screw.png"],
            caption: "STEAM Dream screw demonstration"
        },
        {
            images: ["images/rc car.jpeg"],
            caption: "Obstacle avoiding miniature car"
        }
    ],

    // ========== TOOLBOX (Technical Skills) ==========
    // Add or remove skills as needed
    toolbox: [
        { icon: "🔧", name: "SolidWorks" },
        { icon: "⚙️", name: "Fusion 360" },
        { icon: "🔩", name: "Siemens NX" },
        { icon: "🗄️", name: "Aras Innovator" },
        { icon: "📐", name: "Ansys" },
        { icon: "📊", name: "MATLAB" },
        { icon: "🐍", name: "Python" },
        { icon: "💻", name: "C/C++" },
        { icon: "📏", name: "GD&T" },
        { icon: "🖨️", name: "3D Printing" },
        { icon: "💬", name: "Spanish Biliteracy" }
    ],

    // ========== TIMELINE CHART ==========
    // Horizontal bar chart showing activities over time
    // Categories: education, project, research
    // 0.5 is July (mid year)
    timelineChart: {
        startYear: 2017,
        items: [
            { label: "VEX Robotics", yearStart: 2020.5, yearEnd: 2023, category: "project" },
            { label: "STEAM Dream", yearStart: 2022.5, yearEnd: 2025.5, category: "project" },
            { label: "Neuqua Valley High School", yearStart: 2021.5, yearEnd: 2025.5, category: "education" },
            { label: "ASME Racing", yearStart: 2025.5, yearEnd: 2026.5, category: "project", ongoing: true },
            { label: "Lunabotics", yearStart: 2025.5, yearEnd: 2026.5, category: "project", ongoing: true },
            { label: "Purdue University", yearStart: 2025.5, yearEnd: 2028.5, category: "education", ongoing: true }
        ]
    },

    // ========== FOOTER ==========
    // Customize the text at the very bottom of the site
    footer: {
        contactSectionTitle: "Get In Touch",
        contactDescription: "Currently seeking co-op or internship opportunities for Summer 2026.",
        resumeSectionTitle: "Download Resume",
        resumeDescription: "View my complete experience, coursework, and technical skills.",
        copyrightName: "Yash Joshi" // Your name for the copyright notice
    }
};
