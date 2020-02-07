import produce from 'immer';

const INITIAL_STATE = {
    plans: [],
    loading: false,
};

export default function plans(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@plans/LOAD_PLANS_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@plans/LOAD_PLANS_SUCESS': {
                draft.plans = action.payload.plans;
                draft.loading = false;
                break;
            }
            case '@plans/PLANS_FAILURED': {
                draft.loading = false;
                break;
            }
            case '@plans/CREATE_PLAN_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@plans/CREATE_PLAN_SUCESS': {
                draft.loading = false;
                break;
            }
            case '@plans/UPDATE_PLAN_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@plans/UPDATE_PLAN_SUCESS': {
                draft.loading = false;
                break;
            }

            default:
        }
    });
}
