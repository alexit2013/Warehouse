import constants from "constants";
import { searchItemById } from 'utils';
import { searchAnalogByCodeId, searchAnalogByArticleId } from 'services';

const initialState =  {
    products : [],
    clients : [],
    currentClient : {},
    currentCar : {},
};

const AppReducer = (state = initialState, action) => {
    let newState = Object.assign({},state);
    switch(action.type) {

        case constants.SET_PRODUCTS_IN_TABLE :
            newState.products = action.products;
            break;



        case 'CLIENT_SET' :
            newState.currentClient = action.client;
            newState.currentCar = action.client.cars.length === 1 ? action.client.cars[0] : {};
            console.log(newState);
            break;

        case 'CAR_SET' :
            newState.currentCar = action.car;
            console.log(newState);
            break;

    }
    return newState;
};

export default AppReducer;