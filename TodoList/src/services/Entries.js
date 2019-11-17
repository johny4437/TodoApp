import {getRealm} from './Realm';
import Alert from   'react-native';

export const saveTodo = async ()=>{

    const realm = await getRealm();
    let data={};

    try {
        realm.write(()=>{
            data = {
               id:123,
               name:'samurai',
               done:false,
           };
   
           realm.create('Todo', data, true );
       });
   
       console.log(data);
   
    } catch (error) {
        Alert.alert('Erro ao salvar os dados...');
        console.error('saveTodo:: error on save object'+ JSON.stringify(this.data));
    }
  
    return data;
};