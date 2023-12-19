function run() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `./getGrade.php`);
  httpRequest.onload = function(){
      console.log(httpRequest.responseText);
  };
  httpRequest.send();
}