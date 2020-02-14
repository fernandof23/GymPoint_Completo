import { takeLatest, call, put, all } from 'redux-saga/effects';
import Swal from 'sweetalert2';
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
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Falha ao carregar Alunos',
            showConfirmButton: false,
            timer: 1000,
        });
    }
}

export function* createStudent({ payload }) {
    try {
        const response = yield call(api.post, 'students', payload);

        if (response.data.error) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ooops...',
                text: 'E-mail ja Cadastrado',
                showConfirmButton: false,
                timer: 1000,
            });

            yield put(createStudentFail());
            return;
        }

        yield Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Aluno cadastrado com Sucesso',
            showConfirmButton: false,
            timer: 1000,
        });

        yield put(createStudentSucess());
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Falha ao cadastrar aluno',
            showConfirmButton: false,
            timer: 1000,
        });

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
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Falha ao carregar pagina',
            showConfirmButton: false,
            timer: 1000,
        });
    }
}

export function* deleteStudent({ payload }) {
    try {
        const { id } = payload;
        yield call(api.delete, `students/${id}`);

        yield Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Aluno deletado com Sucesso',
            showConfirmButton: false,
            timer: 1000,
        });
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Falha ao deletar aluno',
            showConfirmButton: false,
            timer: 1000,
        });
    }
}

export function* updateStudent({ payload }) {
    const { id } = payload;
    try {
        yield call(api.put, `/students/${id}`, payload);

        yield Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Aluno atualizado com Sucesso',
            showConfirmButton: false,
            timer: 1000,
        });

        history.push('/dashboard/students');
    } catch (err) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ooops...',
            text: 'Erro atualizar aluno',
            showConfirmButton: false,
            timer: 1000,
        });
    }
}

export default all([
    takeLatest('@students/LOAD_STUDENTS_REQUEST', loadStudents),
    takeLatest('@students/CREATE_STUDENT_REQUEST', createStudent),
    takeLatest('@students/LOAD_STUDENT_EDIT', loadToEdit),
    takeLatest('@students/DELETE_STUDENT_REQUEST', deleteStudent),
    takeLatest('@students/UPDATE_STUDENT_REQUEST', updateStudent),
]);
