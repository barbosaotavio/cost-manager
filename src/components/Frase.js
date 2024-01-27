import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>este é um compomente com uma frase!</p>
        </div>
    )
}

export default Frase