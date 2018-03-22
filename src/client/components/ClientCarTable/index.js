import React from 'react';
import { connect } from 'react-redux';

import {Button ,Table} from 'reactstrap';

import {
    clientCarAdd,
    editCar,
    carDelete,
    clientGetAll
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
     
    font-weight: bold; 
     color: #848484;
`;

const TableWrapper = styled.div`
    overflow-y: scroll;
    height: 400px;
    margin-top: 10px;
`;

import { Label, InputGroupWrapper,   ContainerResult, Input } from 'components/InputGroup';

class InputCarModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue : ''
        };

        this.carEdit = this.carEdit.bind(this);
        this.addCar = this.addCar.bind(this);
        this.carDelete = this.carDelete.bind(this);
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

    render() {
        return (
            <Wrapper >
                <WrapperCenter>
                    <TitleWrapper>Редактирование автомобилей клиента</TitleWrapper>
                    <Button onClick={this.addCar}  color="primary">Добавить авто</Button>
                </WrapperCenter>

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
                        { this.props.cars

                            .map( (item, index) => (
                                <tr key={index} data-id={item.id} className="result-item">
                                    <td>{item.name}</td>
                                    <td>{item.vin}</td>
                                    <td>
                                        <Button
                                            onClick={this.carEdit}
                                            data-id={item.id}
                                            color="primary"
                                        >Редакрировать</Button>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={this.carDelete}
                                            data-id={item.id}
                                            color="danger"
                                        >Удалить</Button>
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

