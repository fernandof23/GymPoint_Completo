import produce from 'immer';

const INICIAL_STATE = {
    signed: false,
    loading: false,
};

export default function auth(state = INICIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@auth/SIGN_IN_SUCESS': {
                draft.signed = true;
                draft.loading = false;
                break;
            }

            case '@auth/SIGN_FAILURED': {
                draft.loading = false;
                draft.signed = false;
                break;
            }

            case '@auth/SIGNOUT': {
                draft.signed = false;
                break;
            }
            default:
        }
    });
}
