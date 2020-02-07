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

export function updatePlansRequest(id, title, duration, price) {
    return {
        type: '@plans/UPDATE_PLAN_REQUEST',
        payload: { id, title, duration, price },
    };
}

export function updatePlansSucess() {
    return {
        type: '@plans/UPDATE_PLAN_SUCESS',
    };
}

export function deletedPlan(id) {
    return {
        type: '@plans/DELETED_PLAN',
        payload: { id },
    };
}
