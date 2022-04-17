theMeesh = {}

theMeesh.copyEmail = function() {
  let myEmail = document.querySelector('#myEmail').innerText;
  document.addEventListener('click', async function() {
    navigator.clipboard
    .writeText(myEmail)
  })
}

theMeesh.init = () => {
theMeesh.copyEmail()
}

theMeesh.init()