document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let nome = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("password").value.trim();
    let confirmarSenha = document.getElementById("confirmPassword").value.trim();

    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    const userData = {
        nome,
        email,
        senha,
        premium: "1",
        imagemPerfil: "https://assets.propmark.com.br/uploads/2022/02/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg",
        senhaRecuperacao: "Gato12"
    };

    try {
        const response = await fetch("https://back-spider.vercel.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Cadastro realizado com sucesso!");
            document.getElementById("registerForm").reset();
        } else {
            alert(`Erro: ${data.message || "Algo deu errado"}`);
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Falha ao conectar-se ao servidor. Tente novamente mais tarde.");
    }
});
