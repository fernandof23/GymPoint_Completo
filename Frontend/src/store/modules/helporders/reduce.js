import produce from 'immer';

const INITIAL_STATE = {
    questions: [],
    loading: false,
};

export default function questions(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@question/LOAD_QUESTION_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@question/LOAD_QUESTION_SUCESS': {
                draft.questions = action.payload.questions;
                draft.loading = false;
                break;
            }
            case '@question/ANSWER_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@question/ANSWER_SUCESS': {
                draft.loading = false;
                break;
            }

            default:
        }
    });
}
