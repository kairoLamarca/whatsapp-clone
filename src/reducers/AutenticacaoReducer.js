const INITIAL_STATE = {
    nome: 'Kairo',
    email: 'kairo@teste.com',
    senha: '12345'
};

//exporta uma função
//a action importa os dados da action creator(AutenticacaoActions)
export default (state = INITIAL_STATE, action) => {
    if (action.type === 'modifica_email') {
        //evolui o estado da aplicação
        return { ...state, email: action.payload };
    }

    if (action.type === 'modifica_senha') {
        return { ...state, senha: action.payload };
    }
    return state;
};
