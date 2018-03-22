import React from "react";
import styled from "styled-components";

import {connect} from "react-redux";

import {Button} from "reactstrap";


import InputManufacture from 'components/ModalOeAdd';

import {
    productDeleteOeById,
    productDeleteAllOe
} from "actions/OeActions";

import TableOe from 'components/TableOe';

const ProductEditWrapper = styled.div`
    margin: 20px 10px 0 10px;
    background-color: #f5dd2a;
    padding: 10px;
    border-radius: 10px;
     
`;

const OeOptionWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;



const TitleWrapper = styled.div`
      color: #848484;
    font-weight: bold; 
    text-align: center;
`;



class ProductEditOe extends React.Component {
    constructor(props) {
        super(props);

        this.saveProductChange = this.saveProductChange.bind(this);
        this.deleteOe = this.deleteOe.bind(this);
        this.deleteAllOe = this.deleteAllOe.bind(this);
    }


    deleteAllOe(){
        this.props.deleteAllOe(this.props.editProps.product.id);
    }

    deleteOe(e){
        debugger;
        const element = e.target;
        if( element)
                this.props.deleteOe({oe_id:element.dataset.oeid,product_id:this.props.editProps.product.id});
    }

    saveProductChange(){
        const product = {
            name : this.props.editProps.product.name,
            brand_id : this.props.editProps.product.brand_id,
            type_id : this.props.editProps.product.type_id,
            price : this.props.editProps.product.price,
            date : this.props.editProps.product.date,
            count : this.props.editProps.product.count,
            description : this.props.editProps.product.description,
            place : this.props.editProps.product.place,
            importer_id : this.props.editProps.product.importer_id,
            id : this.props.editProps.product.id,

        };
        const str =JSON.stringify( this.props.editProps.product);
        console.log(str);

        this.props.updateProp(str);
    }

    render() {
        return (
            <ProductEditWrapper >

                <InputManufacture/>

                <TitleWrapper>Редактирование OE</TitleWrapper>
                <TableOe handlerClick={this.deleteOe}   items={this.props.editProps.product.oe} />
                <OeOptionWrapper>
                    <Button onClick={this.props.modalProductAddOeShow} color="success">Добавить код</Button>
                    <Button onClick={this.props.modalAddOeShow} color="success">Добавить новый код в базу</Button>
                    <Button onClick={this.props.modalProductAddCrossByProductIdShow} color="danger">Добавить кросс на товар</Button>
                    <Button onClick={this.props.modalProductCopyOeShow} color="success">Скопировать коды с детали</Button>
                    <Button onClick={this.deleteAllOe} color="danger">Удалить все коды</Button>
                </OeOptionWrapper>

            </ProductEditWrapper>
        );
    }
}

const mapStateToProps = state => ({
    editProps: state.EditProductReducer

});

const mapDispatchToProps = dispatch => ({

    modalProductAddCrossByProductIdShow : () =>{
      dispatch({ type : 'MODAL_PRODUCT_ADD_CROSS_BY_PRODUCT_ID_SHOW'});
    },
    modalAddOeShow : ( ) =>{
        dispatch({ type : 'MODAL_ADD_OE_SHOW'});
    },
    modalProductAddOeShow : ( ) => {
        dispatch({ type : 'MODAL_PRODUCT_ADD_OE_SHOW'});
    },
    modalProductCopyOeShow : ( ) => {
        dispatch({ type : 'MODAL_PRODUCT_COPY_OE_SHOW'});
    },
    deleteOe : params => {
        dispatch(productDeleteOeById(params));
    },
    deleteAllOe : id => {
        dispatch(productDeleteAllOe(id));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditOe);