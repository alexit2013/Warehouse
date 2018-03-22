import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import { Link } from "react-router-dom";

import styled from "styled-components";

import  {searchByProductId} from 'actions/IputArticleActions'

const ProductLink = styled(Link)`
    color: #3d3d3d;   
    display: inline;
    font-weight: bold;  
      &:hover {
       color: #ff0090;
`;

const OptionWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
    margin-left: 10px;
`;

import CheckBox from 'components/CheckboxCustom';

import { connect } from 'react-redux';

const TabItemWrapper = styled.div`
    background-color: #d0ffc1;
`;

const TabLine = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
`;

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

 class TabClient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.appProps.currentClient.name ? 'a' : 'с',
        };

        this.searchAnalog = this.searchAnalog.bind(this);
    }

    searchAnalog(e){
        const id = e.target.dataset.id;
        if(id)
            this.props.searchByProductId(id);
        console.log(id);
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}

            >
                <Tab label="Инфо" value="a">
                    <TabItemWrapper>
                        <OptionWrapper>
                            <p>Клинет</p>
                            <p>{this.props.appProps.currentClient.name}</p>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Телефон</p>
                            <p>{this.props.appProps.currentClient.phone}</p>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Автомобиль</p>
                            <p>{this.props.appProps.currentCar.name}</p>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Год выпуска</p>
                            <p>{this.props.appProps.currentCar.year}</p>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>HP</p>
                            <p>{this.props.appProps.currentCar.HP}</p>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>KW</p>
                            <p>{this.props.appProps.currentCar.KW}</p>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>VIN</p>
                            <p>{this.props.appProps.currentCar.vin}</p>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>ABS</p>
                            <CheckBox checked={this.props.appProps.currentCar.abs}/>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Кондиционер</p>
                            <CheckBox checked={this.props.appProps.currentCar.is_conditioner}/>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Торм.сис.зад барабаны</p>
                            <CheckBox checked={this.props.appProps.currentCar.is_drum}/>
                        </OptionWrapper>

                    </TabItemWrapper>
                </Tab>
                <Tab label="Товары" value="b">
                    <TabItemWrapper>
                        <OptionWrapper>
                            <p>Фильтр масленный</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.oil_filter}
                            >{this.props.appProps.currentCar.oil_filter_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Фильтр воздушнай</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.air_filter}
                            >{this.props.appProps.currentCar.air_filter_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Фильтр салона</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.air_cabin_filter}
                            >{this.props.appProps.currentCar.air_cabin_filter_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Фильтр топливный</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.fuel_filter}
                            >{this.props.appProps.currentCar.fuel_filter_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Мсало моторное</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.oil}
                            >{this.props.appProps.currentCar.oil_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Антифриз</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.coolant}
                            >{this.props.appProps.currentCar.coolant_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Тормозные диски перед</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.disc_front}
                            >{this.props.appProps.currentCar.disc_front_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Тормозные колодки перед</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.brake_parts_front}
                            >{this.props.appProps.currentCar.brake_parts_front_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Тормозные диски зад</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.disc_back}
                            >{this.props.appProps.currentCar.disc_back_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Тормозные колодки зад</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.brake_parts_back}
                            >{this.props.appProps.currentCar.brake_parts_back_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Комплект ГРМ</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.grm}
                            >{this.props.appProps.currentCar.grm_name}</ProductLink>
                        </OptionWrapper>

                        <OptionWrapper>
                            <p>Свечи</p>
                            <ProductLink
                                onClick={this.searchAnalog}
                                to="/"
                                data-id={this.props.appProps.currentCar.candles}
                            >{this.props.appProps.currentCar.candles_name}</ProductLink>
                        </OptionWrapper>

                    </TabItemWrapper>
                </Tab>
                <Tab label="Закрыть" value="с">

                </Tab>
            </Tabs>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        appProps : state.AppReducer,
    }
};
const mapDispatchToProps = (dispatch) => ({

    searchByProductId : id => {
        dispatch(searchByProductId(id));
    },
    clientUpdateProps : params => {
        dispatch(clientUpdateProps( params ));
    },
    productLoad : id => {
        dispatch(productGetFull(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TabClient)