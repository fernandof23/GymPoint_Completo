import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
    loadStudentSucess,
    createStudentFail,
    createStudentSucess,
    loadStudentToEditSucess,
} from './actions';

export function* loadStudents({ payload }) {
    const { student, page } = payload;
    try {
        const searchStudent = student ? `&q=${student}` : '';
        const pageFilter = page ? `?page=${page}` : `?page=1`;

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

export function* loadToEdit({ payload }) {
    const { id } = payload;
    try {
        if (!id) return;

        const response = yield call(api.get, `/students/${id}`);

        yield put(loadStudentToEditSucess(response.data));
    } catch (err) {
        toast.error('Erro ao carregar pagina');
    }
}

export function* deleteStudent({ payload }) {
    try {
        const { id } = payload;
        yield call(api.delete, `students/${id}`);

        toast.success('Aluno Deletado com Sucesso');
    } catch (err) {
        toast.error('Falha ao deletar aluno');
    }
}

export function* updateStudent({ payload }) {
    const { id } = payload;
    try {
        yield call(api.put, `/students/${id}`, payload);

        toast.success('Aluno Atualizado com sucesso');

        history.push('/dashboard/students');
    } catch (err) {
        toast.error('ERRO AO ATUALIZAR ALUNO');
    }
}

export default all([
    takeLatest('@students/LOAD_STUDENTS_REQUEST', loadStudents),
    takeLatest('@students/CREATE_STUDENT_REQUEST', createStudent),
    takeLatest('@students/LOAD_STUDENT_EDIT', loadToEdit),
    takeLatest('@students/DELETE_STUDENT_REQUEST', deleteStudent),
    takeLatest('@students/UPDATE_STUDENT_REQUEST', updateStudent),
]);
