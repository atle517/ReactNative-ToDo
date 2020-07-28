import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Header extends Component {
    render() {
        return (
            <View style={styles.fixed_footer}>
                <Text style={styles.text_style}>Created by Atle M. Lund</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fixed_footer: {
        width: '100%',
        height: '6%',
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        position: 'relative',

        zIndex: 2,

        bottom: 0,

        textAlign: 'center'
    },

    text_style: {
        color: '#fff',
        fontSize: 16,

        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }


})

export default Header
