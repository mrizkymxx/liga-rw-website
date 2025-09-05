// Global data storage
let appData = {
    teams: {},
    standings: {},
    matches: {},
    topScorer: [],
    yellowCard: []
};

// Helper function to load JSON data
async function loadJSONData(filename) {
    try {
        const response = await fetch(`data/${filename}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        return null;
    }
}

// Initialize all data
async function initializeData() {
    console.log('🚀 Starting data initialization...');
    
    try {
        // Load all JSON files
        console.log('📁 Loading JSON files...');
        const [teams, standings, matches, topScorer, yellowCard] = await Promise.all([
            loadJSONData('teams.json'),
            loadJSONData('standings.json'),
            loadJSONData('matches.json'),
            loadJSONData('topscorer.json'),
            loadJSONData('yellowcard.json')
        ]);

        // Check if any data failed to load
        if (!teams || !standings || !matches || !topScorer || !yellowCard) {
            throw new Error('One or more JSON files failed to load');
        }

        // Store in global object
        appData.teams = teams;
        appData.standings = standings;
        appData.matches = matches;
        appData.topScorer = topScorer;
        appData.yellowCard = yellowCard;

        console.log('✅ Data loaded successfully:', appData);

        // Initialize UI
        initializeUI();
        
    } catch (error) {
        console.error('❌ Error initializing data:', error);
        console.log('🔄 Falling back to dummy data...');
        // Fallback to dummy data if JSON fails
        initializeDummyData();
        initializeUI();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Check if the current URL path is /admin and redirect to admin.html
    if (window.location.pathname === '/admin' || window.location.pathname.endsWith('/admin')) {
        window.location.href = 'admin.html';
        return;
    }

    // Initialize data and UI
    initializeData();
});

function initializeUI() {
    // Section navigation highlight
    const sectionBtns = document.querySelectorAll('.section-btn');
    const sections = document.querySelectorAll('section');

    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                sectionBtns.forEach(btn => btn.classList.remove('active'));
                if (sectionBtns[index]) {
                    sectionBtns[index].classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial check

    // Render all sections
    renderStandings();
    renderSchedule();
    renderResults();
    renderTopScorer();
    renderYellowCard();
}

// Fallback dummy data function
function initializeDummyData() {
    // Dummy data structure matching JSON format
    appData.teams = {
        "groupA": [
            { "id": 1, "name": "Tim Mawar", "logo": "🌹" },
            { "id": 2, "name": "Tim Melati", "logo": "🌸" },
            { "id": 3, "name": "Tim Anggrek", "logo": "🌺" },
            { "id": 4, "name": "Tim Tulip", "logo": "🌷" }
        ],
        "groupB": [
            { "id": 5, "name": "Tim Sakura", "logo": "🌸" },
            { "id": 6, "name": "Tim Teratai", "logo": "🏵️" },
            { "id": 7, "name": "Tim Dahlia", "logo": "🌻" },
            { "id": 8, "name": "Tim Kenanga", "logo": "🌼" }
        ]
    };

    appData.standings = {
        "groupA": [
            { "team": "Tim Mawar", "matches": 3, "wins": 2, "draws": 1, "losses": 0, "points": 7 },
            { "team": "Tim Melati", "matches": 3, "wins": 2, "draws": 0, "losses": 1, "points": 6 },
            { "team": "Tim Anggrek", "matches": 3, "wins": 1, "draws": 1, "losses": 1, "points": 4 },
            { "team": "Tim Tulip", "matches": 3, "wins": 0, "draws": 0, "losses": 3, "points": 0 }
        ],
        "groupB": [
            { "team": "Tim Sakura", "matches": 3, "wins": 3, "draws": 0, "losses": 0, "points": 9 },
            { "team": "Tim Teratai", "matches": 3, "wins": 1, "draws": 2, "losses": 0, "points": 5 },
            { "team": "Tim Dahlia", "matches": 3, "wins": 1, "draws": 1, "losses": 1, "points": 4 },
            { "team": "Tim Kenanga", "matches": 3, "wins": 0, "draws": 1, "losses": 2, "points": 1 }
        ]
    };

    appData.matches = {
        "schedule": [
            { "date": "2025-01-15", "time": "14:00", "teamA": "Tim Mawar", "teamB": "Tim Melati", "group": "A" },
            { "date": "2025-01-15", "time": "16:00", "teamA": "Tim Anggrek", "teamB": "Tim Tulip", "group": "A" }
        ],
        "results": [
            { "date": "2025-01-10", "teamA": "Tim Mawar", "teamB": "Tim Anggrek", "scoreA": 2, "scoreB": 1, "group": "A" },
            { "date": "2025-01-10", "teamA": "Tim Melati", "teamB": "Tim Tulip", "scoreA": 3, "scoreB": 0, "group": "A" }
        ]
    };

    appData.topScorer = [
        { "rank": 1, "name": "Ahmad Rizki", "team": "Tim Sakura", "goals": 5, "matches": 3 },
        { "rank": 2, "name": "Budi Santoso", "team": "Tim Mawar", "goals": 4, "matches": 3 },
        { "rank": 3, "name": "Cahyo Nugroho", "team": "Tim Melati", "goals": 3, "matches": 3 }
    ];

    appData.yellowCard = [
        { "rank": 1, "name": "Faisal Ramadhan", "team": "Tim Dahlia", "cards": 3, "matches": 3 },
        { "rank": 2, "name": "Gandi Sutrisno", "team": "Tim Kenanga", "cards": 2, "matches": 3 },
        { "rank": 3, "name": "Hadi Wijaya", "team": "Tim Tulip", "cards": 2, "matches": 3 }
    ];
}

// Render functions for each section
function renderStandings() {
    const groupABody = document.getElementById('standings-a');
    const groupBBody = document.getElementById('standings-b');
    
    if (!groupABody || !groupBBody || !appData.standings) return;

    console.log('📊 Rendering standings...', appData.standings);

    // Render Group A
    groupABody.innerHTML = '';
    if (appData.standings.groupA) {
        appData.standings.groupA.forEach((team, index) => {
            groupABody.innerHTML += `
                <tr>
                    <td><strong>${index + 1}. ${team.team}</strong></td>
                    <td>${team.matches}</td>
                    <td>${team.wins}</td>
                    <td>${team.draws}</td>
                    <td>${team.losses}</td>
                    <td><strong>${team.points}</strong></td>
                </tr>
            `;
        });
    }

    // Render Group B
    groupBBody.innerHTML = '';
    if (appData.standings.groupB) {
        appData.standings.groupB.forEach((team, index) => {
            groupBBody.innerHTML += `
                <tr>
                    <td><strong>${index + 1}. ${team.team}</strong></td>
                    <td>${team.matches}</td>
                    <td>${team.wins}</td>
                    <td>${team.draws}</td>
                    <td>${team.losses}</td>
                    <td><strong>${team.points}</strong></td>
                </tr>
            `;
        });
    }
}

function renderSchedule() {
    const scheduleList = document.getElementById('schedule-list');
    if (!scheduleList || !appData.matches || !appData.matches.schedule) return;

    console.log('📅 Rendering schedule...', appData.matches.schedule);

    scheduleList.innerHTML = '';
    appData.matches.schedule.forEach(match => {
        scheduleList.innerHTML += `
            <div class="schedule-item">
                <div class="schedule-date">${formatDate(match.date)}</div>
                <div class="schedule-time">${match.time}</div>
                <div class="schedule-match">
                    <span class="team">${match.teamA}</span>
                    <span class="vs">VS</span>
                    <span class="team">${match.teamB}</span>
                </div>
                <div class="schedule-group">Grup ${match.group}</div>
            </div>
        `;
    });
}

function renderResults() {
    const resultsList = document.getElementById('results-list');
    if (!resultsList || !appData.matches || !appData.matches.results) return;

    console.log('🏆 Rendering results...', appData.matches.results);

    resultsList.innerHTML = '';
    appData.matches.results.forEach(match => {
        resultsList.innerHTML += `
            <div class="result-item">
                <div class="result-date">${formatDate(match.date)}</div>
                <div class="result-match">
                    <span class="team">${match.teamA}</span>
                    <span class="score">${match.scoreA} - ${match.scoreB}</span>
                    <span class="team">${match.teamB}</span>
                </div>
                <div class="result-group">Grup ${match.group}</div>
            </div>
        `;
    });
}

function renderTopScorer() {
    const topScorerBody = document.getElementById('topscorer-list');
    if (!topScorerBody || !appData.topScorer) return;

    console.log('⚽ Rendering top scorers...', appData.topScorer);

    topScorerBody.innerHTML = '';
    appData.topScorer.forEach(player => {
        topScorerBody.innerHTML += `
            <tr>
                <td><strong>${player.rank}</strong></td>
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td><strong>${player.goals}</strong></td>
                <td>${player.matches}</td>
            </tr>
        `;
    });
}

function renderYellowCard() {
    const yellowCardBody = document.getElementById('yellowcard-list');
    if (!yellowCardBody || !appData.yellowCard) return;

    console.log('🟨 Rendering yellow cards...', appData.yellowCard);

    yellowCardBody.innerHTML = '';
    appData.yellowCard.forEach(player => {
        yellowCardBody.innerHTML += `
            <tr>
                <td><strong>${player.rank}</strong></td>
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td><strong>${player.cards}</strong></td>
                <td>${player.matches}</td>
            </tr>
        `;
    });
}

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}