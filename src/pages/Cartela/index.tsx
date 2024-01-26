import Botao from "../../components/Botao";
import styles from "./Cartela.module.scss";
import { mudarTipoCartela } from "../../store/reducers/cartela";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"

export default function Cartela() {
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const resolverSelecao = (number: number) => {
  dispatch(mudarTipoCartela(number));
  setTimeout(() => {
    navigate("/jogo")
  }, 1000);
 }

 return (
  <div className={styles.container}>
   <span>Qual tipo de cartela de bingo você deseja usar?</span>
   <div className={styles.buttonContainer}>
    <Botao type="button" value={4} onClick={() => resolverSelecao(4)}>
     4
    </Botao>
    <Botao type="button" value={8} onClick={() => resolverSelecao(8)}>
     8
    </Botao>
    <Botao type="button" value={12} onClick={() => resolverSelecao(12)}>
     12
    </Botao>
    <Botao type="button" value={16} onClick={() => resolverSelecao(16)}>
     16
    </Botao>
   </div>
  </div>
 );
}
