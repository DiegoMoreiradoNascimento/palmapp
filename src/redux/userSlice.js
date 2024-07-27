import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: '',
        logged: false,
    },
    reducers: {
        changeUser(state, { payload }) {
            return { ...state, id: payload.id, name: payload.name, logged: true }
        },
        logout(state) {
            return { ...state, id: 0, name: '', logged: false };
        }
    }
});

export const { changeUser, logout } = slice.actions;
export const selectUser = state => state.user;
export const userReducer = slice.reducer;