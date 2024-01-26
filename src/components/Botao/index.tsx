import styles from "./Botao.module.scss"

interface IButton {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?:(() => number | void | undefined) | undefined;
    children?: React.ReactNode;
    value?: number | undefined;
}

export default function Botao({ onClick, type, children, value }: IButton) {
    return (
        <button type={type} className={styles.botao} value={value} onClick={onClick}>
            {children}
        </button>
    )
}