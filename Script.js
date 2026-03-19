function signup() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  localStorage.setItem(user, pass);
  document.getElementById("message").innerText = "Signup successful!";
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerText = "Invalid credentials!";
  }
}