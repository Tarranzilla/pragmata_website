export const findProductByTranslationKeyWebStruc = (translationKey: string, webStructure: WebStructure): Product | undefined => {
    for (const page of webStructure.pages) {
        if (page.products) {
            for (const prod of page.products) {
                if (prod.subproducts) {
                    for (const subproductGroup of prod.subproducts) {
                        const product = subproductGroup.products.find((product: Product) => product.translationKey === translationKey);
                        if (product) return product;
                    }
                }
            }
        }
    }
    return undefined;
};

export type ImageGroup = {
    name: string;
    images: string[];
    layout: string;
};

export type Project = {
    name: string;
    subtitle: string;
    description: string;
    path: string;
    language: string;
    translationKey: string;
    categories: string[];

    // propriedades opcionais
    bannerImage?: string;
    images?: string[];
    imageGroups?: ImageGroup[];
    paragraphs?: string[];
    paragraphsLength?: number;
    date?: string;
    client?: string;
};

export type SubProductGroup = {
    key: string;
    name: string;
    products: Product[];
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
    bannerImage?: string;
    images?: string[];
    imageGroups?: ImageGroup[];
    paragraphs?: string[];
    paragraphsLength?: number;
    originDate?: string;
    isReleased?: boolean;
    releaseDate?: string;
    isPromoted?: boolean;

    subproducts?: SubProductGroup[];
    components?: Product[];
    type?: string;
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
    common: {
        addToCartBtn: string;
        contextBtn: string;
    };
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
    cart: {
        cartTitle: string;
        emptyCartMessage: string;
        checkOutHelpTitle: string;
        checkOutHelpParagraphs: string[];
        checkOutActionText: string;
        checkOutActionEmptyCartText: string;
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
        bannerImage: "/productsFiles/suru/imgs/suru_img_banner_512.png",
        imageGroups: [
            {
                name: "Project for Thomie Ohtake Institute",
                images: [
                    "/productsFiles/suru/imgs/suru_img_thomie_ohtake_001.png",
                    "/productsFiles/suru/imgs/suru_img_thomie_ohtake_002.png",
                    "/productsFiles/suru/imgs/suru_img_thomie_ohtake_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Modules",
                images: [
                    "/productsFiles/suru/imgs/suru_img_modulo_001.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_002.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_003.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_004.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_005.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_006.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_007.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_008.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_009.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_010.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_011.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_012.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_013.png",
                ],
                layout: "2-col",
            },
            {
                name: "Mobilia",
                images: [
                    "/productsFiles/suru/imgs/suru_img_mobilia_001.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_002.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_003.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_004.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_005.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_006.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_007.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_008.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_009.png",
                ],
                layout: "2-col",
            },
            {
                name: "SURUMAC",
                images: ["/productsFiles/suru/imgs/suru_img_surumac_001.png"],
                layout: "1-col",
            },
            {
                name: "Extras",
                images: ["/productsFiles/suru/imgs/suru_img_extra_001.png", "/productsFiles/suru/imgs/suru_img_extra_002.png"],
                layout: "1-col",
            },
        ],

        subproducts: [
            {
                key: "modules",
                name: "modules",
                products: [
                    {
                        name: "SURU",
                        subtitle: "Basic Module",
                        description: "Can be recombinated alongside other equal modules to create almost anything!",
                        path: "/shop/suru/suru-suru",
                        language: "en",
                        translationKey: "suru-suru",
                        categories: ["furniture"],
                        price: 80,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_modulo_001.png",
                        type: "module",
                    },
                    {
                        name: "SUR",
                        subtitle: "Strucutral Module",
                        description: "Can be used for reinforcing objects, and also as small legs, new uses always show up!",
                        path: "/shop/suru/sur",
                        language: "en",
                        translationKey: "sur",
                        categories: ["furniture"],
                        price: 30,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_modulo_002.png",
                        type: "module",
                    },
                    {
                        name: "SU",
                        subtitle: "Structural Module",
                        description: "A small piece that can be used to bond together structures, but also can be used to hold small objects.",
                        path: "/shop/suru/su",
                        language: "en",
                        translationKey: "su",
                        categories: ["furniture"],
                        price: 30,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_modulo_003.png",
                        type: "module",
                    },
                ],
            },
            {
                key: "objects",
                name: "objects",
                products: [
                    {
                        name: "table",
                        subtitle: "Simple Object",
                        description: "A little table consisting of 4 SURU modules.",
                        path: "/shop/suru/table",
                        language: "en",
                        translationKey: "table",
                        categories: ["furniture"],
                        price: 300,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_mobilia_001.png",
                        type: "object",
                    },
                    {
                        name: "high table",
                        subtitle: "Simple Object",
                        description: "A table consisting of 4 SURU modules.",
                        path: "/shop/suru/high_table",
                        language: "en",
                        translationKey: "high_table",
                        categories: ["furniture"],
                        price: 300,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_mobilia_002.png",
                        type: "object",
                    },
                    {
                        name: "chair",
                        subtitle: "Simple Object",
                        description: "A chair composed of 9 SURU modules.",
                        path: "/shop/suru/chair",
                        language: "en",
                        translationKey: "chair",
                        categories: ["furniture"],
                        price: 400,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_mobilia_003.png",
                        type: "object",
                    },
                    {
                        name: "shelf",
                        subtitle: "Simple Object",
                        description: "A simple shelf, consisting of 6 SURU modules.",
                        path: "/shop/suru/shelf",
                        language: "en",
                        translationKey: "shelf",
                        categories: ["furniture"],
                        price: 400,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_mobilia_004.png",
                        type: "object",
                    },
                ],
            },
            {
                key: "collections",
                name: "collection",
                products: [
                    {
                        name: "Starter Pack",
                        subtitle: "Object Collection",
                        description: "A package consisting in 8 SURUs, 8 SURs and 24 SUs.",
                        path: "/shop/suru/starter_pack",
                        language: "en",
                        translationKey: "starter_pack",
                        categories: ["furniture"],
                        price: 1000,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_extra_001.png",
                        type: "collection",
                    },
                    {
                        name: "Advanced Pack",
                        subtitle: "Object Collection",
                        description: "A package consisting of all suru objects of summer 2024.",
                        path: "/shop/suru/advanced_pack",
                        language: "en",
                        translationKey: "advanced_pack",
                        categories: ["furniture"],
                        price: 3000,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_extra_002.png",
                        type: "collection",
                    },
                ],
            },
            {
                key: "machines",
                name: "machines",
                products: [
                    {
                        name: "SURUMAC",
                        subtitle: "Modular CNC machine",
                        description: "A machine to prototype your dreams.",
                        path: "/shop/suru/surumac",
                        language: "en",
                        translationKey: "surumac",
                        categories: ["machines"],
                        price: 5000,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_surumac_001.png",
                        type: "machine",
                    },
                ],
            },
        ],
    },
    {
        name: "naointendo",
        subtitle: "Gate Control",
        description: "A reinterpretation of a console classic, now available to control whatever you want inside your home!",
        path: "/shop/nintendo-gate-control",
        language: "en",
        translationKey: "nintendo-gate-control",
        categories: ["electronics"],
        price: 240, // You need to provide the actual price
        bannerImage: "/productsFiles/naointendo/imgs/naointendo_img_banner_512.png",
        imageGroups: [
            {
                name: "Press Kit",
                images: [
                    "/productsFiles/naointendo/imgs/naointendo_img_product_001.png",
                    "/productsFiles/naointendo/imgs/naointendo_img_product_001_top.png",
                    "/productsFiles/naointendo/imgs/naointendo_img_product_001_isometric_001.png",
                    "/productsFiles/naointendo/imgs/naointendo_img_product_001_isometric_002.png",
                ],
                layout: "1-col",
            },
        ],
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
        bannerImage: "/productsFiles/unvrs/imgs/unvrs_img_banner_512.png",
        imageGroups: [
            {
                name: "Illustrations",
                images: [
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                ],
                layout: "1-col",
            },
            {
                name: "Clothing",
                images: ["/productsFiles/unvrs/imgs/unvrs_img_cloth_001.png"],
                layout: "1-col",
            },
        ],
    },
];

export const productPaths = products.map((product) => product.path.replace("/shop/", ""));
export const subproductPaths = products.flatMap((product) =>
    product.subproducts ? product.subproducts.flatMap((subproduct) => subproduct.products.map((product) => product.path.replace("/shop/", ""))) : []
);

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
        bannerImage: "/productsFiles/suru/imgs/suru_img_banner_512.png",
        imageGroups: [
            {
                name: "Projeto para o Instituto Thomie Ohtake",
                images: [
                    "/productsFiles/suru/imgs/suru_img_thomie_ohtake_001.png",
                    "/productsFiles/suru/imgs/suru_img_thomie_ohtake_002.png",
                    "/productsFiles/suru/imgs/suru_img_thomie_ohtake_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Modulos",
                images: [
                    "/productsFiles/suru/imgs/suru_img_modulo_001.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_002.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_003.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_004.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_005.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_006.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_007.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_008.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_009.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_010.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_011.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_012.png",
                    "/productsFiles/suru/imgs/suru_img_modulo_013.png",
                ],
                layout: "2-col",
            },
            {
                name: "Mobilia",
                images: [
                    "/productsFiles/suru/imgs/suru_img_mobilia_001.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_002.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_003.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_004.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_005.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_006.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_007.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_008.png",
                    "/productsFiles/suru/imgs/suru_img_mobilia_009.png",
                ],
                layout: "2-col",
            },
            {
                name: "SURUMAC",
                images: ["/productsFiles/suru/imgs/suru_img_surumac_001.png"],
                layout: "1-col",
            },
            {
                name: "Extras",
                images: ["/productsFiles/suru/imgs/suru_img_extra_001.png", "/productsFiles/suru/imgs/suru_img_extra_002.png"],
                layout: "1-col",
            },
        ],
        subproducts: [
            {
                key: "modules",
                name: "módulos",
                products: [
                    {
                        name: "SURU",
                        subtitle: "Módulo Universal",
                        description: "Pode ser recombinado junto a outros módulos iguais para criar praticamente qualquer coisa!",
                        path: "/shop/suru/suru-suru",
                        language: "en",
                        translationKey: "suru-suru",
                        categories: ["furniture"],
                        price: 80,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_modulo_001.png",
                        type: "module",
                    },
                    {
                        name: "SUR",
                        subtitle: "Módulo Estrutural",
                        description: "Pode ser usado para reforçar objetos e também como pequenas pernas; novos usos sempre aparecem!",
                        path: "/shop/suru/sur",
                        language: "en",
                        translationKey: "sur",
                        categories: ["furniture"],
                        price: 30,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_modulo_002.png",
                        type: "module",
                    },
                    {
                        name: "SU",
                        subtitle: "Módulo Estrutural",
                        description:
                            "Uma pequena peça que pode ser usada para unir estruturas, mas também pode ser usada para segurar objetos pequenos.",
                        path: "/shop/suru/su",
                        language: "en",
                        translationKey: "su",
                        categories: ["furniture"],
                        price: 30,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_modulo_003.png",
                        type: "module",
                    },
                ],
            },
            {
                key: "objects",
                name: "objetos",
                products: [
                    {
                        name: "mesinha",
                        subtitle: "Objeto Simples",
                        description: "Uma pequena mesa composta por 4 módulos SURU.",
                        path: "/shop/suru/table",
                        language: "en",
                        translationKey: "table",
                        categories: ["furniture"],
                        price: 300,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_mobilia_001.png",
                        type: "object",
                    },
                    {
                        name: "mesa alta",
                        subtitle: "Objeto Simples",
                        description: "Uma mesa composta por 4 módulos SURU.",
                        path: "/shop/suru/high_table",
                        language: "en",
                        translationKey: "high_table",
                        categories: ["furniture"],
                        price: 300,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_mobilia_002.png",
                        type: "object",
                    },
                    {
                        name: "cadeira",
                        subtitle: "Objeto Simples",
                        description: "Uma cadeira composta por 9 módulos SURU.",
                        path: "/shop/suru/chair",
                        language: "en",
                        translationKey: "chair",
                        categories: ["furniture"],
                        price: 400,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_mobilia_003.png",
                        type: "object",
                    },
                    {
                        name: "armário",
                        subtitle: "Objeto Simples",
                        description: "Uma prateleira simples, composta por 6 módulos SURU.",
                        path: "/shop/suru/shelf",
                        language: "en",
                        translationKey: "shelf",
                        categories: ["furniture"],
                        price: 400,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_mobilia_004.png",
                        type: "object",
                    },
                ],
            },
            {
                key: "collections",
                name: "coleções",
                products: [
                    {
                        name: "Kit Iniciante",
                        subtitle: "Coleção de Objetos",
                        description: "Um pacote consistindo em 8 módulos SURUs, 8 módulos SURs e 24 módulos SUs.",
                        path: "/shop/suru/starter_pack",
                        language: "en",
                        translationKey: "starter_pack",
                        categories: ["furniture"],
                        price: 1000,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_extra_001.png",
                        type: "collection",
                    },
                    {
                        name: "Kit Avançado",
                        subtitle: "Coleção de Objetos",
                        description: "Um pacote consistindo de todos os objetos SURU do verão de 2024.",
                        path: "/shop/suru/advanced_pack",
                        language: "en",
                        translationKey: "advanced_pack",
                        categories: ["furniture"],
                        price: 3000,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_extra_002.png",
                        type: "collection",
                    },
                ],
            },
            {
                key: "machines",
                name: "máquinas",
                products: [
                    {
                        name: "SURUMAC",
                        subtitle: "Máquina CNC Modular",
                        description: "A máquina para prototipar seus sonhos.",
                        path: "/shop/suru/surumac",
                        language: "en",
                        translationKey: "surumac",
                        categories: ["machines"],
                        price: 5000,
                        bannerImage: "/productsFiles/suru/imgs/suru_img_surumac_001.png",
                        type: "machine",
                    },
                ],
            },
        ],
    },
    {
        name: "naointendo",
        subtitle: "Controle de Portão",
        description: "Uma reinterpretação de um clássico do console, agora disponível para controlar o que você quiser dentro de sua casa!",
        path: "/shop/nintendo-gate-control",
        language: "en",
        translationKey: "nintendo-gate-control",
        categories: ["eletrônicos"],
        price: 240, // Você precisa fornecer o preço real
        bannerImage: "/productsFiles/naointendo/imgs/naointendo_img_banner_512.png",
        imageGroups: [
            {
                name: "Press Kit",
                images: [
                    "/productsFiles/naointendo/imgs/naointendo_img_product_001.png",
                    "/productsFiles/naointendo/imgs/naointendo_img_product_001_top.png",
                    "/productsFiles/naointendo/imgs/naointendo_img_product_001_isometric_001.png",
                    "/productsFiles/naointendo/imgs/naointendo_img_product_001_isometric_002.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "UNVRS",
        subtitle: "Roupas Alternativas",
        description: "Uma marca de roupas para quem gosta de ilustrações ousadas.",
        path: "/shop/unvrs",
        language: "en",
        translationKey: "unvrs",
        categories: ["roupas"],
        price: 150, // Você precisa fornecer o preço
        bannerImage: "/productsFiles/unvrs/imgs/unvrs_img_banner_512.png",
        imageGroups: [
            {
                name: "Ilustrações",
                images: [
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                    "/productsFiles/unvrs/imgs/unvrs_img_ilustration_001.png",
                ],
                layout: "1-col",
            },
            {
                name: "Roupas",
                images: ["/productsFiles/unvrs/imgs/unvrs_img_cloth_001.png"],
                layout: "1-col",
            },
        ],
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
        bannerImage: "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_banner_512.png",
        imageGroups: [
            {
                name: "Visual Identity",
                images: [
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_001.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_002.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_003.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_004.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_005.png",
                ],
                layout: "1-col",
            },
            {
                name: "Packaging",
                images: [
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_001.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_002.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_003.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_004.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_005.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_006.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_007.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_008.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/rewave/imgs/rewave_img_banner_512.png",
        imageGroups: [
            {
                name: "Marketing",
                images: [
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_001.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_002.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_003.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_004.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_005.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_006.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_007.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_008.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_009.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_010.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_011.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_012.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_013.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_014.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_015.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_016.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_017.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_018.png",
                ],
                layout: "3-col",
            },
            {
                name: "Catalogue",
                images: [
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_001.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_002.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_003.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_004.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_005.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_006.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_007.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_008.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_009.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_010.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_011.png",
                ],
                layout: "1-col",
            },
            {
                name: "Plastic Plates",
                images: [
                    "/projectsFiles/rewave/imgs/rewave_img_placas_001.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_002.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_003.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_004.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_005.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_006.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_007.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_008.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_009.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_010.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_011.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_012.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_013.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_014.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_015.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_016.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_017.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_018.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_019.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_020.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_021.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_022.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_023.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_024.png",
                ],
                layout: "3-col",
            },
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
        bannerImage: "/projectsFiles/human-robotics/imgs/human_robotics_img_banner_512.png",
        imageGroups: [
            {
                name: "Branding",
                images: [
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_001.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_002.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_003.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_004.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_005.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_006.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_007.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_008.png",
                ],
                layout: "1-col",
            },
            {
                name: "Website",
                images: [
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_website_001.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_website_002.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_website_003.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/floar/imgs/floar_img_banner_512.png",
        imageGroups: [
            {
                name: "Visual Identity",
                images: [
                    "/projectsFiles/floar/imgs/floar_img_idv_001.png",
                    "/projectsFiles/floar/imgs/floar_img_idv_002.png",
                    "/projectsFiles/floar/imgs/floar_img_idv_003.png",
                    "/projectsFiles/floar/imgs/floar_img_idv_004.png",
                    "/projectsFiles/floar/imgs/floar_img_idv_005.png",
                ],
                layout: "1-col",
            },
            {
                name: "Applications",
                images: [
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_001.png",
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_002.png",
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_003.png",
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_004.png",
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_005.png",
                ],
                layout: "1-col",
            },
            {
                name: "Website",
                images: [
                    "/projectsFiles/floar/imgs/floar_img_website_001.png",
                    "/projectsFiles/floar/imgs/floar_img_website_002.png",
                    "/projectsFiles/floar/imgs/floar_img_website_003.png",
                    "/projectsFiles/floar/imgs/floar_img_website_004.png",
                    "/projectsFiles/floar/imgs/floar_img_website_005.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Full Jazz",
        subtitle: "Music and Cuisine",
        description: "A sophisticated restaurant, a stage for renowned and incredibly talented artists.",
        path: "/projects/full-jazz",
        language: "en",
        translationKey: "full-jazz",
        categories: ["audiovisual"],
        bannerImage: "/projectsFiles/full-jazz/imgs/full_jazz_img_banner_512.png",
        imageGroups: [
            {
                name: "Drink Photographs",
                images: [
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_001.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_002.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_003.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_004.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_005.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_006.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_007.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_008.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_009.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_010.png",
                ],
                layout: "1-col",
            },
            {
                name: "Food Photographs",
                images: [
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_001_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_001_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_001_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_002_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_002_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_002_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_003_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_003_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_003_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_004_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_004_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_004_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_005_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_005_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_005_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_006_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_006_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_006_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_007_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_007_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_007_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_008_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_008_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_008_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_009_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_009_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_009_C.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/aoba/imgs/aoba_img_banner_512.png",
        imageGroups: [
            {
                name: "Service Design",
                images: [
                    "/projectsFiles/aoba/imgs/aoba_img_app_001.png",
                    "/projectsFiles/aoba/imgs/aoba_img_app_002.png",
                    "/projectsFiles/aoba/imgs/aoba_img_app_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Graphic Design",
                images: [
                    "/projectsFiles/aoba/imgs/aoba_img_asset_001.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_002.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_003.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_004.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_005.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_006.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_007.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_008.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_009.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_010.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_011.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_012.png",
                ],
                layout: "3-col",
            },
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
        bannerImage: "/projectsFiles/van-hack/imgs/van_hack_img_banner_512.png",
        imageGroups: [
            {
                name: "Graphic Design",
                images: [
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_01.png",
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_02.png",
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_03.png",
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_04.png",
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_05.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/taborda-lima/imgs/taborda_lima_img_banner_512.png",
        imageGroups: [
            {
                name: "Webdesign",
                images: [
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_001.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_002.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_003.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_004.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_005.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_006.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_007.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Calisto Advocacy",
        subtitle: "Law Firm",
        description: "A modern office focused on patent publication and digital rights.",
        path: "/projects/calisto-advocacy",
        language: "en",
        translationKey: "calisto-advocacy",
        categories: ["grapic-design", "branding"],
        bannerImage: "/projectsFiles/calisto/imgs/calisto_img_banner_512.png",
        imageGroups: [
            {
                name: "Visual Identity",
                images: [
                    "/projectsFiles/calisto/imgs/calisto_img_branding_000_A.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_000_B.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_001.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_002.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_003.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_004.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_005.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_006.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_007.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_008.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_009.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_010.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_011.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/colletive/imgs/colletive_img_banner_512.png",
        imageGroups: [
            {
                name: "Visual Identity",
                images: [
                    "/projectsFiles/colletive/imgs/colletive_img_logo_001.png",
                    "/projectsFiles/colletive/imgs/colletive_img_logo_002.png",
                    "/projectsFiles/colletive/imgs/colletive_img_logo_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Service Design",
                images: [
                    "/projectsFiles/colletive/imgs/colletive_img_branding_001.png",
                    "/projectsFiles/colletive/imgs/colletive_img_branding_002.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Jeremias",
        subtitle: "Craft Brewery",
        description: "A small brewery with the goal of making the most cheerful drinks in the region.",
        path: "/projects/jeremias",
        language: "en",
        translationKey: "jeremias",
        categories: ["illustration", "graphic-design"],
        bannerImage: "/projectsFiles/jeremias/imgs/jeremias_img_banner_512.png",
        imageGroups: [
            {
                name: "Graphic & Package Design",
                images: [
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_001.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_002.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_003.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_004.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_005.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_006.png",
                ],
                layout: "1-col",
            },
            {
                name: "Initial Ideas",
                images: ["/projectsFiles/jeremias/imgs/jeremias_img_ideacao_001.png"],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/komba/imgs/komba_img_banner_512.png",
        imageGroups: [
            {
                name: "Graphic & Package Design",
                images: [
                    "/projectsFiles/komba/imgs/comba_img_idv_001.png",
                    "/projectsFiles/komba/imgs/comba_img_idv_002.png",
                    "/projectsFiles/komba/imgs/comba_img_embalagem_001.png",
                    "/projectsFiles/komba/imgs/comba_img_embalagem_002.png",
                    "/projectsFiles/komba/imgs/comba_img_embalagem_003.png",
                    "/projectsFiles/komba/imgs/comba_img_embalagem_004.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/divas-house/imgs/divas_house_img_banner_512.png",
        imageGroups: [
            {
                name: "Visual Identity",
                images: [
                    "/projectsFiles/divas-house/imgs/divas_house_img_branding_001.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_branding_002.png",
                ],
                layout: "1-col",
            },
            {
                name: "Social Media",
                images: [
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_001.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_002.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_003.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_004.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_005.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_006.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_007.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_008.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_009.png",
                ],
                layout: "1-col",
            },
            {
                name: "Photography",
                images: [
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_001.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_002.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_003.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_004.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_005.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_006.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_007.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_008.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_009.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_010.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_011.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_012.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Cogu GO",
        subtitle: "Natural Products",
        description: "A store of organic food and psychotropic mushrooms.",
        path: "/projects/cogu-go",
        language: "en",
        translationKey: "cogu-go",
        categories: ["illustration", "graphic-design"],
        bannerImage: "/projectsFiles/cogu-go/imgs/cogugo_img_banner_512.png",
        imageGroups: [
            {
                name: "Visual Identity",
                images: ["/projectsFiles/cogu-go/imgs/cogugo_img_logo_001.png", "/projectsFiles/cogu-go/imgs/cogugo_img_logo_002.png"],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Central COPASOL",
        subtitle: "Food Cooperative",
        description: "A network of organic producers with a wide variety of projects located in Paraná.",
        path: "/projects/central-copasol",
        language: "en",
        translationKey: "central-copasol",
        categories: ["illustration", "graphic-design"],
        bannerImage: "/projectsFiles/central-copasol/imgs/copasol_img_banner_512.png",
        imageGroups: [
            {
                name: "Graphic Design",
                images: [
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_001.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_002.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_003.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_004.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_005.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_006.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_007.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_008.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_009.png",
                    "/projectsFiles/copasol/imgs/copasol_img_catalogo_010.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_011.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_012.png",
                ],
                layout: "1-col",
            },
            {
                name: "Photography",
                images: [
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_001.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_002.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_003.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_004.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_005.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Bem Bolado IV",
        subtitle: "Cultural Event",
        description: "An event for the promotion of original art and local culture.",
        path: "/projects/bem-bolado",
        language: "en",
        translationKey: "bem-bolado",
        categories: ["illustration", "graphic-design"],
        bannerImage: "/projectsFiles/bem-bolado/imgs/bem_bolado_img_banner_512.png",
        imageGroups: [
            {
                name: "Musicians",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_003.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_004.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_005.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_006.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_007.png",
                ],
                layout: "1-col",
            },
            {
                name: "Visual Artists",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_003.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_004.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_005.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_006.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_007.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_008.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_009.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_010.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_011.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_012.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_013.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_014.png",
                ],
                layout: "1-col",
            },
            {
                name: "Performance Artists",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_performances_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_performances_002.png",
                ],
                layout: "1-col",
            },
            {
                name: "Clothing and Other Items",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_003.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_004.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_005.png",
                ],
                layout: "1-col",
            },
            {
                name: "Partners",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_parceiros_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_parceiros_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_parceiros_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Experiences",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Old Archive",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_registro_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_registro_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_registro_003.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/pocket/imgs/pocket_img_banner_512.png",
        imageGroups: [
            {
                name: "Visual Identity & Graphic Design",
                images: [
                    "/projectsFiles/pocket/imgs/pocket_img_poster_001.png",
                    "/projectsFiles/pocket/imgs/pocket_img_poster_002.png",
                    "/projectsFiles/pocket/imgs/pocket_img_poster_003.png",
                    "/projectsFiles/pocket/imgs/pocket_img_poster_004.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_banner_512.png",
        imageGroups: [
            {
                name: "Branding & Identidade Visual",
                images: [
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_001.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_002.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_003.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_004.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_idv_005.png",
                ],
                layout: "1-col",
            },
            {
                name: "Embalagem",
                images: [
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_001.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_002.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_003.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_004.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_005.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_006.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_007.png",
                    "/projectsFiles/tropical-cacau/imgs/tropical_cacau_img_embalagem_008.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/rewave/imgs/rewave_img_banner_512.png",
        imageGroups: [
            {
                name: "Marketing",
                images: [
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_001.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_002.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_003.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_004.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_005.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_006.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_007.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_008.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_009.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_010.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_011.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_012.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_013.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_014.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_015.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_016.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_017.png",
                    "/projectsFiles/rewave/imgs/rewave_img_marketing_018.png",
                ],
                layout: "3-col",
            },
            {
                name: "Catálogo",
                images: [
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_001.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_002.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_003.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_004.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_005.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_006.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_007.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_008.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_009.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_010.png",
                    "/projectsFiles/rewave/imgs/rewave_img_catalogo_011.png",
                ],
                layout: "1-col",
            },
            {
                name: "Placas de Plástico",
                images: [
                    "/projectsFiles/rewave/imgs/rewave_img_placas_001.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_002.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_003.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_004.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_005.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_006.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_007.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_008.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_009.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_010.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_011.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_012.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_013.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_014.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_015.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_016.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_017.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_018.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_019.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_020.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_021.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_022.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_023.png",
                    "/projectsFiles/rewave/imgs/rewave_img_placas_024.png",
                ],
                layout: "3-col",
            },
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
        bannerImage: "/projectsFiles/human-robotics/imgs/human_robotics_img_banner_512.png",
        imageGroups: [
            {
                name: "Branding & Identidade Visual",
                images: [
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_001.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_002.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_003.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_004.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_005.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_006.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_007.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_branding_008.png",
                ],
                layout: "1-col",
            },
            {
                name: "Website",
                images: [
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_website_001.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_website_002.png",
                    "/projectsFiles/human-robotics/imgs/human_robotics_img_website_003.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/floar/imgs/floar_img_banner_512.png",
        imageGroups: [
            {
                name: "Branding & Identidade Visual",
                images: [
                    "/projectsFiles/floar/imgs/floar_img_idv_001.png",
                    "/projectsFiles/floar/imgs/floar_img_idv_002.png",
                    "/projectsFiles/floar/imgs/floar_img_idv_003.png",
                    "/projectsFiles/floar/imgs/floar_img_idv_004.png",
                    "/projectsFiles/floar/imgs/floar_img_idv_005.png",
                ],
                layout: "1-col",
            },
            {
                name: "Aplicações",
                images: [
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_001.png",
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_002.png",
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_003.png",
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_004.png",
                    "/projectsFiles/floar/imgs/floar_img_aplicacoes_005.png",
                ],
                layout: "1-col",
            },
            {
                name: "Website",
                images: [
                    "/projectsFiles/floar/imgs/floar_img_website_001.png",
                    "/projectsFiles/floar/imgs/floar_img_website_002.png",
                    "/projectsFiles/floar/imgs/floar_img_website_003.png",
                    "/projectsFiles/floar/imgs/floar_img_website_004.png",
                    "/projectsFiles/floar/imgs/floar_img_website_005.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Full Jazz",
        subtitle: "Música e Gastronomia",
        description: "Um restaurante sofisticado, palco para artistas renomados e incrivelmente talentosos.",
        path: "/projects/full-jazz",
        language: "pt-BR",
        translationKey: "full-jazz",
        categories: ["audiovisual"],
        bannerImage: "/projectsFiles/full-jazz/imgs/full_jazz_img_banner_512.png",
        imageGroups: [
            {
                name: "Fotografia dos Drinks",
                images: [
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_001.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_002.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_003.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_004.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_005.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_006.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_007.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_008.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_009.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_img_drinks_010.png",
                ],
                layout: "1-col",
            },
            {
                name: "Fotografia dos Pratos",
                images: [
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_001_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_001_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_001_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_002_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_002_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_002_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_003_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_003_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_003_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_004_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_004_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_004_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_005_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_005_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_005_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_006_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_006_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_006_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_007_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_007_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_007_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_008_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_008_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_008_C.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_009_A.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_009_B.png",
                    "/projectsFiles/full-jazz/imgs/full_jazz_prato_009_C.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/aoba/imgs/aoba_img_banner_512.png",
        imageGroups: [
            {
                name: "Design de Serviços",
                images: [
                    "/projectsFiles/aoba/imgs/aoba_img_app_001.png",
                    "/projectsFiles/aoba/imgs/aoba_img_app_002.png",
                    "/projectsFiles/aoba/imgs/aoba_img_app_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Branding e Identidade Visual",
                images: [
                    "/projectsFiles/aoba/imgs/aoba_img_asset_001.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_002.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_003.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_004.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_005.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_006.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_007.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_008.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_009.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_010.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_011.png",
                    "/projectsFiles/aoba/imgs/aoba_img_asset_012.png",
                ],
                layout: "3-col",
            },
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
        bannerImage: "/projectsFiles/van-hack/imgs/van_hack_img_banner_512.png",
        imageGroups: [
            {
                name: "Design Gráfico",
                images: [
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_01.png",
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_02.png",
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_03.png",
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_04.png",
                    "/projectsFiles/van-hack/imgs/van_hack_img_book_05.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/taborda-lima/imgs/taborda_lima_img_banner_512.png",
        imageGroups: [
            {
                name: "Webdesign",
                images: [
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_001.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_002.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_003.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_004.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_005.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_006.png",
                    "/projectsFiles/taborda-lima/imgs/taborda_lima_img_website_007.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Calisto Advocacy",
        subtitle: "Escritório de Advocacia",
        description: "Um escritório moderno focado em publicação de patentes e direitos digitais.",
        path: "/projects/calisto-advocacy",
        language: "pt-BR",
        translationKey: "calisto-advocacy",
        categories: ["Design Gráfico", "Branding"],
        bannerImage: "/projectsFiles/calisto/imgs/calisto_img_banner_512.png",
        imageGroups: [
            {
                name: "Identidade Visual",
                images: [
                    "/projectsFiles/calisto/imgs/calisto_img_branding_000_A.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_000_B.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_001.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_002.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_003.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_004.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_005.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_006.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_007.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_008.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_009.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_010.png",
                    "/projectsFiles/calisto/imgs/calisto_img_branding_011.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/colletive/imgs/colletive_img_banner_512.png",
        imageGroups: [
            {
                name: "Identidade Visual",
                images: [
                    "/projectsFiles/colletive/imgs/colletive_img_logo_001.png",
                    "/projectsFiles/colletive/imgs/colletive_img_logo_002.png",
                    "/projectsFiles/colletive/imgs/colletive_img_logo_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Design de Serviço",
                images: [
                    "/projectsFiles/colletive/imgs/colletive_img_branding_001.png",
                    "/projectsFiles/colletive/imgs/colletive_img_branding_002.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Jeremias",
        subtitle: "Cervejaria Artesanal",
        description: "Uma pequena cervejaria com o objetivo de fazer as bebidas mais alegres da região.",
        path: "/projects/jeremias",
        language: "pt-BR",
        translationKey: "jeremias",
        categories: ["Ilustração", "Design Gráfico"],
        bannerImage: "/projectsFiles/jeremias/imgs/jeremias_img_banner_512.png",
        imageGroups: [
            {
                name: "Design Gráfico e de Embalagem",
                images: [
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_001.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_002.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_003.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_004.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_005.png",
                    "/projectsFiles/jeremias/imgs/jeremias_img_ilustra_006.png",
                ],
                layout: "1-col",
            },
            {
                name: "Ideias Iniciais",
                images: ["/projectsFiles/jeremias/imgs/jeremias_img_ideacao_001.png"],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/komba/imgs/komba_img_banner_512.png",
        imageGroups: [
            {
                name: "Design de Embalagem e Gráfico",
                images: [
                    "/projectsFiles/komba/imgs/comba_img_idv_001.png",
                    "/projectsFiles/komba/imgs/comba_img_idv_002.png",
                    "/projectsFiles/komba/imgs/comba_img_embalagem_001.png",
                    "/projectsFiles/komba/imgs/comba_img_embalagem_002.png",
                    "/projectsFiles/komba/imgs/comba_img_embalagem_003.png",
                    "/projectsFiles/komba/imgs/comba_img_embalagem_004.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/divas-house/imgs/divas_house_img_banner_512.png",
        imageGroups: [
            {
                name: "Identidade Visual",
                images: [
                    "/projectsFiles/divas-house/imgs/divas_house_img_branding_001.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_branding_002.png",
                ],
                layout: "1-col",
            },
            {
                name: "Mídias Sociais",
                images: [
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_001.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_002.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_003.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_004.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_005.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_006.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_007.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_008.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_social_media_009.png",
                ],
                layout: "1-col",
            },
            {
                name: "Fotografia",
                images: [
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_001.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_002.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_003.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_004.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_005.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_006.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_007.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_008.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_009.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_010.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_011.png",
                    "/projectsFiles/divas-house/imgs/divas_house_img_fotografia_012.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Cogu GO",
        subtitle: "Produtos Naturais",
        description: "Uma loja de alimentos orgânicos e cogumelos psicotrópicos.",
        path: "/projects/cogu-go",
        language: "pt-BR",
        translationKey: "cogu-go",
        categories: ["Ilustração", "Design Gráfico"],
        bannerImage: "/projectsFiles/cogu-go/imgs/cogugo_img_banner_512.png",
        imageGroups: [
            {
                name: "Identidade Visual",
                images: ["/projectsFiles/cogu-go/imgs/cogugo_img_logo_001.png", "/projectsFiles/cogu-go/imgs/cogugo_img_logo_002.png"],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Central COPASOL",
        subtitle: "Cooperativa de Alimentos",
        description: "Uma rede de produtores orgânicos com uma ampla variedade de projetos localizados no Paraná.",
        path: "/projects/central-copasol",
        language: "pt-BR",
        translationKey: "central-copasol",
        categories: ["Ilustração", "Design Gráfico"],
        bannerImage: "/projectsFiles/central-copasol/imgs/copasol_img_banner_512.png",
        imageGroups: [
            {
                name: "Design Gráfico",
                images: [
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_001.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_002.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_003.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_004.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_005.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_006.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_007.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_008.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_009.png",
                    "/projectsFiles/copasol/imgs/copasol_img_catalogo_010.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_011.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_catalogo_012.png",
                ],
                layout: "1-col",
            },
            {
                name: "Fotografia",
                images: [
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_001.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_002.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_003.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_004.png",
                    "/projectsFiles/central-copasol/imgs/copasol_img_fotografia_005.png",
                ],
                layout: "1-col",
            },
        ],
    },
    {
        name: "Bem Bolado",
        subtitle: "Evento Cultural",
        description: "Um evento para a promoção da arte original e da cultura local.",
        path: "/projects/bem-bolado",
        language: "pt-BR",
        translationKey: "bem-bolado",
        categories: ["Ilustração", "Design Gráfico"],
        bannerImage: "/projectsFiles/bem-bolado/imgs/bem_bolado_img_banner_512.png",
        imageGroups: [
            {
                name: "Músicos",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_003.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_004.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_005.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_006.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_bandas_007.png",
                ],
                layout: "1-col",
            },
            {
                name: "Artistas Visuais",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_003.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_004.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_005.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_006.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_007.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_008.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_009.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_010.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_011.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_012.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_013.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_artistas_014.png",
                ],
                layout: "1-col",
            },
            {
                name: "Artistas Performáticos",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_performances_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_performances_002.png",
                ],
                layout: "1-col",
            },
            {
                name: "Vestimentas e outros Itens",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_003.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_004.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_005.png",
                ],
                layout: "1-col",
            },
            {
                name: "Parceiros",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_parceiros_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_parceiros_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_parceiros_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Experiências",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_roupas_acessorios_003.png",
                ],
                layout: "1-col",
            },
            {
                name: "Arquivo Antigo",
                images: [
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_registro_001.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_registro_002.png",
                    "/projectsFiles/bem-bolado/imgs/bem_bolado_img_registro_003.png",
                ],
                layout: "1-col",
            },
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
        bannerImage: "/projectsFiles/pocket/imgs/pocket_img_banner_512.png",
        imageGroups: [
            {
                name: "Identidade Visual e Design Gráfico",
                images: [
                    "/projectsFiles/pocket/imgs/pocket_img_poster_001.png",
                    "/projectsFiles/pocket/imgs/pocket_img_poster_002.png",
                    "/projectsFiles/pocket/imgs/pocket_img_poster_003.png",
                    "/projectsFiles/pocket/imgs/pocket_img_poster_004.png",
                ],
                layout: "1-col",
            },
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
    common: {
        addToCartBtn: "Add to Cart",
        contextBtn: "More Context",
    },
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
    cart: {
        cartTitle: "Wish Basket",
        emptyCartMessage: "Your basket is empty at the moment...",
        checkOutHelpTitle: "How the checkout works?",
        checkOutHelpParagraphs: [
            "The checkout is simple and secure.",
            "You just need to choose the your desired products and add them to the basket.",
            "Then, click on the basket icon and proceed to the checkout.",
            "When you click on the checkout button you will be redirected to our whatsapp chat to finish the purchase.",
        ],
        checkOutActionText: "Checkout Order",
        checkOutActionEmptyCartText: "Add items to your basket in order to checkout",
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
    common: {
        addToCartBtn: "Adicionar à cesta",
        contextBtn: "Mais Contexto",
    },
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
    cart: {
        cartTitle: "Cesto de Desejos",
        emptyCartMessage: "Seu cesto está vazio no momento...",
        checkOutHelpTitle: "Como os pedidos são efetuados?",
        checkOutHelpParagraphs: [
            "A efetuação dos pedidos é simples e fácil.",
            "Você apenas precisa escolher os produtos que deseja e adicioná-los ao cesto.",
            "Então, deve clicar no botão de efetuação de pedido.",
            "Quando você clicar neste botão, será redirecionado para uma conversa no whatsapp para finalizar a compra diretamente com os pragmatas.",
        ],
        checkOutActionText: "Efetuar Pedido",
        checkOutActionEmptyCartText: "Adicione itens ao cesto para efetuar o pedido",
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
