import constants from "constants";

const initialState = {
    clients : [],
     client : {
         id:99,
         name:'alex',
         phone:'molodcoo',
         cars:[
             {name:'bme e46',vin:'3434edfdgfd',id:22}
         ]
     }

};



const ClientReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {

        case 'CLIENT_CARS_DELETE' :
            debugger;
            newState.client.cars = newState.client.cars.filter(item=>item.id!=action.id);
            break;



        case 'CLIENTS_SET' :
            debugger;
            newState.clients = action.clients;
            break;

        case 'CLIENT_EDIT_SET' :
            newState.client = action.client;
            break;

        case 'CLIENT_CARS_SET' :
            debugger;
            newState.client.cars = action.cars;
            break;

        default:
            return state;
    }
    return newState;
};

export default ClientReducer;
