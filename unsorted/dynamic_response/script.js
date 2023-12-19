function getData() {
  const studentId = document.querySelector("#sid").value;
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `./grades.php?student_id=${studentId}`);
  httpRequest.onload = () => {
    document.querySelector(".result").innerHTML = httpRequest.responseText;
  };
  httpRequest.send('');
}
