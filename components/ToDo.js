import React, { Component, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Easing } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export class ToDo extends Component {
    state = {
        fadeInAnim: new Animated.Value(0),
        widenAnim: new Animated.Value(0),
    };

    interpolateWidth = this.state.widenAnim.interpolate({inputRange:[0,1],outputRange:['0%','100%']});

    componentDidMount() {
        this.fadeIn();
        this.widen();
    }

    fadeIn = () => {
        Animated.timing(this.state.fadeInAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    };

    widen = () => {
        Animated.spring(this.state.widenAnim, {
            toValue: 1,
            useNativeDriver: false
        }).start();
    };

    render() {

        // Destructure props
        const { id, desc, completed } = this.props;

        // Decides if the text should be shown with a lined-through effect
        let descStyle = completed ? [styles.component_todo_desc, styles.lined_through] : styles.component_todo_desc;

        return (
            <Animated.View style={{ opacity: this.state.fadeInAnim, width: this.interpolateWidth }}>
                <TouchableOpacity style={styles.component_todo} onPressIn={() => this.props.setAsCompleted(id)}>
                    {/* Main component ToDo div */}
                    <View style={{ flexDirection: "row", }}>
                        {/* Checkmark */}
                        <View style={styles.component_todo_checkmark_box} />
                        {completed ? <Text style={styles.component_todo_checkmark_check}>&#10003;</Text> : <Text />}

                        {/* Show desc text */}
                        <Text style={descStyle}>{desc}</Text>
                    </View>

                    {/* Delete button */}
                    <TouchableOpacity style={styles.component_todo_delete_button} onPressIn={() => this.props.remove(id)}>
                        <Entypo name="cross" size={48} color='rgb(90, 0, 0)' style={{textAlign:'center'}} />
                    </TouchableOpacity>

                </TouchableOpacity>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({

    component_todo: {
        width: '100%',
        height: 75,

        backgroundColor: 'rgba(100,100,100,0.5)',

        borderColor: 'rgba(75,75,75,0.5)',
        borderWidth: 1,
        borderRadius: 5,

        marginTop: 5,
        marginRight: 40,

        flexDirection: "row",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,

    },
    component_todo_checkmark_check: {
        fontSize: 50,
        color: "#000",

        left: 5,
        top: -3,

        position: 'absolute'
    },

    component_todo_checkmark_box: {

        width: 35,
        height: 35,
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: 6,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: "#ccc",
        borderColor: 'rgba(50,50,50,0.75)',

    },

    component_todo_desc: {
        // "fontSize": 12,
        color: '#000',
        paddingLeft: 10,
        marginTop: "auto",
        marginBottom: "auto"
    },

    lined_through: {
        textDecorationLine: "line-through",
    },

    component_todo_delete_button: {
        width: 40,
        height: '102.7%',
        backgroundColor: "rgb(224, 0, 0)",

        borderWidth: 1,
        borderColor: 'rgba(25,25,25,0.5)',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

        marginLeft: 'auto',
        marginRight: -1,
        marginTop: -1,
        marginBottom: 'auto',

        alignItems: 'center',
        justifyContent: 'center',


    }
});


export default ToDo


