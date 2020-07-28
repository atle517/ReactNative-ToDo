import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDo from './components/ToDo';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      todos: this.createTodos()
    }
  }

  createTodos() {
    return [
      {
        id: 0,
        desc: 'Do the dishes',
        completed: false
      },
      {
        id: 1,
        desc: 'Laundry',
        completed: false
      },
      {
        id: 2,
        desc: 'Sleep',
        completed: false
      },
    ]


  }

  render() {
    return (
      // Body container
      <View style={styles.body} >
        <StatusBar style="inverted" />
        <Header />

        {/* Main  */}
        <ScrollView style={styles.wrapper}>

          {/* Shows all todos from state.todos */}
          {this.state.todos.map(toDo => {
            return <ToDo key={toDo.id} id={toDo.id} desc={toDo.desc} completed={toDo.completed} setAsCompleted={this.setAsCompleted} remove={this.removeToDo} />
          })}


        </ScrollView>

        <Footer />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: 'rgb(153, 153, 153)'
  },

  wrapper: {
    width: '90%',

    marginLeft: 'auto',
    marginRight: 'auto',

    marginLeft: 'auto',
    marginRight: 'auto',

  },
});
