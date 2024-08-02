
export interface Product {
    id: number;
    name: string;
    maker: string;
    productWeight: string;
    dimensions: string;
    countryOrigin: string | null;
    modelNumber: number;
    color: string;
    material: string;
    partsCant: number;
    specialFeatures: string;
    componentsIncluded: string | null;
    urlImg: string;
    price: number;
    rate: number;
}
