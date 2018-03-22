import React from 'react';
import styled from 'styled-components';


import { Button } from 'reactstrap';






import { Label, InputWrapper } from 'components/InputGroup';


const Input = styled.input.attrs({
  type: 'number',
})`
    
    font-weight: 500;
    padding-left: 10px;
    width: 400px;
`;




export default class InputNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value : props.inputValue};

    this.handlerInputChange = this.handlerInputChange.bind(this);
    this.handlerInputClear = this.handlerInputClear.bind(this);
  }

    handlerInputChange(event){
      this.setState({value : event.target.value});
      this.props.handlerChangeValue(event.target.value);
    }

    handlerInputClear(event){
        this.setState({value : 0});
        this.props.handlerChangeValue(0);
    }


  render() {
    return (

        <InputWrapper    >
            <Label>{this.props.searchType}</Label>
          <Input
              value={this.state.value}
              onChange={this.handlerInputChange}
          />
            <Button
                onClick={this.handlerInputClear}
                color="danger"
                style={{'borderTopLeftRadius' : 0, 'borderBottomLeftRadius' : 0,}}
            >X</Button>
        </InputWrapper>





    );
  }
}

