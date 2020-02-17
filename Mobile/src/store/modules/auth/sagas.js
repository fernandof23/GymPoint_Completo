import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { id } = payload;
        console.tron.log(id);

        const response = yield call(api.get, `students/${id}`);

        yield put(signInSucess(response.data));
    } catch (err) {
        Alert.alert('Falha na autenticação', 'Favor Conferir e-mail e senha');
        yield put(signFailure());
    }
}

export function signOut() {
    // history.push('/');
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGNOUT', signOut),
]);
