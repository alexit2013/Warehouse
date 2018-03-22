import React from "react";
import styled from "styled-components";

import {connect} from "react-redux";

import {Button} from "reactstrap";



import {
    deleteAllAttribute,
    productAttributeDeleteById
} from "actions/ProductAttributeActions";


import TableAttr from 'components/TableProductAttr';

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



class ProductAttributeEdit extends React.Component {
    constructor(props) {
        super(props);

        this.deleteAttributeById = this.deleteAttributeById.bind(this);
        this.deleteAllAttr = this.deleteAllAttr.bind(this);
        this.showModalEditName = this.showModalEditName.bind(this);
    }


    showModalEditName(e){

        const id = parseInt( e.target.dataset.itemid);
        let name = '';
        const attr = this.props.editProps.product.attr.filter(item=>item.id===id);
        if(attr.length>0) {
            this.props.setCurrentAttr(
                {
                    id : attr[0].id,
                    name : attr[0].name
                }
            );
            this.props.modalAttributeEditNameShow();
        }
    }

    deleteAllAttr(){
        this.props.deleteAllAttribute(this.props.editProps.product.id);
    }

    deleteAttributeById(e){
        const id = e.target.dataset.itemid;
        this.props.productAttributeDeleteById({
            product_id : this.props.editProps.product.id,
            id
        });
    }



    render() {
        return (
            <ProductEditWrapper >

                <TitleWrapper>Редактирование атрибутов</TitleWrapper>
                <TableAttr
                    handlerDeleteById={this.deleteAttributeById}
                    handlerShowModalEditName={this.showModalEditName}
                    items={this.props.editProps.product.attr} />
                <OeOptionWrapper>
                    <Button onClick={this.props.modalProductAddAttributeShow}  color="success">Добавить атрибут</Button>
                    <Button onClick={this.props.modalAddAttributeShow} color="success">Добавить новый атрибут в базу</Button>
                    <Button   color="success">Скопировать атрибуты с детали</Button>
                    <Button onClick={this.deleteAllAttr}  color="danger">Удалить все атрибуты</Button>
                </OeOptionWrapper>

            </ProductEditWrapper>
        );
    }
}

const mapStateToProps = state => ({
    editProps: state.EditProductReducer

});

const mapDispatchToProps = dispatch => ({

    modalProductAddAttributeShow : ( ) =>{
        dispatch({ type :  'MODAL_PRODUCT_ADD_ATTRIBUTE_SHOW'});
    },
    modalAddAttributeShow : ( ) =>{
        dispatch({ type : 'MODAL_ADD_ATTRIBUTE_SHOW'});
    },
    modalAttributeEditNameShow : ( ) =>{
        dispatch({ type : 'MODAL_ATTRIBUTE_EDIT_NAME_SHOW'});
    },
    setCurrentAttr : ( attr ) =>{
        dispatch({type:'SET_CURRENT_PRODUCT_ATTR',attr})
    },
    deleteAllAttribute : id => {
        dispatch(deleteAllAttribute(id));
    },
    productAttributeDeleteById : params =>{
        dispatch(productAttributeDeleteById(params));
    }


});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAttributeEdit);