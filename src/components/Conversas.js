import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { conversasUsuarioFetch } from '../actions/AppActions';

class Conversas extends Component {

    componentWillMount() {
        this.props.conversasUsuarioFetch();
        this.criaFonteDeDados(this.props.conversas);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversas);
    }

    criaFonteDeDados(conversas) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(conversas);
    }

    renderRow(conversa) {
        return (
            <View><Text>{conversa.nome}</Text></View>
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />

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
