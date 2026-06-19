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
        jobTitle: "Mechanical Engineering Student",
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
        resumePDF: "Yash Joshi Resume SR26.pdf" // Place your resume PDF in the same folder
    },

    // ========== PROJECTS ==========
    // Add or remove projects as needed. Each project should have these fields:
    // - title: Project name
    // - inProgress: Optional boolean to display an "In Progress" badge (e.g. true)
    // - shortDescription: Brief summary displayed on the card
    projects: [
        {
            title: "Custom Electric Skateboard",
            inProgress: true,
            shortDescription: "Designing and building a custom electric skateboard deck that blends 3D-printed plastics with a steel skeleton for the ultimate strength-to-weight ratio.",
            image: "images/Assembly_Isometric.jpg",
            galleryImages: [
                "images/Deck_Top_View.jpg",
                "images/Assembly_Isometric.jpg"
            ],
            technologies: ["AUTODESK FUSION", "ANSYS MECHANICAL", "3D PRINTING"],

            overview: "Working to create a board that is lightweight and able to handle the dynamic stress of riding.",
            highlights: [
                { title: "Design", description: "Modeled the multi-material deck in Fusion, combining a steel support frame with a custom 3D-printed shell." },
                { title: "Optimization", description: "Cut down weight by modeling a structural honeycomb pattern that maintained board stiffness without sacrificing durability." },
                { title: "Manufacturing", description: "Navigated thermal shrinkage and print orientation to ensure tight tolerances for the structural epoxy joints." },
                { title: "Analysis", description: "Ran finite element analysis (FEA) and beam calculations to verify the board wouldn't break under dynamic riding loads." }
            ]
        },
        {
            title: "YASA Axial Flux Motor",
            inProgress: false,
            shortDescription: "Designing and manufacturing an experimental YASA Axial Flux motor with a 3000 RPM running speed for the Purdue ASME Racing team's EV Grand Prix entry.",
            image: "images/test motor  cad.jpg",
            galleryImages: [
                "images/test motor  cad.jpg",
                "images/YASA inspo pic.png"
            ],
            technologies: ["AUTODESK FUSION", "MOTORXP", "3D PRINTING", "CNC MILLING"],

            // Modal content (detailed view)
            overview: "As a member of the ASME Racing Team, I am developing a custom YASA Axial Flux motor. This project involves complex electromagnetic design and structural simulation to achieve high performance in a compact form factor for electric vehicle competition.",
            highlights: [
                { title: "Design", description: "Utilized Autodesk Fusion and MotorXP to design the motor architecture, targeting a high-efficiency 3000 RPM running speed." },
                { title: "Simulation", description: "Analyzed the motor mounting assembly within Fusion simulations to ensure structural stability and efficiency during high-speed operation." },
                { title: "Manufacturing", description: "Produced motor components and assembly fixtures using FDM/Resin 3D printing and Fusion CAM-based 3-axis CNC milling." },
                { title: "Validation", description: "Validating stator and rotor specifications through simulation before moving into final machining and assembly phases." }
            ]
        },
        {
            title: "Lunar Robot Gearbox Systems",
            inProgress: false,
            shortDescription: "Engineering high-efficiency drivetrain gearboxes for Purdue Lunabotics, optimized for weight reduction and rapid assembly for NASA competition.",
            image: "images/lunabotics rover pic.png",
            galleryImages: [
                "images/IMG_6587.jpg",
                "images/lunabotics rover pic.png",
                "images/gearbox isometric.jpg"
            ],
            technologies: ["SOLIDWORKS", "AUTODESK FUSION (CAM)", "CNC MILLING", "WATERJET"],

            overview: "Working within the Drivetrain Sub-team, I focus on the mechanical design and manufacturing of gearbox systems that must withstand harsh lunar-simulated environments while adhering to strict weight constraints.",
            highlights: [
                { title: "Design", description: "Designed gearboxes and frame elements in Solidworks optimized for traversal efficiency and a 5+kg weight reduction goal." },
                { title: "Optimization", description: "Reduced gearbox assembly time by 20% by creating thoughtful designs for frequently adjusted components and providing clear documentation." },
                { title: "Manufacturing", description: "Developed CAM toolpaths for 3-axis CNC milling of aluminum components and waterjet cutting for plexiglass skid plates." },
                { title: "Documentation", description: "Maintained detailed documentation and trade studies presented in design reviews to inform industry partners and club leadership." }
            ]
        },
        {
            title: "Modified Elbow Air Engine",
            inProgress: false,
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
