import constants from "constants";

const initialState = {
    isShowResult: false,
    result : [],
    inputValue: '',
    isFailSearch: false,
};

const InputOeReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case constants.INPUT_OE_SHOW_RESULT :
            newState.isShowResult = true;
            break;

        case constants.INPUT_OE_HIDDEN_RESULT :
            newState.isShowResult = false;
            newState.result = [];
            break;

        case constants.INPUT_OE_SET_RESULT:
            newState.isFailSearch = action.result.length === 0;
            newState.isShowResult = true;
            newState.result = action.result;
            break;

        case constants.INPUT_OE_SET_VALUE:
            newState.inputValue = action.inputValue;
            newState.result = [];
            newState.isShowResult = false;

            break;
        default:
            return state;
    }
    return newState;
};

export default InputOeReducer;
