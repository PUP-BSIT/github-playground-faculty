function sendPost() {
    fetch("http://localhost/test.php", {
        method: "POST",
        body: JSON.stringify({
          message: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => {
            console.log(response);
        });
}
