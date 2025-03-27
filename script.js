// const login = async ( ) => {
//     const email = document.getElementById ('email')
//     const senha = document.getElementById ('password')

//     const url = "endpoint-API"

//     const options = {
//         method: 'Post',
//         headers: {
//            'Content-type': 'aplication/JSON' 
//         },
//         body: JSON.stringify(data)
//     }
//     const response= await fetch (url, options)
// }
  
// const data = {
//     email:email,
//     senha: senha
// }

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginBtn');
    if (loginButton) {
        loginButton.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o redirecionamento imediato do link

            console.log('Botão de login clicado (redirecionamento via JS)!');

            // Aqui você poderia adicionar alguma lógica, como validar um formulário
            // (embora não haja formulário nesta tela).

            // Redireciona para a próxima página após qualquer lógica:
            window.location.href = 'login.html';
        });
    } else {
        console.error('Botão de login não encontrado!');
    }
});