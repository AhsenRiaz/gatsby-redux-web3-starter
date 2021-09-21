import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {connectReducer} from "./counter-slice";

 const store = configureStore({ 
    reducer : {
        connectReducer : connectReducer,
    },
    middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck : false,
        immutableCheck : false,
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState >;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;