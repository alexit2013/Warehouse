import React from "react";

import {connect} from "react-redux";

import InputAttrName from 'components/InputText';


import {
    productBrandAdd
} from "actions/ProductEditActions";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalBrandAdd extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.add = this.add.bind(this);
        this.updateName = this.updateName.bind(this);

        this.state = { name : ''};
    }

    toggle() {
        this.props.hidden();
    }

    add( ){
        debugger;
        this.props.productBrandAdd(   this.state.name );
    }

    updateName ( name ){
        this.setState({name});
    }


    render() {
        return (
            <Modal isOpen={this.props.editProps.isShowModalBrandAdd} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Добавление нового бренда в базу</ModalHeader>
                <ModalBody>
                    <InputAttrName title="Имя" handlerChangeValue={this.updateName}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.add}>Добавть</Button>
                    <Button color="secondary" onClick={this.toggle}>Отмена</Button>
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
    productBrandAdd : name => {
        dispatch(productBrandAdd(name));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBrandAdd);