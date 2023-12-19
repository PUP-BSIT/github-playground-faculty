function submitUser() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  fetch("./insert_row_from_params.php", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: `username=${username}&password=${password}`,
  })
    .then((response) => response.text())
    .then((responseText) => {
      alert(responseText);
    });
}

const table = document.querySelector("#user_list");
fetch("./select_data.php")
  .then((response) => response.json())
  .then((userList) => {
    for (const user of userList) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${user.id}</td><td>${user.username}</td>
      <td><button>Edit</button></button><button>Delete</button></td>`;
      table.append(row);
    }
  });
