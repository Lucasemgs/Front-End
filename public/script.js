
    document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os valores do formulário
    const Nome = document.getElementById('Nome').value;
    const Email = document.getElementById('Email').value;
    const Senha = document.getElementById('Senha').value;
    const Cargo = document.getElementById('Cargo').value;

    // Monta o objeto com os dados do formulário
    const data = { Nome: Nome, Email: Email, Senha: Senha, Cargo: Cargo };

    // Adicione um log para verificar os dados que estão sendo enviados
    console.log('Dados do formulário:', data);

    try {
        // Faz a requisição para o servidor
        const response = await fetch('http://localhost:5000/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data), // Envia os dados como JSON
        });

        // Verifica a resposta do servidor
        if (response.ok) {
            const result = await response.json();
            alert('Conta criada com sucesso!');
            window.location.href = "adm.html"; // Redireciona para a página principal
        } else {
            const error = await response.json();
            console.log('Erro na resposta do servidor:', error); // Log para erro
            document.getElementById('register-error-message').textContent = error.erro;
            document.getElementById('register-error-message').style.display = 'block';
        }
    } catch (err) {
        console.log('Erro:', err);
        document.getElementById('register-error-message').textContent = 'Erro ao conectar com o servidor.';
        document.getElementById('register-error-message').style.display = 'block';
    }
});

