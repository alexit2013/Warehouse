import axios from "axios";
import config from "config";
import {productFastSearchResultAdd} from "actions";


export const productLoadPhotoServer = params =>
    axios.post(config.server + 'products/photo/load%7D', params,   {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

export const clientGetAllServer  = ( ) =>
    axios.post(config.server + 'clients/getAll%7D');

export const clientCarDeleteServer  = id =>
    axios.post(config.server + 'cars/delete%7D', {id});

export const clientCarUpdateServer = car =>
    axios.post(config.server + 'cars/update%7D', {car});

export const clientAddCarServer = id =>
    axios.post(config.server + 'clients/cars/add%7D', {id});

export const clientGetServer = id =>
    axios.post(config.server + 'clients%7D', {id});

export const clientUpdatePropsServer = params =>
    axios.post(config.server + 'clients/updateProps%7D', params);

export const clientAddServer = params =>
    axios.post(config.server + 'clients/add%7D', params);

export const carGetModificationByModelIdServer = id =>
    axios.post(config.server + 'cars/getModifications%7D', {id});

export const carGetModelByManufactureIdServer = id =>
    axios.post(config.server + 'cars/getModels%7D', {id});

export const productTypeAddServer = name =>
    axios.post(config.server + 'products/types/add%7D', {name});

export const     productBrandAddServer = name =>
    axios.post(config.server + 'products/brands/add%7D', {name});

export const productAddCrossByProductIdServer = params =>
    axios.post(config.server + 'products/addCrossByProductId%7D', params);

export const productAttributeDeleteByIdServer = params =>
    axios.post(config.server + 'products/attributes/deleteById%7D', params);

export const productAttributeAddServer = params =>
    axios.post(config.server + 'products/attributes/add%7D', params);

export const productAttributeTypeSearchByNameServer = name =>
    axios.post(config.server + 'products/attributeType/searchByName%7D', {name});

export const productAttributeDeleteAllServer = id =>
    axios.post(config.server + 'products/deleteAllAttribute%7D', {id});

export const productAttributeTypeUpdateNameServer = params =>
    axios.post(config.server + 'products/attributeType/update%7D', params);

export const attributeTypeAddServer = name =>
    axios.post(config.server + 'products/attributeType/add%7D', {name});

export const productCopyServer = params =>
    axios.post(config.server + 'products/copy%7D', params);

export const oeAddServer = params =>
    axios.post(config.server + 'oe/add%7D', params);

export const manufactureSearchByNameServer = name =>
    axios.post(config.server + 'manufacturers/searchByName%7D', {name});

export const productCopyOeByProductIdServer = params =>
    axios.post(config.server + 'products/copyOeByProductId%7D', params);

export const productDeleteAllOeServer = id =>
    axios.post(config.server + 'products/deleteAllOe%7D', {id});

export const productDeleteOeByIdServer = params =>
    axios.post(config.server + 'products/deleteOe%7D', params);

export const productAttributeTypeAddServer = params =>
    axios.post(config.server + 'products/attributeType/add%7D', params);

export const productAddOeServer = params =>
    axios.post(config.server + 'products/addOe%7D', params);

export const productUpdateServer = product =>
    axios.post(config.server + 'products/update%7D', {product});

export const productTypeSearchByNameServer = (name = '') =>
    axios.post(config.server + 'products/types/searchByName%7D', {name});

export const brandSearchByNameServer = (name = '') =>
    axios.post(config.server + 'products/brands/searchByName%7D', {name});

export const productSearchByNameServer = (name = '') =>
    axios.post(config.server + 'products/searchByName%7D', {name});

export const productSearchAnalogByProductIdServer = ( id = 1 ) =>
    axios.post(config.server + 'products/searchAnalogByProductId%7D', { id });

export const oeSearchByNameServer = ( name = '' ) =>
    axios.post(config.server + 'oe/searchByName%7D', { name });

export const productSearchAnalogByOeIdServer = ( id = 1 ) =>
    axios.post(config.server + 'products/searchAnalogByOeId%7D', { id});

export const importerGetAllServer = ( ) =>
    axios.post(config.server+'products/importers/getAll%7D');

export const productGetFullServer = ( id = 1 ) =>
    axios.post(config.server+'products/getFullById%7D', { id });