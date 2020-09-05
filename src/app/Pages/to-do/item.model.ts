export class DayItem {
    id: number;
    name: string;
    aboveStyle = {height: '50px', heightInt: 50};
    activStyle = {height: '60px', heightInt: 60};

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    setAbove(height: number) {
      this.aboveStyle.heightInt = height;
      this.aboveStyle.height = height.toString() + 'px';
    }
    setHeight(height: number) {
      this.activStyle.heightInt = height;
      this.activStyle.height = height.toString() + 'px';
    }
}

export class Action {
    name: string;
    deadline: string; // in format YYYY-MM-DD;
    catagory: string;
    completed: boolean;
    catPos: number; // the position of priority in the catagory

    constructor(name: string, deadline: string, catagory: string, completed: boolean, catPos: number) {
        this.name = name;
        this.deadline = deadline;
        this.catagory = catagory;
        this.completed = completed;
        this.catPos = catPos;
    }
}
