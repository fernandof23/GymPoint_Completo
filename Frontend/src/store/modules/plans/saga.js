import { takeLatest, call, put, all } from 'redux-saga/effects';

import Swal from 'sweetalert2';

import api from '~/services/api';
import history from '~/services/history';

import { FormatPrice } from '~/util/format';

import {
    loadPlansSucess,
    PlansFailured,
    createPlansSucess,
    updatePlansSucess,
} from './actions';

export function* loadPlans() {
    try {
        const response = yield call(api.get, 'plans');

        const plans = response.data.map(item => ({
            ...item,
            totalPrice: FormatPrice(item.duration * item.price),
            priceFormated: FormatPrice(item.price),
        }));

        yield put(loadPlansSucess(plans));
    } catch (err) {
        yield put(PlansFailured());
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao carregar Planos',
        });
    }
}

export function* createPlans({ payload }) {
    try {
        yield call(api.post, 'plans', payload);

        yield put(createPlansSucess());

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Plano criado com Sucesso',
            showConfirmButton: false,
            timer: 1000,
        });

        history.push('/dashboard/plans');
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops',
            text: 'Falha ao criar plano',
            showConfirmButton: false,
            timer: 1000,
        });
        yield put(PlansFailured());
    }
}

export function* updatePlan({ payload }) {
    try {
        const { id } = payload;

        yield call(api.put, `plans/${id}`, payload);

        yield put(updatePlansSucess());

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Plano atualizado com Sucesso',
            showConfirmButton: false,
            timer: 1000,
        });

        history.push('/dashboard/plans');
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Erro ao atualizar Plano',
            showConfirmButton: false,
            timer: 1000,
        });
        yield put(PlansFailured());
    }
}

export function* deletedPlan({ payload }) {
    try {
        const { id } = payload;
        yield call(api.delete, `plans/${id}`);

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Plano deletado com Sucesso',
            showConfirmButton: false,
            timer: 1000,
        });
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Erro ao deletar plano',
            showConfirmButton: false,
            timer: 1000,
        });
    }
}
export default all([
    takeLatest('@plans/LOAD_PLANS_REQUEST', loadPlans),
    takeLatest('@plans/CREATE_PLAN_REQUEST', createPlans),
    takeLatest('@plans/UPDATE_PLAN_REQUEST', updatePlan),
    takeLatest('@plans/DELETED_PLAN', deletedPlan),
]);
