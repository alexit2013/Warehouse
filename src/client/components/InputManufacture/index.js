import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {Button } from 'reactstrap';
import ResultItem from './ResultItem';

import {
    searchByName,
    setValue,
    changeValue,
    resultShow,
    resultHidden
} from 'actions/InputManufactureActions';


import { Label, InputGroupWrapper, InputWrapper, ContainerResult, Input } from 'components/InputGroup';

class InputManufacture extends React.Component {
    constructor(props) {
        super(props);

        this.handlerOnClick = this.handlerOnClick.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerClearInput = this.handlerClearInput.bind(this);
        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.handlerOutFocus = this.handlerOutFocus.bind(this);
        this.handlerOnFocus = this.handlerOnFocus.bind(this);
    }


    handlerClearInput (){
        this.props.inputSetValue('');
    }

    handlerInputChange ( event ) {
        this.props.inputChangeValue(event.target.value)
    }

    handlerOutFocus (event ) {
        setTimeout(this.props.resultHidden, 250);
    }

    handlerOnFocus () {
        this.props.resultShow();
    }

    handlerOnClick(event) {
        const element = event.target;

        if (element) {
            if (element.classList.contains('result-item')) {
                const name = element.innerHTML;
                const id = element.dataset.itemid;
                if( this.props.handler )
                    this.props.handler(  id );
                this.props.inputSetValue( name );
            }
        }
    };

    handlerSubmit(event) {
        event.preventDefault();
        if (this.props.inputProps.result.length){
            const name = this.props.inputProps.result[0].name;
            const id = this.props.inputProps.result[0].id;
            if( this.props.handler )
                this.props.handler( id );
            this.props.inputSetValue( name );
            this.props.resultHidden();
        }
    }


    render() {
        return (
            <InputGroupWrapper
                onFocus={this.handlerOnFocus}
                onBlur ={this.handlerOutFocus}
            >
                <InputWrapper  onSubmit={this.handlerSubmit}  >
                    <Label>Марка</Label>
                    <Input
                        isFail={this.props.inputProps.isFailSearch}
                        value={ this.props.inputProps.inputValue}
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

                { this.props.inputProps.isShowResult ?
                    <ContainerResult
                        width="400px"
                        onClick={this.handlerOnClick} >
                        { this.props.inputProps.result.map(item => <ResultItem key={item.id} {...item} />)}
                    </ContainerResult>
                    : '' }

            </InputGroupWrapper>
        );
    }
}
const mapStateToProps = state => ({
    inputProps : state.InputManufactureReducer
});


const mapDispatchToProps = dispatch => ({

    inputChangeValue: inputValue => {
        dispatch( changeValue( inputValue ));
    },
    inputSetValue : value => {
      dispatch({
          type : 'INPUT_MANUFACTURE_SET_VALUE',
          inputValue : value
      });
    },
    resultHidden : ( ) => {
        dispatch( resultHidden( ) );
    },
    resultShow : ( ) => {
      dispatch( resultShow());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputManufacture);

