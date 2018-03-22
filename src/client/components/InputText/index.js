import React from 'react';

import { Button  } from 'reactstrap';

import { Label, InputGroupWrapper, InputWrapper, ContainerResult, Input } from 'components/InputGroup';




export default class InputText extends React.Component {
    constructor(props) {
        super(props);

        this.handlerClearInput = this.handlerClearInput.bind(this);
        this.handlerInputChange = this.handlerInputChange.bind(this);


    }


    handlerClearInput (){
        this.props.handlerChangeValue('');
    }

    handlerInputChange ( e ) {
            this.props.handlerChangeValue(e.target.value)
    }



  render() {

    return (

        <InputWrapper>
            <Label>{this.props.title}</Label>
            <Input
            value={this.props.inputValue}
            onChange={this.handlerInputChange}
            />
            <Button
                onClick={this.handlerClearInput}
                color="danger" style={
                {
                    'borderTopLeftRadius' : 0,
                    'borderBottomLeftRadius' : 0
                }}
            >X</Button>
        </InputWrapper>
    );
  }
}





