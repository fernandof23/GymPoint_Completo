export function loadRegisterRequest() {
    return {
        type: '@register/LOAD_REGISTER_REQUEST',
    };
}

export function loadRegisterSucess(register) {
    return {
        type: '@register/LOAD_REGISTER_SUCESS',
        payload: { register },
    };
}

export function registerFailured() {
    return {
        type: '@register/REGISTER_FAILURED',
    };
}
