import constants from 'constants';
import config from 'config';
import { manufactureSearchByNameServer } from 'services';

export const resultHidden = ( ) => ({type : constants.INPUT_MANUFACTURE_HIDDEN_RESULT});

export const resultShow = ( ) => ({type : constants.INPUT_MANUFACTURE_SHOW_RESULT});

export const setResult = ( result = [] ) => ({
    type: constants.INPUT_MANUFACTURE_SET_RESULT,
    result
});


export const searchByName = name => dispatch =>
    manufactureSearchByNameServer( name )
        .then((response) => {
            dispatch(setResult( response.data ));
        })
        .catch((error) => {
            dispatch(setResult([
                {id:1,name:'BMW'},
                {id:2,name:'AUDI'}
            ]));
        });

export const setValue = ( inputValue = '' )   =>
    ({
        type : constants.INPUT_MANUFACTURE_SET_VALUE,
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
