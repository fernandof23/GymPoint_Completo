import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { loadRegisterSucess, registerFailured } from './actions';

export function* loadRegister() {
    try {
        const response = yield call(api.get, 'registration');

        yield put(loadRegisterSucess(response.data));
    } catch (err) {
        toast.error('Falha ao carregar Matriculas');
        yield put(registerFailured());
    }
}

export default all([
    takeLatest('@register/LOAD_REGISTER_REQUEST', loadRegister),
]);
