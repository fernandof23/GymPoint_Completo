import produce from 'immer';

const INITIAL_STATE = {
    register: [],
    loading: false,
};

export default function register(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@register/LOAD_REGISTER_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@register/LOAD_REGISTER_SUCESS': {
                draft.register = action.payload.register;
                draft.loading = false;
                break;
            }
            case '@register/REGISTER_FAILURED': {
                draft.loading = false;
                break;
            }
            case '@register/ADD_REGISTER_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@register/ADD_REGISTER_SUCESS': {
                draft.loading = false;
                break;
            }
            case '@register/UPDATE_REGISTER_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@register/UPDATE_REGISTER_SUCESS': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
