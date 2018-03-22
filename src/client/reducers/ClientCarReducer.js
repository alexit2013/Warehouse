import constants from "constants";
import {   push  } from 'react-router-redux';

const initialState = {
    carModels : [],
    carModifications : [],
    currentCar : {
        name:'bme e46',
        vin:null,
        oil_filter_name:'ox143d',
        fuel_filter_name:'kl147d',
    },

};


const ClientCarReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {



        case 'SET_ABS' :
            newState.currentCar.abs = !newState.currentCar.abs;
            break;
        case 'SET_CONDITIONER' :
            newState.currentCar.is_conditioner = !newState.currentCar.is_conditioner;
            break;
        case 'SET_DRUM' :
            newState.currentCar.is_drum = !newState.currentCar.is_drum;
            break;

        case 'SET_YEAR' :
            newState.currentCar.year = action.year;
            break;

        case 'SET_COOLANT' :
            newState.currentCar.coolant_name = action.product.name;
            newState.currentCar.coolant = action.product.id;
            break;

        case 'SET_CANDLES' :
            newState.currentCar.candles_name = action.product.name;
            newState.currentCar.candles = action.product.id;
            break;

        case 'SET_GRM' :
            newState.currentCar.grm_name = action.product.name;
            newState.currentCar.grm = action.product.id;
            break;

        case 'SET_BRAKE_BACK' :
            newState.currentCar.brake_parts_back_name = action.product.name;
            newState.currentCar.brake_parts_back = action.product.id;
            break;

        case 'SET_DISC_BACK' :
            newState.currentCar.disk_back_name = action.product.name;
            newState.currentCar.disk_back = action.product.id;
            break;

        case 'SET_BRAKE_FRONT' :
            newState.currentCar.brake_parts_front_name = action.product.name;
            newState.currentCar.brake_parts_front = action.product.id;
            break;


        case 'SET_DISC_FRONT' :
            newState.currentCar.disc_front_name = action.product.name;
            newState.currentCar.disc_front = action.product.id;
            break;

        case 'SET_OIL' :
            newState.currentCar.oil_name = action.product.name;
            newState.currentCar.oil = action.product.id;
            break;

        case 'SET_CABIN_FILTER' :
            newState.currentCar.air_cabin_filter_name = action.product.name;
            newState.currentCar.air_cabin_filter = action.product.id;
            break;

        case 'SET_FUEL_FILTER' :
            newState.currentCar.fuel_filter_name = action.product.name;
            newState.currentCar.fuel_filter = action.product.id;
            break;

        case 'SET_VIN' :
            newState.currentCar.vin = action.vin;
            break;

        case 'SET_OIL_FILTER' :
            newState.currentCar.oil_filter_name = action.product.name;
            newState.currentCar.oil_filter = action.product.id;
            break;

        case 'SET_AIR_FILTER' :
            newState.currentCar.air_filter_name = action.product.name;
            newState.currentCar.air_filter = action.product.id;
            break;

        case 'SET_CAR_MODELS' :
            newState.carModels = action.carModels;
            break;

        case 'CLIENT_CAR_SET_MODIFICATION' :
            newState.currentCar.modification_id = action.modification.id;
            newState.currentCar.name = action.modification.name;
            break;

        case 'CAR_MODIFICATIONS_LOAD' :
            newState.carModifications = action.carModifications;
            break;


        case 'CAR_EDIT_SET':
            newState.currentCar = action.car;
            break;

        default:
            return state;
    }
    return newState;
};

export default ClientCarReducer;
