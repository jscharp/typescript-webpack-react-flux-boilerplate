import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class ShowDashboardAction implements IAction {

    constructor(public goalsFinished: number, public username: string) {};

    toLogEntry(): ActionLogEntry {
        return new ActionLogEntry(
            "ShowDashboardAction",
            {
                "goalsFinished": this.goalsFinished.toString(),
                "username": this.username
            });
    }
}
