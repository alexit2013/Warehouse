import React from 'react';
import { connect } from 'react-redux';

import {Button ,Table} from 'reactstrap';

import InputText from 'components/InputText';


import { routerMiddleware, push, replace  } from 'react-router-redux'

import {
    clientCarAdd,
    editCar,
    carDelete,
    clientGetAll,
    clientEdit
} from 'actions/ClientActions';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;

const ResultWrapper = styled.div`
   width: 535px;
   overflow-y: scroll;
   height: 300px;
   margin: 0 auto;
`;

const  WrapperCenter = styled.div`
    display: grid;
    grid-gap: 10px;
    justify-content: center;
`;

const TitleWrapper = styled.div`
     text-align: center;
    font-weight: bold; 
     color: #848484;
`;

const TableWrapper = styled.div`
    overflow-y: scroll;
    height: 300px;
    margin-top: 10px;
`;

import { Label, InputGroupWrapper,   ContainerResult, Input } from 'components/InputGroup';

class InputCarModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue : ''
        };

        this.props.loadClients();

        this.carEdit = this.carEdit.bind(this);
        this.addCar = this.addCar.bind(this);
        this.carDelete = this.carDelete.bind(this);
        this.handlerUpdatePhone = this.handlerUpdatePhone.bind(this);
        this.clientSelect = this.clientSelect.bind(this);
        this.clientEdit = this.clientEdit.bind(this);
        this.carSelect = this.carSelect.bind(this);
    }


    handlerUpdatePhone ( value ) {
        debugger;
        this.setState({ inputValue : value});
    }

    carEdit(e){
        const id = e.target.dataset.id;
        const car = this.props.cars.filter(item=>item.id===parseInt(id))[0];
        this.props.carEdit(car);
    }

    carDelete(e){
        this.props.carDelete(e.target.dataset.id);
    }

    addCar(){
        this.props.addCar(this.props.clientProps.client.id);
    }

    clientEdit(e){
        const id = parseInt(e.target.dataset.id);
        let client = this.props.clientProps.clients.filter(item=>item.id===id)[0];
        debugger;
        this.props.clientEdit(client);
    }

    clientSelect(e){
        const id = parseInt(e.target.dataset.id);
        let client = this.props.clientProps.clients.filter(item=>item.id===id)[0];
        debugger;
        this.props.clientSet(client);
    }

    carSelect(e){
        debugger;
        const id = parseInt(e.target.dataset.id);
        let car = this.props.clientProps.client.cars.filter(item=>item.id===id)[0];
        this.props.carSelect(car);
    }

    render() {
        return (
            <Wrapper >
                <WrapperCenter>
                    <TitleWrapper>Выбор клиента</TitleWrapper>
                    <InputText
                        inputValue={this.state.inputValue}
                        handlerChangeValue={this.handlerUpdatePhone}
                        title="Телефон"
                    />
                </WrapperCenter>

                <TableWrapper>
                    <Table
                        bordered
                        striped
                        hover  >
                        <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Телефон</th>
                        </tr>
                        </thead>
                        <tbody onClick={this.handlerOnClick}   >
                        { this.props.clientProps.clients
                            .filter(item=>item.phone.toUpperCase().indexOf(this.state.inputValue.toUpperCase()) > -1)
                            .map( (item, index) => (
                                <tr key={index} data-id={item.id} className="result-item">
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <Button
                                            onClick={this.clientEdit}
                                            data-id={item.id}
                                            color="primary"
                                        >Редакрировать</Button>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={this.clientSelect}
                                            data-id={item.id}
                                            color="success"
                                        >Выбрать</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>

                <TableWrapper>
                    <Table
                        bordered
                        striped
                        hover  >
                        <thead>
                        <tr>
                            <th>Модель</th>
                            <th>VIN</th>
                        </tr>
                        </thead>
                        <tbody onClick={this.handlerOnClick}   >
                        { this.props.clientProps.client.cars
                            .map( (item, index) => (
                                <tr key={index} data-id={item.id} className="result-item">
                                    <td>{item.name}</td>
                                    <td>{item.vin}</td>
                                    <td>
                                        <Button
                                            onClick={this.carSelect}
                                            data-id={item.id}
                                            color="success"
                                        >Выбрать</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TableWrapper>

            </Wrapper>
        );
    }
}
const mapStateToProps = state => ({
    clientProps : state.ClientReducer
});


const mapDispatchToProps = dispatch => ({

    clientSelect : client => {
        dispatch({type:'CLIENT_SET',client});
        if(client.cars.length===1)
            dispatch(replace('/'));
    },
    carSelect : car => {
        dispatch({type:'CAR_SET',car});
        dispatch(replace('/'));
    },

    clientSet : client =>{
        dispatch({ type : 'CLIENT_EDIT_SET',client});
        dispatch({type:'CLIENT_SET',client});
        if(client.cars.length===1)
            dispatch(replace('/'));
    },

    clientEdit : (client) =>{
        dispatch(clientEdit(client));
    },

    loadClients : () =>{
        dispatch(clientGetAll());
    },

    carDelete : id =>{
        dispatch(carDelete(id));
    },
    carEdit : car =>{
        dispatch(editCar(car));
    },

    addCar: id => {
        dispatch(clientCarAdd(id));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(InputCarModel);

