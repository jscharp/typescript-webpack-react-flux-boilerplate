import * as React from "react";
import * as CommonActionCreators from "./ActionCreators/CommonActionCreators";
import BaseComponent from "./Components/BaseComponent";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import NavLink from "./Components/NavLink";
require("./Log/ActionLogger");
require("./Global/Styles/global.less");

export default class App extends BaseComponent<React.Props<App>, {}> {

    doRender(): React.ReactElement<{}> {
        return (
            <div id="container">
                <DashboardPage/>
                <NavLink to="/content">Content</NavLink>
                {this.props.children}
            </div>
        );
    }

    componentDidMount(): void {
        CommonActionCreators.loadApp();
    }
};