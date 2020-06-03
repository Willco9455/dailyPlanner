export class DayItem {
    name: string;
    startTime: string; // in format HH:MM;
    endTime: string; // in format HH:MM
    constructor(name: string, startTime: string, endTime: string) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
