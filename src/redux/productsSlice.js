import { createSlice } from '@reduxjs/toolkit';

const data = {
    categories: [
        { id: 1, name: "Bebidas" },
        { id: 2, name: "Hamburgers" },
        { id: 3, name: "Batatas" },
        { id: 4, name: "Sobremesas" },
        { id: 5, name: "Sanduíches" }
    ],
    products: [
        { id: 1, name: "Coca-Cola", categoryId: 1, price: 3.50 },
        { id: 2, name: "Suco de Laranja", categoryId: 1, price: 4.00 },
        { id: 3, name: "Água Mineral", categoryId: 1, price: 2.00 },
        { id: 4, name: "Hamburger Clássico", categoryId: 2, price: 7.50 },
        { id: 5, name: "Hamburger com Queijo", categoryId: 2, price: 8.50 },
        { id: 6, name: "Hamburger Vegetariano", categoryId: 2, price: 9.00 },
        { id: 7, name: "Batata Frita Simples", categoryId: 3, price: 5.00 },
        { id: 8, name: "Batata Frita com Queijo", categoryId: 3, price: 6.50 },
        { id: 9, name: "Batata Doce Frita", categoryId: 3, price: 6.00 },
        { id: 10, name: "Sundae de Chocolate", categoryId: 4, price: 8.00 },
        { id: 11, name: "Shake de Morango", categoryId: 4, price: 7.50 },
        { id: 12, name: "Torta de Maçã", categoryId: 4, price: 10.00 },
        { id: 13, name: "Sanduíche de Frango", categoryId: 5, price: 9.00 },
        { id: 14, name: "Sanduíche de Atum", categoryId: 5, price: 8.50 },
        { id: 15, name: "Sanduíche Vegano", categoryId: 5, price: 10.50 },
        { id: 16, name: "Milkshake de Baunilha", categoryId: 1, price: 6.00 },
        { id: 17, name: "Café Expresso", categoryId: 1, price: 3.00 },
        { id: 18, name: "Salada Caesar", categoryId: 5, price: 11.00 },
        { id: 19, name: "Pizza Margherita", categoryId: 5, price: 12.00 }
    ],
    additionalCategory: [
        { id: 1, name: "Gelo Extra", categoryId: 1, price: 0.5 },
        { id: 2, name: "Limão Adicional", categoryId: 1, price: 1.0 },
        { id: 3, name: "Xarope de Baunilha", categoryId: 1, price: 1.5 },
        { id: 4, name: "Copo Grande", categoryId: 1, price: 2.0 },
        { id: 5, name: "Copo de Papel", categoryId: 1, price: 0.3 },
        { id: 6, name: "Bacon Extra", categoryId: 2, price: 2.5 },
        { id: 7, name: "Ovo Frito", categoryId: 2, price: 1.8 },
        { id: 8, name: "Queijo Gorgonzola", categoryId: 2, price: 3.0 },
        { id: 9, name: "Molho Especial", categoryId: 2, price: 1.5 },
        { id: 10, name: "Picles Adicionais", categoryId: 2, price: 1.0 },
        { id: 11, name: "Queijo Cheddar", categoryId: 3, price: 2.2 },
        { id: 12, name: "Molho BBQ", categoryId: 3, price: 1.5 },
        { id: 13, name: "Bacon Bits", categoryId: 3, price: 2.0 },
        { id: 14, name: "Molho Picante", categoryId: 3, price: 1.8 },
        { id: 15, name: "Creme de Alho", categoryId: 3, price: 1.0 },
        { id: 16, name: "Granulado de Chocolate", categoryId: 4, price: 0.7 },
        { id: 17, name: "Cobertura de Caramelo", categoryId: 4, price: 1.2 },
        { id: 18, name: "Nozes Trituradas", categoryId: 4, price: 1.5 },
        { id: 19, name: "Bola de Sorvete Extra", categoryId: 4, price: 2.0 },
        { id: 20, name: "Calda de Morango", categoryId: 4, price: 1.3 },
        { id: 21, name: "Guacamole", categoryId: 5, price: 2.5 },
        { id: 22, name: "Cebola Caramelizada", categoryId: 5, price: 1.8 },
        { id: 23, name: "Queijo de Cabra", categoryId: 5, price: 2.0 },
        { id: 24, name: "Tomate Seco", categoryId: 5, price: 1.5 },
        { id: 25, name: "Mostarda Dijon", categoryId: 5, price: 1.0 },
    ]
};


export const slice = createSlice({
    name: 'products',
    initialState: {
        data
    },
    reducers: {
        // changeUser(state, { payload }) {
        //     return { ...state, id: payload.id, name: payload.name, logged: true }
        // },
        // logout(state) {
        //     return { ...state, id: 0, name: '', logged: false };
        // }
    }
});

// export const { changeUser, logout } = slice.actions;
export const selectProducts = state => state.products;
export const productsReducer = slice.reducer;