import React from "react";

import {connect} from "react-redux";

import InputText from 'components/InputText';


import {
    productAttributeTypeUpdateName
} from "actions/ProductAttributeTypeActions";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalProductAttributeTypeEditName extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.attributeUpdateName = this.attributeUpdateName.bind(this);
    }



    toggle() {
         this.props.hidden();
    }

    attributeUpdateName(   ){
        this.props.attributeUpdateName(
            {
                id : this.props.editProps.currentAttr.id,
                name : this.props.editProps.currentAttr.name,
                product_id : this.props.editProps.product.id
             });
        this.props.hidden();
    }


    render() {
        return (
                <Modal isOpen={this.props.editProps.isShowModalAttrEditName} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Редактирование названия атрибута</ModalHeader>
                    <bodyWrapper>
                            <InputText
                                handlerChangeValue={this.props.updateName}
                                inputValue={this.props.editProps.currentAttr.name}
                                title="Код"/>
                     </bodyWrapper>
                    <ModalFooter>
                        <Button color="success" onClick={this.attributeUpdateName}>Добавть</Button>
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

    updateName : name => {
      dispatch({type:'SET_CURRENT_PRODUCT_ATTR_NAME',name});
    },

    hidden: ( ) => {
        dispatch({type:'MODAL_PRODUCT_HIDDEN'});
    },
    attributeUpdateName : params => {
    dispatch(productAttributeTypeUpdateName(params));
}

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductAttributeTypeEditName);