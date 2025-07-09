const buttonContact = document.getElementsByClassName("contact");
const buttonForm = document.getElementById("sendForm");
const inputEmailForm = document.getElementById("email")
const inputNameForm = document.getElementById("name")
const inputMessageForm = document.getElementById("message")


function goContact() {
  for (let i = 0; i < buttonContact.length; i++) {
    buttonContact[i].addEventListener("click", () => {
      window.location.href = "/assets/pages/contact.html";
    });
  }
}

function sendForm(){
    buttonForm.addEventListener("click", ()=>{
        if(inputEmailForm.value !== "" && inputMessageForm.value !== "" && inputNameForm.value !== ""){
            alert("Mensagem enviada")
        } else {
            alert("Preencha todos os campos");
        }
    })
}

goContact();
sendForm();

