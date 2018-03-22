import React from 'react';
import styled from 'styled-components';


import { Button } from 'reactstrap';




import { Label, InputWrapper } from 'components/InputGroup';


const Input = styled.input.attrs({
    type: 'date',
})`
    
    font-weight: 500;
    padding-left: 10px;
    width: 350px;
`;


export default class InputArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value : props.inputValue };

        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.handlerInputClear = this.handlerInputClear.bind(this);
    }

    handlerInputChange(event){
        this.setState({value : event.target.value});
        this.props.handlerChangeValue(event.target.value);
    }

    handlerInputClear(event){
        let date = new Date();
        let day = date.getDay();
        day = day.toString().length === 1 ? '0'+day : day;
        const str = date.getFullYear()+'-'+date.getMonth()+1+'-'+day;
        console.log(str);
        this.setState({value : str});
        //this.props.handlerChangeValue(event.target.value);
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
                >Сегодня</Button>
            </InputWrapper>





        );
    }
}

