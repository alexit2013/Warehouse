import React from 'react';
import styled from 'styled-components';

const ArticleResultItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 60%; 
    background-color: #ebffe1;
    border-radius: 2px;
    border: solid black 1px;
    font-size: 15px;
    font-weight: bold;
    user-select: none; 
    height:40px;
    
    &:hover {
        background-color: #b0fc89;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export default class ArticleResultItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ArticleResultItemWrapper data-itemid={this.props.id} className="result-item">
        <TextWrapper>{this.props.brandName}</TextWrapper>
          <TextWrapper>{this.props.name}</TextWrapper>
        <TextWrapper>{this.props.typeName}</TextWrapper>
      </ArticleResultItemWrapper>
    );
  }
}
