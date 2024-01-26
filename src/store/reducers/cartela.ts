import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICartelaPropsState { 
    numero: number;
}

const initialState: ICartelaPropsState = {
    numero: 0,
}

const cartelaSlice = createSlice({
    name: 'cartela',
    initialState,
    reducers: {
        mudarTipoCartela: (state, action: PayloadAction<number>) => {
            state.numero = action.payload;
            console.log("Numero Cartela: ", state.numero);
            return state;
        }
    }
});

export const { mudarTipoCartela } = cartelaSlice.actions;

export default cartelaSlice.reducer;