import React from "react";
import styled from "styled-components";

import {connect} from "react-redux";

import InputText from 'components/InputText';
import InputProductAttributeType from 'components/InputProductAttributeType';


import {
    productAttributeAdd
} from "actions/ProductAttributeActions";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-between;
`;

class ModalProductAddAttribute extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.updateType = this.updateType.bind(this);
        this.updateName = this.updateName.bind(this);
        this.productAttributeAdd = this.productAttributeAdd.bind(this);

        this.state = {
            id : 0,
            name : ''
        };
    }

    updateType(id){
        debugger;
        this.setState({
            id,
            name : this.state.name
        });
    }

    updateName(name){
        this.setState({
            id : this.state.id,
            name
        });
    }


    toggle() {
        this.props.hidden();
    }

    productAttributeAdd(   ){
        console.log(this.state);
        debugger;
        this.props.productAttributeAdd(
            {
                type_id : this.state.id,
                value:this.state.name,
                product_id : this.props.editProps.product.id
            }
        );
        this.props.hidden();
    }


    render() {
        return (
            <Modal isOpen={this.props.editProps.isShowModalProductAddAttr} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Добавление атрибута</ModalHeader>
                <ModalBody>
                    <InputWrapper>
                        <InputProductAttributeType handlerChangeValue={this.updateType}/>
                        <InputText title="Значение" handlerChangeValue={this.updateName} inputValue={this.state.name}  />
                    </InputWrapper>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.productAttributeAdd}>Добавть</Button>
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
    productAttributeAdd : params => {
        dispatch(productAttributeAdd(params));
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalProductAddAttribute);


