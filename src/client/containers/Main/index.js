import React, { Component } from 'react';
import styled from 'styled-components';



import { connect } from 'react-redux';

import ModalInfo from 'components/ModalInfo'
import InputArticle from 'components/InputArticle';
import InputOe from 'components/InputOe';



import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Tab from 'components/Tab';




import Table from 'components/TableProduct';

const TableWrapper = styled.div`
    grid-row: 3;
    grid-column: 1/3;
`;


const WrapperApp = styled.div` 
    display: grid;
    grid-template-rows: 48px 50px auto;
    grid-template-columns: 70% 30%;
`;


const SearchContainer = styled.div`
    grid-row: 2;
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 40% 40%;
    margin-left: 10px;   
    margin-top: 10px;
`;


const TabWrapper = styled(Tab)`
    grid-column: 2;
    grid-row: 1;
`;




class Main extends React.Component {
  constructor(props) {
    super(props);

  }




  render() {
    return (
      <WrapperApp  >
        <Header />
        <TabWrapper />
        <SearchContainer >
            <InputArticle/>
            <InputOe/>
        </SearchContainer>
          <ModalInfo/>
        <TableWrapper>
          <Table items={this.props.appProps.products} />
        </TableWrapper>

      </WrapperApp>
    );
  }
}

const mapStateToProps = state => ({
    appProps : state.AppReducer
});

const mapDispatchToProps = dispatch => ({


});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
