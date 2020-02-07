import produce from 'immer';

const INITIAL_STATE = {
    students: [],
    loading: false,
    StudentEdit: [],
    activeEdit: false,
};

export default function students(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@students/LOAD_STUDENTS_REQUEST': {
                draft.loading = true;
                draft.StudentEdit = [];
                break;
            }
            case '@students/LOAD_STUDENTS_SUCESS': {
                draft.students = action.payload.students;
                draft.StudentEdit = [];
                draft.activeEdit = false;
                draft.loading = false;
                break;
            }
            case '@students/CREATE_STUDENT_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@students/CREATE_STUDENT_SUCESS': {
                draft.loading = false;
                break;
            }
            case '@students/CREATE_STUDENT_FAILURE': {
                draft.loading = false;
                break;
            }
            case '@students/LOAD_STUDENT_EDIT_SUCESS': {
                draft.StudentEdit = action.payload.data;
                draft.activeEdit = true;
                break;
            }

            default:
        }
    });
}
