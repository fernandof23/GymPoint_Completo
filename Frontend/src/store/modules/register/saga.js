import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
    loadRegisterSucess,
    registerFailured,
    addRegisterSucess,
    updateRegisterSucess,
} from './actions';

export function* loadRegister() {
    try {
        const response = yield call(api.get, 'registration');

        yield put(loadRegisterSucess(response.data));
    } catch (err) {
        toast.error('Falha ao carregar Matriculas');
        yield put(registerFailured());
    }
}

export function* deleteRegister({ payload }) {
    const { id } = payload;

    try {
        yield call(api.delete, `registration/${id}`);

        toast.success('Matricula Deletada com Sucesso');
    } catch (err) {
        toast.error('Erro ao deletar matricula');
    }
}

export function* addRegister({ payload }) {
    try {
        yield call(api.post, 'registration', payload);
        toast.success('Matricula realizada com Sucesso');

        yield put(addRegisterSucess());

        history.push('/dashboard/register');
    } catch (err) {
        yield put(registerFailured());

        toast.error('Falha ao criar Matricula');
    }
}

export function* updateRegister({ payload }) {
    try {
        const { id } = payload;
        yield call(api.put, `registration/${id}`, payload);

        yield put(updateRegisterSucess());

        toast.success('Matrícula editada com Sucesso!');

        history.push('/dashboard/register');
    } catch (err) {
        toast.error('Erro ao atualizar Matrícula');
        yield put(registerFailured());
    }
}

export default all([
    takeLatest('@register/LOAD_REGISTER_REQUEST', loadRegister),
    takeLatest('@register/DELETE_REGISTER', deleteRegister),
    takeLatest('@register/ADD_REGISTER_REQUEST', addRegister),
    takeLatest('@register/UPDATE_REGISTER_REQUEST', updateRegister),
]);
