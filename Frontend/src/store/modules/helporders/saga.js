import { takeLatest, call, put, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';
import api from '~/services/api';

import { questionFailured, loadQuestionSucess, answerSucess } from './actions';

export function* loadQuestions() {
    try {
        const response = yield call(api.get, 'help-orders');
        yield put(loadQuestionSucess(response.data));
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado ao carregar perguntas',
        });

        yield put(questionFailured());
    }
}

export function* answerSend({ payload }) {
    try {
        const { id } = payload;

        yield call(api.post, `help-orders/${id}/answer`, payload);

        yield put(answerSucess());

        yield Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000,
        });

        window.location.reload();
    } catch (err) {
        yield put(questionFailured());
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado ao enviar enviar resposta',
        });
    }
}

export default all([
    takeLatest('@question/LOAD_QUESTION_REQUEST', loadQuestions),
    takeLatest('@question/ANSWER_REQUEST', answerSend),
]);
