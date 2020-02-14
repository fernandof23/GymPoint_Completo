import { takeLatest, call, put, all } from 'redux-saga/effects';

import Swal from 'sweetalert2';

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
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Erro ao carregar Matrículas',
            showConfirmButton: false,
            timer: 1000,
        });
        yield put(registerFailured());
    }
}

export function* deleteRegister({ payload }) {
    const { id } = payload;

    try {
        yield call(api.delete, `registration/${id}`);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Matrícula deletada com Sucesso',
            showConfirmButton: false,
            timer: 1000,
        });
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Erro ao deletar matrícula',
            showConfirmButton: false,
            timer: 1000,
        });
    }
}

export function* addRegister({ payload }) {
    try {
        yield call(api.post, 'registration', payload);

        yield Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Matrícula criada com sucesso',
            showConfirmButton: false,
            timer: 1000,
        });

        yield put(addRegisterSucess());

        history.push('/dashboard/register');
    } catch (err) {
        yield put(registerFailured());

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Erro ao criar Matrícula',
            showConfirmButton: false,
            timer: 1000,
        });
    }
}

export function* updateRegister({ payload }) {
    try {
        const { id } = payload;
        yield call(api.put, `registration/${id}`, payload);

        yield put(updateRegisterSucess());

        yield Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Matrícula editada com Sucesso',
            showConfirmButton: false,
            timer: 1000,
        });

        history.push('/dashboard/register');
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Erro ao editar matrículaao deletar plano',
            showConfirmButton: false,
            timer: 1000,
        });

        yield put(registerFailured());
    }
}

export default all([
    takeLatest('@register/LOAD_REGISTER_REQUEST', loadRegister),
    takeLatest('@register/DELETE_REGISTER', deleteRegister),
    takeLatest('@register/ADD_REGISTER_REQUEST', addRegister),
    takeLatest('@register/UPDATE_REGISTER_REQUEST', updateRegister),
]);
