//declarar a variavel com let const ou var
const idade: number = 20;
// depois eu atribuo o nome, coloco ao lado do nome um ":" e depois passo o tipo dele atribuindo o valor

// =========================================================
// INTRODUCAO: TIPOS PRIMITIVOS EM TYPESCRIPT
// =========================================================

// 1. number (Para todos os tipos de numeros: inteiros e decimais)
// ----------------------------------------------------------------

let precoProduto: number = 15.90;
let quantidadeEstoque: number = 20;

console.log(`1. Preco: ${precoProduto}, Estoque: ${quantidadeEstoque}`)

// demonstracao de erro (TS evita isso em tempo de compilacao):
// precoProduto = "duzentos"; // Erro de tipagem: Type 'string' is not assignable to type 'number'.

// 2. String (Para todos os dados textuais)
// ---------------------------------------------------------

// Inferencia de tipo
// let cpf = 11111111111; // ele nota que o 
// cpf = "11111111111"; // Erro de tipagem: Type 'string' is not assignable to type 'number'.

let nomeUsuario: string = "Pedro";
let emailUsuario: string = "pedro@gmail.com";

// 3. boolean (Para valores logicos: true ou false)
// ---------------------------------------------------------

let isAdmin: boolean = true;
let isContaAtiva: boolean = true;
function checarPermissao(admin: boolean): string {
  return admin ? "Acesso total concedido." : "Aceso restrito."
}

console.log(`3. Permissao: ${checarPermissao(isAdmin)}`)

// 4. Void (Usado principalmente para funcoes que nao retornam nenhum valor)
// ---------------------------------------------------------

function somar(a:number, b:number) { // preciso inserir o tipo primitivo para isto dar certo pois se nao ficaria "Any"
  return a + b // Eu nao preciso falar que o resultado vai ser um numero pois o typescript ja entende isso com a inferencia de tipo (deducao)
}

function logarMensagem(msg: string): void {
  console.log(`4. [LOG] Mnesagem registrada: ${msg}`);
  // Esta funcao nao tem 'return' ou (retorna um 'return;'), por isso o tipo eh 'void'.
}

logarMensagem("Operacao concluida com sucesso")

// =========================================================
// TIPAGEM E RECURSOS ESSENCIAIS
// =========================================================

// 5. Inferencia de Tipo (Typescript deduz o tipo)
// ---------------------------------------------------------

// Voce nao precisa anotar, mas a tipagem eh mantida!

// O TS infere que 'pi' eh do tipo 'number'
let pi = 3.14159;
//pi = "erro" // Type 'string' is not assignable to typ 'number'

// O TS infere que 'cidade' eh do tipo 'string'
let cidade = "Sao Paulo";


// 6. Union Types (Tipos de Uniao) A variavel pode ser um OU outro tipo
// ---------------------------------------------------------

// A variavel 'id' pode ser um numero OU uma string.
let idProduto: number | string;

idProduto = 12345; // OK
idProduto = "PROD-ABC" // OK

let cpf: number | string;

cpf = 11111111111;
cpf = "111.111.111.11";

// ENUM ( Enumerados: Tipos de valor predefinidos ) = Union Types
let cargoDoFuncionario: "gerente" | "supervisor" | "funcionario";
cargoDoFuncionario = "gerente"
cargoDoFuncionario = "supervisor"
cargoDoFuncionario = "funcionario"
// cargoDoFuncionario = "estagiario" // Opa tu tinha me dito que eram so 3, nao me passou esse! = erro de typagem

// Any e Unknown = diferenca filosofica. Any = nao sei o valor do dado, Unknown = Nao sei mas irei descobrir. 