export default class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    Show() {
        return `my id is ${this.id} and my name is ${this.name}`;
    }
}