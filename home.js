function comment(postId) {
    let inputField = document.getElementById(`commentInput${postId}`);
    let commentText = inputField.value.trim();

    if (commentText) {
        alert(`Comentário adicionado: ${commentText}`);
        inputField.value = "";
    } else {
        alert("Digite um comentário antes de enviar!");
    }
}
