import React from "react";
import styled from "styled-components";

import {connect} from "react-redux";

import {Button} from "reactstrap";


import AutoComplete from 'material-ui/AutoComplete';



const fruit = [
    'Apple', 'Apricot', 'Avocado',
    'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
    'Boysenberry', 'Blood Orange',
    'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
    'Coconut', 'Cranberry', 'Clementine',
    'Damson', 'Date', 'Dragonfruit', 'Durian',
    'Elderberry',
    'Feijoa', 'Fig',
    'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
    'Honeydew', 'Huckleberry',
    'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
    'Kiwi fruit', 'Kumquat',
    'Lemon', 'Lime', 'Loquat', 'Lychee',
    'Nectarine',
    'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
    'Olive', 'Orange',
    'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
    'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
    'Quince',
    'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
    'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
    'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
    'Ugli fruit',
    'Watermelon',
];

/**
 * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
 * and limits the number of results displayed using the `maxSearchResults` property.
 */
const AutoCompleteExampleFilters = () => (
    <div>

        <br />
        <AutoComplete
            floatingLabelText="Type 'peah', fuzzy search"
            filter={AutoComplete.fuzzyFilter}
            dataSource={fruit}
            maxSearchResults={5}
        />
    </div>
);

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


import InputManufacture from 'components/InputManufacture';

const TitleWrapper = styled.div`
     
    font-weight: bold; 
     color: #848484;
`;



class CarManufactureSelect extends React.Component {
    constructor(props) {
        super(props);

        this.saveProductChange = this.saveProductChange.bind(this);
    }

    saveProductChange(){


        this.props.productUpdate(str);
    }

    render() {
        return (
            <ProductEditWrapper>
                <TitleWrapper> Выбор Марки </TitleWrapper>
                <InputManufacture/>
            </ProductEditWrapper>
        );
    }
}

const mapStateToProps = state => ({
    fastSearchProps: state.FastSearchReducer,
    appProps: state.AppReducer,
    editProps: state.EditProductReducer

});

const mapDispatchToProps = dispatch => ({






});

export default connect(mapStateToProps, mapDispatchToProps)(CarManufactureSelect);