const clearButton = document.getElementById('clearStorage');

clearButton.addEventListener('click', ()=>{
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify({'userNum': 0}))
});