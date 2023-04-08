createOverlay("Здравствуйте!", "Зарегистирутесь, пожалуйста.")

const form   = document.getElementById('form')
const submit = document.getElementById('submitButton')
const info   = document.getElementById('regInfo')
const output = document.getElementById('regOutput')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const
        surname = userSurname.value,
        fName   = userFirstName.value,
        patro   = userPatronim.value,
        mail    = userMail.value,
        pass    = userPassword.value 
    
    var userList = JSON.parse(localStorage.users)
        userList[mail] = {
            mail,
            pass,
            fName,
            surname,
            patro
        }
        userList['userNum']++
    
    localStorage.setItem('users', JSON.stringify(userList))
    
    window.location.href = 'login.html'
});