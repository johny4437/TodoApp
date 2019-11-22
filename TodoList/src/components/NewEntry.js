import React,{useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button} from 'react-native'
import {saveTodo} from '../services/Entries';




const NewEntry = ({navigation}) => {
   const entry = navigation.getParam('entry',{
        id:null,
        name:'johny',
        done:false,
    });

    const [task, setTask] =  useState(entry.name);

    const save = ()=>{

        const data = {
            task:task
        }
        console.log('NewEntry ::', data)
        saveTodo(data);
        onClose();
    };
    const onClose = ()=>{
        navigation.goBack();
    }
    return (
        <View>
            <Text style={styles.label}>Add Task</Text>
            <TextInput 
                onChangeText={text=> setTask(text)}
                value={task}
            ></TextInput>
            <Button title='Adicionar' onPress={save}></Button>
            <Button title='excluir'/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    label:{
        fontSize:22,
        fontWeight:'bold',
    }

});

export default NewEntry
