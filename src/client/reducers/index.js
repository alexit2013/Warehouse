import { combineReducers } from 'redux';

import AppReducer from 'reducers/AppReducer';
import InputArticleReducer from 'reducers/InputArticleReducer';
import InputOeReducer from 'reducers/InputOeReducer';
import EditProductReducer from 'reducers/EditProductReducer';
import InputBrandReducer from 'reducers/InputBrandReducer';
import InputProductTypeReducer from 'reducers/InputProductTypeReducer';
import InputManufactureReducer from 'reducers/InputManufactureReducer';
import InputProductAttributeTypeReducer from 'reducers/InputProductAttributeTypeReducer';
import ClientReducer from 'reducers/ClientReducer';
import ClientCarReducer from 'reducers/ClientCarReducer';

const Reducer = combineReducers({
    InputArticleReducer,
    AppReducer,
    EditProductReducer,
    InputBrandReducer,
    InputOeReducer,
    InputProductTypeReducer,
    InputManufactureReducer,
    InputProductAttributeTypeReducer,
    ClientReducer,
    ClientCarReducer
});

export default Reducer;