import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IJogoProps {
 mudarEstadoBotao: boolean;

};

const initialState: IJogoProps = {
 mudarEstadoBotao: false
}

const jogoSlice = createSlice({
    name: 'jogo',
    initialState,
    reducers: {
        mudarEstadoBotao: (state, action: PayloadAction<boolean>) => {
            state.mudarEstadoBotao = !state.mudarEstadoBotao;
            console.log("Boolean:", state.mudarEstadoBotao);
        }
    }
});

export const { mudarEstadoBotao } = jogoSlice.actions;
export default jogoSlice.reducer;
