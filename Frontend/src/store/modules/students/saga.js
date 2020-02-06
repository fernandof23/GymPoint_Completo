import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
    loadStudentSucess,
    createStudentFail,
    createStudentSucess,
} from './actions';

export function* loadStudents({ payload }) {
    const { student, page } = payload;
    try {
        const searchStudent = `&q=${student}`;
        const pageFilter = `?page=${page}`;

        const response = yield call(
            api.get,
            `/students/${pageFilter}${searchStudent}`
        );

        yield put(loadStudentSucess(response.data));
    } catch (err) {
        toast.error('Falha ao carregar os Alunos');
    }
}

export function* createStudent({ payload }) {
    try {
        const response = yield call(api.post, 'students', payload);

        if (response.data.error) {
            toast.error('E-mail Já Cadastrado');
            yield put(createStudentFail());
            return;
        }

        toast.success('Aluno Cadastrado com Sucesso');

        yield put(createStudentSucess());
    } catch (err) {
        toast.error('Falha ao criar Cadastro');
        yield put(createStudentFail());
    }
}

export default all([
    takeLatest('@students/LOAD_STUDENTS_REQUEST', loadStudents),
    takeLatest('@students/CREATE_STUDENT_REQUEST', createStudent),
]);
