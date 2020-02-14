export function loadQuestionRequest() {
    return {
        type: '@question/LOAD_QUESTION_REQUEST',
    };
}

export function loadQuestionSucess(questions) {
    return {
        type: '@question/LOAD_QUESTION_SUCESS',
        payload: { questions },
    };
}

export function questionFailured() {
    return {
        type: '@question/LOAD_FAILURED',
    };
}

export function answerRequest(id, answer) {
    return {
        type: '@question/ANSWER_REQUEST',
        payload: { id, answer },
    };
}

export function answerSucess() {
    return {
        type: '@question/ANSWER_SUCESS',
    };
}
