export function signInRequest(id) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { id },
    };
}

export function signInSucess(user) {
    return {
        type: '@auth/SIGN_IN_SUCESS',
        payload: { user },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURED',
    };
}

export function signOut() {
    return {
        type: '@auth/SIGNOUT',
    };
}
