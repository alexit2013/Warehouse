import React from "react";

import {connect} from "react-redux";

import InputOe from 'components/InputOe';

import {
    productAddOe
} from "actions/OeActions";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalProductAddOe extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.productAddOe = this.productAddOe.bind(this);
    }

    toggle() {
         this.props.hidden();
    }

    productAddOe( oe_id ){
        this.props.productAddOe( { oe_id, product_id : this.props.editProps.product.id });
    }

    render() {
        return (
                <Modal isOpen={this.props.editProps.isShowModalProductAddOe} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Добавление OE</ModalHeader>
                    <ModalBody>
                        <InputOe handler={this.productAddOe}/>
                     </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
    productAddOe : params => {
    dispatch(productAddOe(params));
}

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductAddOe);