import { createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '../../store';

export type AuthState = "SIGNED_OUT" | "SIGNED_IN" | "PENDING";

type StateType = {
    authState : AuthState | null ;
}

const initialState:StateType = {
    authState : "SIGNED_OUT"
}

const slice = createSlice({
    name: "autn",
    initialState,
    reducers: {
    clearAllState : () => {
        return initialState
    },
    login: (state) => {
        state.authState = "SIGNED_IN"
    },
    logout : (state) => {
        state.authState = "SIGNED_OUT"
    }
    }
});

export const getAuthState = () => useAppSelector((state) => state)
export const {clearAllState , login , logout} = slice.actions
export default slice.reducer