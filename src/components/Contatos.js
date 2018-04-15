import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

class Contatos extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            fonteDeDados: ds.cloneWithRows([
                'Registro 1',
                'Registro 2',
                'Registro 3',
                'Registro 4'
            ])
        }
    }

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        console.log('Recuperado via props', this.props.contatos);
    }

    //executa sempre que tem alteração nas props
    componentWillReceiveProps(nextProps) {
        console.log('recuperado via props após update', nextProps.contatos);
    }

    render() {
        return (
            <ListView
                dataSource={this.state.fonteDeDados}
                renderRow={data => <View><Text>{data}</Text></View>}
            />
        );
    }
}

const mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid };
    });
    console.log(contatos);
    return { contatos };
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);
