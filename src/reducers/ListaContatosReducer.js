const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    console.log('teste123', action.payload);

    switch (action.type) {
        default:
            return state;
    }
};
