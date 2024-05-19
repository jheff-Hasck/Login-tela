function validateForm() {
    var username = document.getElementById('jheferson').value;
    var password = document.getElementById('batata').value;

    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Adicione outras validações conforme necessário

    return true;
}