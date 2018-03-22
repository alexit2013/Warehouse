import constants from "constants";
import {
    clientAddServer,
    clientUpdatePropsServer,
    clientGetServer,
    clientAddCarServer,
    clientCarDeleteServer,
    clientGetAllServer
} from "services";


import { routerMiddleware, push, replace  } from 'react-router-redux'

export const editCar = car => dispatch => {
    dispatch({ type : 'CAR_EDIT_SET',car});
    dispatch(push('cars/'+car.id));

};






export const clientGetAll = ( ) => dispatch =>
    clientGetAllServer()
        .then((response) => {
            dispatch({ type : 'CLIENTS_SET',clients:response.data});
        })
        .catch((error) => {
            let clients = [
                {
                    id : 1,
                    name : 'sasha',
                    phone : '+375296203411',
                    cars : [
                        {
                            name : 'e39',
                            vin : 'der343',
                            id: 3,
                            abs : 1,
                            oil_filter_name : 'ox143d',
                            oil_filter : 2,

                            air_filter_name : 'lx572',
                            air_filter : 3,
                        }
                    ]
                },
                {
                    id : 2,
                    name : 'lol',
                    phone : '+375293820168',
                    cars : [
                        {
                            name : 'e39',
                            vin : 'der343',
                            id :1,
                        },
                        {
                            id : 2,
                            name : 'e46',
                            vin : 'der3123243'
                        }
                    ]
                }
            ];
            dispatch({ type : 'CLIENTS_SET',clients});
        });


export const carDelete = id => dispatch =>
    clientCarDeleteServer(id)
        .then((response) => {
            dispatch({ type : 'CLIENT_CARS_DELETE',id});
        })
        .catch((error) => {
            dispatch({ type : 'CLIENT_CARS_DELETE',id});
        });


export const clientEdit = client => dispatch => {
    debugger;
    dispatch({ type : 'CLIENT_EDIT_SET',client});
    dispatch(replace('/clients/edit/'+client.id));

};

export const clientAdd = params => dispatch =>
    clientAddServer(params)
        .then((response) => {
            dispatch(clientEdit(response.data));
        })
        .catch((error) => {

            let client = {
                id:99,
              name:'alex',
                phone:'molodcoo',
                cars:[
                    {name:'bme e46',vin:'3434edfdgfd',id:22}
                    ]
            };
            dispatch(clientEdit(client));
        });

export const clientUpdateProps = id => dispatch =>
    clientUpdatePropsServer(id)
        .then((response) => {

            dispatch({ type : 'CLIENT_EDIT_SET',client:response.data});
        })
        .catch((error) => {

            let client = {
                id:99,
                name:'sasha',
                phone:'dadada',
                cars:[
                    {name:'bme e39',vin:'3434edfdgfd'}
                ]
            };

            dispatch({ type : 'CLIENT_EDIT_SET',client});
        });

export const clientGet = params => dispatch =>
    clientUpdatePropsServer(params)
        .then((response) => {

            alert('успешно');
        })
        .catch((error) => {

            alert('успешно');
        });


export const clientCarAdd = id => dispatch =>
    clientAddCarServer(id)
        .then((response) => {
            dispatch({ type : 'CAR_EDIT_SET',car:response.data});
            dispatch(push('cars/'+response.data.id));
        })
        .catch((error) => {
            let car =
                {
                    id:99,
                    client_id:22,
                    vin:null,
                    cars : [ {
                       name : 'bmw',
                        vin : '1244'
                    }],
                };
            dispatch({ type : 'CAR_EDIT_SET',car});
            dispatch(push('cars/'+car.id));
        });


