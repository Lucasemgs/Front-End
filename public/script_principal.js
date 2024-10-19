function login() {
    // Aqui você pode adicionar a lógica de autenticação
    // Se o login for bem-sucedido:
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.body.classList.remove('no-scroll');
}

// Inicialmente, desabilite a rolagem
document.body.classList.add('no-scroll');
document.getElementById('main-content').style.display = 'none';
    // Função de login
    function login() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Verifica se o login é válido
        if (username === "admin" && password === "admin") {
            // Esconde a tela de login e mostra a tela principal
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.body.classList.remove('no-scroll');
        } else {
            // Exibe mensagem de erro
            document.getElementById('error-message').style.display = 'block';
        }
        function toggleMenu() {
      const menu = document.querySelector('nav ul');
      menu.classList.toggle('active');
  }
    }