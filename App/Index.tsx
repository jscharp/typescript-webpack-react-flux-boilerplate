/// <reference path="../typings/main.d.ts" />

/* tslint:disable */
import * as React from "react";
/* tslint:enable */
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import * as ReactDom from "react-dom";
import App from "./App";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import ContentPage from "./Components/ContentPage/ContentPage";

ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={DashboardPage}/>
            <Route path="/content" component={ContentPage}/>
        </Route>
    </Router>,
    document.getElementById("root")
);