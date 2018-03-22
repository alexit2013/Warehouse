import React, {Component} from 'react';

import styled from 'styled-components';

import { Table, Button } from 'reactstrap';



 import './style.css';




export default class TableProductAttr extends Component {

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
                    <th>Назнвание</th>
                    <th>Значение</th>
                </tr>
                </thead>
                <tbody    >
                { this.props.items.map( (item, index) => (
                    <tr key={index} data-itemid={item.id}>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                        <td>
                            <Button data-itemid={item.id} onClick={this.props.handlerShowModalEditName} color="danger">Редактировать название</Button>
                        </td>
                        <td>
                            <Button onClick={this.props.handlerDeleteById}  color="primary" data-itemid={item.id} >Удалить</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>




        );
    }
}
