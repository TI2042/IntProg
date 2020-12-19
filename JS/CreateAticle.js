const button = form["submit"];

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
button.addEventListener("click", (event) => {
    event.preventDefault();

	let formData = new FormData(form);
	for (var value of formData.values()) {
		console.log(value); 
	}

    if (!checkIfNotEmpty(formData.get('articleTitle'))) return showMessage('error', 'Fill in the "Title" field.');
    if (!checkIfNotEmpty(formData.get('textArticle'))) return showMessage('error', 'Write what you want to share in the "Article" field.');
    if (!checkIfNotEmpty(formData.get('tags'))) return showMessage('error', 'Fill in the "Tags" field so others can easily find your article.');

    showMessage('success', 'The article was successfully created! Congratulations.');
});