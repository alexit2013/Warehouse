import React from 'react';
import styled from 'styled-components';

const ArticleResultItemWrapper = styled.div`
      
    padding: 5px;
    background-color: #ebffe1;
    border-radius: 2px;
    border: solid black 1px;
    font-size: 15px;
    font-weight: bold;
    user-select: none;
     height:40px;
    display: flex;
    align-content: center;
    justify-content: center;
    
    &:hover {
        background-color: #b0fc89;
    }
`;



export default class ArticleResultItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ArticleResultItemWrapper data-itemid={this.props.id} className="result-item">
        {this.props.name}
      </ArticleResultItemWrapper>
    );
  }
}
