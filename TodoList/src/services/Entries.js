import {getRealm} from './Realm';


export const getTodo =  async ()=>{
    const realm = await getRealm();

    const entries = realm.objects('Todo');

    console.log('getTodo :: entries', entries);

    return entries;
};

export const saveTodo = async value =>{

    const realm = await getRealm();
   let data={}
   const{task}=value;

    try {
        realm.write(()=>{
            data = {
               id:'ABC',
               name:task,
               done:false,
           };
   
           realm.create('Todo', data, true );
       });
   
       console.log(data);
   
    } catch (error) {
        console.error('saveTodo:: error on save object'+ JSON.stringify(this.data));
    }
  
    return data;
};