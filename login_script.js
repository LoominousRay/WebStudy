const form   = document.getElementById('form')
const submit = document.getElementById('submitButton')
const info   = document.getElementById('regInfo')
const output = document.getElementById('regOutput')
const
    lName = localStorage.getItem('userLastName'), 
    fName = localStorage.getItem('userFirstName'), 
    patro = localStorage.getItem('userPatronim')

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const 
        submitMail = userMail.value,
        submitPass = userPassword.value,
        userList = JSON.parse(localStorage.users)

    if (userList[submitMail] === undefined) {
        createOverlay('Ошибка!', 'Почта введёна неверно.')
    } else if (userList[submitMail].pass !== submitPass) {
        createOverlay('Ошибка!', 'Пароль введён неверно.')
    } else {
        createOverlay('Успешный вход!', `Здравствуйте, ${userList[submitMail].fName}`)
    }
})