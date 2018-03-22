import React, {Component} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import DropDown from 'components/DropDownButton/';

const LinkWrapper = styled(Link)`
    font-size: 25px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    
    &:hover {
        color: #f441cd;
    }
`;

const HeadWrapper = styled.div`
    grid-column: 1;
    grid-row: 1;
    
    background-color: rgb(0, 188, 212);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;



const oilSearch = [
    {
        title: 'Castrol',
        link: 'https://applications.castrol.com/oilselector/ru_ru/w/search',
        target: '_blank'
    },
    {
        title: 'Total',
        link: 'http://www.total-lub.ru/Auto/lubadvisor.html',
        target: '_blank'
    }

];

const productSearch = [
    {
        title: 'Castrol',
        link: 'https://applications.castrol.com/oilselector/ru_ru/w/search'
    },
    {
        title: 'Total',
        link: 'http://www.total-lub.ru/Auto/lubadvisor.html'
    }
];

const product = [
    {
        title: 'Создать',
        link: '/edit/newProduct'
    },
    {
        title: 'Учет',
        link: 'http://www.total-lub.ru/Auto/lubadvisor.html'
    }
];

const client = [
    {
        title: 'Выбрать',
        link: '/clients'
    },
    {
        title: 'Добавить',
        link: '/clients/add'
    }
];



export default class Header extends React.Component{
    render(){
        return(
                <HeadWrapper>
                    <LinkWrapper  to="/" >Главная</LinkWrapper>
                    <DropDown title="Товары" items={product}> </DropDown>
                    <DropDown title="Подбор масел" items={oilSearch} />
                    <DropDown title="Подбор товара" items={productSearch} />
                    <DropDown title="Клиенты" items={client} />
                </HeadWrapper>
        )
    }
}