document.addEventListener('DOMContentLoaded', function () {
    const username = 'alicecazati'; // Replace with your GitHub username
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter dados da API do GitHub: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const repo = data[0]; // Assuming you want the first repository

            // Update HTML elements with repo data
            document.getElementById('repo-name').textContent = `Repositório: ${repo.name}`;
            document.getElementById('description').textContent = repo.description || 'Sem descrição disponível';
            document.getElementById('created_at').textContent = repo.created_at.slice(0, 10); // Extracting only the date
            document.getElementById('ling').textContent = repo.language || 'Não especificado';
            document.getElementById('html_url').href = repo.html_url;
        })
        .catch(error => {
            console.error('Erro ao obter dados da API do GitHub:', error);
            // Display error message on the webpage or handle it as appropriate
        });
});
