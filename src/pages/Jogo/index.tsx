import styles from "./Jogo.module.scss";
import RootState from "../../store/RootState";
import ItemCartela from "../../components/ItemCartela";
import { useSelector } from "react-redux";
import Botao from "../../components/Botao";

function Jogo() {
 const numero = useSelector((state: RootState) => state.cartelas.numero);
 const components = [];
 for (let i = 0; i < numero; i++) {
  components.push(
   <ItemCartela
    key={i}
    qtdQuadrados={numero}
    numeroRandomico={Math.floor(Math.random() * 100)}
   />
  );
 }

 return (
  <div className={styles.containerJogo}>
   <div className={styles.cartelaContainer}>
    <span>Cartela de Bingo</span>
    <div className={styles.containerItemCartelas}>{components}</div>
   </div>
   <div className={styles.formJogo}>
    <span>Começe o sorteio de números</span>
    <Botao type="button">Sortear</Botao>
   </div>
  </div>
 );
}

export default Jogo;
