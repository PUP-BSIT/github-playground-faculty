function run() {
    const request = new XMLHttpRequest();
    request.open('GET', `./sample.php`);
    request.send();
   
    request.addEventListener('load', function () {
      console.log(this.responseText);
    });
}