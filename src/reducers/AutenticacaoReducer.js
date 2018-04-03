const INITIAL_STATE = {
    nome: 'Kairo',
    email: 'kairo@teste.com',
    senha: '12345'
};

//exporta uma função
//a action importa os dados da action creator(AutenticacaoActions)
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    return state;
};
