const numeros = [10, 20, 30, 40, 50];

const [primeiro,,terceiro] = numeros;
console.log(primeiro);
console.log(terceiro);

const funcionario = {nome: "Eduardo", profissao:"Professor"}

const {profissao} = funcionario;
console.log(profissao);