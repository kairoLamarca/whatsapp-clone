import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { conversasUsuarioFetch } from '../actions/AppActions';

class Conversas extends Component {

    componentWillMount() {
        this.props.conversasUsuarioFetch();
        console.log('componentWillMount', this.props.conversas);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps.conversas);
    }

    render() {
        return (
            <View>
                <Text>Conversas</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
        return { ...val, uid };
    });
    return {
        conversas
    };
};

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);
