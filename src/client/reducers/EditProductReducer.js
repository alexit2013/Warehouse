import constants from "constants";

const initialState = {
    isShowModalProductAddOe : false,
    isShowModalAddOe : false,
    isShowModalCopyOe : false,
    isShowModalCopyProduct : false,
    isShowModalAddAttr : false,
    isShowModalProductAddAttr : false,
    isShowModalAttrEditName : false,
    isShowModalProductAddCrossByProductId : false,
    isShowModalProductTypeAdd : false,
    isShowModalBrandAdd : false,
    product : {brandName: "LOADING",
        brand_id: 1,
        count: 1,
        date: "2018-03-08",
        description: 'LOADING',
        id: 1,
        img: '',
        importer_id: 0,
        article: "LOADING",
        owner_id: 1,
        place: 'LOADING',
        price: 1,
        typeName: "LOADING",
        type_id: 0,
        oe: [],
        attr:[],
    },
    importers : [],
    currentAttr : {},

};



const FastSearchReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case constants.MODAL_BRAND_ADD_SHOW :
            newState.isShowModalBrandAdd = true;
            break;

        case constants.MODAL_PRODUCT_TYPE_ADD_SHOW :
            newState.isShowModalProductTypeAdd = true;
            break;

        case constants.MODAL_PRODUCT_ADD_CROSS_BY_PRODUCT_ID_SHOW :
            newState.isShowModalProductAddCrossByProductId = true;
            break;

        case constants.PRODUCT_LOAD_ATTR :
            newState.product.attr = action.attr;
            break;

        case constants.SET_CURRENT_PRODUCT_ATTR_NAME:
            debugger;
            newState.currentAttr.name = action.name;
            break;
        case constants.SET_CURRENT_PRODUCT_ATTR :
            newState.currentAttr = action.attr;
            break;
        case constants.PRODUCT_SET_OE :
            newState.product.oe = action.oe;
            newState.isShowModalProductAddOe = false;
            newState.isShowModalCopyOe = false;
            break;

        case constants.MODAL_PRODUCT_HIDDEN :
            newState.isShowModalProductAddOe = false;
            newState.isShowModalAddOeInDataBase = false;
            newState.isShowModalCopyOe = false;
            newState.isShowModalAddOe = false;
            newState.isShowModalCopyProduct = false;
            newState.isShowModalAddAttr = false;
            newState.isShowModalAttrEditName = false;
            newState.isShowModalProductAddAttr = false;
            newState.isShowModalProductAddCrossByProductId = false;
            newState.isShowModalBrandAdd = false;
            newState.isShowModalProductTypeAdd = false;
            debugger;
            break;

        case constants.MODAL_ATTRIBUTE_EDIT_NAME_SHOW :
            newState.isShowModalAttrEditName = true;
            break;

        case constants.MODAL_PRODUCT_ADD_ATTRIBUTE_SHOW :
            newState.isShowModalProductAddAttr = true;
            break;

        case constants.MODAL_ADD_ATTRIBUTE_SHOW :
            newState.isShowModalAddAttr = true;
            break;

        case constants.MODAL_PRODUCT_COPY_SHOW :
            newState.isShowModalCopyProduct = true;
            break;

        case constants.MODAL_ADD_OE_SHOW :
            newState.isShowModalAddOe = true;
            break;

        case constants.MODAL_PRODUCT_ADD_OE_SHOW :
            newState.isShowModalProductAddOe = true;
            break;

        case constants.MODAL_PRODUCT_COPY_OE_SHOW :
            newState.isShowModalCopyOe = true;
            break;

        case constants.LOAD_IMPORTERS :
            newState.importers = action.importers;
            break;
        case constants.PRODUCT_SET_PRODUCT :
            newState.product = action.product;
            newState.isShowModalProductAddOe = false;
            newState.isShowModalAddOeInDataBase = false;
            newState.isShowModalCopyOe = false;
            newState.isShowModalAddOe = false;
            newState.isShowModalCopyProduct = false;
            newState.isShowModalAddAttr = false;
            newState.isShowModalAttrEditName = false;
            break;
        case constants.PRODUCT_SET_IMPORTER :
            newState.product.importer_id = action.id;
            break;
        case constants.PRODUCT_SET_ARTICLE :
            newState.product.name = action.article;
            break;
        case constants.PRODUCT_SET_PLACE :
            newState.product.place = action.place;
            break;
        case constants.PRODUCT_SET_COUNT :
            newState.product.count = action.count;
            break;
        case constants.PRODUCT_SET_PRICE :
            newState.product.price = action.price;
            break;
        case constants.PRODUCT_SET_DATE :
            newState.product.date = action.date;
            break;
        case constants.PRODUCT_SET_DESCRIPTION :
            newState.product.description = action.description;
            break;
        case constants.PRODUCT_SET_BRAND :
            newState.product.brand_id = action.brand.id;
            newState.product.brandName = action.brand.name;
            break;
        case constants.PRODUCT_SET_TYPE :
            newState.product.type_id = action.productType.id;
            newState.product.typeName = action.productType.name;
            break;


        default:
            return state;
    }
    return newState;
};

export default FastSearchReducer;
