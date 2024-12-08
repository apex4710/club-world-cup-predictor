import { teams, groupStageMatches, knockoutStageMatches, quarterFinalMatches, semiFinalMatches, finalMatch } from '../data/teams.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('group-stage-form');
    const knockoutForm = document.getElementById('knockout-stage-form');
    const standingsDiv = document.getElementById('standings');
    const knockoutStageDiv = document.getElementById('knockout-stage-visualization');
    console.log('groupStageMatches:', groupStageMatches);

    groupStageMatches.forEach((matchGroup, groupIndex) => {
        console.log('Processing matchGroup:', matchGroup);

        const dateDiv = document.createElement('div');
        dateDiv.innerHTML = `<h3>${matchGroup.date}</h3>`;
        form.appendChild(dateDiv);

        matchGroup.matches.forEach((match, matchIndex) => {
            console.log('Processing match:', match);

            const matchDiv = document.createElement('div');
            matchDiv.innerHTML = `
                <label>Match ${groupIndex * 4 + matchIndex + 1}: ${match.team1} vs ${match.team2}</label>
                <input type="number" name="match${groupIndex * 4 + matchIndex + 1}_team1" min="0" placeholder="Score for ${match.team1}" required>
                <input type="number" name="match${groupIndex * 4 + matchIndex + 1}_team2" min="0" placeholder="Score for ${match.team2}" required>
            `;
            form.appendChild(matchDiv);
        });
    });

    form.innerHTML += '<button type="submit">Submit Results</button>';
    form.innerHTML += '<button type="button" id="randomize">Randomize</button>';
    form.innerHTML += '<button type="button" id="reset">Reset</button>';

    // Add input event listeners to validate scores
    form.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', (event) => {
            if (event.target.value < 0) {
                event.target.value = 0;
            }
        });
    });

    document.getElementById('randomize').addEventListener('click', () => {
        form.querySelectorAll('input[type="number"]').forEach(input => {
            input.value = Math.floor(Math.random() * 6); // Random score between 0 and 5
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const results = [];
        groupStageMatches.forEach((matchGroup, groupIndex) => {
            matchGroup.matches.forEach((match, matchIndex) => {
                const homeScore = parseInt(formData.get(`match${groupIndex * 4 + matchIndex + 1}_team1`));
                const awayScore = parseInt(formData.get(`match${groupIndex * 4 + matchIndex + 1}_team2`));
                results.push({ matchId: groupIndex * 4 + matchIndex + 1, homeScore, awayScore });
            });
        });

        updateStandings(results);
    });

    document.getElementById('reset').addEventListener('click', () => {
        form.querySelectorAll('input[type="number"]').forEach(input => {
            input.value = '';
        });
        localStorage.removeItem('standings');
        standingsDiv.innerHTML = '';
        knockoutStageDiv.innerHTML = '';
        knockoutForm.innerHTML = '';
    });

    loadStandings();
});

function updateStandings(results) {
    const standings = {}; // Object to store standings for each group
    teams.forEach(team => {
        standings[team.group] = standings[team.group] || [];
        standings[team.group].push({ ...team, points: 0, goalDifference: 0 });
    });

    results.forEach(result => {
        const match = groupStageMatches[Math.floor((result.matchId - 1) / 4)].matches[(result.matchId - 1) % 4];
        const homeTeam = standings[match.group].find(t => t.name === match.team1);
        const awayTeam = standings[match.group].find(t => t.name === match.team2);

        if (homeTeam && awayTeam) {
            homeTeam.goalDifference += result.homeScore - result.awayScore;
            awayTeam.goalDifference += result.awayScore - result.homeScore;

            if (result.homeScore > result.awayScore) {
                homeTeam.points += 3;
            } else if (result.homeScore < result.awayScore) {
                awayTeam.points += 3;
            } else {
                homeTeam.points += 1;
                awayTeam.points += 1;
            }
        } else {
            console.error('Team not found in standings', match.team1, match.team2);
        }
    });

    for (const group in standings) {
        standings[group].sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference);
    }

    displayStandings(standings);
    saveStandings(standings);
    generateKnockoutStage(standings);
}

function displayStandings(standings) {
    const standingsDiv = document.getElementById('standings');
    standingsDiv.innerHTML = ''; // Clear previous standings

    for (const group in standings) {
        const groupStandings = standings[group];
        const groupDiv = document.createElement('div');
        groupDiv.innerHTML = `<h3>Group ${group}</h3>`;
        groupStandings.forEach(team => {
            groupDiv.innerHTML += `<p>${team.name}: ${team.points} points, GD: ${team.goalDifference}</p>`;
        });
        standingsDiv.appendChild(groupDiv);
    }
}

function generateKnockoutStage(standings) {
    const knockoutStageDiv = document.getElementById('knockout-stage-visualization');
    const knockoutForm = document.getElementById('knockout-stage-form');
    knockoutStageDiv.innerHTML = ''; // Clear previous visualizations
    knockoutForm.innerHTML = ''; // Clear previous forms

    // Generate knockout stage matchups based on group standings
    const knockoutStageMatches = [
        { round: "Round of 16", team1: standings["A"][0].name, team2: standings["B"][1].name },
        { round: "Round of 16", team1: standings["C"][0].name, team2: standings["D"][1].name },
        { round: "Round of 16", team1: standings["B"][0].name, team2: standings["A"][1].name },
        { round: "Round of 16", team1: standings["D"][0].name, team2: standings["C"][1].name },
        { round: "Round of 16", team1: standings["E"][0].name, team2: standings["F"][1].name },
        { round: "Round of 16", team1: standings["G"][0].name, team2: standings["H"][1].name },
        { round: "Round of 16", team1: standings["H"][0].name, team2: standings["G"][1].name },
        { round: "Round of 16", team1: standings["F"][0].name, team2: standings["E"][1].name }
    ];

    knockoutStageMatches.forEach((match, index) => {
        knockoutStageDiv.innerHTML += `<p>${match.round}: ${match.team1} vs ${match.team2}</p>`;
        knockoutForm.innerHTML += `
            <div>
                <label>${match.round}: ${match.team1} vs ${match.team2}</label>
                <input type="number" name="knockout${index + 1}_team1" min="0" placeholder="Score for ${match.team1}" required>
                <input type="number" name="knockout${index + 1}_team2" min="0" placeholder="Score for ${match.team2}" required>
            </div>
        `;
    });

    knockoutForm.innerHTML += '<button type="submit">Submit Knockout Results</button>';

    knockoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const results = [];
        knockoutStageMatches.forEach((match, index) => {
            const homeScore = parseInt(formData.get(`knockout${index + 1}_team1`));
            const awayScore = parseInt(formData.get(`knockout${index + 1}_team2`));
            results.push({ matchId: index + 1, homeScore, awayScore, team1: match.team1, team2: match.team2 });
        });

        processKnockoutResults(results);
    });
}

function processKnockoutResults(results) {
    const nextRoundTeams = [];
    
    results.forEach(result => {
        const winningTeam = result.homeScore > result.awayScore ? result.team1 : result.team2;
        nextRoundTeams.push(winningTeam);
    });

    console.log("Next round teams (Quarter-finals):", nextRoundTeams);
    generateQuarterFinals(nextRoundTeams);
}

function generateQuarterFinals(teams) {
    const knockoutStageDiv = document.getElementById('knockout-stage-visualization');
    const knockoutForm = document.getElementById('knockout-stage-form');
    knockoutStageDiv.innerHTML += '<h3>Quarter-finals</h3>';
    knockoutForm.innerHTML = ''; // Clear previous forms

    const quarterFinalMatches = [
        { round: "Quarter-final", team1: teams[0], team2: teams[1] },
        { round: "Quarter-final", team1: teams[2], team2: teams[3] },
        { round: "Quarter-final", team1: teams[4], team2: teams[5] },
        { round: "Quarter-final", team1: teams[6], team2: teams[7] }
    ];

    quarterFinalMatches.forEach((match, index) => {
        knockoutStageDiv.innerHTML += `<p>${match.round}: ${match.team1} vs ${match.team2}</p>`;
        knockoutForm.innerHTML += `
            <div>
                <label>${match.round}: ${match.team1} vs ${match.team2}</label>
                <input type="number" name="quarter${index + 1}_team1" min="0" placeholder="Score for ${match.team1}" required>
                <input type="number" name="quarter${index + 1}_team2" min="0" placeholder="Score for ${match.team2}" required>
            </div>
        `;
    });

    knockoutForm.innerHTML += '<button type="submit">Submit Quarter-final Results</button>';

    knockoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const results = [];
        quarterFinalMatches.forEach((match, index) => {
            const homeScore = parseInt(formData.get(`quarter${index + 1}_team1`));
            const awayScore = parseInt(formData.get(`quarter${index + 1}_team2`));
            results.push({ matchId: index + 1, homeScore, awayScore, team1: match.team1, team2: match.team2 });
        });

        processQuarterFinalResults(results);
    });
}

function processQuarterFinalResults(results) {
    const nextRoundTeams = [];
    
    results.forEach(result => {
        const winningTeam = result.homeScore > result.awayScore ? result.team1 : result.team2;
        nextRoundTeams.push(winningTeam);
    });

    console.log("Next round teams (Semi-finals):", nextRoundTeams);
    generateSemiFinals(nextRoundTeams);
}

function generateSemiFinals(teams) {
    const knockoutStageDiv = document.getElementById('knockout-stage-visualization');
    const knockoutForm = document.getElementById('knockout-stage-form');
    knockoutStageDiv.innerHTML += '<h3>Semi-finals</h3>';
    knockoutForm.innerHTML = ''; // Clear previous forms

    const semiFinalMatches = [
        { round: "Semi-final", team1: teams[0], team2: teams[1] },
        { round: "Semi-final", team1: teams[2], team2: teams[3] }
    ];

    semiFinalMatches.forEach((match, index) => {
        knockoutStageDiv.innerHTML += `<p>${match.round}: ${match.team1} vs ${match.team2}</p>`;
        knockoutForm.innerHTML += `
            <div>
                <label>${match.round}: ${match.team1} vs ${match.team2}</label>
                <input type="number" name="semi${index + 1}_team1" min="0" placeholder="Score for ${match.team1}" required>
                <input type="number" name="semi${index + 1}_team2" min="0" placeholder="Score for ${match.team2}" required>
            </div>
        `;
    });

    knockoutForm.innerHTML += '<button type="submit">Submit Semi-final Results</button>';

    knockoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const results = [];
        semiFinalMatches.forEach((match, index) => {
            const homeScore = parseInt(formData.get(`semi${index + 1}_team1`));
            const awayScore = parseInt(formData.get(`semi${index + 1}_team2`));
            results.push({ matchId: index + 1, homeScore, awayScore, team1: match.team1, team2: match.team2 });
        });

        processSemiFinalResults(results);
    });
}

function processSemiFinalResults(results) {
    const nextRoundTeams = [];
    
    results.forEach(result => {
        const winningTeam = result.homeScore > result.awayScore ? result.team1 : result.team2;
        nextRoundTeams.push(winningTeam);
    });

    console.log("Next round teams (Final):", nextRoundTeams);
    generateFinal(nextRoundTeams);
}

function generateFinal(teams) {
    const knockoutStageDiv = document.getElementById('knockout-stage-visualization');
    const knockoutForm = document.getElementById('knockout-stage-form');
    knockoutStageDiv.innerHTML += '<h3>Final</h3>';
    knockoutForm.innerHTML = ''; // Clear previous forms

    const finalMatch = [
        { round: "Final", team1: teams[0], team2: teams[1] }
    ];

    finalMatch.forEach((match, index) => {
        knockoutStageDiv.innerHTML += `<p>${match.round}: ${match.team1} vs ${match.team2}</p>`;
        knockoutForm.innerHTML += `
            <div>
                <label>${match.round}: ${match.team1} vs ${match.team2}</label>
                <input type="number" name="final${index + 1}_team1" min="0" placeholder="Score for ${match.team1}" required>
                <input type="number" name="final${index + 1}_team2" min="0" placeholder="Score for ${match.team2}" required>
            </div>
        `;
    });

    knockoutForm.innerHTML += '<button type="submit">Submit Final Results</button>';

    knockoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const results = [];
        finalMatch.forEach((match, index) => {
            const homeScore = parseInt(formData.get(`final${index + 1}_team1`));
            const awayScore = parseInt(formData.get(`final${index + 1}_team2`));
            results.push({ matchId: index + 1, homeScore, awayScore, team1: match.team1, team2: match.team2 });
        });

        processFinalResults(results);
    });
}

function processFinalResults(results) {
    const winner = results[0].homeScore > results[0].awayScore ? results[0].team1 : results[0].team2;
    
    const knockoutStageDiv = document.getElementById('knockout-stage-visualization');
    knockoutStageDiv.innerHTML += `<h3>Winner: ${winner}</h3>`;
}

function saveStandings(standings) {
    localStorage.setItem('standings', JSON.stringify(standings));
}

function loadStandings() {
    const savedStandings = localStorage.getItem('standings');
    if (savedStandings) {
        const standings = JSON.parse(savedStandings);
        displayStandings(standings);
        generateKnockoutStage(standings);
    }
}
