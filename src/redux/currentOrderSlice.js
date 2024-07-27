import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'currentOrder',
    initialState: {
        order: []
    },
    reducers: {
        addProduct(state, { payload }) {
            state.order = [...state.order, payload];
        },
        updateProduct(state, { payload }) {
            const price = state.order[payload.index].price;
            state.order[payload.index] = {
                ...state.order[payload.index],
                quantity: payload.quantity,
                amount: payload.quantity * price
            };
        }
    }
});

export const { addProduct, updateProduct } = slice.actions;
export const selectOrder = state => state.currentOrder;
export const currentOrderReducer = slice.reducer;