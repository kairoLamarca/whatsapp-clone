import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO,
    ADICIONA_CONTATO_SUCESSO
} from './types';

export const modificaAdicionaContatoEmail = texto => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    };
};

export const adicionaContato = email => {

    return dispatch => {
        let emailB64 = b64.encode(email);

        // .on foca escutando
        // .once é somente uma vez
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    //email do contato que sera adicionado
                    const dadosUsuario = _.first(_.values(snapshot.val()));

                    //email do usuario autenticado
                    const { currentUser } = firebase.auth();
                    let emailUsuarioB64 = b64.encode(currentUser.email);

                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then(() => adicionaContatoSucesso(dispatch))
                        .catch(erro => adicionaContatoErro(erro.message, dispatch));

                } else {
                    dispatch(
                        {
                            type: ADICIONA_CONTATO_ERRO,
                            payload: 'E-mail informado não corresponde a um usuário válido!'
                        }
                    );
                }
            });
    };
};

const adicionaContatoErro = (erro, dispatch) => (
    dispatch(
        {
            type: ADICIONA_CONTATO_ERRO,
            payload: erro
        }
    )
);

const adicionaContatoSucesso = (dispatch) => (
    dispatch(
        {
            type: ADICIONA_CONTATO_SUCESSO
        }
    )
);
