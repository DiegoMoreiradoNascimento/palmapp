import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { productsReducer } from './productsSlice';
import { currentOrderReducer } from './currentOrderSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        currentOrder: currentOrderReducer
    }
});
