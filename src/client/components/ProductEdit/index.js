import React from "react";
import styled from "styled-components";

import {connect} from "react-redux";

import {Button} from "reactstrap";

import {
    setArticle,
    setBrand,
    setCount,
    setDate,
    setDescription,
    setPlace,
    setPrice,
    setType,
    productUpdate,
} from "actions/ProductEditActions";
import SelectImporter from "components/SelectImporter";
import InputNumber from "components/InputNumber";
import InputData from "components/InputData";
import InputText from "components/InputText";
import InputProductType from "components/InputProductType";


import InputBrand from "components/InputBrand";

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



class ProductEdit extends React.Component {
    constructor(props) {
        super(props);

        this.saveProductChange = this.saveProductChange.bind(this);
    }

    saveProductChange(){

        const str =JSON.stringify( this.props.editProps.product);
        console.log(str);

        this.props.productUpdate(str);
    }

    render() {
        return (
            <ProductEditWrapper>

                <TitleWrapper> Редаткирование товара </TitleWrapper>
                <InputText
                    title="Артикул"
                    inputValue={ this.props.editProps.product.name }
                    handlerChangeValue={this.props.setArticle}
                />
                <InputBrand
                    handlerChangeValue={this.props.setBrand}
                />
                <InputProductType
                    handlerChangeValue={this.props.setType}
                />
                <InputText
                    title="Место"
                    inputValue={ this.props.editProps.product.place }
                    handlerChangeValue={this.props.setPlace}
                />
                <InputText
                    title="Коментарий"
                    inputValue={ this.props.editProps.product.description }
                    handlerChangeValue={this.props.setDescription}
                />
                <SelectImporter />
                <InputNumber
                    searchType="Количество"
                    inputValue={ this.props.editProps.product.count }
                    handlerChangeValue={this.props.setCount}
                />
                <InputNumber
                    searchType="Цена"
                    inputValue={ this.props.editProps.product.price }
                    handlerChangeValue={this.props.setPrice}
                />
                <InputData
                    searchType="Закупка"
                    inputValue={ this.props.editProps.product.date }
                    handlerChangeValue={this.props.setDate}
                />

                <div>

                    <Button
                        style={{marginLeft:'20px'}}
                        onClick={this.saveProductChange}
                        color="success"
                    >Сохранить</Button>
                </div>


            </ProductEditWrapper>
        );
    }
}

const mapStateToProps = state => ({
    appProps: state.AppReducer,
    editProps: state.EditProductReducer

});

const mapDispatchToProps = dispatch => ({


    setArticle: article => {
        dispatch(setArticle(article));
    },
    setDate: article => {
        dispatch(setDate(article));
    },
    setBrand: brand => {
        dispatch(setBrand(brand));
    },
    setType: type => {
        dispatch(setType(type));
    },
    setPlace: place => {
        dispatch(setPlace(place));
    },
    setCount: count => {
        dispatch(setCount(count));
    },
    setPrice: price => {
        dispatch(setPrice(price));
    },
    setDescription: description => {
        dispatch(setDescription(description));
    },
    productUpdate : product => {
        dispatch(productUpdate(product));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);