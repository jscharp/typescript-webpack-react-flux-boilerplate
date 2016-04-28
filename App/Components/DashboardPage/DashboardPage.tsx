import * as React from "react";
import SmartComponent from "../SmartComponent";
import DashboardStore from "../../Stores/DashboardStore";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardSettingsBar from "./DashboardSettingsBar/DashboardSettingsBar";

interface IDashboardPageState {
    goalsFinished: number;
    username: string;
}

export default class DashboardPage extends SmartComponent<{}, IDashboardPageState> {

    constructor() {
        super(DashboardStore);
    }

    componentDidMount(): void {
        super.componentDidMount();

        // Trigger load item action
    }

    doRender(): React.ReactElement<{}> {

        return (
            <div>
                <DashboardHeader/>
                <DashboardSettingsBar/>
            </div>
        );
    }

    protected getState(): IDashboardPageState {
        return {
            goalsFinished: DashboardStore.getGoalsFinished(),
            username: DashboardStore.getUsername()
        };
    }

}