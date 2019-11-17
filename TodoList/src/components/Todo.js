import React,{useState}from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity, FlatList} from 'react-native'

import {saveTodo} from '../services/Entries';

const Todo = () => {
    const [task, updateTask] = useState('');
    const [todos, updateTodos] = useState([]);
    const show = ()=>{
        updateTodos([...todos, task]);
        updateTask('');
        
    };


    const save = () =>{
        saveTodo();
    };
const handelRenderTask =({item}) =><Text>{item}</Text>;
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.label}>Task App</Text>
            <FlatList
                data={todos}
                keyExtractor={item => item}
                renderItem={handelRenderTask}
            >

            </FlatList>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={save} style={styles.button}>
                <Text>+</Text>
            </TouchableOpacity>
            <TextInput onChangeText={text =>updateTask(text) } value={task} style={styles.textInput}></TextInput>
        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },

    header:{
        alignItems:'center',
    },
    label:{
        alignItems:'center',
        fontSize:20,
        fontWeight:'bold',

    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10,
        borderTopColor:'#2c3e50'

    },

    textInput:{
        backgroundColor:'#2c3e50',
    },
    button:{
        bottom:0,
        height:90,
        width:90,
        alignItems:'center',
        padding:35,
        borderRadius:90,
        left:170,
        backgroundColor:'#8e44ad'

    }
})
export default Todo
