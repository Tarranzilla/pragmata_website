type Paragraph = {
    type: string;
    content: string;
};

type Image = {
    id: number;
    key: string;
    urlPath: string;

    name: string;
    description: string;
};

type Video = {
    id: number;
    key: string;
    urlPath: string;

    name: string;
    description: string;
    thumbnail: string;
};

type Object3D = {
    id: number;
    key: string;
    urlPath: string;

    name: string;
    description: string;
    thumbnail: string;
};

type Pdf = {
    id: number;
    key: string;
    urlPath: string;

    name: string;
    description: string;
    thumbnail: string;
};

type Media = Image | Video | Object3D | Pdf;

type MediaGroup = {
    name: string;
    layout: string;
    content: Media[];
};

type ProductCollection = {
    id: number;
    key: string;
    name: string;
    products: Product[];
};

type Product = {
    id: number;
    key: string;
    urlPath: string;

    categories: string[]; // Predefined categories
    tags: string[]; // Custom tags

    name: string;
    subname?: string;
    slogan?: string;

    title: string;
    subtitle: string;
    introduction: string;
    description: Paragraph[];
    pricing: {
        pounds?: number;
        usd?: number;
        eur?: number;
        real: number;
    };

    thumbnail: string;
    media?: {
        images?: MediaGroup[];
        videos?: MediaGroup[];
        objects3D?: MediaGroup[];
        pdfs?: MediaGroup[];
    };

    originDate: string;
    releaseDate: string;
    isReleased: boolean;
    isPromoted: boolean;

    updates?: string[];

    availableMaterials?: string[];
    availableSizes?: string[];
    availableColors?: string[];

    components?: Product[];
};

type Shop = {
    id: number;
    key: string;
    urlPath: string;

    name: string;
    subname?: string;
    slogan?: string;

    title: string;
    subtitle: string;
    introduction: string;
    description: Paragraph[];
    context: Paragraph[];

    thumbnail: string;
    media?: {
        images?: MediaGroup[];
        videos?: MediaGroup[];
        objects3D?: MediaGroup[];
        pdfs?: MediaGroup[];
    };

    collections: ProductCollection[];
    categories: string[];
    tags: string[];
};
