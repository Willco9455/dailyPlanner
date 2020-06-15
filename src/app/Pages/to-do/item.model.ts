export class DayItem {
    name: string;
    startTime: string; // in format HH:MM;
    endTime: string; // in format HH:MM;
    compTime: string; // to do list completion time
    compDate: string; // to do list completion date
    completed: boolean; // this attribute tells if the item has been completed
    action: boolean; // this attribute tells if the item is active as a todo item

    constructor(name: string, startTime: string, endTime: string, compTime: string, compDate: string, action: boolean) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.compTime = compTime;
        this.compDate = compDate;
        this.completed = false;
        this.action = action;
    }
}
