import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Todo from '../src/components/Todo';
import NewEntry from '../src/components/NewEntry';

const Routes =  createAppContainer (
    createSwitchNavigator(
        {
            Todo,
            NewEntry,
        },
        {
            initialRouteName:'Todo',
            backBehavior:'history'
        }
    )
);

export default Routes;