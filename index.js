function salvar() {
    let nome = document.formulario.nome.value
    let email = document.formulario.email.value
    let idade = document.formulario.idade.value
    let tipo = document.formulario.tipo.value

    let erros = ""

    if(nome == "") {
        erros += " nome,"

    } 
    if(email == "") {
       erros += " email,"

    } 
    if(idade == "") {
        erros += " idade,"

    } 
    if(tipo == "") {
         erros += " tipo,"

    }

    if(erros != "") {
        alert("Os campos: " + erros + " não foram preenchidos corretamente.")
    }
    else {
        alert("Tudo certo!")
    }

}