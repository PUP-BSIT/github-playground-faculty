function getData() {
  const studentId = document.querySelector("#sid").value;
  const studentGradeObj = {};
  fetch(`./grades.php?student_id=${studentId}`)
    .then((response) => response.json())
    .then(gradeOjb => {
      studentGradeObj.grade = gradeOjb.grade;
      studentGradeObj.remarks = gradeOjb.remarks;

      return fetch(`./students.php?student_id=${studentId}`);
    })
    .then((response) => response.json())
    .then(studentObj => {
      studentGradeObj.first_name = studentObj.first_name;
      studentGradeObj.last_name = studentObj.last_name;
      
      document.querySelector(".result").innerHTML= `<h3>Student Grades</h3>
      First Name: ${studentGradeObj.first_name}<br>
      Last Name: ${studentGradeObj.last_name}<br>
      Grade: ${studentGradeObj.grade}<br>
      Remarks: ${studentGradeObj.remarks}<br>`;
    });
}
