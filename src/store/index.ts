import { configureStore } from "@reduxjs/toolkit";
import cartelaSlice from "./reducers/cartela";
import jogoSlice from "./reducers/jogo";

const store = configureStore({
    reducer: {
        cartelas: cartelaSlice,
        jogo: jogoSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;