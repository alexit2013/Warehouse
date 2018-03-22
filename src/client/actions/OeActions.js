import constants from "constants";
import {
    oeAddServer,
    productCopyOeByProductIdServer,
    productAddOeServer,
    productDeleteOeByIdServer,
    productDeleteAllOeServer,
    productAddCrossByProductIdServer
} from "services";




export const oeAdd = params => dispatch =>
    oeAddServer(params)
        .then((response) => {
            alert('ok');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            alert('яичики');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        });

export const copyOeByProductId = params => dispatch =>
    productCopyOeByProductIdServer( params )
        .then((response) => {
            dispatch( { type : constants.PRODUCT_SET_OE, oe : response.data} );
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            alert('ошика');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        });

export const productAddCrossByProductId = params => dispatch =>
    productAddCrossByProductIdServer( params )
        .then((response) => {
            dispatch( { type : constants.PRODUCT_SET_OE, oe : response.data} );
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            alert('ошика');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        });

export const productAddOe = params => dispatch =>
    productAddOeServer( params )
        .then((response) => {
            dispatch( { type : constants.PRODUCT_SET_OE, oe : response.data} );
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            alert('ошика');
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        });

export const productDeleteOeById = params => dispatch =>
    productDeleteOeByIdServer( params )
        .then((response) => {
            dispatch( { type : constants.PRODUCT_SET_OE, oe : response.data} );
        })
        .catch((error) => {
            alert('ошика');
        });

export const productDeleteAllOe = id => dispatch =>
    productDeleteAllOeServer( id )
        .then((response) => {
            dispatch( { type : constants.PRODUCT_SET_OE, oe : []} );
        })
        .catch((error) => {
            alert('ошика');
        });