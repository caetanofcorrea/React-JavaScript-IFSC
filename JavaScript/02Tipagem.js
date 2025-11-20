//Exemplos tipagem dinãmica
let dados = 42;             //number
console.log(typeof dados);  //number

dados = "Olá, mundo";       //virou "String"
console.log(typeof dados);  //String

dados= true;                //virou "Boolean"
console.log(typeof dados);  //Boolean

dados = {nome: "João"};     // virou "Object"
console.log(typeof dados);  //Object

//Tipos primitivos
let numero = 123;        //number
let texto = "React";    //string
let ativo = true;       //boolean
let indefinido;         //undefined
let vazio = null;       //object (por padrão)
let grande = 123n;      //bigint
