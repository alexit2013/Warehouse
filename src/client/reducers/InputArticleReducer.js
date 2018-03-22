import constants from "constants";

const initialState = {
    isShowResult: false,
    result : [],
    isFailSearch: false,
};

const InputArticleReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case constants.INPUT_ARTICLE_SHOW_RESULT :
            newState.isShowResult = true;
            break;

        case constants.INPUT_ARTICLE_HIDDEN_RESULT :
            newState.isShowResult = false;
            newState.result = [];
            break;

        case constants.INPUT_ARTICLE_SET_RESULT:
            newState.isFailSearch = action.result.length === 0;
            newState.isShowResult = true;
            newState.result = action.result;

            break;

        case constants.INPUT_ARTICLE_SET_VALUE:
            newState.result = [];
            newState.isShowResult = false;

            break;
        default:
            return state;
    }
    return newState;
};

export default InputArticleReducer;
