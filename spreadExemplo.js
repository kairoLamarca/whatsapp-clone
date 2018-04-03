var frutas1 = ['Uva', 'Banana', 'Maracujá'];
var frutas2 = ['Melancia', 'Abacate', 'Pera', ...frutas1];

console.log(frutas2);

var valores = [10, 5, 7, 8];

function soma (a, b, c, d) {
	return a + b + c + d;
}

console.log(soma(...valores));

const state = {
	nome: 'Kairo',
  email: 'kairo@teste.com.br',
  senha: '123456'
};

const stateEvoluido = {
	...state,
	email: 'kairo@teste.com'
};

console.log(stateEvoluido);
