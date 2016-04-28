import * as React from "react";
import BaseComponent from "../../BaseComponent";

/* tslint:disable:no-any */
const styles: any = require("./DashboardSettingsBar.module.less");
/* tslint:enable:no-any */

export default class DashboardSettingsBar extends BaseComponent<{}, {}> {

    doRender(): React.ReactElement<{}> {

        return (
            <div className={styles.bar}>
                <div className="mdl-bar">

                    <div className="mdl-cell--8-offset mdl-cell mdl-cell--4-col">
                        yea!
                    </div>
                </div>
            </div>
        );
    }

}