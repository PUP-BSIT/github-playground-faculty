function getData() {
  const studentId = document.querySelector("#sid").value;
  fetch(`./grades.php?student_id=${studentId}`)
    .then((response) => response.json())
    .then(jsonObj => {
      console.log(jsonObj);
    });
}
