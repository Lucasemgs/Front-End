// Inicialmente, desabilite a rolagem
document.body.classList.add('no-scroll');

async function login() {
    // Captura os valores do formulário
    const Email = document.getElementById('Email').value;
    const Senha = document.getElementById('Senha').value;

    try {
        // Faz a requisição para a rota de login
        const response = await fetch('http://localhost:5000/login', { // ajuste conforme a URL correta do seu servidor
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Email, Senha }), // Envia os dados como JSON
        });

        // Verifica a resposta do servidor
        if (response.ok) {
            const user = await response.json();
            // Esconde a tela de login e mostra a tela principal
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.body.classList.remove('no-scroll');
        } else {
            // Exibe mensagem de erro
            document.getElementById('error-message').style.display = 'block';
        }
    } catch (err) {
        console.log('Erro:', err);
        document.getElementById('error-message').style.display = 'block';
    }
}
