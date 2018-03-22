import constants from 'constants';

const initialState = {
    isShowResult: false,
    result : [],
    inputValue: ' ',
    isFailSearch: false,
};

const FastSearchReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case constants.INPUT_PRODUCT_TYPE_SHOW_RESULT :
            newState.isShowResult = true;
            break;

        case constants.INPUT_PRODUCT_TYPE_HIDDEN_RESULT :
            newState.isShowResult = false;
            newState.result = [];
            break;

        case constants.INPUT_PRODUCT_TYPE_SET_RESULT:
            newState.isFailSearch = action.result.length === 0;
            newState.isShowResult = true;
            newState.result = action.result;
            break;

        case constants.INPUT_PRODUCT_TYPE_SET_VALUE:
            newState.inputValue = action.inputValue ;
            if( action.inputValue.length < 3)
                newState.result = [];
            newState.isFailSearch = false;
            break;

        default:
            return state;
    }
    return newState;
};

export default FastSearchReducer;
