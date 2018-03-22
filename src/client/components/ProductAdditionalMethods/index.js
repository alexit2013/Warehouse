import React from "react";
import styled from "styled-components";

import {connect} from "react-redux";

import {Button} from "reactstrap";


const ProductEditWrapper = styled.div`
    margin: 20px 10px 0 10px;
    background-color: #f5dd2a;
    padding: 10px;
    border-radius: 10px;
    display: grid; 
    justify-items: center; 
    display: grid;
    grid-gap: 10px;
`;




const TitleWrapper = styled.div`
     
    font-weight: bold; 
     color: #848484;
`;

const MethodWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;



class ProductAdditionalMethods extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <ProductEditWrapper>

                <TitleWrapper> Дополнительные методы</TitleWrapper>
                <MethodWrapper>
                    <Button onClick={this.props.modalProductCopyShow} color="danger">Копировать товар</Button>
                    <Button onClick={this.props.modalBrandAddShow} color="primary">Добавить новый бренд</Button>
                    <Button onClick={this.props.modalProductTypeAddShow} color="primary">Добавить новый тип товара</Button>
                </MethodWrapper>

            </ProductEditWrapper>
        );
    }
}

const mapStateToProps = state => ({

    editProps: state.EditProductReducer

});

const mapDispatchToProps = dispatch => ({


    modalProductCopyShow : ( ) => {
        dispatch(({ type : 'MODAL_PRODUCT_COPY_SHOW'}));
    },

    modalBrandAddShow : ( ) => {
        dispatch(({ type : 'MODAL_BRAND_ADD_SHOW'}));
    },

    modalProductTypeAddShow : ( ) => {
        dispatch(({ type : 'MODAL_PRODUCT_TYPE_ADD_SHOW'}));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdditionalMethods);