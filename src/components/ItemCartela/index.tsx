import { useSelector, useDispatch } from "react-redux";
import styles from "./ItemCartela.module.scss";
import RootState from "../../store/RootState";
import { mudarEstadoBotao } from "../../store/reducers/jogo";

interface IitemCartela {
 numeroRandomico: number;
 qtdQuadrados: number;
}

export default function ItemCartela({
 numeroRandomico,
 qtdQuadrados,
}: IitemCartela) {

 const dispatch = useDispatch();
 const selecionado = useSelector(
  (state: RootState) => state.jogo.mudarEstadoBotao
 );
 const tipoClassName = "itemCartelax" + qtdQuadrados;

 function alterarBooleano(){
    dispatch(mudarEstadoBotao(!selecionado))
 }

 return (
  <div className={styles.containerItemCartela}>
   <button
    type="button"
    className={styles[`${tipoClassName}`]}
    disabled={selecionado}
    onClick={alterarBooleano}
   >
    {numeroRandomico}
   </button>
  </div>
 );
}
