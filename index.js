let password =  document.getElementById("password")
let hideIcon = document.getElementById("hideIcon")

hideIcon.onclick = function(){
  if (password.type === "password"){
    password.type = "text"
    hideIcon.src = "view.png";
  } else {
    password.type = "password"
    hideIcon.src = "hide.png"

  }
}