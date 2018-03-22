import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled(Link)`
    font-size: 25px;
    text-decoration: none;
    font-weight: bold;
    color: #42f4dc;
    
    &:hover {
        color: #f441cd;
    }
`;

export default class LinkStyled extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <LinkWrapper to="/">
                { this.props.title }
            </LinkWrapper>
        )
    }
}