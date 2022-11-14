var signUpForm = document.querySelector('#signUpForm');
var usernameField = document.querySelector('#usernameField');
var userNameErrorMessage = document.querySelector('#usernameerrorMessage')

signUpForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(signUpForm.username.value);

    if(signUpForm.username.value == false){
        usernameField.classList.add('errorField');
        userNameErrorMessage.classList.remove('hidden');
        console.log('You need to enter a username')

    }


} );