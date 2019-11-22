import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import {getTodo} from '../services/Entries';

const Todo = ({navigation}) => {
    const [entries, setEntries]= useState([]);

    useEffect(()=>{

        async function loadTodo(){
            const data = await getTodo();
            setEntries(data);
        }
        loadTodo();
        console.log('Todo:: entries', JSON.stringify(entries));
    },[]);
    return (
        <View>
            <Text style={styles.container}>TodoApp</Text>
            <FlatList
            data={entries}
    renderItem={({item})=>(
            <View>
                <Text>{item.name}</Text>
                <Button title ='item' 
                onPress={()=>{
                    navigation.navigate('NewEntry', {entry:item})
                }}/>
            </View>
            )}
            />

            
            <Button title="Adicionar" onPress={()=> navigation.navigate('NewEntry')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    label:{
        fontSize:22,
        fontWeight:'bold',
    }
});

export default Todo;
