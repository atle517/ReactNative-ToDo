import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


export class ToDo extends Component {

    render() {

        // Destructure props
        const { id, desc, completed } = this.props;

        // Decides if the text should be shown with a lined-through effect
        let descStyle = completed ? [styles.component_todo_desc, styles.lined_through] : styles.component_todo_desc;

        return (
            <View>

                {/* Main component ToDo div */}
                <TouchableOpacity style={styles.component_todo} onClick={() => this.props.setAsCompleted(id)}>
                    {/* Checkmark */}
                    <View style={styles.component_todo_checkmark_box} />
                    {completed ? <Text style={style.component_todo_checkmark_check}>&#10003;</Text> : <Text />}

                    {/* Show desc text */}
                    <Text adjustsFontSizeToFit style={descStyle}>{desc}</Text>
                </TouchableOpacity>

                {/* Delete button */}
                <TouchableOpacity style={styles.component_todo_delete_button} onClick={() => this.props.remove(id)}>
                    <Text style={{ textAlign:"center", color: "rgb(80, 0, 0)",fontSize: 24, marginTop:'auto', marginBottom:'auto' }}>&#10006;</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    component_todo: {
        borderWidth: 1,

        height: 75,

        borderRadius: 5,

        elevation: 5,
        backgroundColor: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(195,195,195,1) 100%, rgba(78,78,78,1) 100%)',

        marginTop: 5,
        marginRight: 40,

        display: 'flex',

        flexDirection: "row",

    },
    component_todo_checkmark_check: {
        width: 40,
        height: 40,

        fontSize: 50,

        paddingLeft: 5,

        position: 'absolute'
    },

    component_todo_checkmark_box: {
        "width": 35,
        "height": 35,
        "marginTop": "auto",
        "marginBottom": "auto",
        "marginLeft": 6,
        "borderWidth": 1,
        "borderRadius": 3,
        "backgroundColor": "linear-gradient(140deg, rgb(235, 235, 235) 0%, rgba(180,180,180,1) 100%)",
        // "boxShadow": "inset 1px 1px 3px #333"
    },
    "component_todo_desc": {
        // "fontSize": 12,
        "paddingLeft": 10,
        "marginTop": "auto",
        "marginBottom": "auto"
    },
    "lined_through": {
        "textDecorationLine": "line-through"
    },
    "component_todo_delete_button": {
        "marginLeft": "auto",
        "marginRight": 0,
        "marginTop": -75,
        "width": 40,
        "height": 75,
        "backgroundColor": "linear-gradient(140deg, rgba(255,0,0,1) 0%, rgba(92,0,0,1) 100%)",
        "fontSize": 32,
        
        "display": "flex",
        "borderWidth": 1,
        "borderRadius": 5,
        elevation: 5
    }
});


export default ToDo


