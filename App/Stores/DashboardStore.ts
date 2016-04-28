import BaseStore from "./BaseStore";
import Dispatcher from "../Dispatcher/Dispatcher";
import IAction from "../Actions/IAction";
import ShowDashboardAction from "../Actions/ShowDashboardAction";

class DashboardStore extends BaseStore {
    private goalsFinished: number = 0;
    private username: string;

    constructor() {
        super();
        Dispatcher.register((action: IAction) => this.processActions(action));
    }

    getGoalsFinished(): number {
        return this.goalsFinished;
    };

    getUsername(): string {
        return this.username;
    };

    private processActions(action: IAction): void {

        if (action instanceof ShowDashboardAction)	{
            this.goalsFinished = action.goalsFinished;
            this.username = action.username;
            this.emitChange();
        }
    };
}

export default new DashboardStore();