import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDo from './components/ToDo';
import AddToDo from './components/addToDo/AddToDo';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.apiURL = "http://10.0.0.37:3000";

    this.state = {
      todos: []
    }

    // When the app starts, get todos from the database and set it to the state
    this.getTodos();
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

  getTodos() {
    fetch(`${this.apiURL}/todo`)
      .then(res => res.json())
      .then((data) => {

        let todos = data.data;

        // Convert 'completed' from 0's to bools
        for (let i = 0; i < todos.length; i++) {
          todos[i].completed = (todos[i].completed === 0) ? false : true;
        }

        // Set todos in the state
        this.setState({ todos })
      })
      .catch(console.log)
  }

  // Adds a new ToDo
  addToDo = desc => {
    fetch(`${this.apiURL}/todo?desc="${desc}"&completed=0`, { "method": "POST" })
      .then(res => res.json())
      .then((data) => {

        //Refresh ToDos
        this.getTodos();

      })
      .catch(console.log)

  }

  // Marks a ToDo as completed
  setAsCompleted = id => {
    // Get the selected todo
    let editedToDo = this.state.todos.find(todo => todo.id === id);

    // Flip the completed value and return it as a number
    editedToDo.completed = editedToDo.completed ? 0 : 1;

    fetch(`${this.apiURL}/todo?id=${editedToDo.id}&desc="${editedToDo.desc}"&completed=${editedToDo.completed}`, { "method": "PUT" })
      .then(res => res.json())
      .then((data) => {

        //Refresh ToDos
        this.getTodos();

      })
      .catch(console.log)
  }

  // Removes ToDo
  removeToDo = id => {
    fetch(`${this.apiURL}/todo/${id}`, { "method": "DELETE" })
      .then(res => res.json())
      .then((data) => {

        //Refresh ToDos
        this.getTodos();

      })
      .catch(console.log)
  }

  render() {
    return (
      // Body container
      <View style={styles.body} >
        <StatusBar style="auto" />
        <Header />

        {/* Main  */}
        <ScrollView style={styles.wrapper} contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false} >

          {/* Shows all todos from state.todos */}
          {this.state.todos.map(toDo => {
            return <ToDo key={toDo.id} id={toDo.id} desc={toDo.desc} completed={toDo.completed} setAsCompleted={this.setAsCompleted} remove={this.removeToDo} />
          })}

        </ScrollView>

        {/* Menu and button that allows user to add new ToDos */}
        <AddToDo addToDo={this.addToDo} />

        <Footer />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: '#ccc',
    
  },

  wrapper: {
    width: '95%',
    height: 100,

    marginLeft: 'auto',
    marginRight: 'auto',

    marginTop: 'auto',
    marginBottom: 5,

  },
});
