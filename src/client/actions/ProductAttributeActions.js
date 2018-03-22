import constants from "constants";
import {
    productAttributeDeleteByIdServer,
    productAttributeAddServer,
    productAttributeDeleteAllServer
} from "services";

export const productAttributeDeleteById = params  => dispatch =>
    productAttributeDeleteByIdServer(params)
        .then((response) => {
            dispatch({type:'PRODUCT_LOAD_ATTR',attr:[]});
        })
        .catch((error) => {
            alert(' Ошибка удаления атрибута ');
        });

export const productAttributeAdd = params  => dispatch =>
    productAttributeAddServer(params)
        .then((response) => {
            dispatch({type:'PRODUCT_LOAD_ATTR',attr:response.data});
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            alert(' ошибка добавления атрибута');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        });

export const deleteAllAttribute = params  => dispatch =>
    productAttributeDeleteAllServer(params)
        .then((response) => {
            dispatch({type:'PRODUCT_LOAD_ATTR',attr:[]});
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            alert(' Ошибка удаления ');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        });