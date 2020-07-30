import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default class Button_RoundWithIcon extends Component {

    render() {

        // Destructure prop
        const { icon, size, backgroundColor, symbolColor } = this.props;

        return (
            // Show Button
            <TouchableOpacity style={[styles.component_addtodo_button, {backgroundColor: backgroundColor}]} onPressIn={this.props.clickHandler}>
                <Entypo name={`${icon}`} size={size} color={symbolColor} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    component_addtodo_button: {

        borderRadius: 35,

        width: 70,
        height: 70,

        marginRight: 5,
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',

        alignItems: "center",
        justifyContent: "center",

        elevation: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
});
