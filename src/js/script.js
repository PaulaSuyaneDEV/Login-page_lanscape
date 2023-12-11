function Login(){
    const nome = document.getElementById('nome');
    const senha = document.getElementById('senha');

    if (nome.value == ''|| senha.value == ''){
        window.alert('Preencha todos os dados')
    } else if (nome.value == '' || senha.value == ''){
        window.alert('Preencha todos os dados')}
    else {
        window.alert('Login Efetuado com sucesso')
        
    }
}