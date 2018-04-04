import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';//Action Creators

const formCadastro = props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: 'center' }}>
            {/* O redux envio as propriedades por props */}
            <TextInput value={props.nome} placeholder="Nome" style={{ fontSize: 20, height: 45 }} onChangeText={texto => props.modificaNome(texto)} />
            <TextInput value={props.email} ceholder="E-mail" style={{ fontSize: 20, height: 45 }} onChangeText={texto => props.modificaEmail(texto)} />
            <TextInput value={props.senha} placeholder="Senha" style={{ fontSize: 20, height: 45 }} onChangeText={texto => props.modificaSenha(texto)} />
        </View>
        <View style={{ flex: 1 }}>
            <Button title="Cadastrar" color="#115E54" onPress={() => false} />
        </View>
    </View>
);

const mapStateToPros = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToPros, { modificaEmail, modificaSenha, modificaNome })(formCadastro);
