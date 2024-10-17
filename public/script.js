document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadUsers();  // Atualiza a lista de usuários
    });
});

function loadUsers() {
    fetch('/users')
    .then(response => response.json())
    .then(users => {
        const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        userTable.innerHTML = '';  // Limpa a tabela
        users.forEach(user => {
            const row = userTable.insertRow();
            row.innerHTML = `<td>${user.id}</td><td>${user.username}</td><td><button class="delete" data-id="${user.id}">Excluir</button></td>`;
        });
    });
}

document.getElementById('userTable').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('data-id');
        fetch(`/users/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadUsers();
        });
    }
});

window.onload = loadUsers;
