import React  from "react";
import styled from "styled-components";

import { connect } from 'react-redux';

import {Button} from 'reactstrap'

import {
    clientUpdateProps,
} from 'actions/ClientActions';



import InputText from 'components/InputText';


const Wrapper = styled.div`
    margin: 20px 10px 0 10px;
    background-color: #f5dd2a;
    padding: 10px;
    border-radius: 10px;
    display: grid; 
    justify-items: center; 
    display: grid;
    grid-gap: 10px;
`;

import Header from 'components/Header';

const WrapperApp = styled.div` 
    display: grid;
    grid-template-rows: 48px  ;
`;

const TitleWrapper = styled.div`
     
    font-weight: bold; 
     color: #848484;
`;



class ClientEdit extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name : '',
            phone : '',
        };
        this.handlerUpdate = this.handlerUpdate.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
    }

    handlerUpdate( ){
        if( this.state.phone.length>0 && this.state.name.length>0)
            this.props.clientUpdate(this.state);
    }

    updateName(value){
        this.setState({
            name : value,
            phone : this.state.phone,
        });
    }

    updatePhone(value){
        this.setState({
            name : this.state.name,
            phone : value,
        });
    }

    render(){
        return(
            <WrapperApp  >
                <Header/>
                <Wrapper>
                    <TitleWrapper>Редактирование клиента</TitleWrapper>
                    <InputText handlerChangeValue={this.updateName} inputValue={this.state.name} title="ФИО"/>
                    <InputText handlerChangeValue={this.updatePhone} inputValue={this.state.phone} title="Телефон"/>
                    <Button onClick={this.handlerUpdate} color="success">Сохранить</Button>
                </Wrapper>
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
    clientUpdate : params => {
        dispatch(clientUpdateProps( params ));
    },
    productLoad : id => {
        dispatch(productGetFull(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientEdit)