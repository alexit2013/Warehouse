import constants from 'constants';
import config from 'config';
import {
    oeSearchByNameServer,
    productSearchAnalogByOeIdServer
} from 'services';

export const hiddenResult = ( ) => ({type : constants.INPUT_OE_HIDDEN_RESULT});

export const showResult = ( ) => ({type : constants.INPUT_OE_SHOW_RESULT});

export const setResult = ( result = [] ) => ({
    type: constants.INPUT_OE_SET_RESULT,
    result
});



export const searchByName = name => dispatch =>
    oeSearchByNameServer( name )
        .then((response) => {
            dispatch(setResult( response.data ));
        })
        .catch((error) => {
            dispatch(setResult([
                {id:1,name:'ox143d',brandName:'BMW',typeName:'фильтр масленный'},
                {id:2,name:'0 242 232 502',brandName:'BMW',typeName:'фильтр масленный'}
            ]));
        });

export const searchByOeId = id => dispatch =>
    productSearchAnalogByOeIdServer( id )
        .then((response) => {
            dispatch({
                type: constants.SET_PRODUCTS_IN_TABLE,
                products: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type : constants.SET_PRODUCTS_IN_TABLE ,
                products: [
                    {id:1,article:'ox143d',brandName:'knecht',typeName:'фильтр масленный'},
                    {id:2,article:'0 242 232 502',brandName:'BOSCH',typeName:'фильтр масленный'}
                ]
            })
        });


export const steValue = ( inputValue = '' )   => ({type : constants.INPUT_OE_SET_VALUE, inputValue});

let controlRequest;
export const changeValue = inputValue => (( dispatch ) => {
    clearTimeout( controlRequest );
    if ( inputValue.length >= config.lengthBeginSearch) {
        clearTimeout( controlRequest );
        const callback =  (function (dispatch, value, method) {
            return function ( ) {
                return dispatch( method ( value ) )
            }
        })(dispatch, inputValue, searchByName);
        controlRequest = setTimeout(callback, config.pauseRequest);
    }
    dispatch( steValue( inputValue ));
});
