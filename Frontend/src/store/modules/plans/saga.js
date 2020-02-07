import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

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
        toast.error('Falha ao Carregar Plano');
    }
}

export function* createPlans({ payload }) {
    try {
        yield call(api.post, 'plans', payload);

        yield put(createPlansSucess());

        toast.success('Plano Registrado com Sucesso');

        history.push('/dashboard/plans');
    } catch (err) {
        toast.error('ERRO AO REGISTRAR PLANO');
        yield put(PlansFailured());
    }
}

export function* updatePlan({ payload }) {
    try {
        const { id } = payload;

        yield call(api.put, `plans/${id}`, payload);

        yield put(updatePlansSucess());

        toast.success('Plano atualizado com Sucesso');

        history.push('/dashboard/plans');
    } catch (err) {
        toast.error('ERRO AO ATUALIZAR PLANO');
        yield put(PlansFailured());
    }
}

export function* deletedPlan({ payload }) {
    try {
        const { id } = payload;
        yield call(api.delete, `plans/${id}`);

        toast.success('Plano Deletado Com sucesso');
    } catch (err) {
        toast.error('Erro ao deletar Plano');
    }
}
export default all([
    takeLatest('@plans/LOAD_PLANS_REQUEST', loadPlans),
    takeLatest('@plans/CREATE_PLAN_REQUEST', createPlans),
    takeLatest('@plans/UPDATE_PLAN_REQUEST', updatePlan),
    takeLatest('@plans/DELETED_PLAN', deletedPlan),
]);
