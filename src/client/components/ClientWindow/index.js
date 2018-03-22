import React, {Component} from "react";
import styled from "styled-components";

import { connect } from 'react-redux';



import {
    importersLoad,
    productGetFull
} from 'actions/ProductEditActions';


import EditOe from 'components/ProductEditOe';


import ProductEdit from 'components/ProductEdit';
import ProductEditAttr from 'components/ProductAttributeEdit';
import ProductAdditionalMethods from 'components/ProductAdditionalMethods';
import ProductPhoto from 'components/ProductPhoto';



import Header from 'components/Header';

const WrapperApp = styled.div` 
    display: grid;
    grid-template-rows: 48px  ;
`;




class EditWindow extends React.Component{

    constructor(props){
        super(props);

        if( this.props.editProps.importers.length === 0 )
            this.props.loadImporters();

        if( props.match.params.id ){
            this.props.productLoad(props.match.params.id);
        }

    }



    render(){
        return(
            <WrapperApp  >
                <Header/>
                <div>
                    <button>Добавть нового клинта</button>
                </div>

                <ProductAdditionalMethods/>
                <ProductEdit />
                <EditOe/>
                <ProductEditAttr/>
                <ProductPhoto/>
            </WrapperApp>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        editProps : state.EditProductReducer,
    }
};
const mapDispatchToProps = (dispatch) => ({
    loadImporters : ( ) => {
        dispatch(importersLoad(  ));
    },
    productLoad : id => {
        dispatch(productGetFull(id));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(EditWindow)