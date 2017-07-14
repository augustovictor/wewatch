import _ from 'lodash';
import { CHANGE_URL } from '../actions';

export default (state = '', action) => {
    switch(action.type) {
        case CHANGE_URL: {
            return action.payload;
        }
        
        default:
            return state;
    }
}