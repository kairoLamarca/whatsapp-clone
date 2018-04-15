import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

class Contatos extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
    }

    render() {
        return (
            <View>
                <Text>Contatos</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid };
    });
    console.log(contatos);
    return {};
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);
