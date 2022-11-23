window.addEventListener("DOMContentLoaded", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let nxt = document.getElementById("btn");

  nxt.addEventListener("click", () => {
    let payload = {
      email: email.value,
      password: password.value,
    };
    console.log(payload);
    $.ajax({
      url: "https://new-bookstore-backend.herokuapp.com/bookstore_user/admin/login",
      type: "POST",
      data: payload,
      "Content-Type": "application/json",
      // headers: {
      //    'Authorization': 'Bearer <token>'
      // },
      success: function (result) {
        console.log(result);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
