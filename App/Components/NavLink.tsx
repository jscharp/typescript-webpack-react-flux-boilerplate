import * as React from "react";
import { Link } from "react-router";
import BaseComponent from "./BaseComponent";
import LinkProps = ReactRouter.LinkProps;
import ClassAttributes = __React.ClassAttributes;

export class NavLink extends BaseComponent<LinkProps & ClassAttributes<NavLink>, {}> {

    doRender(): React.ReactElement<{}> {
        return <Link {...this.props} activeClassName="active"/>;
    }

}

export default NavLink;