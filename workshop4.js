class Student {
    static school_name = "WE-School";  

    constructor(name, grade) {
        this.name = name;  
        this.grade = grade;  
    }

    display() {
        console.log(`Name: ${this.name}, Grade: ${this.grade}, School: ${Student.school_name}`);
    }
}


let student1 = new Student("Ahmed", "2nd");
let student2 = new Student("Ali", "3rd");


student1.display();
student2.display();