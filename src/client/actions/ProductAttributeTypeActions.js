import constants from "constants";
import {
    productAttributeTypeUpdateNameServer,
    productAttributeTypeAddServer
} from "services";

export const productAttributeTypeUpdateName = params  => dispatch =>
    productAttributeTypeUpdateNameServer(params)
        .then((response) => {
            dispatch({type:'PRODUCT_LOAD_ATTR',attr:response.data});
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            alert(' не раотает');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        });

export const productAttributeTypeAdd = name  => dispatch =>
    productAttributeTypeAddServer(name)
        .then((response) => {
            alert('успешно   раотает');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            alert(' не раотает');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        });