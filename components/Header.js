import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Header extends Component {
    render() {
        return (
            <View style={styles.fixed_header}>
                <Text style={styles.text_style}>ToDo Application</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fixed_header: {
        width: '100%',
        height: 82,
        backgroundColor: '#333',
        display: 'flex',
        position: 'relative',
      
        zIndex: 2
    },

    text_style: {
        color:'#fff',
        fontSize: 28,

        textAlign: 'center',
        
        marginTop: 'auto',
        marginBottom: 5
    }

    
})

export default Header
