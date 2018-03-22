import React, {Component} from 'react';

import { Link } from 'react-router-dom'

import { Table } from 'reactstrap';




export default class TableExampleComplex extends Component {


    render() {
        return (

                <Table
    bordered
    striped
    hover  >
                    <thead>
                    <tr>
                        <th>Артикул</th>
                        <th><a href="">Бренд</a></th>
                        <th>Тип</th>
                        <th>Поставщик</th>
                        <th>Закупка</th>
                        <th>Место</th>
                        <th>Коментарий</th>
                        <th>ШТ</th>
                        <th>Цена</th>
                    </tr>
                    </thead>
                    <tbody  >
                    {this.props.items.map( (item, index) => (
                        < tr   key={index} data-itemid={item.id}>
                            <td colSpan={3} >{item.name}</td>
                            <td>{item.brandName}</td>
                            <td>{item.typeName}</td>
                            <td>{item.importerName}</td>
                            <td>{item.datePurchase}</td>
                            <td>{item.place}</td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={'/edit/'+item.id}>Edit</Link>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </Table>




        );
    }
}