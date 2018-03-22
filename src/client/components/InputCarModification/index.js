import React from 'react';
import { connect } from 'react-redux';

import {Button ,Table} from 'reactstrap';
import ResultItem from './ResultItem';

import {
    searchByName,
    setValue,
    changeValue,
    resultShow,
    resultHidden
} from 'actions/InputBrandActions';

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

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const TableWrapper = styled.div`
    overflow-y: scroll;
    height: 400px;
`;

import { Label, InputGroupWrapper,   ContainerResult, Input } from 'components/InputGroup';

class InputCarModel extends React.Component {
    constructor(props) {
        super(props);

        debugger;
        this.state = {
            inputValue : this.props.carProps.currentCar.name
        };

        this.handlerOnClick = this.handlerOnClick.bind(this);
        this.handlerClearInput = this.handlerClearInput.bind(this);
    }


    handlerClearInput (){
        this.setState({ inputValue : ''});
    }





    handlerOnClick(event) {
        const element = event.target;
        if (element) {
            if (element.parentNode.classList.contains('result-item')) {
                const name = element.parentNode.childNodes[0].innerText;
                const id = element.parentNode.dataset.itemid;
                this.setState({ inputValue : name});
                this.props.clientSetCarModification({id,name});
            }
        }
    };




    render() {

        return (
            <Wrapper

            >
                <InputWrapper    >

                    <Input

                        value={ this.state.inputValue}
                        onChange={this.handlerInputChange}
                    />

                </InputWrapper>
    <TableWrapper>
                    <Table
                        bordered
                        striped
                        hover  >
                        <thead>
                        <tr>
                            <th>Модель</th>
                            <th>Выпуск</th>
                            <th>Кузов</th>
                            <th>Двигатель</th>
                            <th>Обьем</th>
                            <th>Цилиндров</th>
                            <th>HP</th>
                            <th>KW</th>
                            <th>Привод</th>
                            <th>Топливо</th>
    </tr>
                        </thead>
                        <tbody onClick={this.handlerOnClick}   >
                        { this.props.carProps.carModifications

                            .map( (item, index) => (
                            <tr key={index} data-itemid={item.id} className="result-item">
                                <td>{item.model}</td>
                                <td>{item.year}</td>
                                <td>{item.bodyType}</td>
                                <td>{item.engineCode}</td>
                                <td>{item.cube}</td>
                                <td>{item.cylinders}</td>
                                <td>{item.HP}</td>
                                <td>{item.KW}</td>
                                <td>{item.driveType}</td>
                                <td>{item.fuel}</td>
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
    carProps : state.ClientCarReducer
});


const mapDispatchToProps = dispatch => ({

    clientSetCarModification: modification => {
        dispatch( {type:'CLIENT_CAR_SET_MODIFICATION',modification});
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(InputCarModel);

