
function Renderizacao() {
    function renderizaInformacao(x){
        if (x){
            return(
                <h2>Verdadeira! Imprimo uma informação!</h2>
            )
        } else{
                return(
                    <h2>Falsa! Imprimo outra informação!</h2>
                )
            }
        }
  return (
    <div>
        {renderizaInformacao(true)}
        {renderizaInformacao(false)}
    </div>
  )
}


export default Renderizacao
