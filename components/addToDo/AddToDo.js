import React, { Component } from 'react'
import Button_RoundWithIcon from '../Button_RoundWithIcon';
import AddToDo_Menu from './AddToDo_Menu';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export class AddToDo_Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showMenu: false,
            todoDesc: ""
        }
    }

    // Shows the Add ToDo
    setMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    // Sets the new ToDos desc
    setToDoDesc = desc => {
        this.setState({
            todoDesc: desc
        });
    }

    // Adds a new ToDo (as long as something is written)
    addToDo = () => {
        //Only add the new todo if there is something written
        if (this.state.todoDesc.length !== 0) this.props.addToDo(this.state.todoDesc);

        // Update state
        this.setState({
            showMenu: false,
            todoDesc: ""
        })
    }

    render() {

        if (this.state.showMenu) {
            return (
                <View style={styles.component_addtodo}>
                    {/* Shows "Button - Open menu" or the "Add New ToDo Menu" */}
                    <AddToDo_Menu clickHandler={this.setMenu} setDesc={this.setToDoDesc} addToDo={this.addToDo} />
                </View>
            )

        } else {
            return (
                <View style={{position:'absolute', bottom: 60, right: 5 }}>
                    <Button_RoundWithIcon icon="plus" size={48} backgroundColor="rgb(0, 231, 0)" symbolColor="rgb(0, 50, 0)" clickHandler={this.setMenu} />
                </View>
            )
        }


    }
}

const styles = StyleSheet.create({
    component_addtodo: {
        width: '100%',
        height: 90,

        left: 0,
        bottom: 0,

        flexDirection: 'row',

    }
});

export default AddToDo_Main
