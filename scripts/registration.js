window.addEventListener("DOMContentLoaded", function () {
  let fName = document.getElementById("fullName");
  let uName = document.getElementById("Email");
  let pswd = document.getElementById("Password");
  let mNumber = document.getElementById("mobileNumber");
  let nxt = document.getElementById("btn");

  //   function check(inputid, errid, oldcls, newcls, divid, reg) {
  //     if (!reg.test(inputid.value)) {
  //       a = showError(errid, "Enter valid data", oldcls, newcls, divid);
  //       console.log("show error value", a);
  //       return 0;
  //     } else {
  //       a = showSuccess(errid, oldcls, newcls, divid);
  //       console.log("show success value", a);
  //       return 1;
  //     }
  //   }
  //   console.log("this is close");
  nxt.addEventListener("click", () => {
    let data = {
      fullName: fName.value,
      email: uName.value,
      password: pswd.value,
      phone: mNumber.value,
    };

    console.log(data);
    $.ajax({
      url: "https://new-bookstore-backend.herokuapp.com/bookstore_user/admin/registration",
      type: "POST",
      data: data,
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
