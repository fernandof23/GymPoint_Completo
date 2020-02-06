import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { loadStudentSucess } from './actions';

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

export default all([
    takeLatest('@students/LOAD_STUDENTS_REQUEST', loadStudents),
]);
