export class AttendanceList {
    constructor(list) {
        this.list = new Array();
    }

    add(name) {
        this.list.push(name);
    }

    place(name, index) {
        return this.list[index] = name;
    }
    

    has(name) {
        return this.list.includes(name);
    }

    getList() {
        return this.list;
    }
}