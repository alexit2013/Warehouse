import React from "react";

import {connect} from "react-redux";

import InputArticle from 'components/InputArticle';


import {
    copy
} from "actions/ProductEditActions";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalProductCopyOe extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.productCopy = this.productCopy.bind(this);
    }

    toggle() {
         this.props.hidden();
    }

    productCopy ( product_copy ){
        debugger;
        this.props.productCopy( { copy_id : product_copy.id, product_id : this.props.editProps.product.id });
    }


    render() {
        return (

                <Modal isOpen={this.props.editProps.isShowModalCopyProduct} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Копирование товара</ModalHeader>
                    <ModalBody>
                        <InputArticle handler={this.productCopy}  />
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
     productCopy : params => {
     dispatch(copy(params));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductCopyOe);