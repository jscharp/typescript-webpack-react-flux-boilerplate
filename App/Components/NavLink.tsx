import * as React from "react";
import { Link } from "react-router";
import BaseComponent from "./BaseComponent";
import {ILinkProps} from "~react-router/react-router";

export class NavLink extends BaseComponent<ILinkProps, {}> {

    doRender(): React.ReactElement<{}> {
        return <Link {...this.props} activeClassName="active"/>;
    }

}

export default NavLink;