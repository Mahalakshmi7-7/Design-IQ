
function generatePinterestLink(role, userInput) {
    const baseUrl = "https://www.pinterest.com/search/pins/?q=";
    let searchQuery = "";
    
    const cleanInput = userInput ? userInput.toLowerCase().trim() : "";
    
   
    switch(role) {
        case 'logo':
            if (cleanInput) {
                searchQuery = `${cleanInput}+logo+design+inspiration+branding`;
            } else {
                searchQuery = "logo+design+inspiration+brand+identity";
            }
            break;
            
        case 'poster':
            if (cleanInput) {
                searchQuery = `${cleanInput}+poster+design+layout+inspiration`;
            } else {
                searchQuery = "poster+design+layout+visual+communication";
            }
            break;
            
        case 'uiux':
            if (cleanInput) {
                searchQuery = `${cleanInput}+ui+ux+design+interface+inspiration`;
            } else {
                searchQuery = "ui+ux+design+interface+web+app";
            }
            break;
            
        default:
            searchQuery = "design+inspiration";
    }
    
    return baseUrl + encodeURIComponent(searchQuery.replace(/\s+/g, '+'));
}


const questionDatabase = {
    logo: [
        {
            question: "What is your brand personality?",
            type: "options",
            options: [
                "Professional & Corporate",
                "Creative & Playful",
                "Modern & Minimalist",
                "Bold & Edgy",
                "Elegant & Luxurious",
                "Friendly & Approachable"
            ]
        },
        {
            question: "Who is your target audience?",
            type: "options",
            options: [
                "Young Adults (18-30)",
                "Professionals (30-50)",
                "Enterprises & B2B",
                "Luxury Consumers",
                "General Public",
                "Tech Enthusiasts"
            ]
        },
        {
            question: "What industry are you in?",
            type: "input",
            placeholder: "e.g., Technology, Fashion, Food & Beverage, Healthcare, Finance"
        },
        {
            question: "What emotions should your logo evoke?",
            type: "options",
            options: [
                "Trust & Reliability",
                "Innovation & Creativity",
                "Energy & Excitement",
                "Calm & Serenity",
                "Power & Confidence",
                "Warmth & Care"
            ]
        }
    ],
    poster: [
        {
            question: "What is the poster's purpose?",
            type: "options",
            options: [
                "Event Promotion",
                "Product Advertisement",
                "Social Awareness",
                "Art Exhibition",
                "Educational",
                "Movie/Entertainment"
            ]
        },
        {
            question: "What's the desired visual style?",
            type: "options",
            options: [
                "Minimalist & Clean",
                "Bold & Colorful",
                "Vintage & Retro",
                "Futuristic & Tech",
                "Organic & Natural",
                "Dark & Moody"
            ]
        },
        {
            question: "Who is your target audience?",
            type: "options",
            options: [
                "Teenagers",
                "Young Professionals",
                "Families",
                "Art Enthusiasts",
                "Corporate Clients",
                "General Public"
            ]
        },
        {
            question: "What's the main message or call-to-action?",
            type: "input",
            placeholder: "e.g., Join Us, Buy Now, Learn More, Don't Miss Out"
        }
    ],
    uiux: [
        {
            question: "What type of application are you designing?",
            type: "options",
            options: [
                "Mobile App",
                "Web Application",
                "E-commerce Site",
                "Dashboard/Admin",
                "Landing Page",
                "SaaS Platform"
            ]
        },
        {
            question: "What's your design priority?",
            type: "options",
            options: [
                "User-Friendly & Simple",
                "Feature-Rich & Complex",
                "Visually Stunning",
                "Performance & Speed",
                "Accessibility",
                "Data Visualization"
            ]
        },
        {
            question: "Who are your primary users?",
            type: "options",
            options: [
                "Tech-Savvy Millennials",
                "Busy Professionals",
                "Elderly/Seniors",
                "Creative Professionals",
                "General Consumers",
                "Developers/Technical"
            ]
        },
        {
            question: "What mood should the interface convey?",
            type: "options",
            options: [
                "Professional & Serious",
                "Friendly & Approachable",
                "Innovative & Cutting-Edge",
                "Calm & Soothing",
                "Energetic & Dynamic",
                "Trustworthy & Secure"
            ]
        }
    ]
};


const designDatabase = {
    colorPalettes: {
        professional: [
            {
                name: "Corporate Blue",
                colors: [
                    { hex: "#1e3a8a", role: "Primary" },
                    { hex: "#3b82f6", role: "Secondary" },
                    { hex: "#60a5fa", role: "Accent" },
                    { hex: "#93c5fd", role: "Light" },
                    { hex: "#dbeafe", role: "Background" }
                ],
                mood: "Trust, Stability, Corporate"
            },
            {
                name: "Executive Gray",
                colors: [
                    { hex: "#1f2937", role: "Primary" },
                    { hex: "#374151", role: "Secondary" },
                    { hex: "#6b7280", role: "Accent" },
                    { hex: "#9ca3af", role: "Light" },
                    { hex: "#e5e7eb", role: "Background" }
                ],
                mood: "Professional, Neutral, Sophisticated"
            },
            {
                name: "Navy Elite",
                colors: [
                    { hex: "#0f172a", role: "Primary" },
                    { hex: "#1e293b", role: "Secondary" },
                    { hex: "#475569", role: "Accent" },
                    { hex: "#94a3b8", role: "Light" },
                    { hex: "#cbd5e1", role: "Background" }
                ],
                mood: "Authority, Depth, Premium"
            }
        ],
        creative: [
            {
                name: "Vibrant Sunset",
                colors: [
                    { hex: "#f59e0b", role: "Primary" },
                    { hex: "#ef4444", role: "Secondary" },
                    { hex: "#ec4899", role: "Accent" },
                    { hex: "#a855f7", role: "Highlight" },
                    { hex: "#3b82f6", role: "Cool" }
                ],
                mood: "Energetic, Bold, Creative"
            },
            {
                name: "Neon Dreams",
                colors: [
                    { hex: "#00d4ff", role: "Primary" },
                    { hex: "#ff00ff", role: "Secondary" },
                    { hex: "#ffff00", role: "Accent" },
                    { hex: "#00ff00", role: "Highlight" },
                    { hex: "#ff6b35", role: "Warm" }
                ],
                mood: "Electric, Futuristic, High-Energy"
            },
            {
                name: "Pastel Rainbow",
                colors: [
                    { hex: "#fecaca", role: "Primary" },
                    { hex: "#fed7aa", role: "Secondary" },
                    { hex: "#fef3c7", role: "Accent" },
                    { hex: "#d9f99d", role: "Light" },
                    { hex: "#bfdbfe", role: "Cool" }
                ],
                mood: "Soft, Playful, Approachable"
            }
        ],
        minimalist: [
            {
                name: "Monochrome",
                colors: [
                    { hex: "#000000", role: "Primary" },
                    { hex: "#404040", role: "Secondary" },
                    { hex: "#808080", role: "Accent" },
                    { hex: "#c0c0c0", role: "Light" },
                    { hex: "#ffffff", role: "Background" }
                ],
                mood: "Clean, Timeless, Elegant"
            },
            {
                name: "Neutral Earth",
                colors: [
                    { hex: "#292524", role: "Primary" },
                    { hex: "#57534e", role: "Secondary" },
                    { hex: "#a8a29e", role: "Accent" },
                    { hex: "#d6d3d1", role: "Light" },
                    { hex: "#f5f5f4", role: "Background" }
                ],
                mood: "Natural, Warm, Grounded"
            },
            {
                name: "Clean Slate",
                colors: [
                    { hex: "#0f172a", role: "Primary" },
                    { hex: "#475569", role: "Secondary" },
                    { hex: "#cbd5e1", role: "Accent" },
                    { hex: "#f1f5f9", role: "Light" },
                    { hex: "#ffffff", role: "Background" }
                ],
                mood: "Fresh, Modern, Minimal"
            }
        ],
        bold: [
            {
                name: "Electric Energy",
                colors: [
                    { hex: "#ff0080", role: "Primary" },
                    { hex: "#7928ca", role: "Secondary" },
                    { hex: "#0070f3", role: "Accent" },
                    { hex: "#00dfd8", role: "Highlight" },
                    { hex: "#00ff00", role: "Neon" }
                ],
                mood: "Powerful, Dynamic, Intense"
            },
            {
                name: "Power Red",
                colors: [
                    { hex: "#7f1d1d", role: "Primary" },
                    { hex: "#dc2626", role: "Secondary" },
                    { hex: "#f87171", role: "Accent" },
                    { hex: "#fca5a5", role: "Light" },
                    { hex: "#fee2e2", role: "Background" }
                ],
                mood: "Passionate, Strong, Urgent"
            },
            {
                name: "Dark Thunder",
                colors: [
                    { hex: "#18181b", role: "Primary" },
                    { hex: "#3f3f46", role: "Secondary" },
                    { hex: "#71717a", role: "Accent" },
                    { hex: "#a1a1aa", role: "Light" },
                    { hex: "#e4e4e7", role: "Background" }
                ],
                mood: "Edgy, Mysterious, Bold"
            }
        ],
        elegant: [
            {
                name: "Rose Gold",
                colors: [
                    { hex: "#881337", role: "Primary" },
                    { hex: "#9f1239", role: "Secondary" },
                    { hex: "#be123c", role: "Accent" },
                    { hex: "#fda4af", role: "Light" },
                    { hex: "#fecdd3", role: "Background" }
                ],
                mood: "Luxurious, Feminine, Refined"
            },
            {
                name: "Royal Purple",
                colors: [
                    { hex: "#4c1d95", role: "Primary" },
                    { hex: "#6d28d9", role: "Secondary" },
                    { hex: "#8b5cf6", role: "Accent" },
                    { hex: "#c4b5fd", role: "Light" },
                    { hex: "#e9d5ff", role: "Background" }
                ],
                mood: "Regal, Sophisticated, Premium"
            },
            {
                name: "Champagne Gold",
                colors: [
                    { hex: "#78350f", role: "Primary" },
                    { hex: "#92400e", role: "Secondary" },
                    { hex: "#b45309", role: "Accent" },
                    { hex: "#fbbf24", role: "Highlight" },
                    { hex: "#fef3c7", role: "Background" }
                ],
                mood: "Opulent, Warm, Prestigious"
            }
        ],
        dreamy: [
            {
                name: "Lavender Mist",
                colors: [
                    { hex: "#9333ea", role: "Primary" },
                    { hex: "#c084fc", role: "Secondary" },
                    { hex: "#e9d5ff", role: "Accent" },
                    { hex: "#f3e8ff", role: "Light" },
                    { hex: "#faf5ff", role: "Background" }
                ],
                mood: "Dreamy, Ethereal, Soft"
            },
            {
                name: "Ocean Breeze",
                colors: [
                    { hex: "#0891b2", role: "Primary" },
                    { hex: "#22d3ee", role: "Secondary" },
                    { hex: "#a5f3fc", role: "Accent" },
                    { hex: "#cffafe", role: "Light" },
                    { hex: "#ecfeff", role: "Background" }
                ],
                mood: "Calm, Fresh, Tranquil"
            },
            {
                name: "Peachy Cream",
                colors: [
                    { hex: "#ea580c", role: "Primary" },
                    { hex: "#fb923c", role: "Secondary" },
                    { hex: "#fdba74", role: "Accent" },
                    { hex: "#fed7aa", role: "Light" },
                    { hex: "#fff7ed", role: "Background" }
                ],
                mood: "Warm, Inviting, Gentle"
            }
        ],
        neon: [
            {
                name: "Cyberpunk Nights",
                colors: [
                    { hex: "#ff006e", role: "Primary" },
                    { hex: "#00d4ff", role: "Secondary" },
                    { hex: "#b967ff", role: "Accent" },
                    { hex: "#05ffa1", role: "Highlight" },
                    { hex: "#fffb00", role: "Flash" }
                ],
                mood: "Futuristic, Vibrant, Cyber"
            },
            {
                name: "Neon Jungle",
                colors: [
                    { hex: "#00ff41", role: "Primary" },
                    { hex: "#00e5ff", role: "Secondary" },
                    { hex: "#ff00ff", role: "Accent" },
                    { hex: "#ffff00", role: "Highlight" },
                    { hex: "#ff3864", role: "Hot" }
                ],
                mood: "Electric, Wild, Intense"
            },
            {
                name: "Synthwave",
                colors: [
                    { hex: "#ff00aa", role: "Primary" },
                    { hex: "#00ffff", role: "Secondary" },
                    { hex: "#9d4edd", role: "Accent" },
                    { hex: "#ff006e", role: "Hot" },
                    { hex: "#ffbe0b", role: "Bright" }
                ],
                mood: "Retro-Futuristic, Nostalgic, Bold"
            }
        ],
        nature: [
            {
                name: "Forest Green",
                colors: [
                    { hex: "#14532d", role: "Primary" },
                    { hex: "#15803d", role: "Secondary" },
                    { hex: "#22c55e", role: "Accent" },
                    { hex: "#86efac", role: "Light" },
                    { hex: "#dcfce7", role: "Background" }
                ],
                mood: "Natural, Fresh, Organic"
            },
            {
                name: "Autumn Harvest",
                colors: [
                    { hex: "#9a3412", role: "Primary" },
                    { hex: "#c2410c", role: "Secondary" },
                    { hex: "#f97316", role: "Accent" },
                    { hex: "#fdba74", role: "Light" },
                    { hex: "#ffedd5", role: "Background" }
                ],
                mood: "Warm, Earthy, Cozy"
            },
            {
                name: "Sky & Sea",
                colors: [
                    { hex: "#075985", role: "Primary" },
                    { hex: "#0284c7", role: "Secondary" },
                    { hex: "#38bdf8", role: "Accent" },
                    { hex: "#7dd3fc", role: "Light" },
                    { hex: "#e0f2fe", role: "Background" }
                ],
                mood: "Refreshing, Open, Peaceful"
            }
        ]
    },
    fontPairings: {
        professional: [
            { heading: "Montserrat", body: "Open Sans", style: "Modern Corporate" },
            { heading: "Playfair Display", body: "Source Sans Pro", style: "Classic Professional" },
            { heading: "Lato", body: "Merriweather", style: "Balanced Readable" },
            { heading: "Raleway", body: "Roboto", style: "Clean Contemporary" }
        ],
        creative: [
            { heading: "Bebas Neue", body: "Raleway", style: "Bold Energetic" },
            { heading: "Pacifico", body: "Quicksand", style: "Playful Friendly" },
            { heading: "Righteous", body: "Nunito", style: "Fun Dynamic" },
            { heading: "Abril Fatface", body: "Poppins", style: "Artistic Modern" }
        ],
        minimalist: [
            { heading: "Helvetica Neue", body: "Helvetica Neue", style: "Ultra Clean" },
            { heading: "Futura", body: "Avenir", style: "Geometric Pure" },
            { heading: "SF Pro Display", body: "SF Pro Text", style: "Modern Minimal" },
            { heading: "Inter", body: "Inter", style: "Digital First" }
        ],
        bold: [
            { heading: "Oswald", body: "Roboto Condensed", style: "Strong Compact" },
            { heading: "Anton", body: "Roboto", style: "Powerful Impact" },
            { heading: "Impact", body: "Arial Black", style: "Maximum Bold" },
            { heading: "Archivo Black", body: "Work Sans", style: "Heavy Modern" }
        ],
        elegant: [
            { heading: "Cormorant Garamond", body: "Lora", style: "Sophisticated Serif" },
            { heading: "Cinzel", body: "Crimson Text", style: "Regal Classic" },
            { heading: "Baskerville", body: "Garamond", style: "Timeless Refined" },
            { heading: "Didot", body: "Bodoni", style: "Luxury Editorial" }
        ],
        dreamy: [
            { heading: "Quicksand", body: "Karla", style: "Soft Rounded" },
            { heading: "Comfortaa", body: "Mulish", style: "Gentle Flowing" },
            { heading: "Josefin Sans", body: "Lato", style: "Airy Light" },
            { heading: "Poiret One", body: "Questrial", style: "Ethereal Delicate" }
        ]
    },
    layouts: {
        logo: [
            {
                title: "Wordmark",
                description: "Focus on typography with brand name as primary element. Best for brands with distinctive or meaningful names."
            },
            {
                title: "Icon + Text",
                description: "Balanced combination of symbolic icon and text. Versatile for various applications and sizes."
            },
            {
                title: "Emblem",
                description: "Text integrated within a badge or shield shape. Creates a sense of tradition and authority."
            },
            {
                title: "Abstract Symbol",
                description: "Standalone geometric or abstract mark. Modern and memorable when executed well."
            },
            {
                title: "Lettermark",
                description: "Initials or acronym as the primary design element. Perfect for long company names."
            }
        ],
        poster: [
            {
                title: "Centered Hero",
                description: "Large central image with text overlay. Creates immediate visual impact and clear focal point."
            },
            {
                title: "Grid Layout",
                description: "Multiple sections in organized grid structure. Effective for showing multiple pieces of information."
            },
            {
                title: "Diagonal Split",
                description: "Dynamic diagonal division for visual interest. Adds energy and modern feel to the design."
            },
            {
                title: "Minimalist Type",
                description: "Typography-focused with generous white space. Elegant and contemporary approach."
            },
            {
                title: "Asymmetric Balance",
                description: "Off-center composition with balanced visual weight. Creates tension and interest."
            }
        ],
        uiux: [
            {
                title: "F-Pattern",
                description: "Content follows natural eye movement (F-shape). Optimal for text-heavy interfaces and reading flow."
            },
            {
                title: "Card-Based",
                description: "Modular cards for scannable content organization. Flexible and mobile-friendly layout."
            },
            {
                title: "Split Screen",
                description: "Two-column layout for parallel information. Great for comparisons or dual content types."
            },
            {
                title: "Hero + Grid",
                description: "Large hero section followed by grid of features. Common in landing pages for clear hierarchy."
            },
            {
                title: "Dashboard Grid",
                description: "Widget-based layout with data visualization. Ideal for analytics and admin interfaces."
            }
        ]
    }
};


let currentRole = 'logo';
let currentQuestionIndex = 0;
let answers = {};
let currentResults = null;
let pinterestLink = "";


document.addEventListener('DOMContentLoaded', () => {
    initializeRoleSwitcher();
    initializeEventListeners();
    createParticles();
    showQuestion();
    handleResponsiveFeatures();
    
    
    window.addEventListener('resize', debounce(handleResponsiveFeatures, 250));
});


function handleResponsiveFeatures() {
    const isMobile = window.innerWidth <= 768;
    
 
    if (isMobile) {
        const particles = document.querySelectorAll('.particle-field > div');
        particles.forEach((p, i) => {
            if (i > 15) p.style.display = 'none';
        });
    }
}


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


function initializeRoleSwitcher() {
    const tabs = document.querySelectorAll('.role-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (!tab.classList.contains('active')) {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentRole = tab.dataset.role;
                resetQuiz();
                
              
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo('#quizContainer',
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 0.5 }
                    );
                }
            }
        });
    });
}


function initializeEventListeners() {
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('downloadBtn').addEventListener('click', downloadPDF);
    document.getElementById('regenerateBtn').addEventListener('click', regenerateResults);
    document.getElementById('startOverBtn').addEventListener('click', startOver);
}


function createParticles() {
    const particleField = document.getElementById('particleField');
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(0, 212, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.filter = 'blur(2px)';
        
        particleField.appendChild(particle);
        
       
        if (typeof gsap !== 'undefined') {
            gsap.to(particle, {
                y: -100 - Math.random() * 200,
                x: -50 + Math.random() * 100,
                opacity: 0,
                duration: 5 + Math.random() * 5,
                repeat: -1,
                delay: Math.random() * 5,
                ease: ''
            });
        }
    }
}


function showQuestion() {
    const questions = questionDatabase[currentRole];
    const question = questions[currentQuestionIndex];
    const wrapper = document.getElementById('questionWrapper');


    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    if (typeof gsap !== 'undefined') {
        gsap.to('#progressFill', {
            width: progress + '%',
            duration: 0.5,
            ease: 'power2.out'
        });
    } else {
        document.getElementById('progressFill').style.width = progress + '%';
    }

    
    document.getElementById('stepIndicator').textContent = 
        `Step ${currentQuestionIndex + 1} of ${questions.length}`;

    let html = `<div class="question">${currentQuestionIndex + 1}. ${question.question}</div>`;

    if (question.type === 'options') {
        html += '<div class="options">';
        question.options.forEach(option => {
            const selected = answers[currentQuestionIndex] === option ? 'selected' : '';
            html += `
                <div class="option ${selected}" onclick="selectOption('${option.replace(/'/g, "\\'")}')">
                    ${option}
                </div>
            `;
        });
        html += '</div>';
    } else {
        const value = answers[currentQuestionIndex] || '';
        html += `
            <input 
                type="text" 
                class="input-option" 
                placeholder="${question.placeholder}" 
                value="${value}" 
                oninput="handleInput(this.value)"
                aria-label="${question.question}"
            >
        `;
    }


    if (typeof gsap !== 'undefined') {
        gsap.fromTo(wrapper,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
    }

    wrapper.innerHTML = html;

    
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    const nextBtn = document.getElementById('nextBtn');
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerHTML = '<span class="btn-text">Generate Results</span> <span class="btn-text-mobile-hide">→</span>';
    } else {
        nextBtn.innerHTML = '<span class="btn-text">Next</span> <span class="btn-text-mobile-hide">→</span>';
    }
}

function selectOption(value) {
    answers[currentQuestionIndex] = value;
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
        if (opt.textContent.trim() === value) {
            opt.classList.add('selected');
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(opt,
                    { scale: 0.95 },
                    { scale: 1, duration: 0.3, ease: 'back.out(2)' }
                );
            }
        }
    });
}

function handleInput(value) {
    answers[currentQuestionIndex] = value;
}


function nextQuestion() {
    const questions = questionDatabase[currentRole];
    
    if (currentQuestionIndex === questions.length - 1) {
        generateResults();
    } else {
        currentQuestionIndex++;
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}


function generateResults() {
 
    document.getElementById('quizSection').style.display = 'none';
    const loadingSection = document.getElementById('loadingSection');
    loadingSection.classList.add('active');

   
    setTimeout(() => {
        currentResults = createDesignSuggestions();
        displayResults(currentResults);

        loadingSection.classList.remove('active');
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.classList.add('active');

        
        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.result-card',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
            );
            
          
            gsap.fromTo('.pinterest-inspiration-card',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' }
            );
        }

   
        if (window.innerWidth <= 768) {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 2500);
}


function createDesignSuggestions() {
    const personality = answers[0] || 'professional';
    let category = determineCategory(personality);

    const palettes = designDatabase.colorPalettes[category];
    const fonts = designDatabase.fontPairings[category] || designDatabase.fontPairings.professional;
    const layouts = designDatabase.layouts[currentRole];

    
    if (currentRole === 'logo' && answers[2]) {
        userContext = answers[2]; // Industry
    } else if (currentRole === 'poster' && answers[0]) {
        userContext = answers[0]; // Purpose
    } else if (currentRole === 'uiux' && answers[0]) {
        userContext = answers[0]; // App type
    }

   
    pinterestLink = generatePinterestLink(currentRole, userContext);

    return {
        colorPalette: palettes[Math.floor(Math.random() * palettes.length)],
        fontPairing: fonts[Math.floor(Math.random() * fonts.length)],
        layouts: layouts,
        category: category,
        userContext: userContext
    };
}

function determineCategory(personality) {
    const lower = personality.toLowerCase();

    if (lower.includes('creative') || lower.includes('playful')) return 'creative';
    if (lower.includes('minimal') || lower.includes('modern')) return 'minimalist';
    if (lower.includes('bold') || lower.includes('edgy')) return 'bold';
    if (lower.includes('elegant') || lower.includes('luxurious')) return 'elegant';
    if (lower.includes('dreamy') || lower.includes('soft')) return 'dreamy';
    if (lower.includes('neon') || lower.includes('electric')) return 'neon';
    if (lower.includes('nature') || lower.includes('organic')) return 'nature';

    return 'professional';
}


function displayResults(results) {
    const grid = document.getElementById('resultsGrid');

    const colorCardHTML = `
        <div class="result-card">
            <h3 class="card-title">
                <span class="card-icon">🎨</span>
                <span>Color Palette</span>
            </h3>
            <p class="card-subtitle">${results.colorPalette.name} • ${results.colorPalette.mood}</p>
            <div class="design-principle-tag">
                <strong>Design Principle:</strong> Color Psychology & Emotional Impact
            </div>
            <div class="color-palette">
                ${results.colorPalette.colors.map(color => `
                    <div class="color-item">
                        <div class="color-role">${color.role}</div>
                        <div class="color-swatch" 
                             style="background: ${color.hex};" 
                             onclick="copyToClipboard('${color.hex}')"
                             role="button"
                             tabindex="0"
                             aria-label="Copy ${color.role} color ${color.hex}">
                        </div>
                        <div class="color-code">${color.hex}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const fontCardHTML = `
        <div class="result-card">
            <h3 class="card-title">
                <span class="card-icon">🔤</span>
                <span>Typography</span>
            </h3>
            <p class="card-subtitle">${results.fontPairing.style} Pairing</p>
            <div class="design-principle-tag">
                <strong>Design Principle:</strong> Typographic Hierarchy & Readability
            </div>
            <div class="font-pairing">
                <div class="font-item">
                    <div class="font-label">Heading Font</div>
                    <div class="font-name">
                        <span>${results.fontPairing.heading}</span>
                        <button class="copy-btn" onclick="copyToClipboard('${results.fontPairing.heading}')" aria-label="Copy heading font name">
                            Copy
                        </button>
                    </div>
                </div>
                <div class="font-item">
                    <div class="font-label">Body Font</div>
                    <div class="font-name">
                        <span>${results.fontPairing.body}</span>
                        <button class="copy-btn" onclick="copyToClipboard('${results.fontPairing.body}')" aria-label="Copy body font name">
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const layoutCardHTML = `
        <div class="result-card">
            <h3 class="card-title">
                <span class="card-icon">📐</span>
                <span>Layout Structures</span>
            </h3>
            <p class="card-subtitle">Recommended compositions for your ${currentRole} design</p>
            <div class="design-principle-tag">
                <strong>Design Principle:</strong> Visual Flow & Composition Balance
            </div>
            <div class="layout-ideas">
                ${results.layouts.map(layout => `
                    <div class="layout-item">
                        <div class="layout-title">${layout.title}</div>
                        <div class="layout-description">${layout.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    grid.innerHTML = colorCardHTML + fontCardHTML + layoutCardHTML;

    
    updatePinterestCard(results);
}


function updatePinterestCard(results) {
    const roleNames = {
        'logo': 'Logo Design',
        'poster': 'Poster Design',
        'uiux': 'UI/UX Design'
    };

    const contextText = results.userContext ? ` for ${results.userContext}` : '';
    const description = `Explore thousands of ${roleNames[currentRole]} examples${contextText} on Pinterest. Get inspired by professional designs, color combinations, typography choices, and creative layouts.`;

    document.getElementById('pinterestDescription').textContent = description;
    const pinterestButton = document.getElementById('pinterestButton');
    pinterestButton.href = pinterestLink;
}


function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`Copied: ${text}`);
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast(`Copied: ${text}`);
    } catch (err) {
        console.error('Fallback copy failed:', err);
        showToast('Failed to copy');
    }
    
    document.body.removeChild(textArea);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


function downloadPDF() {
    if (typeof window.jspdf === 'undefined') {
        showToast('PDF library not loaded. Please refresh the page.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Header
    doc.setFontSize(28);
    doc.setTextColor(0, 212, 255);
    doc.text('DesignIQ - Design Assistant', 20, 25);

    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text(`Design Role: ${currentRole.toUpperCase()}`, 20, 35);

    let y = 50;

    // Color Palette Section
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text('Color Palette', 20, y);
    y += 8;

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`${currentResults.colorPalette.name} - ${currentResults.colorPalette.mood}`, 20, y);
    y += 10;

    doc.setFontSize(10);
    currentResults.colorPalette.colors.forEach(color => {
        doc.setTextColor(0, 0, 0);
        doc.text(`${color.role}: ${color.hex}`, 25, y);
        
     
        const rgb = hexToRgb(color.hex);
        doc.setFillColor(rgb.r, rgb.g, rgb.b);
        doc.rect(80, y - 3, 10, 5, 'F');
        
        y += 7;
    });

    y += 10;

    
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text('Typography', 20, y);
    y += 8;

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`${currentResults.fontPairing.style} Pairing`, 20, y);
    y += 10;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Heading: ${currentResults.fontPairing.heading}`, 25, y);
    y += 7;
    doc.text(`Body: ${currentResults.fontPairing.body}`, 25, y);

    y += 15;

    
    doc.setFontSize(18);
    doc.text('Layout Structures', 20, y);
    y += 10;

    doc.setFontSize(10);
    currentResults.layouts.forEach(layout => {
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
        
        doc.setTextColor(0, 0, 0);
        doc.setFont(undefined, 'bold');
        doc.text(`• ${layout.title}`, 25, y);
        y += 5;
        
        doc.setFont(undefined, 'normal');
        doc.setTextColor(100, 100, 100);
        const lines = doc.splitTextToSize(layout.description, 160);
        doc.text(lines, 28, y);
        y += lines.length * 5 + 5;
    });

  
    y += 10;
    if (y > 250) {
        doc.addPage();
        y = 20;
    }
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text('Pinterest Inspiration', 20, y);
    y += 10;

    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text('Get visual inspiration for your design:', 25, y);
    y += 6;
    doc.setTextColor(0, 112, 192);
    doc.textWithLink(pinterestLink, 25, y, { url: pinterestLink });

    doc.save('design-suggestions.pdf');
    showToast('PDF Downloaded Successfully!');
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}


function regenerateResults() {
    if (typeof gsap !== 'undefined') {
        gsap.to('.result-card, .pinterest-inspiration-card', {
            opacity: 0,
            y: -30,
            duration: 0.4,
            stagger: 0.1,
            onComplete: () => {
                currentResults = createDesignSuggestions();
                displayResults(currentResults);
                
                gsap.fromTo('.result-card',
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
                );
                
                gsap.fromTo('.pinterest-inspiration-card',
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' }
                );
            }
        });
    } else {
        currentResults = createDesignSuggestions();
        displayResults(currentResults);
    }
}

function startOver() {
    const resultsSection = document.getElementById('resultsSection');
    
    if (typeof gsap !== 'undefined') {
        gsap.to('#resultsSection', {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                resultsSection.classList.remove('active');
                resetQuiz();
                document.getElementById('quizSection').style.display = 'block';
                
                gsap.fromTo('#quizSection',
                    { opacity: 0 },
                    { opacity: 1, duration: 0.5 }
                );

             
                if (window.innerWidth <= 768) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    } else {
        resultsSection.classList.remove('active');
        resetQuiz();
        document.getElementById('quizSection').style.display = 'block';
        
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    answers = {};
    pinterestLink = "";
    showQuestion();
}


document.addEventListener('keydown', (e) => {
    
    if (e.key === 'Enter' && e.target.classList.contains('option')) {
        e.target.click();
    }
   
    if (e.key === ' ' && e.target.classList.contains('color-swatch')) {
        e.preventDefault();
        e.target.click();
    }
});