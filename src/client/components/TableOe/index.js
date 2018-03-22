import React, {Component} from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom'

import { Table, Button } from 'reactstrap';

import Checkbox from 'components/CheckboxCustom';

const spanStyled = styled.span`
    font-size: 20px;
    font-weight: 500;
`;

 import './style.css';

const tableData = [

    {
        name: '1415415235',
        brandName: 'BMW',
        id:1,
        brand_id: 124
    },
    {
        name: '1415415235',
        brandName: 'BMW',
        id:1,
        brand_id: 124
    },

];



export default class TableExampleComplex extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (

            <Table
                bordered
                striped
                hover  >
                <thead>
                <tr>
                    <th>Марка</th>
                    <th>Код</th>
                    <th>Кроссовый</th>
                    <th> </th>
                    <th> </th>
                </tr>
                </thead>
                <tbody    >
                { this.props.items.map( (item, index) => (
                    <tr key={index} data-itemid={item.id}>
                        <td>{item.brandName}</td>
                        <td>{item.name}</td>
                        <td><Checkbox checked={Boolean(item.is_cross)}/></td>
                        <td>
                            <Button data-oeid={item.id} onClick={this.props.handlerClick} color="danger">Удалить</Button>
                        </td>
                        <td>
                            <Button  color="primary" >Добавить код всем аналогам</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>




        );
    }
}
