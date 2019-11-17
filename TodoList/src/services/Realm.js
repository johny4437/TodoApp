//CONEXÃO COM O DB..
import Realm from 'realm';
import ToDoSchema from '../schemas/TodosSchema';
export const getRealm = async ()=>{
    const realm =  await Realm.open({
        schema:[ToDoSchema],
        schemaVersion:1,
    });

    return realm;
}