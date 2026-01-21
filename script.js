

 document.getElementById("loginBtn").onclick = function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin@gmail.com" && password === "1234") {
    window.location.href = "profile.html";
  } 
  
};



