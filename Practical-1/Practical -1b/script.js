document.getElementById('registrationForm').addEventListener('submit', function(event)
{
    event.preventDefault();
    var formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password:document.getElementById('password').value
    };

    //Save registration to local strorage
    saveRegistrationData(formData);
    alert("Registration Suceessful");    
    //Redirect to data list page
    // window.open('data.html', '_blank');    It will redirect the data.html to new tab in browser
    window.location.href = 'data.html';
});

function saveRegistrationData(formData)
{
    localStorage.setItem('registrationData',JSON.stringify(formData));
}