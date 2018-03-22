import React from "react";
import {connect} from "react-redux";

import styled from 'styled-components';

import InputManufacture from 'components/InputManufacture';
import InputText from 'components/InputText';

import {
    oeAdd
} from "actions/OeActions";

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
`;


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalAddOe extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.updateBrand = this.updateBrand.bind(this);
        this.updateName = this.updateName.bind(this);
        this.addOe = this.addOe.bind(this);

        this.state = {
            manufacture_id : 0,
            name : ''
        };
    }

    updateBrand(manufacture_id){
        this.setState({
            manufacture_id,
            name : this.state.name
        });
    }

    updateName(name){
        this.setState({
            manufacture_id : this.state.manufacture_id,
            name
        });
    }


    toggle() {
         this.props.hidden();
    }

    addOe(   ){
        console.log(this.state);
        this.props.oeAdd( {   manufacture_id : this.state.manufacture_id, name:this.state.name});
        this.props.hidden();
    }


    render() {
        return (
                <Modal isOpen={this.props.editProps.isShowModalAddOe} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Добавление нового OE в базу</ModalHeader>
                    <ModalBody>
                        <InputWrapper>
                            <InputManufacture handler={this.updateBrand}  />
                            <InputText handlerChangeValue={this.updateName} inputValue={this.state.name}  title="Код"/>
                        </InputWrapper>
                     </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.addOe}>Добавть</Button>
                        <Button color="secondary" onClick={this.toggle}>Отмна</Button>
                    </ModalFooter>
                </Modal>

        );
    }
}



const mapStateToProps = state => ({
    editProps: state.EditProductReducer

});

const mapDispatchToProps = dispatch => ({
    hidden: ( ) => {
        dispatch({type:'MODAL_PRODUCT_HIDDEN'});
    },
    oeAdd : params => {
    dispatch(oeAdd(params));
}

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddOe);