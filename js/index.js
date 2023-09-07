
const subscribe = document.querySelector('.subscribe')
subscribe.addEventListener('click', send)


function send(){

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    var etxt = document.querySelector('#email')

    if (etxt.value.match(validRegex)) {
      
      const mainDiv = document.querySelector('.main-box')
      

      mainDiv.innerHTML = `<img class="check-2" src="./assets/images/icon-success.svg" alt="illustration sign up desktop">

      <p class="main-p2">Thanks for subscribing!</p>
    
     <p>A confirmation email has been sent to <strong>${etxt}</strong> . 
        Please open it and click the button inside to confirm your subscription.</p>
  
    
        <a href="./index.html"><button class="dismiss" >Dismiss message</button></a>`
    
      mainDiv.classList.remove('main-box')
      mainDiv.classList.add('message')

      document.getElementById('myForm').submit()
    }

    else{
      
      const validation = document.querySelector('div#validation')
      validation.innerHTML = 'Invalid E-mail.'
      
    }

}
