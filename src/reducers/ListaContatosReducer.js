import { LISTA_CONTATO_USUARIO } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {        
        case LISTA_CONTATO_USUARIO:
            return action.payload;
        default:
            return state;
    }
};
