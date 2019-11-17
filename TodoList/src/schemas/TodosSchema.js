//AQUI DEFINE A SCHEMA

const ToDoSchema = {

    name:'Todo',
    primariKey:'id',
    properties:{
        id:'int',
        name:'string?',
        done:'bool'
    }

};

export default ToDoSchema;