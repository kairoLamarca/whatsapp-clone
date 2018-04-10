import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

const Conversas = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
const Contatos = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

export default class Principal extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Conversas' },
            { key: 'second', title: 'Contatos' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBarMenu {...props} />;

    _renderScene = SceneMap({
        first: Conversas,
        second: Contatos,
    });

    render() {
        return (
            <TabViewAnimated
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
