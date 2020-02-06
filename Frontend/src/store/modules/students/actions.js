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
