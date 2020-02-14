import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import student from './students/saga';
import plans from './plans/saga';
import register from './register/saga';
import questions from './helporders/saga';

export default function* rootSaga() {
    return yield all([auth, user, student, plans, register, questions]);
}
