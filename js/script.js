document.addEventListener("DOMContentLoaded", function () {
    const meuForm = document.querySelector(".formulario");
    const modal = document.querySelector(".modal");
    const mensagemAviso = document.getElementById("mensagem-aviso");
    const closeBtn = document.querySelector(".close");

    meuForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        let telefone = document.getElementById("telefone").value;
        const mensagem = document.getElementById("mensagem").value;

        let camposFaltando = [];

        if (nome.trim() === '') {
            camposFaltando.push('Nome');
        }
        
        // Verificação do campo de telefone para garantir no mínimo 11 dígitos
        telefone = telefone.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (telefone.length < 11) {
            camposFaltando.push('Telefone com no mínimo 11 números');
        }

        if (mensagem.trim() === '') {
            camposFaltando.push('Mensagem');
        }

        if (camposFaltando.length > 0) {
            const camposFaltandoStr = camposFaltando.join(', ');
            mensagemAviso.textContent = `Por favor, preencha o(s) campo(s) seguinte(s): ${camposFaltandoStr}`;
            modal.style.display = "block";
            return;
        }

        const mensagemFormatada = `Olá!!!%0A%0A**Informações do Contato**%0A%0A*Nome:* ${nome}%0A%0A*Telefone:* ${telefone}%0A%0A*Mensagem:*%0A%0A${mensagem}`;
        const numeroWhatsApp = "5598996114549";
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

        window.open(urlWhatsApp);
    });

    // Fechar o modal quando clicar no botão de fechar (X)
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fechar o modal se o usuário clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
