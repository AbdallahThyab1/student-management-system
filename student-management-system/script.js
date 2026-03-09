function startProgram() {

    alert("Welcome to Student Management System");

    function student(id, fullName, marks) {
        this.id = id;
        this.fullName = fullName;
        this.marks = marks;
    };
    let studentSchedule = [];

    while (true) {

        let choice = prompt(
            ` ===== Student Manager Menu =====  
1 Add Student
2 Show All Students
3 Search Student
4 Delete Student
5 Insert Student Marks
6 Show Student Information
7 Show Best Student GPA
8 Exit`
        );

        if (choice == 1) {
            addStudent();
        }

        else if (choice == 2) {
            showAllStudent();
        }

        else if (choice == 3) {
            searchStudent((Number(prompt("=== Student's Id ===", "0000"))));
        }
        else if (choice == 4) {
            deleteStudent((Number(prompt("=== Student's Id ===", "0000"))));
        }
        else if (choice == 5) {

            insetStudentMarks((Number(prompt("=== Student's Id ===", "0000"))));
        }
        else if (choice == 6) {
            showStudent((Number(prompt("=== Student's Id ===", "0000"))));
        }
        else if (choice == 7) {
            bestStudentGPA();
        }
        else if (choice == 8) {
            alert("Program Ended");
            break;
        }

    }

    function addStudent() {
        let id = Number(prompt("=== Student's Id ===", "0000"));
        let isFound = false;
        for (let i = 0; i < studentSchedule.length; i++) {
            if (studentSchedule[i].id == id) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            studentSchedule.push(new student(id, prompt("=== Student's full name ===", "unknown"), null));
        }
        else {
            alert(`Student with ID ${id} already exists`);
        }

    }
    function showAllStudent() {
        if (studentSchedule.length === 0) {
            alert("No Students Found");
            return;
        }
        let result = "";
        studentSchedule.forEach((student, index) => {
            result += `Student ${index + 1} : ID ${student.id} || Name ${student.fullName}\n`;
        });

        alert(result);

    }
    function searchStudent(id) {
        let isFound = false;
        for (let i = 0; i < studentSchedule.length; i++) {
            if (studentSchedule[i].id === id) {
                alert(`Student ${studentSchedule[i].fullName} with ID ${id} is found`);
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            alert(`Student with ID ${id} is not found`);
        }
    }
    function deleteStudent(id) {
        let isFound = false;
        for (let i = 0; i < studentSchedule.length; i++) {
            if (studentSchedule[i].id == id) {
                alert(`Student ${studentSchedule[i].fullName} with ID ${id} was deleted`);
                studentSchedule.splice(i, 1);
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            alert(`Student with ID ${id} not found`);
        }
    }
    function insetStudentMarks(id) {
        let isFound = false;
        for (let i = 0; i < studentSchedule.length; i++) {
            if (studentSchedule[i].id == id) {
                isFound = true;
                let marks = [];
                for (let j = 1; j <= 5; j++) {
                    marks.push(Number(prompt(`Enter Mark ${j}`, Number("100"))));
                }
                studentSchedule[i].marks = marks;
                break;
            }
        }
        if (!isFound) {
            alert(`Student with ID ${id} not found`);
        }

    }
    function showStudent(id) {
        let isFound = false;
        for (let i = 0; i < studentSchedule.length; i++) {
            if (studentSchedule[i].id == id) {
                isFound = true;
                let gpa = 0;
                if (studentSchedule[i].marks) {
                    let sum = 0;
                    for (let j = 0; j < studentSchedule[i].marks.length; j++) {
                        sum += studentSchedule[i].marks[j];
                    }
                    gpa = sum / studentSchedule[i].marks.length;
                }
                alert(
                    `Student Information

Student ID : ${studentSchedule[i].id}
Student Name : ${studentSchedule[i].fullName}
Student Marks : ${studentSchedule[i].marks}
Student GPA : ${gpa}`
                );
                break;
            }
        }
        if (!isFound) {
            alert(`Student with ID ${id} not found`);
        }
    }
    function bestStudentGPA() {
        if (studentSchedule.length === 0) {
            alert("No Students Found");
            return;
        }
        let bestGPA = 0;
        let bestStudent = null;
        for (let i = 0; i < studentSchedule.length; i++) {
            if (studentSchedule[i].marks != null) {
                let sum = 0;
                for (let j = 0; j < studentSchedule[i].marks.length; j++) {
                    sum += studentSchedule[i].marks[j];
                }
                let studentGPA = sum / studentSchedule[i].marks.length;
                if (studentGPA > bestGPA) {
                    bestGPA = studentGPA;
                    bestStudent = studentSchedule[i];
                }
            }
        }
        if (bestStudent) {
            alert(
                `Best Student

Name : ${bestStudent.fullName}
ID : ${bestStudent.id}
GPA : ${bestGPA}`
            );

        } else {
            alert("No marks available");
        }
    }

}