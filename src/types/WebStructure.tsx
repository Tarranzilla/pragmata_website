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
    // propriedades opcionais para páginas em geral
    title?: string;
    subTitle?: string;
    description?: string; // deve ser obrigatório
    keywords?: string[];

    // propriedades obrigatórias para páginas em geral
    pageIndex: number;
    name: string;
    path: string;
    language: string;
    translationKey: string;

    // propriedades opcionais para páginas em geral
    subpages?: Page[];
    images?: string[];
    paragraphs?: string[];

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

export const products: Product[] = [
    {
        name: "SURU",
        subtitle: "Universal Recombinant Utility System",
        description: "Decolonial and modular furniture that can be reconfigured to achieve different formats.",
        path: "/shop/suru",
        language: "en",
        translationKey: "suru",
        categories: ["furniture"],
        price: 420, // You need to provide the actual price
    },
    {
        name: "Nintendo Gate Control",
        subtitle: "Gate Control",
        description: "A reinterpretation of a console classic, now available to control whatever you want inside your home!",
        path: "/shop/nintendo-gate-control",
        language: "en",
        translationKey: "nintendo-gate-control",
        categories: ["electronics"],
        price: 240, // You need to provide the actual price
    },
    {
        name: "UNVRS",
        subtitle: "Alternative Clothing",
        description: "A clothing brand for those who enjoy bold illustrations.",
        path: "/shop/unvrs",
        language: "en",
        translationKey: "unvrs",
        categories: ["clothing"],
        price: 150, // You need to provide the actual price
    },
];

export const productPaths = products.map((product) => product.path.replace("/shop/", ""));

const products_ptBR: Product[] = [
    {
        name: "SURU",
        subtitle: "Sistema Utilitário Recombinante Universal",
        description: "Móveis decoloniais e modulares que podem ser reconfigurados para obter diferentes formatos.",
        path: "/shop/suru",
        language: "en",
        translationKey: "suru",
        categories: ["mobiliário"],
        price: 420, // Você precisa fornecer o preço real
    },
    {
        name: "Controle de Portão Nintendo",
        subtitle: "Controle de Portão",
        description: "Uma reinterpretação de um clássico do console, agora disponível para controlar o que você quiser dentro de sua casa!",
        path: "/shop/nintendo-gate-control",
        language: "en",
        translationKey: "nintendo-gate-control",
        categories: ["eletrônicos"],
        price: 240, // Você precisa fornecer o preço real
    },
    {
        name: "UNVRS",
        subtitle: "Roupas Alternativas",
        description: "Uma marca de roupas para quem gosta de ilustrações ousadas.",
        path: "/shop/unvrs",
        language: "en",
        translationKey: "unvrs",
        categories: ["roupas"],
        price: 150, // Você precisa fornecer o preço real
    },
];

const projects: Project[] = [
    {
        name: "Tropical Cacau",
        subtitle: "High-Quality Organic Chocolates",
        description: "The power of the sun manifested in flavor.",
        path: "/projects/tropical-cacau",
        language: "en",
        translationKey: "tropical-cacau",
        categories: ["product-design", "graphic-design", "branding web-app"],
        images: [
            "/projectsFiles/tropical-cacau/imgs/logo_001.png",
            "/projectsFiles/tropical-cacau/imgs/logo_002.png",
            "/projectsFiles/tropical-cacau/imgs/logo_003.png",
            "/projectsFiles/tropical-cacau/imgs/logo_004.png",
        ],
    },
    {
        name: "Rewave",
        subtitle: "Renewable Materials Laboratory",
        description: "Creators of raw materials that will sustain a more ecological future.",
        path: "/projects/rewave",
        language: "en",
        translationKey: "rewave",
        categories: ["product-design", "graphic-design", "branding"],
        images: [
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_01.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_02.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_03.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_04.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_05.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_06.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_07.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_08.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_09.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_010.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_011.jpg",
        ],
    },
    {
        name: "Human Robotics",
        subtitle: "Robots and Artificial Intelligence",
        description: "Autonomous robotics has the potential to revolutionize the way we work.",
        path: "/projects/robotics",
        language: "en",
        translationKey: "robotics",
        categories: ["product-design", "graphic-design", "branding", "web-app"],
        images: [
            "/projectsFiles/human-robotics/imgs/apresentacao_01.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_02.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_03.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_04.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_05.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_06.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_07.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_08.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_09.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_10.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_11.png",
        ],
    },
    {
        name: "Ateliê Floar",
        subtitle: "Sustainable Clothing",
        description: "Incredibly comfortable and stylish clothes made from recycled materials.",
        path: "/projects/atelie-floar",
        language: "en",
        translationKey: "atelie-floar",
        categories: ["graphic-design", "branding", "web-app"],
        images: ["/projectsFiles/floar/imgs/floar_001.png", "/projectsFiles/floar/imgs/floar_002.png"],
    },
    {
        name: "Full Jazz",
        subtitle: "Music and Cuisine",
        description: "A sophisticated restaurant, a stage for renowned and incredibly talented artists.",
        path: "/projects/full-jazz",
        language: "en",
        translationKey: "full-jazz",
        categories: ["audiovisual"],
        images: [
            "/projectsFiles/full-jazz/imgs/drinks/drinks_001.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_002.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_003.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_004.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_005.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_006.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_007.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_008.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_009.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_010.jpg",
        ],
    },
    {
        name: "Rede AOBA",
        subtitle: "Accessible Organic Foods",
        description: "A system for the purchase and subscription of organic projects, connecting rural producers to urban centers.",
        path: "/projects/rede-aoba",
        language: "en",
        translationKey: "rede-aoba",
        categories: ["product-design", "web-app", "graphic-design"],
        images: [
            "/projectsFiles/aoba/imgs/logo_aoba_01.png",
            "/projectsFiles/aoba/imgs/computador1.png",
            "/projectsFiles/aoba/imgs/computador2.png",
            "/projectsFiles/aoba/imgs/computador3.png",
            "/projectsFiles/aoba/imgs/folder.png",
            "/projectsFiles/aoba/imgs/asset_01.png",
            "/projectsFiles/aoba/imgs/asset_02.png",
            "/projectsFiles/aoba/imgs/asset_03.png",
            "/projectsFiles/aoba/imgs/asset_04.png",
            "/projectsFiles/aoba/imgs/asset_05.png",
            "/projectsFiles/aoba/imgs/asset_06.png",
            "/projectsFiles/aoba/imgs/asset_07.png",
            "/projectsFiles/aoba/imgs/asset_08.png",
            "/projectsFiles/aoba/imgs/asset_09.png",
            "/projectsFiles/aoba/imgs/asset_10.png",
            "/projectsFiles/aoba/imgs/asset_11.png",
        ],
    },
    {
        name: "Van Hack",
        subtitle: "Global Talent Agency for Programmers",
        description: "A platform offering job-hunting and professionalization services for technology professionals.",
        path: "/projects/van-hack",
        language: "en",
        translationKey: "van-hack",
        categories: ["graphic-design", "audiovisual"],
        images: [
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_001.jpg",
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_002.jpg",
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_003.jpg",
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_004.jpg",
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_005.jpg",
        ],
    },
    {
        name: "Taborda Lima",
        subtitle: "Law Firm",
        description: "A highly capable office addressing demands primarily related to immigration and foreign trade.",
        path: "/projects/taborda-lima",
        language: "en",
        translationKey: "taborda-lima",
        categories: ["Graphic-design", "branding", "web-app"],
        images: ["/projectsFiles/taborda-lima/imgs/website_001.png"],
    },
    {
        name: "Calisto Advocacy",
        subtitle: "Law Firm",
        description: "A modern office focused on patent publication and digital rights.",
        path: "/projects/calisto-advocacy",
        language: "en",
        translationKey: "calisto-advocacy",
        categories: ["grapic-design", "branding"],
        images: [
            "/projectsFiles/calisto/imgs/logo_001.jpg",
            "/projectsFiles/calisto/imgs/logo_002.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_001.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_002.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_003.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_004.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_005.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_006.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_007.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_008.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_009.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_010.jpg",
        ],
    },
    {
        name: "Colletive",
        subtitle: "Cultural Experiences Worldwide",
        description: "A platform focused on the search and realization of cultural experiences.",
        path: "/projects/colletive",
        language: "en",
        translationKey: "colletive",
        categories: ["audiovisual", "graphic-design", "web-app"],
        images: ["/projectsFiles/colletive/imgs/website_001.png", "/projectsFiles/colletive/imgs/social_media_001.png"],
    },
    {
        name: "Jeremias",
        subtitle: "Craft Brewery",
        description: "A small brewery with the goal of making the most cheerful drinks in the region.",
        path: "/projects/jeremias",
        language: "en",
        translationKey: "jeremias",
        categories: ["illustration", "graphic-design"],
        images: [
            "/projectsFiles/jeremias/imgs/rotulo_azul_01.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_02.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_04.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_05.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_06.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_07.jpg",
        ],
    },
    {
        name: "Komba",
        subtitle: "Artisanal Kombuchas",
        description: "A small factory of natural fermented beverages that refresh even the thirstiest of travelers.",
        path: "/projects/komba",
        language: "en",
        translationKey: "komba",
        categories: ["illustration", "graphic-design"],
        images: [
            "/projectsFiles/komba/imgs/logo_001.jpg",
            "/projectsFiles/komba/imgs/cor_001.jpg",
            "/projectsFiles/komba/imgs/tipografia_001.jpg",
            "/projectsFiles/komba/imgs/rotulo_001.jpg",
            "/projectsFiles/komba/imgs/rotulo_002.jpg",
            "/projectsFiles/komba/imgs/rotulo_003.jpg",
            "/projectsFiles/komba/imgs/rotulo_004.jpg",
        ],
    },
    {
        name: "Diva's House",
        subtitle: "Senior Residential Condominium",
        description: "Space dedicated to the care of senior citizens.",
        path: "/projects/divas-house",
        language: "en",
        translationKey: "divas-house",
        categories: ["illustration", "graphic-design"],
        images: ["/projectsFiles/divas-house/imgs/logo_001.jpg", "/projectsFiles/divas-house/imgs/tipografia_001.jpg"],
    },
    {
        name: "Cogu GO",
        subtitle: "Natural Products",
        description: "A store of organic food and psychotropic mushrooms.",
        path: "/projects/cogu-go",
        language: "en",
        translationKey: "cogu-go",
        categories: ["illustration", "graphic-design"],
        images: ["/projectsFiles/cogu-go/imgs/logo_01.jpg", "/projectsFiles/cogu-go/imgs/logo_02.jpg"],
    },
    {
        name: "Central COPASOL",
        subtitle: "Food Cooperative",
        description: "A network of organic producers with a wide variety of projects located in Paraná.",
        path: "/projects/central-copasol",
        language: "en",
        translationKey: "central-copasol",
        categories: ["illustration", "graphic-design"],
        images: ["/projectsFiles/central-copasol/imgs/foto_001.jpg"],
    },
    {
        name: "Bem Bolado",
        subtitle: "Cultural Event",
        description: "An event for the promotion of original art and local culture.",
        path: "/projects/bem-bolado",
        language: "en",
        translationKey: "bem-bolado",
        categories: ["illustration", "graphic-design"],
        images: [
            "/projectsFiles/bem-bolado/imgs/bem_bolados.jpg",
            "/projectsFiles/bem-bolado/imgs/capa_evento_face_bb1.png",
            "/projectsFiles/bem-bolado/imgs/capa_evento_face_bb4.png",
            "/projectsFiles/bem-bolado/imgs/narizbembolado.jpg",
            "/projectsFiles/bem-bolado/imgs/pinceis.png",
            "/projectsFiles/bem-bolado/imgs/sinuca.png",
            "/projectsFiles/bem-bolado/imgs/street_fighter.png",
        ],
    },
    {
        name: "Pocket",
        subtitle: "Cultural Event",
        description: "An event for the promotion of original art and local culture.",
        path: "/projects/pocket",
        language: "en",
        translationKey: "pocket",
        categories: ["illustration", "graphic-design"],
        images: [
            "/projectsFiles/pocket/imgs/flyer_001.png",
            "/projectsFiles/pocket/imgs/poster_001.png",
            "/projectsFiles/pocket/imgs/poster_002.png",
            "/projectsFiles/pocket/imgs/poster_003.png",
        ],
    },
];

export const projectPaths = projects.map((project) => project.path.replace("/projects/", ""));

const projects_ptBR: Project[] = [
    {
        name: "Tropical Cacau",
        subtitle: "Chocolates Orgânicos de Alta Qualidade",
        description: "O poder do sol manifestado em sabor.",
        path: "/projects/tropical-cacau",
        language: "pt-BR",
        translationKey: "tropical-cacau",
        categories: ["design-de-produto", "design-gráfico", "branding", "web-app"],
        images: [
            "/projectsFiles/tropical-cacau/imgs/logo_001.png",
            "/projectsFiles/tropical-cacau/imgs/logo_002.png",
            "/projectsFiles/tropical-cacau/imgs/logo_003.png",
            "/projectsFiles/tropical-cacau/imgs/logo_004.png",
        ],
    },
    {
        name: "Rewave",
        subtitle: "Laboratório de Materiais Renováveis",
        description: "Criadores de matéria-prima para um futuro mais ecológico.",
        path: "/projects/rewave",
        language: "pt-BR",
        translationKey: "rewave",
        categories: ["design-de-produto", "design-gráfico", "branding"],
        images: [
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_01.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_02.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_03.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_04.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_05.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_06.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_07.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_08.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_09.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_010.jpg",
            "/projectsFiles/rewave/imgs/catalogo_rewave_pg_011.jpg",
        ],
    },
    {
        name: "Human Robotics",
        subtitle: "Robôs e Inteligência Artificial",
        description: "A robótica autônoma tem o potencial de revolucionar a forma como trabalhamos.",
        path: "/projects/robotics",
        language: "pt-BR",
        translationKey: "robotics",
        categories: ["design-de-produto", "design-gráfico", "branding", "web-app"],
        images: [
            "/projectsFiles/human-robotics/imgs/apresentacao_01.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_02.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_03.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_04.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_05.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_06.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_07.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_08.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_09.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_10.png",
            "/projectsFiles/human-robotics/imgs/apresentacao_11.png",
        ],
    },
    {
        name: "Ateliê Floar",
        subtitle: "Roupas Sustentáveis",
        description: "Roupas incrivelmente confortáveis e estilosas feitas de materiais reciclados.",
        path: "/projects/atelie-floar",
        language: "pt-BR",
        translationKey: "atelie-floar",
        categories: ["design-gráfico", "branding", "web-app"],
        images: ["/projectsFiles/floar/imgs/floar_001.png", "/projectsFiles/floar/imgs/floar_002.png"],
    },
    {
        name: "Full Jazz",
        subtitle: "Música e Gastronomia",
        description: "Um restaurante sofisticado, palco para artistas renomados e incrivelmente talentosos.",
        path: "/projects/full-jazz",
        language: "pt-BR",
        translationKey: "full-jazz",
        categories: ["audiovisual"],
        images: [
            "/projectsFiles/full-jazz/imgs/drinks/drinks_001.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_002.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_003.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_004.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_005.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_006.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_007.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_008.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_009.jpg",
            "/projectsFiles/full-jazz/imgs/drinks/drinks_010.jpg",
        ],
    },
    {
        name: "Rede AOBA",
        subtitle: "Alimentos Orgânicos Acessíveis",
        description: "Sistema de compra e assinatura de projetos orgânicos, conectando produtores rurais a centros urbanos.",
        path: "/projects/rede-aoba",
        language: "pt-BR",
        translationKey: "rede-aoba",
        categories: ["design-de-produto", "web-app", "design-gráfico"],
        images: [
            "/projectsFiles/aoba/imgs/logo_aoba_01.png",
            "/projectsFiles/aoba/imgs/computador1.png",
            "/projectsFiles/aoba/imgs/computador2.png",
            "/projectsFiles/aoba/imgs/computador3.png",
            "/projectsFiles/aoba/imgs/folder.png",
            "/projectsFiles/aoba/imgs/asset_01.png",
            "/projectsFiles/aoba/imgs/asset_02.png",
            "/projectsFiles/aoba/imgs/asset_03.png",
            "/projectsFiles/aoba/imgs/asset_04.png",
            "/projectsFiles/aoba/imgs/asset_05.png",
            "/projectsFiles/aoba/imgs/asset_06.png",
            "/projectsFiles/aoba/imgs/asset_07.png",
            "/projectsFiles/aoba/imgs/asset_08.png",
            "/projectsFiles/aoba/imgs/asset_09.png",
            "/projectsFiles/aoba/imgs/asset_10.png",
            "/projectsFiles/aoba/imgs/asset_11.png",
        ],
    },
    {
        name: "Van Hack",
        subtitle: "Agência Global de Talentos para Programadores",
        description: "Plataforma que oferece serviços de busca de emprego e profissionalização para profissionais de tecnologia.",
        path: "/projects/van-hack",
        language: "pt-BR",
        translationKey: "van-hack",
        categories: ["design-gráfico", "audiovisual"],
        images: [
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_001.jpg",
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_002.jpg",
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_003.jpg",
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_004.jpg",
            "/projectsFiles/van-hack/imgs/vh_english_for_tech_talent_005.jpg",
        ],
    },
    {
        name: "Taborda Lima & Associados Lawyers",
        subtitle: "Escritório de Advogados",
        description: "Um escritório altamente capacitado que atende demandas principalmente relacionadas a imigração e comércio exterior.",
        path: "/projects/taborda-lima",
        language: "pt-BR",
        translationKey: "taborda-lima",
        categories: ["Design Gráfico", "Branding, Web-app"],
        images: ["/projectsFiles/taborda-lima/imgs/website_001.png"],
    },
    {
        name: "Calisto Advocacy",
        subtitle: "Escritório de Advocacia",
        description: "Um escritório moderno focado em publicação de patentes e direitos digitais.",
        path: "/projects/calisto-advocacy",
        language: "pt-BR",
        translationKey: "calisto-advocacy",
        categories: ["Design Gráfico", "Branding"],
        images: [
            "/projectsFiles/calisto/imgs/logo_001.jpg",
            "/projectsFiles/calisto/imgs/logo_002.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_001.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_002.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_003.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_004.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_005.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_006.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_007.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_008.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_009.jpg",
            "/projectsFiles/calisto/imgs/apresentacao_010.jpg",
        ],
    },
    {
        name: "Colletive",
        subtitle: "Experiências Culturais em Todo o Mundo",
        description: "Uma plataforma focada na busca e realização de experiências culturais.",
        path: "/projects/colletive",
        language: "pt-BR",
        translationKey: "colletive",
        categories: ["Audiovisual", "Design Gráfico", "Web-app"],
        images: ["/projectsFiles/colletive/imgs/website_001.png", "/projectsFiles/colletive/imgs/social_media_001.png"],
    },
    {
        name: "Jeremias",
        subtitle: "Cervejaria Artesanal",
        description: "Uma pequena cervejaria com o objetivo de fazer as bebidas mais alegres da região.",
        path: "/projects/jeremias",
        language: "pt-BR",
        translationKey: "jeremias",
        categories: ["Ilustração", "Design Gráfico"],
        images: [
            "/projectsFiles/jeremias/imgs/rotulo_azul_01.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_02.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_04.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_05.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_06.jpg",
            "/projectsFiles/jeremias/imgs/rotulo_azul_07.jpg",
        ],
    },
    {
        name: "Komba",
        subtitle: "Kombuchas Artesanais",
        description: "Uma pequena fábrica de bebidas naturais fermentadas que refrescam até os viajantes mais sedentos.",
        path: "/projects/komba",
        language: "pt-BR",
        translationKey: "komba",
        categories: ["Ilustração", "Design Gráfico"],
        images: [
            "/projectsFiles/komba/imgs/logo_001.jpg",
            "/projectsFiles/komba/imgs/cor_001.jpg",
            "/projectsFiles/komba/imgs/tipografia_001.jpg",
            "/projectsFiles/komba/imgs/rotulo_001.jpg",
            "/projectsFiles/komba/imgs/rotulo_002.jpg",
            "/projectsFiles/komba/imgs/rotulo_003.jpg",
            "/projectsFiles/komba/imgs/rotulo_004.jpg",
        ],
    },
    {
        name: "Diva's House",
        subtitle: "Condomínio Residencial Sênior",
        description: "Espaço dedicado ao cuidado de idosos.",
        path: "/projects/divas-house",
        language: "pt-BR",
        translationKey: "divas-house",
        categories: ["Ilustração", "Design Gráfico"],
        images: ["/projectsFiles/divas-house/imgs/logo_001.jpg", "/projectsFiles/divas-house/imgs/tipografia_001.jpg"],
    },
    {
        name: "Cogu GO",
        subtitle: "Produtos Naturais",
        description: "Uma loja de alimentos orgânicos e cogumelos psicotrópicos.",
        path: "/projects/cogu-go",
        language: "pt-BR",
        translationKey: "cogu-go",
        categories: ["Ilustração", "Design Gráfico"],
        images: ["/projectsFiles/cogu-go/imgs/logo_01.jpg", "/projectsFiles/cogu-go/imgs/logo_02.jpg"],
    },
    {
        name: "Central COPASOL",
        subtitle: "Cooperativa de Alimentos",
        description: "Uma rede de produtores orgânicos com uma ampla variedade de projetos localizados no Paraná.",
        path: "/projects/central-copasol",
        language: "pt-BR",
        translationKey: "central-copasol",
        categories: ["Ilustração", "Design Gráfico"],
        images: ["/projectsFiles/central-copasol/imgs/foto_001.jpg"],
    },
    {
        name: "Bem Bolado",
        subtitle: "Evento Cultural",
        description: "Um evento para a promoção da arte original e da cultura local.",
        path: "/projects/bem-bolado",
        language: "pt-BR",
        translationKey: "bem-bolado",
        categories: ["Ilustração", "Design Gráfico"],
        images: [
            "/projectsFiles/bem-bolado/imgs/bem_bolados.jpg",
            "/projectsFiles/bem-bolado/imgs/capa_evento_face_bb1.png",
            "/projectsFiles/bem-bolado/imgs/capa_evento_face_bb4.png",
            "/projectsFiles/bem-bolado/imgs/narizbembolado.jpg",
            "/projectsFiles/bem-bolado/imgs/pinceis.png",
            "/projectsFiles/bem-bolado/imgs/sinuca.png",
            "/projectsFiles/bem-bolado/imgs/street_fighter.png",
        ],
    },
    {
        name: "Pocket",
        subtitle: "Evento Cultural",
        description: "Um evento para a promoção da arte original e da cultura local.",
        path: "/projects/pocket",
        language: "pt-BR",
        translationKey: "pocket",
        categories: ["Ilustração", "Design Gráfico"],
        images: [
            "/projectsFiles/pocket/imgs/flyer_001.png",
            "/projectsFiles/pocket/imgs/poster_001.png",
            "/projectsFiles/pocket/imgs/poster_002.png",
            "/projectsFiles/pocket/imgs/poster_003.png",
        ],
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

export const servicePaths = services.map((service) => service.path.replace("/what/", ""));

const services_ptBR: Service[] = [
    {
        name: "Design Gráfico",
        subtitle: "Comunicação Visual",
        description: "Desenvolvemos projetos de comunicação visual para sua marca, produto ou serviço.",
        path: "/what/design-grafico",
        items: [
            "Desenvolvimento de Identidade Visual",
            "Desenvolvimento de Materiais Impressos",
            "Desenvolvimento de Sinalização",
            "Ilustração e Pintura",
            "Livros Pop-Up e Encadernação Artesanal",
            "Redesigns e Reinterpretações",
        ],
    },
    {
        name: "Design de Produto",
        subtitle: "Desenvolvimento de Produtos",
        description: "Oferecemos uma variedade de serviços relacionados ao design e desenvolvimento de produtos.",
        path: "/what/design-de-produto",
        items: [
            "Desenvolvimento de Produtos",
            "Desenvolvimento de Mobiliário",
            "Fabricação Digital",
            "Desenvolvimento de Máquinas",
            "Desenvolvimento de Protótipos",
        ],
    },
    {
        name: "Web & App",
        subtitle: "Desenvolvimento Digital",
        description: "Oferecemos uma variedade de serviços de desenvolvimento web e app.",
        path: "/what/web-app",
        items: [
            "Desenvolvimento de Interface (UI)",
            "Desenvolvimento de App iOS",
            "Desenvolvimento de App Android",
            "Desenvolvimento de Progressive Web App (PWA)",
            "Desenvolvimento de Sites",
            "Registro e Gerenciamento de Domínios Web",
            "Hospedagem Web",
            "Desenvolvimento de Jogos",
        ],
    },
    {
        name: "Negócios",
        subtitle: "Desenvolvimento Empresarial",
        description: "Fornecemos serviços para ajudar no desenvolvimento e análise do seu negócio e marca.",
        path: "/what/negocios",
        items: ["Diagnóstico de Marca (análise de marca)", "Desenvolvimento de Marca (branding)", "Diagnóstico de Modelo de Negócios (Strategyzer)"],
    },
    {
        name: "Pensamento",
        subtitle: "Serviços de Consultoria",
        description: "Oferecemos serviços de consultoria em criatividade, inovação, sustentabilidade e várias estratégias de design e comunicação.",
        path: "/what/pensamento",
        items: [
            "Consultoria em Criatividade, Inovação e Sustentabilidade",
            "Consultoria em Design Gráfico, Produto, Branding e Estratégias de Comunicação",
            "Consultoria em qualquer produto, serviço ou experiência que oferecemos",
        ],
    },
    {
        name: "Audiovisual",
        subtitle: "Serviços Multimídia",
        description: "Fornecemos uma variedade de serviços audiovisuais, desde animações e fotografia até desenvolvimento de roteiros e cenografia.",
        path: "/what/audiovisual",
        items: [
            "Animações",
            "Ensaio Fotográfico",
            "Cobertura Fotográfica",
            "Ensaio Audiovisual",
            "Cobertura Audiovisual",
            "Transmissão ao Vivo",
            "Cenografia",
            "Desenvolvimento de Roteiro",
            "Desenvolvimento de Estereoscopia (3D)",
            "Storyboard e Desenvolvimento de Roteiro",
            "Desenvolvimento de Cenografia",
        ],
    },
    {
        name: "Sustentabilidade",
        subtitle: "Soluções Sustentáveis",
        description:
            "Oferecemos consultoria em sustentabilidade corporativa e desenvolvemos planos de transição sustentável e designs de produtos ecológicos.",
        path: "/what/sustentabilidade",
        items: [
            "Consultoria em Sustentabilidade Corporativa (ODS da ONU)",
            "Desenvolvimento de Plano de Transição Sustentável",
            "Design Ecológico de Produtos",
        ],
    },
    {
        name: "Pesquisa",
        subtitle: "Serviços de Pesquisa",
        description: "Realizamos pesquisas de design, pesquisa de materiais, mapeamento de ecossistemas e desenvolvimento de experiência do usuário.",
        path: "/what/pesquisa",
        items: ["Pesquisa de Design", "Pesquisa de Materiais", "Mapeamento de Ecossistemas", "Desenvolvimento de Experiência do Usuário (UX)"],
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
            name: "privacy",
            path: "/privacy-policy",
            language: "en",
            translationKey: "privacy-policy",
            paragraphs: [
                "Your privacy is important to us. It is Pragmatas' policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.",
            ],
        },

        // Terms of Use
        {
            pageIndex: 8,
            name: "terms",
            path: "/terms-of-use",
            language: "en",
            translationKey: "terms-of-use",
            paragraphs: ["These terms and conditions outline the rules and regulations for the use of Pragmatas' Website."],
        },

        // 404
        {
            pageIndex: 9,
            name: "404",
            path: "/404",
            language: "en",
            translationKey: "404",
            paragraphs: ["Oops! This page doesn't exist."],
        },

        // 500
        {
            pageIndex: 10,
            name: "500",
            path: "/500",
            language: "en",
            translationKey: "500",
            paragraphs: ["Oops! Something went wrong with our server."],
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
        contextBtnText: "Return to ",
        contextBtnLabel: "Return to the previous page",

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
    navbar: {
        logoTitle: "pragmata",
        logoPath: "/",
        logoWidth: 40,
        logoHeight: 40,
        logoAlt: "pragmata",

        navbarLinks: [
            {
                name: "inicio",
                path: "/",
            },
            {
                name: "quem?",
                path: "/who",
            },
            {
                name: "o que?",
                path: "/what",
            },
            {
                name: "como?",
                path: "/how",
            },
            {
                name: "projetos",
                path: "/projects",
            },
            {
                name: "loja",
                path: "/shop",
            },
            {
                name: "contato",
                path: "/contact",
            },
        ],

        colorModeBtnPath: "/",
        colorModeBtnText: "Modo de Cor",
        colorModeBtnLabel: "Alterar Modo de Cor",

        searchBtnPath: "/",
        searchBtnText: "Pesquisar",
        searchBtnPlaceholder: "Digite aqui sua busca...",
        searchBtnLabel: "Procurar por projetos e produtos",

        shareBtnPath: "/",
        shareBtnText: "Partilhar",
        shareBtnLabel: "Partilhe esta página",
    },
    menu: {
        menuTitle: "Menu",
        menuLinks: [
            {
                name: "inicio",
                path: "/",
            },
            {
                name: "quem?",
                path: "/who",
            },
            {
                name: "o que?",
                path: "/what",
            },
            {
                name: "como?",
                path: "/how",
            },
            {
                name: "projetos",
                path: "/projects",
            },
            {
                name: "loja",
                path: "/shop",
            },
            {
                name: "contato",
                path: "/contact",
            },
            {
                name: "politica de privacidade",
                path: "/privacy-policy",
            },
            {
                name: "termos de uso",
                path: "/terms-of-use",
            },
        ],

        languageBtnPath: "/",
        languageBtnText: "Mudar Idioma",
        languageBtnLabel: "Mudar idioma para Inglês",
    },
    context: {},
    cookies: {
        title: "Cookies",
        text: "Este site usa cookies para garantir que você obtenha a melhor experiência em nosso site.",
        btnText: "Entendi!",
        btnPath: "/",
    },
    pages: [
        // Home
        {
            pageIndex: 0,
            name: "inicio",
            path: "/",
            language: "pt-BR",
            translationKey: "home",

            images: ["/imgs/pragmatas_black.png", "/imgs/noite_estrelada_black.png", "/imgs/padrao_01_black.png"],

            paragraphs: [
                "Num recanto tropical esquecido pelo tempo, onde criaturas vagavam despretensiosamente por praias paradisíacas e selvas, um seleto grupo de primatas ascendeu — e dele surgiu, assim, o misterioso povo dos Pragmatas.",
                "Evoluíram, então, esses primatas, para inventores e visionários de mundos. Compreendendo a linguagem sutil da natureza e o sussurro ensurdecedor do cosmos, fizeram de si próprios criadores de tecnologias. E ergueram, neste mundo, mais que estruturas físicas, mas também teias de afetos, sistemas sociais e cultura. ",
                "Naquelas praias esquecidas, forjaram ferramentas para desbloquear o extraordinário. Nutriram as almas e as mentes de todos aqueles que os buscavam, desesperados e famintos, ansiosos por partilhar do mais raro dos alimentos do mundo: uma ideia original, ou um pensamento que nunca ninguém antes teve. Engajaram, assim, corações e mentes, em um misterioso encantamento compartilhado.",
                "Foi numa noite iluminada pelo brilho das estrelas, que tiveram uma visão transcendental: a de todas as tribos do mundo se unindo em uma colaboração épica, construindo algo que transcenderia o entendimento comum. Forjariam, então, um novo mundo, o mundo do amanhã.",
                "Para concatenar os artífices deste futuro, ergueram então uma estrutura, que era ao mesmo tempo uma oficina e um farol, para síntese das ferramentas desta obra, e para atração de todas as mentes que destes anseios compartilhassem.  Era o Farol de Invenções Pragmatas. Conhecido como um epicentro do encanto tecnológico, tornou-se um santuário onde a natureza e a inovação se entrelaçam.",
                "Hoje, os descendentes dos Pragmatas continuam a tradição de construir não apenas produtos e serviços, mas também pontes entre mundos, unindo comunidades em uma jornada criativa e lendária, onde a ajuda mútua é a chave para erguer algo verdadeiramente útil.",
                "Convidamos você a explorar o Farol de Invenções - Descubra nosso universo de inovação e mergulhe em nossos produtos, serviços e experiências que costuram o passado, presente e futuro em uma cosmotrama fascinante.",
                "Seja bem-vindo ao nosso mundo, onde o encanto da tecnologia e a tecnologia do encanto se entrelaçam, criando um futuro de possibilidades sustentáveis.",
            ],
        },

        // Who
        {
            pageIndex: 1,
            name: "quem?",
            path: "/who",
            language: "pt-BR",
            translationKey: "who",

            images: ["/imgs/pragmatas_logo_comercial_black.png"],
            paragraphs: [
                "Somos um Laboratório Criativo, centrado na prestação de serviços de Arte & Design e na Comercialização de Produtos e Serviços Autoriais, e oferecemos duas vertentes de soluções:",
                "De um lado criamos e vendemos nossos próprios produtos em nossa loja astutamente curada para a sustentabilidade e modularidade - chamada de Farol de Invenções.",
                "Buscamos um diálogo projetual e um esfumaçamento dos limites entre usuários e projetistas que estimula uma lógica de consumo alternativa, autopoiética, antropofágica, simbiótica e parasita através do upcycling, design aberto e livre e produção descentralizada.",
                "Acreditamos que comprar um produto ou um serviço é mais do que usufruir de um bem - É apoiar uma ideia - E apoiar toda uma rede de produção por por trás dele.",
                "De outro lado oferecemos nossos serviços de criatividade e inovação, nas áreas de design gráfico, produto, web, UI UX, serviço e consultorias - Caminhando também sempre na direção da sustentabilidade.",
                "Nosso design é Crítico.",
                "Através da proposição de projetos questionadores e inovadores, buscamos uma nova forma genuína de se fazer design modificando a realidade material e social de formas positivas E inclusivas para que nossa comunidade tenha acesso à alimentos, ferramentas, serviços e trabalhos dignos.",
                "Gostou da Idéia? Então junte-se a nós, bora marcar uma conversa e criar algo significativo!",
            ],
        },

        // What
        {
            pageIndex: 2,
            name: "o que?",
            path: "/what",
            language: "pt-BR",
            translationKey: "what",

            services: services_ptBR,
        },

        // How
        {
            pageIndex: 3,
            name: "como?",
            path: "/how",
            language: "pt-BR",
            translationKey: "how",

            paragraphs: [
                "Usamos várias metodologias e ferramentas para criar soluções inovadoras e eficientes.",
                "Todo bom projeto deve começar com uma pesquisa aprofundada. Nós nos esforçamos para entender o seu negócio, seus clientes e suas necessidades. A partir daí, podemos criar uma estratégia de design que irá ajudá-lo a alcançar seus objetivos.",
                "O desenvolvimento de alternativas é a próxima parte do processo. Nós criamos várias soluções para o seu problema, e então refinamos as melhores ideias até que tenhamos uma solução que seja a mais eficaz e a mais atraente.",
                "Depois de chegar à solução nós a prototipamos, testamos e aperfeiçoamos até que esteja pronta para ser implementada",
                "Nós também podemos ajudá-lo a implementar a solução, se necessário, contamos com uma rede de parceiros que podem ajudá-lo a levar seu projeto para o próximo nível.",
                "Aqui está uma lista de algumas das melhores referências para práticas de design que encontramos durante nossas pesquisas até agora:",
            ],
            references: references,
        },

        // Projects
        {
            pageIndex: 4,
            name: "projetos",
            path: "/projects",
            language: "pt-BR",
            translationKey: "projects",
            projects: projects_ptBR,
            subpages: [],
        },

        // Shop
        {
            pageIndex: 5,
            name: "loja",
            path: "/shop",
            language: "pt-BR",
            translationKey: "shop",
            products: products_ptBR,
            subpages: [],
        },

        // Contact
        {
            pageIndex: 6,
            name: "contato",
            path: "/contact",
            language: "pt-BR",
            translationKey: "contact",
            paragraphs: [
                "Estamos sempre abertos a novos projetos, colaborações e ideias. Se você tiver alguma dúvida ou gostaria de agendar uma reunião, entre em contato conosco.",
                "Nosso laboratório está localizado em Curitiba, Paraná, Brasil.",
                "Estamos disponíveis de segunda a sexta, das 10:00 às 18:00.",
                "falapragmata@gmail.com",
                "41 999 977 955",
            ],
        },

        // Privacy Policy
        {
            pageIndex: 7,
            name: "privacidade",
            path: "/privacy-policy",
            language: "pt-BR",
            translationKey: "privacy-policy",
            paragraphs: [
                "Sua privacidade é importante para nós. Respeitamos sua privacidade em relação a qualquer informação sua que possamos coletar neste site e outros sites que possuímos e operamos.",
            ],
        },

        // Terms of Use
        {
            pageIndex: 8,
            name: "termos",
            path: "/terms-of-use",
            language: "pt-BR",
            translationKey: "terms-of-use",
            paragraphs: ["Estes termos e condições definem as regras e regulamentos para o uso do site da Pragmatas."],
        },

        // 404
        {
            pageIndex: 9,
            name: "404",
            path: "/404",
            language: "pt-BR",
            translationKey: "404",
            paragraphs: ["Esta página não existe."],
        },

        // 500
        {
            pageIndex: 10,
            name: "500",
            path: "/500",
            language: "pt-BR",
            translationKey: "500",
            paragraphs: ["Oops! Algo deu errado com nosso servidor, tente novamente."],
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
        menuBtnLabel: "Acionar Menu",

        contextBtnPath: "/",
        contextBtnText: "Retornar para ",
        contextBtnLabel: "Retornar para a página anterior",

        shopBtnPath: "/",
        shopBtnText: "Sacola de Desejos",
        shopBtnLabel: "Acionar Sacola de Desejos",

        nextPageBtnPath: "/",
        nextPageBtnText: "Próxima Página",
        nextPageBtnLabel: "Ir para a próxima página",

        prevPageBtnPath: "/",
        prevPageBtnText: "Página Anterior",
        prevPageBtnLabel: "Ir para a página anterior",
    },
};

// Os conteúdos em inglês e português são exportados
export { englishWebStructure, portugueseWebStructure };
