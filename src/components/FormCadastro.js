import React, { Component } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
} from '../actions/AutenticacaoActions';//Action Creators

class formCadastro extends Component {

    _cadatraUsuario() {
        const nome = this.props.nome;
        const email = this.props.email;
        const senha = this.props.senha;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={require('../imgs/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        {/* O redux envio as propriedades por props */}
                        <TextInput
                            value={this.props.nome}
                            placeholder="Nome"
                            placeholderTextColor='#fff'
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={texto => this.props.modificaNome(texto)}
                        />
                        <TextInput
                            value={this.props.email}
                            placeholder="E-mail"
                            placeholderTextColor='#fff'
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            placeholder="Senha"
                            placeholderTextColor='#fff'
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            title="Cadastrar"
                            color="#115E54"
                            onPress={() => this._cadatraUsuario()}
                        />
                    </View>
                </View>
            </Image>
        );
    }
}

const mapStateToPros = state => {
    return (
        {
            nome: state.AutenticacaoReducer.nome,
            email: state.AutenticacaoReducer.email,
            senha: state.AutenticacaoReducer.senha
        }
    );
};

export default connect(
    mapStateToPros,
    {
        modificaEmail,
        modificaSenha,
        modificaNome,
        cadastraUsuario
    }
)(formCadastro);
