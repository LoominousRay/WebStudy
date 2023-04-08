function createOverlay(header, paragraph) {
    $(document.body)
    .append(
        $('<div/>', {class: 'overlay'})
            .append(
                $('<div/>', {class: 'modalBody', id: 'main-popup'})
                    .append(
                        $('<h1/>', {class: 'modalContent'}).html(header),
                        $('<p/>', {class: 'modalContent'}).html(paragraph),
                        $('<button/>', {class: 'modalButton', id: 'modal-button', type: 'button'}).html('Ок')
                    )                        
            )
    )
}
// var content = popUp.getElementsByClassName('modalContent'); // [0] - заголовок <h1>, [1] - пояснение <p> 

document.body.addEventListener("click", (event) => {
    if ((event.target.classList == "overlay") || (event.target.id == "modal-button")) {
        $('.overlay').remove();
    }
});