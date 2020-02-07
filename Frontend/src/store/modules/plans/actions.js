export function loadPlansRequest() {
    return {
        type: '@plans/LOAD_PLANS_REQUEST',
    };
}

export function loadPlansSucess(plans) {
    return {
        type: '@plans/LOAD_PLANS_SUCESS',
        payload: { plans },
    };
}

export function PlansFailured() {
    return {
        type: '@plans/PLANS_FAILURED',
    };
}

export function createPlansRequest(title, duration, price) {
    return {
        type: '@plans/CREATE_PLAN_REQUEST',
        payload: { title, duration, price },
    };
}

export function createPlansSucess() {
    return {
        type: '@plans/CREATE_PLAN_SUCESS',
    };
}
