function addNewUser (user) {
    $(document.body)
    .append(
        $('<div/>', {class: 'userEntry'})
        .append(
                $('<label/>', {class: 'userInfo'}).html('Почта: ' + user.mail),
                $('<label/>', {class: 'userInfo'}).html('Пароль: ' + user.pass),
                $('<label/>', {class: 'userInfo'}).html('Имя: '  + user.fName),
                $('<label/>', {class: 'userInfo'}).html('Фамилия: '  + user.surname),
                $('<label/>', {class: 'userInfo'}).html('Отчество: ' + user.patro)
        )
    )
}

const userList = JSON.parse(localStorage.users)

for (key of Object.keys(userList)) {
    if(key !== 'userNum'){
        addNewUser(userList[key])
    }
    
}
// addNewUser(Object.entries(userList)[1])
// addNewUser(Object.entries(userList)[2])
