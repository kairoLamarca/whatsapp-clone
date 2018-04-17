import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Image, TouchableHighlight } from 'react-native';
import { modificaMensagem, enviarMensagem } from '../actions/AppActions';

class Conversa extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 50, backgroundColor: '#eee4dc', padding: 10 }}>
                <View style={{ flex: 1, paddingBottom: 20 }}></View>
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <TextInput
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
                    />

                    <TouchableHighlight onPress={() => this.props.enviarMensagem(this.props.mensagem)} underlayColor='$fff'>
                        <Image source={require('../imgs/enviar_mensagem.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return ({
        mensagem: state.AppReducer.mensagem
    });
};

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem })(Conversa);