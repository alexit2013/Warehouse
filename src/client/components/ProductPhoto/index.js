import React from "react";
import styled from "styled-components";

import {connect} from "react-redux";

import {Button} from "reactstrap";

import {productLoadPhoto} from 'actions/ProductEditActions';


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


import InputText from 'components/InputText';

const TitleWrapper = styled.div`
     font-weight: bold; 
     color: #848484;
`;

const ImgWrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    width: 100%;
`;

const ControlWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
`;

const InputWrapper = styled.div`
    margin: 5px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 70% 30%;
`;


class ProductPhoto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            photo : '' ,
            link : '',
        };

        this.handlerChangeFile = this.handlerChangeFile.bind(this);
        this.handlerLoadFile = this.handlerLoadFile.bind(this);
    }

    handlerChangeFile(e){
          if(e.target.files[0])
              this.setState({photo:e.target.files[0],link:this.state.link});
    }

    handlerLoadFile(){
        debugger;
        if(this.state.photo)
            this.props.handlerLoadFile({
                photo :  this.state.photo,
                product_id : this.props.editProps.product.id
            });
    }


    render() {
        return (
            <ProductEditWrapper>
                <TitleWrapper> Фото товара</TitleWrapper>
                <ImgWrapper>
                    <img style={{height:'300px',width:'300px',backgroundColor:'red'}} src={this.props.editProps.product.src} alt=""/>
                    <ControlWrapper>

                        <InputWrapper>
                            <InputText title="Ссылка"/>
                            <Button color="success">Сохранить</Button>
                        </InputWrapper>

                        <InputWrapper>
                            <input onChange={this.handlerChangeFile} type="file"/>
                            <Button onClick={this.handlerLoadFile} color="success">Сохранить</Button>
                        </InputWrapper>

                    </ControlWrapper>
                </ImgWrapper>
            </ProductEditWrapper>
        );
    }
}

const mapStateToProps = state => ({

    editProps: state.EditProductReducer

});

const mapDispatchToProps = dispatch => ({


    handlerLoadFile : (params)=>{
        dispatch(productLoadPhoto(params));
    },

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPhoto);