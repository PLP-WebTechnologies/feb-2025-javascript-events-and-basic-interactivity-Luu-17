// // Store my objects
// const btn = document.getElementById("button")


// // Functions 
// btn.addEventListenerev("mouseover",Mouseover)
// function Mouseover(e){
//   console.log(e.type,e.target)
  
// }

// btn.addEventListener("click",function(e){console.log(e.type,e.target)

// })



let button = document.getElementById('button');
       let isgrey = false;

button.addEventListener('click', changeColor);

function changeColor() {
    document.body.style.backgroundColor = "grey";
}




button.addEventListener('click', () => {
    if (isgrey) {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "grey";
    }
    isgrey = !isgrey;
});


  const form = document.getElementById("myForm");
  const email = document.getElementById("email");
  const errorMessage = document.getElementById("errorMessage");

  form.onsubmit = function (e) {
    if (!email.value) {
      e.preventDefault(); // Prevent form submission
      errorMessage.textContent = "Email is required!";
    }
  };

     function validatePassword() {
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        if (password.length < 8) {
            errorMessage.textContent = "Password must be at least 8 characters long.";
        } else {
            errorMessage.textContent = "";
        }
    }

