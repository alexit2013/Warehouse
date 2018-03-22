import {
    carGetModelByManufactureIdServer,
    carGetModificationByModelIdServer,
    clientCarUpdateServer,
} from "services";

import {   goBack, push  } from 'react-router-redux';




export const clientCarUpdate = car => dispatch =>
    clientCarUpdateServer(car)
        .then((response) => {
            dispatch({ type : 'CLIENT_CARS_SET',cars:response.data});
            dispatch(goBack());
        })
        .catch((error) => {
debugger;
            let cars = [
                {name:'e39',vin:'07.2003-05.2005',id:1,client_id:22},
                {name:'e60',vin:'07.2003-05.2005',id:1,client_id:22}
            ];
            dispatch({ type : 'CLIENT_CARS_SET',cars});
            dispatch(goBack());
        });

export const carGetModelByManufactureId = id => dispatch =>
    carGetModelByManufactureIdServer(id)
        .then((response) => {
            dispatch({ type : 'SET_CAR_MODELS',carModels:response.data});
        })
        .catch((error) => {

            let carModels = [
                {name:'e39',year:'07.2003-05.2005',id:1}
            ];
            dispatch({ type : 'SET_CAR_MODELS',carModels});
        });

export const carGetModificationByModelId = id => dispatch =>
    carGetModificationByModelIdServer(id)
        .then((response) => {
            dispatch({ type : 'CAR_MODIFICATIONS_LOAD',carModifications:response.data});
        })
        .catch((error) => {

            let carModifications = [
                {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                },      {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                },      {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                },      {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                },      {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                },      {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                },      {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                },      {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                },      {
                    HP: "75 PS",
                    KW: "55 kW",
                    bodyType: "Кабриолет",
                    cube: "1573 ccm",
                    cylinders: "4",
                    driveType: "Привод на задние колеса",
                    engineCode: "M10 B16",
                    fuel: "бензин",
                    id: 6146,
                    model: "BMW 3 (E30) 315",
                    year: "09.1982 - 12.1991"
                }
            ];
            dispatch({ type : 'CAR_MODIFICATIONS_LOAD',carModifications});
        });