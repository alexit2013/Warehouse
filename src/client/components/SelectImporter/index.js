import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import {
    setImporter
} from "actions/ProductEditActions";

const Select = styled.select`
     font-weight: 500;
     padding-left: 10px;
     width: 435px;    
`;

const SelectImporterWrapper = styled.form`
    display: flex;
    height: 38px;
`;


import { Label } from 'components/InputGroup';




class SelectImporter extends React.Component {
    constructor(props) {
        super(props);
        this.handlerOnChange = this.handlerOnChange.bind(this);
    }

    handlerOnChange(event){
        this.props.setImporter(event.target.value);
    }

    render() {
        return (
            <SelectImporterWrapper    >
                <Label>Импортер</Label>
                <Select
                    defaultValue={this.props.editProps.product.importer_id}
                    onChange={this.handlerOnChange}
                >
                    { this.props.editProps.importers.map(item =>
                        <option
                            value={item.id}
                            key={item.name + item.id}

                        > { item.name } </option>
                    ) }
                </Select>
            </SelectImporterWrapper>
        );
    }
}

const mapStateToProps = state => ({
    editProps: state.EditProductReducer
});


const mapDispatchToProps = dispatch => ({
    setImporter: id => {
        dispatch(setImporter( id ));
    },

});

export default  connect(mapStateToProps, mapDispatchToProps)(SelectImporter);

