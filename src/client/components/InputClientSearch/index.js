import React from 'react';
import { connect } from 'react-redux';

import constants from 'constants';

import { Button  } from 'reactstrap';

import {
    changeValue,
    steValue,
    searchByOeId
} from 'actions/InputOeActions';

import { Label, InputGroupWrapper, InputWrapper, ContainerResult, Input } from 'components/InputGroup';

import ResultItem from './ResultItem';


class InputClient extends React.Component {
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
        this.props.inputSetValue()
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
        if (element.parentNode) {
            if (element.parentNode.classList.contains('result-item')) {
                const name = element.parentNode.childNodes[1].innerHTML;
                const id = element.parentNode.dataset.itemid;
                if (this.props.handler) {
                    this.props.handler( id );
                }
                else {
                    this.props.searchByOeId( id );
                    this.props.inputSetValue( name );
                }
            }
        }
    };

    handlerSubmit(event) {

        event.preventDefault();
        if (this.props.inputProps.result.length){
            const name = this.props.inputProps.result[0].number;
            const id = this.props.inputProps.result[0].id;
            if( this.props.handler){
                this.props.handler( id );
            }
            else{
                this.props.searchByOeId( id );
                this.props.inputSetValue( name );
            }

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
                    <Label>Телефон</Label>
                    <Input
                        isFail={this.props.inputProps.isFailSearch}
                        value={this.props.inputProps.inputValue}
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
    inputProps: state.InputOeReducer
});


const mapDispatchToProps = dispatch => ({

    inputChangeValue: ( value ) => {
        dispatch(changeValue( value ));
    },
    inputSetValue : number => {
        dispatch(steValue(number));
    },
    searchByOeId : ( id ) => {
        dispatch(searchByOeId(id));
    },
    resultHidden : ( ) => {
        dispatch( { type : constants.INPUT_OE_HIDDEN_RESULT } )
    },
    resultShow : ( ) => {
        dispatch( { type : constants.INPUT_OE_SHOW_RESULT } )
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(InputClient);

