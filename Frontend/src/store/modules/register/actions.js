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

export function deleteRegister(id) {
    return {
        type: '@register/DELETE_REGISTER',
        payload: { id },
    };
}

export function addRegisterRequest(student_id, plan_id, start_date) {
    return {
        type: '@register/ADD_REGISTER_REQUEST',
        payload: { student_id, plan_id, start_date },
    };
}

export function addRegisterSucess() {
    return {
        type: '@register/ADD_REGISTER_SUCESS',
    };
}

export function updateRegisterRequest(id, student_id, plan_id, start_date) {
    return {
        type: '@register/UPDATE_REGISTER_REQUEST',
        payload: { id, student_id, plan_id, start_date },
    };
}

export function updateRegisterSucess() {
    return {
        type: '@register/UPDATE_REGISTER_SUCESS',
    };
}
