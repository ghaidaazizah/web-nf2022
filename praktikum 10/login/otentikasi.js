function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname = "geda127" && pass == "dream") {
        location.replace("success.html");
        alert("Login berhasil");
    } else {
        alert("Login gagal");
    }
}