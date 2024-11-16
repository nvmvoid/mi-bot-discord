function showServers() {
    const serverList = document.getElementById('server-list');
    serverList.style.display = serverList.style.display === 'none' ? 'block' : 'none';

    fetchServers();
}

function fetchServers() {
    const servers = [
        { name: 'Servidor 1' },
        { name: 'Servidor 2' },
        { name: 'Servidor 3' }
    ];

    const serverList = document.getElementById('server-list');
    serverList.innerHTML = "<h2>Servidores en los que está el Bot:</h2>";
    servers.forEach(server => {
        const serverDiv = document.createElement('div');
        serverDiv.className = 'server';
        serverDiv.innerText = server.name;
        serverList.appendChild(serverDiv);
    });
}
