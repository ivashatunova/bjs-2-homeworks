function Student(name, gender, age) {
    this.name = name,
        this.gender = gender,
        this.age = age,
        this.marks = []
}


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}


Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        console.log("Студент отчислен");
        return;
    }
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
    average = this.marks.reduce((sum, num, index, marks) => sum + num / marks.length, 0);
    return average;
}

// Пример использования:
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

Student.prototype.exclude = function (reason) {
    delete this.marks,
    delete this.subject,
    this.excluded = reason;
}

