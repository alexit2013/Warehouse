import React from 'react';
import { connect } from 'react-redux';
import constants from 'constants';
import { Button  } from 'reactstrap';
import {
    changeValue,
    steValue,
    searchByProductId
} from 'actions/IputArticleActions';

import { Label, InputGroupWrapper, InputWrapper, ContainerResult, Input } from 'components/InputGroup';

import ResultItem from './ResultItem';


class InputProductForCar extends React.Component {
    constructor(props) {
        super(props);

        this.handlerOnClick = this.handlerOnClick.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerClearInput = this.handlerClearInput.bind(this);
        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.handlerOutFocus = this.handlerOutFocus.bind(this);
        this.handlerOnFocus = this.handlerOnFocus.bind(this);


        this.state = {
            value : props.inputValue || '',
            isShowResult : false
        };
    }


    handlerClearInput (){

        this.setState({
            value : '',
            isShowResult : false,
        });
        this.props.inputSetValue();
    }

    handlerInputChange ( event ) {
        this.props.inputChangeValue(event.target.value);
        this.setState(
            {
                value : event.target.value,
                isShowResult : event.target.value.length>0
            });
    }

    hiddenResult(){
        this.setState({
            value : this.state.value,
            isShowResult : false,
        });
    }

    handlerOutFocus (event ) {

        console.log(event.target);
       // setTimeout(this.props.resultHidden, 250);
        setTimeout(this.hiddenResult.bind(this), 500);
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
                    this.props.handler( {id, name} );
                    this.setState({
                        value : name,
                        isShowResult : false,
                    });
                }
                else {
                    this.props.searchByProductId( id );
                    this.props.inputSetValue( name );
                }
            }
        }
    };

    handlerSubmit(event) {
        event.preventDefault();
        if (this.props.inputProps.result.length){
            const name = this.props.inputProps.result[0].article;
            const id = this.props.inputProps.result[0].id;
            if( this.props.handler){
                this.props.handler( {id, name} );
            }
            else{
                this.props.searchByProductId( id );
                this.props.inputSetValue( name );
            }

            this.props.resultHidden();
        }
    }


  render() {
        debugger;
    return (
      <InputGroupWrapper
          onFocus={this.handlerOnFocus}
          onBlur ={this.handlerOutFocus}

      >
        <InputWrapper  onSubmit={this.handlerSubmit}  >
            <Label>Артикул</Label>
            <Input
            isFail={this.props.inputProps.isFailSearch}
            value={this.state.value}
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


        { this.state.isShowResult && this.props.inputProps.result.length>0 ?
          <ContainerResult
              width="700px"
              onClick={this.handlerOnClick} >
            { this.props.inputProps.result.map(item => <ResultItem key={item.id} {...item} />)}
          </ContainerResult>
                    : '' }

      </InputGroupWrapper>

    );
  }
}

const mapStateToProps = state => ({
    inputProps: state.InputArticleReducer
});


const mapDispatchToProps = dispatch => ({



    inputChangeValue: ( value ) => {
        dispatch(changeValue( value ));
    },
    inputSetValue : number => {
      dispatch(steValue(number));
    },
    searchByProductId : ( id ) => {
        dispatch(searchByProductId(id));
    },
    resultHidden : ( ) => {
        dispatch( { type : constants.INPUT_ARTICLE_HIDDEN_RESULT } )
    },
    resultShow : ( ) => {
        dispatch( { type : constants.INPUT_ARTICLE_SHOW_RESULT } )
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(InputProductForCar);

