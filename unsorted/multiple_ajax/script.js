function getData() {
  const studentId = document.querySelector("#sid").value;
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `./grades.php?student_id=${studentId}`);

  httpRequest.onload = () => {
    const httpRequest2 = new XMLHttpRequest();
    httpRequest2.open('GET', `./students.php?student_id=${studentId}`);
    
    httpRequest2.onload = () => {
      document.querySelector(".result").innerHTML
        = `${httpRequest.responseText}, ${httpRequest2.responseText}`;
    }
    httpRequest2.send();
  };
  httpRequest.send('');
}
