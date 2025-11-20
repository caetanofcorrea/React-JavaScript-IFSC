function saudacao(nome){
    return "Olá, " +nome+"!"
}
console.log(saudacao("Eduardo"));

const saudacao2 = (nome) => "Olá, "+nome+"!"; //Caso haja mais de uma linha será necessário usar return
console.log(saudacao2("Lucas"));