import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import students from './students/reducer';
import plans from './plans/reduce';

export default combineReducers({
    auth,
    user,
    plans,
    students,
});
