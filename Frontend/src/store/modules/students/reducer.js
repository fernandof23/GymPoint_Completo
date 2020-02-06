import produce from 'immer';

const INITIAL_STATE = {
    students: [],
    loading: false,
};

export default function students(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@students/LOAD_STUDENTS_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@students/LOAD_STUDENTS_SUCESS': {
                draft.students = action.payload.students;
                draft.loading = false;
                break;
            }

            default:
        }
    });
}
