export interface Products {
    id: number,
    names?: string,
    description?: string,
    brand?: string
    price: number,
    category?: string
}

export interface Cart {
    id: number,
    names?: string,
    description?: string,
    brand?: string,
    price: number,
    category?: string,
    quantity?: number
}