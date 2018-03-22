import React from "react";

import {connect} from "react-redux";

import InputArticle from 'components/InputArticle';


import {
    copyOeByProductId
} from "actions/OeActions";




import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalProductCopyOe extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.productCopyOeByProductId = this.productCopyOeByProductId.bind(this);
    }

    toggle() {
         this.props.hidden();
    }

    productCopyOeByProductId( copy_id ){

        this.props.productCopyOeByProductId( { copy_id, product_id : this.props.editProps.product.id });
    }


    render() {
        return (
                <Modal isOpen={this.props.editProps.isShowModalCopyOe} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Копирование OE кодов</ModalHeader>
                    <ModalBody>
                        <InputArticle handler={this.productCopyOeByProductId}  />
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
     productCopyOeByProductId : params => {
     dispatch(copyOeByProductId(params));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductCopyOe);