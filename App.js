import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';
import Buttons from './components/Button'
import input from './components/input'
import Input from './components/input';

const HelloWorldApp = () => {
  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState([]);

  const whenTextChanges = () => {
    setTaskItems([...taskItems, task]);
    Keyboard.dismiss();
    setTask(null)

  }

  const onCompleteTask= (index)=> {
    let copytask= [...taskItems];
    copytask.splice(index, 1);
    setTaskItems(copytask);

  }

  return (
    <View style={style.container}>
      <View style={style.TaskWrapper}>

        <View style={style.designs}>
          <Text style={style.sectionTitle}>New tasks</Text>
          <TextInput
            multiline
            style={style.input}
            placeholder='   Add New Task'
            value={task}
            onChangeText={text => setTask(text)}
          />
          <Button title='Add New ' onPress={() => whenTextChanges()} />
        </View>
        <Text style={style.sectionTitle}>Today's Tasks</Text>

        <ScrollView>
        <View style={style.Items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity Key={index} onPress={()=> onCompleteTask(index)}>
                  <Task text= {item}  />
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>


        <View>

        </View>
        <View>
        </View>

      </View>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  TaskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'Black',
    marginBottom: 10,
    marginTop: 10,
  },
  Items: {
    marginLeft: 10,
    marginTop: 5,
  },
  inputTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'Black',
    marginBottom: 10,
    marginLeft: 10,
  },
  input: {
    marginLeft: '2%',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 30,
    borderTopEndRadius: 2,
    height: 40,
    borderColor: 'gray',
  },

}
)






export default HelloWorldApp;