import cartelaRuducer from "./reducers/cartela";
import jogoReducer from "./reducers/jogo"

type RootState = {
    cartelas: ReturnType<typeof cartelaRuducer>;
    jogo: ReturnType<typeof jogoReducer>;
}

export default RootState;