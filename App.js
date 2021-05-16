import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

export default function App() {
  const [todos,setTodos] = useState([
    {text:'get coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play some games after',key:'3'},
  ])

  const removeTask = id =>{
    // const taskToDelete = todos.filter(task => task.key == id)[0]
    // alert(`This task will be removed : ${taskToDelete.text}`)
    setTodos((todos) => {
      return todos.filter(task => task.key != id)
    })
  }

  const createToDo = todo => {
    setTodos((prevTodos) => {
      return [
        {text:todo,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo createToDo={createToDo} />
        <View style={styles.list}>
          <FlatList 
          data={todos}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <TodoItem item={item} removeTask={removeTask}/>
          )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20,
  }
});
