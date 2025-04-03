document.addEventListener("DOMContentLoaded", () => {
    const btnRecuperar = document.getElementById("btn-recuperar");

    if (!btnRecuperar) {
        console.error("Botão não encontrado!");
        return;
    }

    btnRecuperar.addEventListener("click", async () => {
        const email = document.getElementById("email").value.trim();
        const username = document.getElementById("username").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const keyword = document.getElementById("keyword").value.trim();

        if (!email || !username || !phone || !keyword) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch("https://back-spider.vercel.app/user/RememberPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, username, phone, keyword }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Código enviado com sucesso!");
                window.location.href = "index.html"; 
            } else {
                alert(`Erro: ${data.message}`);
            }
        } catch (error) {
            alert("Erro ao enviar solicitação. Tente novamente.");
            console.error(error);
        }
    });
});
