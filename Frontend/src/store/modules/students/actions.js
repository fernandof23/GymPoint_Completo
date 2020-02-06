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
