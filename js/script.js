document.addEventListener("DOMContentLoaded", function () {

    const meuForm = document.querySelector(".formulario");

    meuForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const mensagem = document.getElementById("mensagem").value;

        // Array para armazenar os nomes dos campos vazios
        let camposFaltando = [];

        // Verifica se todos os campos estão preenchidos
        if (nome.trim() === '') {
            camposFaltando.push('Nome');
        }
        if (telefone.trim() === '') {
            camposFaltando.push('Telefone');
        }
        if (mensagem.trim() === '') {
            camposFaltando.push('Mensagem');
        }

        // Se algum campo estiver vazio, exibe a mensagem indicando quais campos estão faltando
        if (camposFaltando.length > 0) {
            const camposFaltandoStr = camposFaltando.join(', ');
            alert(`Por favor, preencha o(s) campo(s) seguinte(s): ${camposFaltandoStr}`);
            return; // Impede o envio se algum campo estiver vazio
        }

        // Se todos os campos estiverem preenchidos, cria a mensagem formatada
        const mensagemFormatada = `Olá!!!%0A%0A**Informações do Contato**%0A%0A*Nome:* ${nome}%0A%0A*Telefone:* ${telefone}%0A%0A*Mensagem:*%0A%0A${mensagem}`;

        const numeroWhatsApp = "5598987189453"; // Substitua pelo número de telefone desejado

        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

        // Abre a janela do WhatsApp com a mensagem preenchida
        window.open(urlWhatsApp);

    });

});
