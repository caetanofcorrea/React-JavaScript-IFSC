import styles from './MeuComponenteCSS.module.css'

function MeuComponenteCSS() {
  return (
    <div>
      <h2 className={styles.title}>Título do meu componente</h2>
      <h2 style={{color: "purple", fontSize: "24px"}}> Teste de CSS Inline </h2>
    </div>
  )
}

export default MeuComponenteCSS
