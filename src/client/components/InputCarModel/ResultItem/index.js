import React from 'react';
import styled from 'styled-components';

const ArticleResultItemWrapper = styled.div`
    background-color: #ebffe1;
    border-radius: 2px;
    border: solid black 1px;
    font-size: 15px;
    font-weight: bold;
    user-select: none;
    height:40px;
    display: grid;
    grid-template-columns: 50% 50%;
    &:hover {
        background-color: #b0fc89;
    }
`;

const TextWrapper = styled.p`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;



export default class ArticleResultItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ArticleResultItemWrapper data-itemid={this.props.id} className="result-item">
        <TextWrapper>   {this.props.name}</TextWrapper>
        <TextWrapper>    {this.props.year}</TextWrapper>


      </ArticleResultItemWrapper>
    );
  }
}
