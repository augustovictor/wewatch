import { combineReducers } from 'redux';
import ReducerRoom from './reducer_room';

const rootReducer = combineReducers({
    videoId: ReducerRoom
});

export default rootReducer;