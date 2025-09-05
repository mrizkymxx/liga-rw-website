document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password-input');
    const loginButton = document.getElementById('login-button');
    const adminLogin = document.getElementById('admin-login');
    const adminContent = document.getElementById('admin-content');

    const correctPassword = 'admin123'; // Hardcoded password

    loginButton.addEventListener('click', function () {
        if (passwordInput.value === correctPassword) {
            adminLogin.style.display = 'none';
            adminContent.style.display = 'block';
            initializeApp();
        } else {
            alert('Kata sandi salah!');
        }
    });

    function initializeApp() {
        // Ambil data dummy dari script.js (pastikan script.js dimuat sebelum admin.js)
        // Di aplikasi nyata, ini akan menjadi panggilan API.
        const teams = {
            'T01': { name: 'RW 01', group: 'A' }, 'T02': { name: 'RW 02', group: 'A' },
            'T03': { name: 'RW 03', group: 'A' }, 'T04': { name: 'RW 04', group: 'A' },
            'T05': { name: 'RW 05', group: 'B' }, 'T06': { name: 'RW 06', group: 'B' },
            'T07': { name: 'RW 07', group: 'B' }, 'T08': { name: 'RW 08', group: 'B' },
        };
        const results = [
            { date: '2025-09-01', teamA: 'T01', scoreA: 2, teamB: 'T02', scoreB: 0 },
            { date: '2025-09-02', teamA: 'T05', scoreA: 1, teamB: 'T06', scoreB: 1 },
        ];
        const standings = {
            'A': [
                { teamId: 'T01', played: 2, win: 2, draw: 0, loss: 0, points: 6 },
                { teamId: 'T02', played: 1, draw: 0, loss: 1, points: 3 },
                { teamId: 'T03', played: 2, win: 0, draw: 1, loss: 1, points: 1 },
                { teamId: 'T04', played: 2, win: 0, draw: 1, loss: 1, points: 1 },
            ],
            'B': [
                { teamId: 'T05', played: 2, win: 1, draw: 1, loss: 0, points: 4 },
                { teamId: 'T06', played: 2, win: 1, draw: 1, loss: 0, points: 4 },
                { teamId: 'T07', played: 2, win: 1, draw: 0, loss: 1, points: 3 },
                { teamId: 'T08', played: 2, win: 0, draw: 0, loss: 2, points: 0 },
            ]
        };

        const teamASelect = document.getElementById('teamA');
        const teamBSelect = document.getElementById('teamB');
        const manageResultsList = document.getElementById('manage-results-list');

        // Isi dropdown tim
        for (const teamId in teams) {
            const optionA = `<option value="${teamId}">${teams[teamId].name}</option>`;
            const optionB = `<option value="${teamId}">${teams[teamId].name}</option>`;
            teamASelect.innerHTML += optionA;
            teamBSelect.innerHTML += optionB;
        }

        const adminStandingsA = document.getElementById('admin-standings-a');
        const adminStandingsB = document.getElementById('admin-standings-b');

        // Tampilkan hasil yang ada
        function renderManageableResults() {
            manageResultsList.innerHTML = '';
            results.forEach((match, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${match.date}: ${teams[match.teamA].name} ${match.scoreA} - ${match.scoreB} ${teams[match.teamB].name}</span>
                    <div>
                        <button class="edit-btn" data-index="${index}">Edit</button>
                        <button class="delete-btn" data-index="${index}">Hapus</button>
                    </div>
                `;
                manageResultsList.appendChild(listItem);
            });
        }

        // Tampilkan klasemen yang bisa diedit
        function renderManageableStandings() {
            adminStandingsA.innerHTML = '';
            standings['A'].forEach(s => {
                const team = teams[s.teamId];
                const row = `<tr>
                    <td>${team.name}</td>
                    <td><input type="number" value="${s.played}" min="0"></td>
                    <td><input type="number" value="${s.win}" min="0"></td>
                    <td><input type="number" value="${s.draw}" min="0"></td>
                    <td><input type="number" value="${s.loss}" min="0"></td>
                    <td><input type="number" value="${s.points}" min="0"></td>
                </tr>`;
                adminStandingsA.innerHTML += row;
            });

            adminStandingsB.innerHTML = '';
            standings['B'].forEach(s => {
                const team = teams[s.teamId];
                const row = `<tr>
                    <td>${team.name}</td>
                    <td><input type="number" value="${s.played}" min="0"></td>
                    <td><input type="number" value="${s.win}" min="0"></td>
                    <td><input type="number" value="${s.draw}" min="0"></td>
                    <td><input type="number" value="${s.loss}" min="0"></td>
                    <td><input type="number" value="${s.points}" min="0"></td>
                </tr>`;
                adminStandingsB.innerHTML += row;
            });
        }

        // Initial Render
        renderManageableResults();
        renderManageableStandings();

        // === EVENT LISTENERS === //

        // Handler untuk form submit (simulasi)
        document.getElementById('add-result-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Fitur "Simpan" belum terhubung ke database. Ini hanya simulasi.');
        });

        // Handler untuk tombol edit dan hapus (simulasi)
        manageResultsList.addEventListener('click', function(e) {
            if (e.target.classList.contains('edit-btn')) {
                alert('Fitur "Edit" belum terhubung ke database. Ini hanya simulasi.');
            } else if (e.target.classList.contains('delete-btn')) {
                alert('Fitur "Hapus" belum terhubung ke database. Ini hanya simulasi.');
            }
        });

        // Handler untuk tombol simpan klasemen (simulasi)
        document.querySelectorAll('.save-standings-btn').forEach(button => {
            button.addEventListener('click', function() {
                const group = this.getAttribute('data-group');
                alert(`Fitur "Simpan Klasemen Grup ${group}" belum terhubung ke database. Ini hanya simulasi.`);
            });
        });
    }
});