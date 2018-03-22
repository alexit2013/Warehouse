import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const LinkWrapper = styled(Link)`
    font-size: 25px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    margin: 10px;
    
    &:hover {
        color: #f441cd;
    }
`;

const DropDownContent = styled.div`
    margin-top: -15px;
    display: none;
    position: absolute;
    background-color: rgb(0, 188, 212);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 3;
    flex-direction: column;
`;
const DropDown = styled.div`
    margin-top:15px;
    position: relative;
    display: inline-block;
    font-size: 25px;
    text-decoration: none; 
    font-weight: bold;
    color: white;
    &:hover ${DropDownContent}{
        display: flex;
    }
`;

const TitleWrapper = styled.p`
    user-select: none;
`;



export default class PopoverExampleSimple extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DropDown>
                <TitleWrapper> { this.props.title } </TitleWrapper>
                <DropDownContent >
                    {
                        this.props.items.map( (item,index) =>
                            <LinkWrapper
                                key={index}
                                to={item.link}
                                target={item.target?'_blank':''}>
                                { item.title }
                                </LinkWrapper> )
                    }
                </DropDownContent>
            </DropDown>
        );
    }
}