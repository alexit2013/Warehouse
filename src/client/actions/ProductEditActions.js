import constants from "constants";
import {
    productCopyServer,
    importerGetAllServer,
    productGetFullServer,
    productUpdateServer,
    productBrandAddServer,
    productTypeAddServer,
    productLoadPhotoServer
} from "services";

export const productLoadPhoto = params => dispatch =>
    productLoadPhotoServer(params)
        .then((response) => {

            console.log(response);
        })
        .catch((error) => {

            console.log(error);
        });



export const copy = params => dispatch =>
    productCopyServer(params)
        .then((response) => {
            console.log(response);
            dispatch( { type : constants.PRODUCT_SET_PRODUCT, product : response.data} );
            dispatch({ type : constants.INPUT_BRAND_SET_VALUE, inputValue : response.data.brandName });
            dispatch({ type : constants.INPUT_PRODUCT_TYPE_SET_VALUE, inputValue : response.data.typeName });
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
        })
        .catch((error) => {
            productGetFullServer(id)
                .then((response) => {
                    console.log(response);
                    dispatch( { type : constants.PRODUCT_SET_PRODUCT, product : response.data} );
                    dispatch({ type : constants.INPUT_BRAND_SET_VALUE, inputValue : response.data.brandName });
                    dispatch({ type : constants.INPUT_PRODUCT_TYPE_SET_VALUE, inputValue : response.data.typeName });
                    dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
                })
        });


export const productGetFull = id => dispatch =>
    productGetFullServer(id)
        .then((response) => {
            console.log(response);
            dispatch( { type : constants.PRODUCT_SET_PRODUCT, product : response.data} );
            dispatch({ type : constants.INPUT_BRAND_SET_VALUE, inputValue : response.data.brandName });
            dispatch({ type : constants.INPUT_PRODUCT_TYPE_SET_VALUE, inputValue : response.data.typeName });
        })
        .catch((error) => {
            const product = {
                brandName: "SPIDAN",
                brand_id: 1,
                count: 1,
                date: "2018-03-08",
                description: 'молодцом',
                id: 1,
                img: null,
                importer_id: 2,
                name: "190160",
                owner_id: 1,
                place: 'полка 3',
                price: 1,
                typeName: "Инструменты для ремонта автомобилей",
                type_id: 123854,
                attr:[{
                   name: 'molodcom',
                    value:'value',
                    type_id: 1,
                    id:1

                },
                    {
                        name: 'molodcom2',
                        value:'value2',
                        type_id: 2,
                        id:2,
                        is_cross:1,

                    }],
                oe: [
                    {
                        name: "038115466A",
                        brandName: "VW",
                        id: 131794,
                        brandId: 121,
                        is_cross:1,
                    },
                    {
                        name: "038115466A",
                        brandName: "VW",
                        id: 131794,
                        brandId: 121,
                        is_cross:1,
                    },
                    {
                        name: "038115466A",
                        brandName: "VW",
                        id: 131794,
                        brandId: 121,
                        is_cross:0,
                    },
                    {
                        name: "038115466A",
                        brandName: "VW",
                        id: 131794,
                        brandId: 121,
                        is_cross:1,
                    }
                ]
            };
            dispatch( { type : constants.PRODUCT_SET_PRODUCT, product} );
            dispatch({ type : constants.INPUT_BRAND_SET_VALUE, inputValue : product.brandName });
            dispatch({ type : constants.INPUT_PRODUCT_TYPE_SET_VALUE, inputValue : product.typeName });
        });




export const modalProductHidden = ( ) => ({ type : constants.MODAL_PRODUCT_HIDDEN});







export const modalProductCopyShow = ( ) => ({ type : constants.MODAL_PRODUCT_COPY_SHOW});

export const setImporter = id => ({type : constants.PRODUCT_SET_IMPORTER, id });

export const setArticle = article => ({type : constants.PRODUCT_SET_ARTICLE, article });

export const setBrand = brand => ({type : constants.PRODUCT_SET_BRAND, brand });

export const setType = productType => ({type : constants.PRODUCT_SET_TYPE, productType});

export const setPlace = place => ({type : constants.PRODUCT_SET_PLACE, place});

export const setCount = count => ({type : constants.PRODUCT_SET_COUNT, count});

export const setPrice = price => ({type : constants.PRODUCT_SET_PRICE, price});

export const setDate = date => ({type : constants.PRODUCT_SET_DATE, date});

export const setDescription = description => ({type : constants.PRODUCT_SET_DESCRIPTION, description });




export const productTypeAdd  = name => dispatch =>
    productTypeAddServer(name)
        .then((response) => {
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
            console.log(response);
        })
        .catch((error) => {
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
            console.log(error);
        });

export const productBrandAdd = name => dispatch =>
    productBrandAddServer(name)
        .then((response) => {
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
            console.log(response);
        })
        .catch((error) => {
            dispatch({ type : constants.MODAL_PRODUCT_HIDDEN});
            console.log(error);
        });


export const importersLoad = params => dispatch =>
    importerGetAllServer( )
        .then((response) => {
                dispatch( { type : constants.LOAD_IMPORTERS, importers : response.data} );
        })
        .catch((error) => {
            const importers = [
                {id:1, name:'space'},
                {id:2, name:'motex'},
                {id:3,name:'shate'}
                ];
            dispatch( { type : constants.LOAD_IMPORTERS, importers} );
        });


export const productUpdate = product => dispatch =>
    productUpdateServer(product)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });




