import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { FormatPrice } from '~/util/format';

import { loadPlansSucess, PlansFailured, createPlansSucess } from './actions';

export function* loadPlans() {
    try {
        const response = yield call(api.get, 'plans');

        const plans = response.data.map(item => ({
            ...item,
            totalPrice: FormatPrice(item.duration * item.price),
            price: FormatPrice(item.price),
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

export default all([
    takeLatest('@plans/LOAD_PLANS_REQUEST', loadPlans),
    takeLatest('@plans/CREATE_PLAN_REQUEST', createPlans),
]);
