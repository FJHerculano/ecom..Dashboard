import { combineReducers} from 'redux';

const reducers = combineReducers({
    // talvez mudar por action só por formalidade
    root: (state, actions) => state || {}
});

export default reducers;