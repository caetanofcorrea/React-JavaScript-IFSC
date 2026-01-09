import { useState } from 'react';
import './App.css';

function App() {
  const alunos = [
    {nome: "Eduardo Gomes", curso: "React", turma: "Turma 01"},
    {nome: "Maria Clara", curso: "Java", turma: "Turma 02"},
    {nome: "Carlos", curso: "Js", turma: "Turma 03"},
    {nome: "José", curso: "Go", turma: "Turma 04"},
  ]
  const [contador, setContador] = useState();
  function incrementarContador (){
    setContador(contador + 1);
  }

  return (
    <>
     {/* <h1>Fundamentos React</h1>
     <p>Seção para aprendermos os fundamentos do React</p>
    <img src="image.png" width="200px" alt="Logo Nintendo" /> 
    <MeuPrimeiroComponente/>
    <MeuPrimeiroComponente/> 
    <Renderizacao/> 
    <imagensReact/> 
    <Contador/>
    <CalculadoraMedia/>
    <MeuComponenteCSS/>
    <h2 className='title'>Teste de CSS</h2> 
    <MeuComponenteCSSDinamico/>
    <ListaExemplo/>
    <RenderizacaoCondicional/>
    {alunos.map((aluno, index) => (
        <Aluno key={index} props={aluno}/>
      ))}
      <Caixa>
        <h3>informação importante</h3>
        <p>Este componente mostra como usar o prop <code>children</code></p>
      </Caixa>*/}
      <h1>Você clicou {contador} vezes no botão</h1>
      <h1>{contador} </h1>
      <BotaoIncrementar funcao={incrementarContador}/>
    </>
       
  )
}

export default App
