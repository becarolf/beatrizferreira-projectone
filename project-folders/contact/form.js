//namespace
const formPage = {};


formPage.init = () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', formPage.sendForm);
}


formPage.sendForm = (event) => {

    const userName = document.querySelector('#name').value;
    const userEmail = document.querySelector('#email').value;
    const userMessage = document.querySelector('#message').value;



    if (userName.length < 3) {
        alert('Please enter your full name');
        event.preventDefault();
        return
    }
    
    alert(`
        YOUR DATA WAS SUCESSFULLY SENT!

        Name: ${userName}
        Email: ${userEmail}
        Message: ${userMessage}`) 
        

    
}




//calling the init method
formPage.init();

