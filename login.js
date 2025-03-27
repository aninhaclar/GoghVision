document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btn-login");

    btnLogin.addEventListener("click", async () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch("https://back-spider.vercel.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login realizado com sucesso!");
                // Redireciona para outra página, se necessário
                window.location.href = "dashboard.html";
            } else {
                alert(`Erro: ${data.message}`);
            }
        } catch (error) {
            alert("Erro ao tentar fazer login. Tente novamente.");
            console.error(error);
        }
    });
});
