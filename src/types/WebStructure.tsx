export type Project = {
    name: string;
    subtitle: string;
    description: string;
    path: string;
    language: string;
    translationKey: string;
    categories: string[];

    // propriedades opcionais
    images?: string[];
    imagesLength?: number;
    paragraphs?: string[];
    paragraphsLength?: number;
    date?: string;
    client?: string;
};

export type Product = {
    name: string;
    subtitle: string;
    description: string;
    path: string;
    language: string;
    translationKey: string;
    categories: string[];
    price: number;

    // propriedades opcionais
    images?: string[];
    imagesLength?: number;
    paragraphs?: string[];
    paragraphsLength?: number;
    originDate?: string;
    isReleased?: boolean;
    releaseDate?: string;
    isPromoted?: boolean;
};

export type Service = {
    name: string;
    subtitle: string;
    description: string;
    path: string;
    items: string[];
};

export type Reference = {
    title: string;
    author: string;
    date: string;
    url: string;
};

export type Page = {
    pageIndex?: number;
    name: string;
    path: string;
    language: string;
    translationKey: string;

    // propriedades opcionais
    subpages?: Page[];
    images?: string[];
    imagesLength?: number;
    paragraphs?: string[];
    paragraphsLength?: number;

    // propriedades opcionais para páginas específicas
    projects?: Project[];
    products?: Product[];
    services?: Service[];
    references?: Reference[];
    magic_content?: any[]; // o magic artefact type é um coringa que pode ser usado para qualquer coisa
};

export type NavLink = {
    name: string;
    path: string;
};

// O site é definido como uma array de páginas, as páginas possuem uma estrutura recursiva de subpáginas
export type WebStructure = {
    navbar: {
        // propriedades opcionais
        logoTitle?: string;
        logoPath?: string;
        logoWidth?: number;
        logoHeight?: number;
        logoAlt?: string;

        navbarLinks?: NavLink[];

        colorModeBtnPath?: string;
        colorModeBtnText?: string;
        colorModeBtnLabel?: string;

        searchBtnPath?: string;
        searchBtnText?: string;
        searchBtnPlaceholder?: string;
        searchBtnLabel?: string;

        shareBtnPath?: string;
        shareBtnText?: string;
        shareBtnLabel?: string;
    };
    menu: {
        menuTitle?: string;
        menuLinks?: NavLink[];

        languageBtnPath?: string;
        languageBtnText?: string;
        languageBtnLabel?: string;
    };
    context: {
        contextTitle?: string;
        contextLinks?: NavLink[];
    };
    cookies: {
        // propriedades opcionais
        title?: string;
        text?: string;
        btnText?: string;
        btnPath?: string;
    };
    pages: Page[];
    footer: {
        // propriedades opcionais
        logoTitle?: string;
        logoPath?: string;
        logoWidth?: number;
        logoHeight?: number;
        logoAlt?: string;

        footerLinks?: NavLink[];

        menuBtnPath?: string;
        menuBtnText?: string;
        menuBtnLabel?: string;

        contextBtnPath?: string;
        contextBtnText?: string;
        contextBtnLabel?: string;

        shopBtnPath?: string;
        shopBtnText?: string;
        shopBtnLabel?: string;

        nextPageBtnPath?: string;
        nextPageBtnText?: string;
        nextPageBtnLabel?: string;

        prevPageBtnPath?: string;
        prevPageBtnText?: string;
        prevPageBtnLabel?: string;
    };
};

const products: Product[] = [
    {
        name: "SURU",
        subtitle: "Universal Recombinant Utility System",
        description: "Decolonial and modular furniture that can be reconfigured to achieve different formats.",
        path: "/products/suru",
        language: "en",
        translationKey: "suru",
        categories: ["furniture"],
        price: 420, // You need to provide the actual price
    },
    {
        name: "Nintendo Gate Control",
        subtitle: "Gate Control",
        description: "A reinterpretation of a console classic, now available to control whatever you want inside your home!",
        path: "/products/nintendo-gate-control",
        language: "en",
        translationKey: "nintendoGateControl",
        categories: ["electronics"],
        price: 240, // You need to provide the actual price
    },
    {
        name: "UNVRS",
        subtitle: "Alternative Clothing",
        description: "A clothing brand for those who enjoy bold illustrations.",
        path: "/products/unvrs",
        language: "en",
        translationKey: "unvrs",
        categories: ["clothing"],
        price: 150, // You need to provide the actual price
    },
];

const projects: Project[] = [
    {
        name: "Tropical Cacau",
        subtitle: "High-Quality Organic Chocolates",
        description: "The power of the sun manifested in flavor.",
        path: "/projects/tropical-cacau",
        language: "en",
        translationKey: "tropicalCacau",
        categories: ["product-design, graphic-design, branding, web-app"],
    },
    {
        name: "Rewave",
        subtitle: "Renewable Materials Laboratory",
        description: "Creators of raw materials that will sustain a more ecological future.",
        path: "/projects/rewave",
        language: "en",
        translationKey: "rewave",
        categories: ["product-design, graphic-design, branding"],
    },
    {
        name: "Human Robotics",
        subtitle: "Robots and Artificial Intelligence",
        description: "Autonomous robotics has the potential to revolutionize the way we work.",
        path: "/projects/robotics",
        language: "en",
        translationKey: "robotics",
        categories: ["product-design", "graphic-design", "branding", "web-app"],
    },
    {
        name: "Ateliê Floar",
        subtitle: "Sustainable Clothing",
        description: "Incredibly comfortable and stylish clothes made from recycled materials.",
        path: "/projects/atelie-floar",
        language: "en",
        translationKey: "atelieFloar",
        categories: ["graphic-design", "branding", "web-app"],
    },
    {
        name: "Full Jazz",
        subtitle: "Music and Cuisine",
        description: "A sophisticated restaurant, a stage for renowned and incredibly talented artists.",
        path: "/projects/full-jazz",
        language: "en",
        translationKey: "fullJazz",
        categories: ["audiovisual"],
    },
    {
        name: "Rede AOBA",
        subtitle: "Accessible Organic Foods",
        description: "A system for the purchase and subscription of organic projects, connecting rural producers to urban centers.",
        path: "/projects/rede-aoba",
        language: "en",
        translationKey: "redeAoba",
        categories: ["product-design, web-app, graphic-design"],
    },
    {
        name: "Van Hack",
        subtitle: "Global Talent Agency for Programmers",
        description: "A platform offering job-hunting and professionalization services for technology professionals.",
        path: "/projects/van-hack",
        language: "en",
        translationKey: "vanHack",
        categories: ["graphic-design", "audiovisual"],
    },
    {
        name: "Taborda Lima & Associados Lawyers",
        subtitle: "Law Firm",
        description: "A highly capable office addressing demands primarily related to immigration and foreign trade.",
        path: "/projects/taborda-lima",
        language: "en",
        translationKey: "tabordaLima",
        categories: ["Cgrapic-design", "branding, web-app"],
    },
    {
        name: "Calisto Advocacy",
        subtitle: "Law Firm",
        description: "A modern office focused on patent publication and digital rights.",
        path: "/projects/calisto-advocacy",
        language: "en",
        translationKey: "calistoAdvocacy",
        categories: ["grapic-design", "branding"],
    },
    {
        name: "Colletive",
        subtitle: "Cultural Experiences Worldwide",
        description: "A platform focused on the search and realization of cultural experiences.",
        path: "/projects/colletive",
        language: "en",
        translationKey: "colletive",
        categories: ["audiovisual", "graphic-design", "web-app"],
    },
    {
        name: "Jeremias",
        subtitle: "Craft Brewery",
        description: "A small brewery with the goal of making the most cheerful drinks in the region.",
        path: "/projects/jeremias",
        language: "en",
        translationKey: "jeremias",
        categories: ["illustration", "graphic-design"],
    },
    {
        name: "Komba",
        subtitle: "Artisanal Kombuchas",
        description: "A small factory of natural fermented beverages that refresh even the thirstiest of travelers.",
        path: "/projects/komba",
        language: "en",
        translationKey: "komba",
        categories: ["illustration", "graphic-design"],
    },
    {
        name: "Diva's House",
        subtitle: "Senior Residential Condominium",
        description: "Space dedicated to the care of senior citizens.",
        path: "/projects/divas-house",
        language: "en",
        translationKey: "divasHouse",
        categories: ["illustration", "graphic-design"],
    },
    {
        name: "Cogu GO",
        subtitle: "Natural Products",
        description: "A store of organic food and psychotropic mushrooms.",
        path: "/projects/cogu-go",
        language: "en",
        translationKey: "coguGo",
        categories: ["illustration", "graphic-design"],
    },
    {
        name: "Central COPASOL",
        subtitle: "Food Cooperative",
        description: "A network of organic producers with a wide variety of projects located in Paraná.",
        path: "/projects/central-copasol",
        language: "en",
        translationKey: "centralCopasol",
        categories: ["illustration", "graphic-design"],
    },
    {
        name: "Bem Bolado",
        subtitle: "Cultural Event",
        description: "An event for the promotion of original art and local culture.",
        path: "/projects/bem-bolado",
        language: "en",
        translationKey: "bemBolado",
        categories: ["illustration", "graphic-design"],
    },
    {
        name: "Pocket",
        subtitle: "Cultural Event",
        description: "An event for the promotion of original art and local culture.",
        path: "/projects/pocket",
        language: "en",
        translationKey: "pocket",
        categories: ["illustration", "graphic-design"],
    },
];

const services: Service[] = [
    {
        name: "Graphic Design",
        subtitle: "Visual Communication",
        description: "We develop visual communication projects for your brand, product, or service.",
        path: "/what/graphic-design",
        items: [
            "Development of Visual Identity",
            "Development of Printed Materials",
            "Development of Signs and Signage",
            "Illustration and Painting",
            "Pop-Up Books and Handmade Binding",
            "Redesigns and reinterpretations",
        ],
    },
    {
        name: "Product Design",
        subtitle: "Product Development",
        description: "We provide a range of services related to product design and development.",
        path: "/what/product-design",
        items: ["Product Development", "Furniture Development", "Digital Fabrication", "Machine Development", "Prototype Development"],
    },
    {
        name: "Web & App",
        subtitle: "Digital Development",
        description: "We offer a variety of web and app development services.",
        path: "/what/web-app",
        items: [
            "Interface Development (UI)",
            "iOS App Development",
            "Android App Development",
            "Progressive Web App Development (PWA)",
            "Website Development",
            "Web Domain Registration and Management",
            "Web Hosting",
            "Game Development",
        ],
    },
    {
        name: "Business",
        subtitle: "Business Development",
        description: "We provide services to help develop and analyze your business and brand.",
        path: "/what/business",
        items: ["Brand Diagnosis (brand analysis)", "Brand Development (branding)", "Business Model Diagnosis (Strategyzer)"],
    },
    {
        name: "Thinking",
        subtitle: "Consultancy Services",
        description: "We offer consultancy services in creativity, innovation, sustainability, and various design and communication strategies.",
        path: "/what/thinking",
        items: [
            "Consultancy in Creativity, Innovation, and Sustainability",
            "Consultancy on Graphic Design, Product, Branding, and Communication Strategies",
            "Consultancy on any product, service, or experience we offer",
        ],
    },
    {
        name: "Audiovisual",
        subtitle: "Multimedia Services",
        description: "We provide a range of audiovisual services, from animations and photography to script development and scenography.",
        path: "/what/audiovisual",
        items: [
            "Animations",
            "Photographic Essay",
            "Photographic Coverage",
            "Audiovisual Essay",
            "Audiovisual Coverage",
            "Streaming",
            "Scenography",
            "Script Development",
            "Stereoscopy Development (3D)",
            "Storyboard and Script Development",
            "Scenography Development",
        ],
    },
    {
        name: "Sustainability",
        subtitle: "Sustainable Solutions",
        description: "We offer consultancy in corporate sustainability and develop sustainable transition plans and ecological product designs.",
        path: "/what/sustainability",
        items: ["Corporate Sustainability Consultancy (UN SDGs)", "Development of Sustainable Transition Plan", "Ecological Product Design"],
    },
    {
        name: "Research",
        subtitle: "Research Services",
        description: "We conduct design research, material research, ecosystem mapping, and user experience development.",
        path: "/what/research",
        items: ["Design Research", "Material Research", "Ecosystem Mapping", "User Experience (UX) Development"],
    },
];

const references: Reference[] = [
    {
        title: "Design Livre",
        author: "Instituto Faber Ludens",
        date: "", // fill in the date
        url: "https://corais.org/sites/default/files/livro_design_livre_versao1.pdf", // fill in the url
    },
    {
        title: "The Role of Hypothesis in Constructive Design Research",
        author: "Anne Louise Bang e Colegas",
        date: "", // fill in the date
        url: "https://findresearcher.sdu.dk/ws/files/118361032/The_Role_of_Hypothesis_in_Constructive_Design_Research_Final_Version.pdf", // fill in the url
    },
    {
        title: "Wicked Problems in Design Thinking",
        author: "Richard Buchanan",
        date: "", // fill in the date
        url: "https://web.mit.edu/jrankin/www/engin_as_lib_art/Design_thinking.pdf", // fill in the url
    },
    {
        title: "Metaprojeto: o design do design",
        author: "Dijon de Moraes",
        date: "", // fill in the date
        url: "https://www.blucher.com.br/metaprojeto_9788521205166", // fill in the url
    },
];

// O conteúdo do site em inglês é definido neste objeto
const englishWebStructure: WebStructure = {
    navbar: {
        logoTitle: "Home",
        logoPath: "/",
        logoWidth: 40,
        logoHeight: 40,
        logoAlt: "Home",

        navbarLinks: [
            {
                name: "home",
                path: "/",
            },
            {
                name: "who?",
                path: "/who",
            },
            {
                name: "what?",
                path: "/what",
            },
            {
                name: "how?",
                path: "/how",
            },
            {
                name: "projects",
                path: "/projects",
            },
            {
                name: "shop",
                path: "/shop",
            },
            {
                name: "contact",
                path: "/contact",
            },
        ],

        colorModeBtnPath: "/",
        colorModeBtnText: "Color Mode",
        colorModeBtnLabel: "Toggle Color Mode",

        searchBtnPath: "/",
        searchBtnText: "Search",
        searchBtnPlaceholder: "Type to search...",
        searchBtnLabel: "Search for projects and products",

        shareBtnPath: "/",
        shareBtnText: "Share",
        shareBtnLabel: "Share this page",
    },
    menu: {
        menuTitle: "Menu",
        menuLinks: [
            {
                name: "home",
                path: "/",
            },
            {
                name: "who?",
                path: "/who",
            },
            {
                name: "what?",
                path: "/what",
            },
            {
                name: "how?",
                path: "/how",
            },
            {
                name: "projects",
                path: "/projects",
            },
            {
                name: "shop",
                path: "/shop",
            },
            {
                name: "contact",
                path: "/contact",
            },
            {
                name: "privacy policy",
                path: "/privacy-policy",
            },
            {
                name: "terms of use",
                path: "/terms-of-use",
            },
        ],

        languageBtnPath: "/",
        languageBtnText: "Change Language",
        languageBtnLabel: "Change Language to Portuguese",
    },
    context: {},
    cookies: {
        title: "Cookies",
        text: "This website uses cookies to ensure you get the best experience on our website.",
        btnText: "Got it!",
        btnPath: "/",
    },
    pages: [
        // Home
        {
            pageIndex: 0,
            name: "home",
            path: "/",
            language: "en",
            translationKey: "home",

            images: ["/imgs/pragmatas_black.png", "/imgs/noite_estrelada_black.png", "/imgs/padrao_01_black.png"],

            paragraphs: [
                "In a tropical haven forgotten by time, where creatures roamed nonchalantly on paradisiacal beaches and jungles, a select group of primates ascended—and thus emerged, the mysterious people of the Pragmatas.",
                "These primates evolved into inventors and visionaries of worlds. Understanding the subtle language of nature and the deafening whisper of the cosmos, they made themselves creators of technologies. In this world, they erected not only physical structures but also webs of affections, social systems, and culture.",
                "On those forgotten beaches, they forged tools to unlock the extraordinary. They nurtured the souls and minds of all those who sought them, desperate and hungry, eager to share in the rarest food in the world: an original idea or a thought that no one had ever had before. They thus engaged hearts and minds in a mysterious shared enchantment.",
                "It was on a night illuminated by the glow of the stars that they had a transcendental vision: that of all the tribes of the world uniting in an epic collaboration, building something that would transcend common understanding. They would forge a new world, the world of tomorrow.",
                "To bring together the artisans of this future, they erected a structure, simultaneously a workshop and a lighthouse, for the synthesis of the tools of this work and to attract all minds that shared these aspirations. It was the Lighthouse of Pragmatas Inventions. Known as an epicenter of technological enchantment, it became a sanctuary where nature and innovation intertwined.",
                "Today, the descendants of the Pragmatas continue the tradition of building not only products and services but also bridges between worlds, uniting communities on a creative and legendary journey where mutual help is the key to truly building something useful.",
                "We invite you to explore the Lighthouse of Inventions - Discover our universe of innovation and immerse yourself in our products, services, and experiences that weave the past, present, and future into a fascinating cosmoweave.",
                "Welcome to our world, where the enchantment of technology and the technology of enchantment intertwine, creating a future of sustainable possibilities.",
            ],
        },

        // Who
        {
            pageIndex: 1,
            name: "who",
            path: "/who",
            language: "en",
            translationKey: "who",

            images: ["/imgs/pragmatas_logo_comercial_black.png"],
            paragraphs: [
                "We are a Creative Lab, focused on providing Art & Design services and developing our own Products. We offer two main solutions:",
                "On one side, we create and sell our own products in our carefully curated store for sustainability and modularity - called the Lighthouse of Inventions.",
                "We seek a projectual dialogue and a blurring of the boundaries between users and designers that stimulates an alternative, autopoeitic, anthropophagic, symbiotic, and parasitic consumption logic through upcycling, open and free design, and decentralized production.",
                "We BELIEVE THAT buying a product or service is more than enjoying a good - it is supporting an idea - and supporting an entire production network behind it.",
                "On the other side, we offer our creativity and innovation services in graphic design, product design, web design, UI UX, services, and consulting - always moving towards sustainability.",
                "Our design is Critical.",
                "Through the proposition of questioning and innovative projects, we seek a genuinely new way of designing, modifying material and social reality in positive and inclusive ways so that our community has access to food, tools, services, and dignified work.",
                "Like the idea? Then join us, let's schedule a conversation and create something MEANINGFUL!",
            ],
        },

        // What
        {
            pageIndex: 2,
            name: "what",
            path: "/what",
            language: "en",
            translationKey: "what",

            services: services,
        },

        // How
        {
            pageIndex: 3,
            name: "how",
            path: "/how",
            language: "en",
            translationKey: "how",

            paragraphs: [
                "We use various methodologies and tools to create innovative and efficient solutions.",
                "Every good project should start with in-depth research. We strive to understand your business, your clients, and their needs. From there, we can create a design strategy that will help you achieve your goals.",
                "The development of alternatives is the next part of the process. We generate several solutions for your problem, then refine the best ideas until we have a solution that is the most effective and appealing.",
                "After reaching the solution, we prototype, test, and refine it until it's ready to be implemented.",
                "We can also assist you in implementing the solution if needed. We have a network of partners who can help take your project to the next level.",
                "Here is a curated list of the best references for design practices that we found during our researches so far:",
            ],
            references: references,
        },

        // Projects
        {
            pageIndex: 4,
            name: "projects",
            path: "/projects",
            language: "en",
            translationKey: "projects",
            projects: projects,
            subpages: [],
        },

        // Shop
        {
            pageIndex: 5,
            name: "shop",
            path: "/shop",
            language: "en",
            translationKey: "shop",
            products: products,
            subpages: [],
        },

        // Contact
        {
            pageIndex: 6,
            name: "contact",
            path: "/contact",
            language: "en",
            translationKey: "contact",
            paragraphs: [
                "We are always open to new projects, collaborations, and ideas. If you have any questions or would like to schedule a meeting, please contact us.",
                "Our lab is located in Curitiba, Paraná, Brazil.",
                "We are available from Monday to Friday, from 10:00 to 18:00.",
                "falapragmata@gmail.com",
                "41 999 977 955",
            ],
        },

        // Privacy Policy
        {
            pageIndex: 7,
            name: "privacy-policy",
            path: "/privacy-policy",
            language: "en",
            translationKey: "privacyPolicy",
        },

        // Terms of Use
        {
            pageIndex: 8,
            name: "terms-of-use",
            path: "/terms-of-use",
            language: "en",
            translationKey: "termsOfUse",
        },

        // 404
        {
            pageIndex: 9,
            name: "404",
            path: "/404",
            language: "en",
            translationKey: "err404",
        },

        // 500
        {
            pageIndex: 10,
            name: "500",
            path: "/500",
            language: "en",
            translationKey: "err500",
        },
    ],
    footer: {
        logoTitle: "pragmatas",
        logoAlt: "pragmatas",
        logoPath: "/",
        logoWidth: 40,
        logoHeight: 40,

        footerLinks: [
            {
                name: "home",
                path: "/",
            },
            {
                name: "who?",
                path: "/who",
            },
            {
                name: "what?",
                path: "/what",
            },
            {
                name: "how?",
                path: "/how",
            },
            {
                name: "projects",
                path: "/projects",
            },
            {
                name: "shop",
                path: "/shop",
            },
            {
                name: "contact",
                path: "/contact",
            },
        ],

        menuBtnPath: "/",
        menuBtnText: "Menu",
        menuBtnLabel: "Toggle Menu",

        contextBtnPath: "/",
        contextBtnText: "Context",
        contextBtnLabel: "Toggle Context",

        shopBtnPath: "/",
        shopBtnText: "Wish Bag",
        shopBtnLabel: "Toggle Wish Bag",

        nextPageBtnPath: "/",
        nextPageBtnText: "Next Page",
        nextPageBtnLabel: "Go to Next Page",

        prevPageBtnPath: "/",
        prevPageBtnText: "Previous Page",
        prevPageBtnLabel: "Go to Previous Page",
    },
};

// O conteúdo do site em português é definido neste objeto
const portugueseWebStructure: WebStructure = {
    navbar: {},
    menu: {},
    context: {},
    cookies: {},
    pages: [],
    footer: {},
};

// Os conteúdos em inglês e português são exportados
export { englishWebStructure, portugueseWebStructure };