import React, {Component} from "react";
import styled from "styled-components";

import { connect } from 'react-redux';

import CheckBox from 'components/CheckboxCustom';


import {
    carGetModelByManufactureId,
    clientCarUpdate
} from 'actions/CarActions';

import {Button} from 'reactstrap';


import InputText from 'components/InputText';

import InputProductForCar from 'components/InputProductForCar';

const CheckBoxWrapper = styled.div`
    display: flex;
    
`;


import InputManufacture from 'components/InputManufacture'
import InputCarModel from 'components/InputCarModel';
import InputCarModification from 'components/InputCarModification';


const WrapperOption = styled.div`
    margin: 20px 10px 0 10px;
    display: flex;
    justify-content: space-around;
    background-color: #f5dd2a;
    padding: 10px;
    border-radius: 10px;
`;

const Wrapper = styled.div`
    margin: 20px 10px 0 10px;
    background-color: #f5dd2a;
    padding: 10px;
    border-radius: 10px;
    display: grid; 
    justify-items: center; 
    display: grid;
    grid-gap: 10px;
`;

import Header from 'components/Header';

const WrapperApp = styled.div` 
    display: grid;
    grid-template-rows: 48px  ;
`;

const TitleWrapper = styled.div`
     
    font-weight: bold; 
     color: #848484;
`;

const ProductWrapper = styled.div`
    
`;


class ClientCarEdit extends React.Component{

    constructor(props){
        super(props);

        // if( this.props.editProps.importers.length === 0 )
        //     this.props.loadImporters();
        //
        // if( props.match.params.id ){
        //     this.props.productLoad(props.match.params.id);
        // }

        this.handlerSelectManufacture = this.handlerSelectManufacture.bind(this);
        this.handlerUpdate = this.handlerUpdate.bind(this);
        this.setVin = this.setVin.bind(this);
        this.setYear = this.setYear.bind(this);
    }

    handlerSelectManufacture(id){
        console.log(id);
        this.props.carGetModelByManufactureId(id);
    }

    handlerUpdate( ){

        console.log(this.props.carProps.currentCar);
        this.props.clientCarUpdate(this.props.carProps.currentCar);
    }

    setVin(vin){
        this.props.setVin(vin);
    }

    setYear(value){
        this.props.setYear(value);
    }

    setOilFilter( prams){
        this.props.setVin(vin);
    }

    render(){
        return(
            <WrapperApp  >
                <Header/>

                <Wrapper>
                    <TitleWrapper >Редактирование авто</TitleWrapper>

                </Wrapper>

                <Wrapper>
                    <TitleWrapper >Выбор Марки</TitleWrapper>
                    <InputManufacture handler={this.handlerSelectManufacture}/>
                </Wrapper>

                <Wrapper>
                    <TitleWrapper >Выбор Модели</TitleWrapper>
                    <InputCarModel/>
                </Wrapper>

                <Wrapper>
                    <TitleWrapper >Выбор Модификации</TitleWrapper>
                    <InputCarModification/>
                </Wrapper>

                <Wrapper>
                    <InputText
                        inputVale={this.props.carProps.currentCar.year}
                        title="Выпуска"
                        handlerChangeValue={this.setYear}
                    />
                </Wrapper>

                <Wrapper>
                    <InputText
                        inputVale={this.props.carProps.currentCar.vin}
                        title="VIN"
                        handlerChangeValue={this.setVin}
                    />
                  </Wrapper>

                <WrapperOption>
                    <CheckBoxWrapper>
                        <p>Кондиционер </p>
                        <CheckBox
                            checked={this.props.carProps.currentCar.is_conditioner}
                            handler={this.props.setConditioner}
                        />
                    </CheckBoxWrapper>

                    <CheckBoxWrapper>
                        <p>Торм.сис.зад Барабаны </p>
                        <CheckBox
                            checked={this.props.carProps.currentCar.is_drum}
                            handler={this.props.setDrum}
                        />
                    </CheckBoxWrapper>

                    <CheckBoxWrapper>
                        <p>ABS</p>
                        <CheckBox
                            checked={this.props.carProps.currentCar.abs}
                            handler={this.props.setAbs}
                        />
                    </CheckBoxWrapper>

                </WrapperOption>

                <Wrapper>
                    <TitleWrapper>Фильтр масленный</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setOilFilter}
                        inputValue={this.props.carProps.currentCar.oil_filter_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Фильтр туплевный</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setFuelFilter}
                        inputValue={this.props.carProps.currentCar.fuel_filter_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Фильтр воздушный</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setAirFilter}
                        inputValue={this.props.carProps.currentCar.air_filter_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Фильтр салона</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setCabinFilter}
                        inputValue={this.props.carProps.currentCar.air_cabin_filter_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Масло моторное</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setOil}
                        inputValue={this.props.carProps.currentCar.oil_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Антифриз</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setCoolant}
                        inputValue={this.props.carProps.currentCar.coolant_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Диски тормозные перед</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setDiscFront}
                        inputValue={this.props.carProps.currentCar.disc_front_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Колодки тормозные перед</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setBrakeFront}
                        inputValue={this.props.carProps.currentCar.brake_parts_front_name}
                    />
                </Wrapper>


                <Wrapper>
                    <TitleWrapper>Диски тормозные зад</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setDiscBack}
                        inputValue={this.props.carProps.currentCar.disc_back_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Колодки тормозные зад</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setBrakeBack}
                        inputValue={this.props.carProps.currentCar.brake_parts_back_name}
                    />
                </Wrapper>

                <Wrapper>
                    <TitleWrapper>Комплект ГРМ</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.setGrm}
                        inputValue={this.props.carProps.currentCar.grm_name}
                    />
                </Wrapper>


                <Wrapper>
                    <TitleWrapper>Свечи</TitleWrapper>
                    <InputProductForCar
                        handler={this.props.serCandles}
                        inputValue={this.props.carProps.currentCar.candles_name}
                    />
                </Wrapper>




                <Wrapper>
                    <Button onClick={this.handlerUpdate} color="success">Сохранить</Button>
                </Wrapper>



            </WrapperApp>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        carProps : state.ClientCarReducer,
    }
};
const mapDispatchToProps = (dispatch) => ({

    setYear : year => {
        dispatch({type:'SET_YEAR',year})
    },

    setAbs: () => {
        dispatch({type:'SET_ABS'})
    },
    setDrum: () => {
        dispatch({type:'SET_DRUM'})
    },
    setConditioner: () => {
        dispatch({type:'SET_CONDITIONER'})
    },


    setCoolant: product => {
        dispatch({type:'SET_COOLANT',product})
    },

    serCandles: product => {
    dispatch({type:'SET_CANDLES',product})
},

    setGrm: product => {
    dispatch({type:'SET_GRM',product})
},

    setDiscBack: product => {
        dispatch({type:'SET_DISC_BACK',product})
    },

    setBrakeBack : product => {
        dispatch({type:'SET_BRAKE_BACK',product})
    },

    setBrakeFront : product => {
    dispatch({type:'SET_BRAKE_FRONT',product})
},


    setDiscFront : product => {
    dispatch({type:'SET_DISC_FRONT',product})
},

    setOil : product => {
        dispatch({type:'SET_OIL',product})
    },

    setFuelFilter : product => {
        dispatch({type:'SET_FUEL_FILTER',product})
    },

    setAirFilter : product => {
    dispatch({type:'SET_AIR_FILTER',product})
},
    setCabinFilter : product => {
        dispatch({type:'SET_CABIN_FILTER',product})
    },

    setOilFilter : product => {
        dispatch({type:'SET_OIL_FILTER',product})
    },

    setVin : vin => {
        dispatch({type:'SET_VIN',vin})
    },

    carGetModelByManufactureId : id => {
        dispatch(carGetModelByManufactureId( id ));
    },
    clientCarUpdate : car => {
        dispatch(clientCarUpdate(car));
    },
    productLoad : id => {
        dispatch(productGetFull(id));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(ClientCarEdit)