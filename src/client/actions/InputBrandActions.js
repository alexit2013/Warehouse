import constants from 'constants';
import config from 'config';
import { brandSearchByNameServer } from 'services';

export const resultHidden = ( ) => ({type : constants.INPUT_BRAND_HIDDEN_RESULT});

export const resultShow = ( ) => ({type : constants.INPUT_BRAND_SHOW_RESULT});

export const setResult = ( result = [] ) => ({
    type: constants.INPUT_BRAND_SET_RESULT,
    result
});

export const searchByName = name => dispatch =>
    brandSearchByNameServer( name )
        .then((response) => {
            dispatch(setResult( response.data ));
        })
        .catch((error) => {
            dispatch(setResult([
                {id:1,name:'knecht'},
                {id:2,name:'BOSCH'},
                {id:3,name:'lol'},
                {id:4,name:'lol4'},
                {id:5,name:'lol5'},
                {id:6,name:'lol6'},
                {id:7,name:'lol7'},
                {id:8,name:'lol8'},
                {id:9,name:'lol9'},
                {id:10,name:'lol10'},
                {id:11,name:'lol11'},
                {id:12,name:'lol12'},
            ]));
        });

export const setValue = ( inputValue = '' )   =>
    ({
        type : constants.INPUT_BRAND_SET_VALUE,
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
