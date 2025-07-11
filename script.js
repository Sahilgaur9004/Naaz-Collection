function openLoginForm() {
  document.getElementById("loginForm").style.display = "flex";
}

function submitForm() {
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;

  if (name.trim() === "" || email.trim() === "") {
    alert("Please fill all fields.");
  } else {
    alert("Welcome, " + name + "!");
    document.getElementById("loginForm").style.display = "none";
  }
}
