import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
    const { email, password } = payload;
    try {
        const response = yield call(api.post, 'session', { email, password });

        const { token, user } = response.data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        yield put(signInSucess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('FALHA NA AUTENTICAÇÂO');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    const { name, email, password } = payload;

    try {
        yield call(api.post, 'users', { name, email, password });

        toast.success('Conta criada com sucesso');

        history.push('/');
    } catch (err) {
        toast.error('Falha ao criar Conta');
        yield put(signFailure());
    }
}

export function signOut() {
    history.push('/');
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
    takeLatest('persist/REHYDRATE', setToken),
]);
