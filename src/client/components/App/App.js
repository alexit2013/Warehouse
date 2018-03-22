import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import MainWindow from "containers/Main";
import EditWindow from "containers/EditWindow";

import ClientEdit from 'containers/ClientEdit';

import ClientAdd from 'components/ClientAdd';

import ClientCarEdit from 'components/ClientCarEdit';

import ClientSelect from 'components/ClientSelect';

import "./App.scss";

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={MainWindow}/>
                <Route exact path="/edit/:id" component={EditWindow}/>
                <Route exact path="/clients/add" component={ClientAdd}/>
                <Route exact path="/clients/edit/:id" component={ClientEdit}/>
                <Route exact path="/clients/edit/cars/:id" component={ClientCarEdit}/>
                <Route exact path="/clients" component={ClientSelect}/>
            </Switch>
        );
    }
}
