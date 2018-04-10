const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: ''
};

//exporta uma função
//a action importa os dados da action creator(AutenticacaoActions)
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'modifica_email':
            return { ...state, email: action.payload };
        case 'modifica_senha':
            return { ...state, senha: action.payload };
        case 'modifica_nome':
            return { ...state, nome: action.payload };
        case 'cadastro_usuario_erro':
            return { ...state, erroCadastro: action.payload };
        case 'cadastro_usuario_sucesso':
            return { ...state, nome: '', senha: '' };
        case 'login_usuario_erro':
            return { ...state, erroLogin: action.payload };
        default:
            return state;
    }    
};
