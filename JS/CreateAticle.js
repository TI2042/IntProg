function checkIfNotEmpty(str) {
    return str !== '';
}
function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let form = document.forms[1];
    let button = form["submit"];
    

    button.addEventListener("click", (event) => {
        let formData = new FormData(form)
        event.preventDefault()

        for (var value of formData.values()) {
            console.log(value);
        }

        if (!checkIfNotEmpty(formData.get('articleTitle'))) return showMessage('error', 'Fill in the "Title" field.');
        if (!checkIfNotEmpty(formData.get('textArticle'))) return showMessage('error', 'Write what you want to share in the "Article" field.');
        if (!checkIfNotEmpty(formData.get('tags'))) return showMessage('error', 'Fill in the "Tags" field so others can easily find your article.');

        Swal.fire({
            title: 'Loading',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
        })
        showMessage('success', 'The article was successfully created! Congratulations.');
    })
})
