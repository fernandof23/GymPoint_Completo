export function loadStudentsRequest(student, page) {
    return {
        type: '@students/LOAD_STUDENTS_REQUEST',
        payload: { student, page },
    };
}

export function loadStudentSucess(students) {
    return {
        type: '@students/LOAD_STUDENTS_SUCESS',
        payload: { students },
    };
}

export function createStudentRequest(name, email, age, weight, height) {
    return {
        type: '@students/CREATE_STUDENT_REQUEST',
        payload: { name, email, age, weight, height },
    };
}

export function createStudentSucess() {
    return {
        type: '@students/CREATE_STUDENT_SUCESS',
    };
}

export function createStudentFail() {
    return {
        type: '@students/CREATE_STUDENT_FAILURE',
    };
}

export function loadStudentToEdit(id) {
    return {
        type: '@students/LOAD_STUDENT_EDIT',
        payload: { id },
    };
}

export function loadStudentToEditSucess(data) {
    return {
        type: '@students/LOAD_STUDENT_EDIT_SUCESS',
        payload: { data },
    };
}

export function deleteStudentRequest(id) {
    return {
        type: '@students/DELETE_STUDENT_REQUEST',
        payload: { id },
    };
}

export function uploadStudentRequest(id, name, email, age, weight, height) {
    return {
        type: '@students/UPDATE_STUDENT_REQUEST',
        payload: { id, name, email, age, weight, height },
    };
}
