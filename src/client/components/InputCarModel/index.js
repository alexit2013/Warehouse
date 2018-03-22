import React from 'react';
import { connect } from 'react-redux';

import {Button } from 'reactstrap';
import ResultItem from './ResultItem';

import {
    carGetModificationByModelId
} from 'actions/CarActions';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;

const ResultWrapper = styled.div`
   width: 535px;
   overflow-y: scroll;
   height: 300px;
   margin: 0 auto;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

import { Label, InputGroupWrapper,   ContainerResult, Input } from 'components/InputGroup';

class InputCarModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue : ''
        };

        this.handlerOnClick = this.handlerOnClick.bind(this);

        this.handlerClearInput = this.handlerClearInput.bind(this);
        this.handlerInputChange = this.handlerInputChange.bind(this);

    }


    handlerClearInput (){
        this.setState({ inputValue : ''});
    }

    handlerInputChange ( event ) {
        this.setState({ inputValue : event.target.value});
    }



    handlerOnClick(event) {
        const element = event.target;

        if (element) {
            if (element.parentNode.classList.contains('result-item')) {
                const name = element.parentNode.childNodes[0].innerText;
                const id = element.parentNode.dataset.itemid;
                this.setState({ inputValue : name});
                this.props.getModifications(id);
            }
        }
    };

    handlerSubmit(event) {
        event.preventDefault();
    }


    render() {

        return (
            <Wrapper

            >
                <InputWrapper  onSubmit={this.handlerSubmit}  >

                    <Input

                        value={ this.state.inputValue}
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

                <ResultWrapper
                    onClick={this.handlerOnClick} >
                    { this.props.carProps.carModels
                        .filter(item=>item.name.toUpperCase().indexOf(this.state.inputValue.toUpperCase()) > -1)
                        .map(item => <ResultItem key={item.id} {...item} />)}
                </ResultWrapper>


            </Wrapper>
        );
    }
}
const mapStateToProps = state => ({
    carProps : state.ClientCarReducer
});


const mapDispatchToProps = dispatch => ({

    getModifications: inputValue => {
        dispatch( carGetModificationByModelId( inputValue ));
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(InputCarModel);

