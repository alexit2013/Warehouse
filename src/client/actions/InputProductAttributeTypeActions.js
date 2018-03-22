import constants from 'constants';
import config from 'config';
import { productAttributeTypeSearchByNameServer } from 'services';

export const resultHidden = ( ) => ({type : constants.INPUT_PRODUCT_ATTRIBUTE_TYPE_HIDDEN_RESULT});

export const resultShow = ( ) => ({type : constants.INPUT_PRODUCT_ATTRIBUTE_TYPE_SHOW_RESULT});

export const setResult = ( result = [] ) => ({
    type: constants.INPUT_PRODUCT_ATTRIBUTE_TYPE_SET_RESULT,
    result
});


export const searchByName = name => dispatch =>
    productAttributeTypeSearchByNameServer( name )
        .then((response) => {
            dispatch(setResult( response.data ));
        })
        .catch((error) => {
            dispatch(setResult([
                {id:1,name:'фильтр масленный'},
                {id:2,name:'молочко'}
            ]));
        });

export const setValue = ( inputValue = '' )   =>
    ({
        type : constants.INPUT_PRODUCT_ATTRIBUTE_TYPE_SET_VALUE,
        inputValue
    });

let controlRequest;
export const changeValue = inputValue => (( dispatch ) => {
    clearTimeout( controlRequest );
    if ( inputValue.length > 2 ) {
        clearTimeout( controlRequest );
        const callback =  (function (dispatch, value, method) {
            return function ( ) {
                return dispatch( method ( value ) )
            }
        })(dispatch, inputValue, searchByName);
        controlRequest = setTimeout(callback, config.pauseRequest);
    }
    dispatch( setValue( inputValue ));

});
