

  const username = document.getElementById("#username").value;
  const password = document.getElementById("#password").value;

  if (username === "" || password === "") {
    document.getElementById("message").innerText = "Please enter both fields";
    return;
  }

  if (username === "admin" && password === "1234") {
    document.getElementById("message").innerText = "Login successful!";
    window.location.href = "profile.html";
  } else {
    document.getElementById("message").innerText = "Incorrect username or password";
  }

document.getElementById("loginbtn").onclick = function () {
  window.location.href = "profile.html";
};

