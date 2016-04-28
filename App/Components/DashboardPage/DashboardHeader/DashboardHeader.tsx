import * as React from "react";
import BaseComponent from "../../BaseComponent";

/* tslint:disable:no-any */
const styles: any = require("./DashboardHeader.module.less");
/* tslint:enable:no-any */

interface IDashboardPageState {
    goalsFinished: number;
    username: string;
}

export default class DashboardHeader extends BaseComponent<{}, IDashboardPageState> {

    doRender(): React.ReactElement<{}> {

        return (
            <div className={styles.dashboardHeader}>
                some content
            </div>
        );
    }

}