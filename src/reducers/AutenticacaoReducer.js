const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: ''
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

    if (action.type === 'modifica_nome') {
        return { ...state, nome: action.payload };
    }

    return state;
};
