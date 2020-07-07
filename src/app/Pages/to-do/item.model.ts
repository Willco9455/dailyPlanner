export class DayItem {
    name: string;
    startTime: string; // in format HH:MM;
    endTime: string; // in format HH:MM;

    constructor(name: string, startTime: string, endTime: string) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

export class Action {
    name: string;
    deadline: string; // in format YYYY-MM-DD;
    catagory: string;
    completed: boolean;

    constructor(name: string, deadline: string, catagory: string, completed: boolean, ) {
        this.name = name;
        this.deadline = deadline;
        this.catagory = catagory;
        this.completed = completed;
    }
}
