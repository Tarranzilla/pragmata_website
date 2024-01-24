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

export type Page = {
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
    projects?: Project[]; // criar project type
    products?: Product[]; // criar product type
    magic_artefacts?: any[]; // o magic artefact type é um coringa que pode ser usado para qualquer coisa
};

export type NavLink = {
    name: string;
    path: string;
};

// O site é definido como uma array de páginas, as páginas possuem uma estrutura recursiva de subpáginas
export type WebStructure = {
    navbar: {
        // propriedades opcionais
        logo?: string;
        logoWidth?: number;
        logoHeight?: number;
        logoAlt?: string;
        logoTitle?: string;
        logoPath?: string;
        logoTranslationKey?: string;
        navbarLinks?: NavLink[];
    };
    pages: Page[];
    footer: {
        // propriedades opcionais
        logo?: string;
        logoWidth?: number;
        logoHeight?: number;
        logoAlt?: string;
        logoTitle?: string;
        logoPath?: string;
        logoTranslationKey?: string;
        footerLinks?: NavLink[];
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

// O conteúdo do site em inglês é definido neste objeto
const englishWebStructure: WebStructure = {
    navbar: {},
    pages: [
        // Home
        {
            name: "home",
            path: "/",
            language: "en",
            translationKey: "home",
        },

        // Who
        {
            name: "who",
            path: "/who",
            language: "en",
            translationKey: "who",
        },

        // What
        {
            name: "what",
            path: "/what",
            language: "en",
            translationKey: "what",
        },

        // How
        {
            name: "how",
            path: "/how",
            language: "en",
            translationKey: "how",
        },

        // Projects
        {
            name: "projects",
            path: "/projects",
            language: "en",
            translationKey: "projects",
            projects: projects,
            subpages: [],
        },

        // Shop
        {
            name: "shop",
            path: "/shop",
            language: "en",
            translationKey: "shop",
            products: products,
            subpages: [],
        },

        // Contact
        {
            name: "contact",
            path: "/contact",
            language: "en",
            translationKey: "contact",
        },

        // 404
        {
            name: "404",
            path: "/404",
            language: "en",
            translationKey: "err404",
        },

        // 500
        {
            name: "500",
            path: "/500",
            language: "en",
            translationKey: "err500",
        },
    ],
    footer: {},
};

// O conteúdo do site em português é definido neste objeto
const portugueseWebStructure: WebStructure = {
    navbar: {},
    pages: [],
    footer: {},
};

// Os conteúdos em inglês e português são exportados
export { englishWebStructure };
