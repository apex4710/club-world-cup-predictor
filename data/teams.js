// Hardcoded data for teams and matches

// Define teams and groups for the FIFA Club World Cup

const teams = [
  // Group A
  { id: 1, name: "SE Palmeiras", country: "BRA", group: "A" },
  { id: 2, name: "FC Porto", country: "POR", group: "A" },
  { id: 3, name: "Al Ahly FC", country: "EGY", group: "A" },
  { id: 4, name: "Inter Miami CF", country: "USA", group: "A" },
  // Group B
  { id: 5, name: "Paris Saint-Germain", country: "FRA", group: "B" },
  { id: 6, name: "Atlético de Madrid", country: "ESP", group: "B" },
  { id: 7, name: "Botafogo", country: "BRA", group: "B" },
  { id: 8, name: "Seattle Sounders FC", country: "USA", group: "B" },
  // Group C
  { id: 9, name: "FC Bayern München", country: "GER", group: "C" },
  { id: 10, name: "Auckland City FC", country: "NZL", group: "C" },
  { id: 11, name: "CA Boca Juniors", country: "ARG", group: "C" },
  { id: 12, name: "SL Benfica", country: "POR", group: "C" },
  // Group D
  { id: 13, name: "CR Flamengo", country: "BRA", group: "D" },
  { id: 14, name: "Espérance Sportive de Tunis", country: "TUN", group: "D" },
  { id: 15, name: "Chelsea FC", country: "ENG", group: "D" },
  { id: 16, name: "Club León", country: "MEX", group: "D" },
  // Group E
  { id: 17, name: "CA River Plate", country: "ARG", group: "E" },
  { id: 18, name: "Urawa Red Diamonds", country: "JPN", group: "E" },
  { id: 19, name: "CF Monterrey", country: "MEX", group: "E" },
  { id: 20, name: "FC Internazionale Milano", country: "ITA", group: "E" },
  // Group F
  { id: 21, name: "Fluminense FC", country: "BRA", group: "F" },
  { id: 22, name: "Borussia Dortmund", country: "GER", group: "F" },
  { id: 23, name: "Ulsan HD", country: "KOR", group: "F" },
  { id: 24, name: "Mamelodi Sundowns FC", country: "RSA", group: "F" },
  // Group G
  { id: 25, name: "Manchester City", country: "ENG", group: "G" },
  { id: 26, name: "Wydad AC", country: "MAR", group: "G" },
  { id: 27, name: "Al Ain FC", country: "UAE", group: "G" },
  { id: 28, name: "Juventus FC", country: "ITA", group: "G" },
  // Group H
  { id: 29, name: "Real Madrid C. F.", country: "ESP", group: "H" },
  { id: 30, name: "Al Hilal", country: "KSA", group: "H" },
  { id: 31, name: "CF Pachuca", country: "MEX", group: "H" },
  { id: 32, name: "FC Salzburg", country: "AUT", group: "H" },
];

const groupStageMatches = [
    {
        date: "Saturday 14 June 2025",
        matches: [
            { group: "A", team1: "Al Ahly FC", time: "20:00", team2: "Inter Miami CF" }
        ]
    },
    {
        date: "Sunday 15 June 2025",
        matches: [
            { group: "C", team1: "FC Bayern München", time: "12:00", team2: "Auckland City FC" },
            { group: "B", team1: "Paris Saint-Germain", time: "15:00", team2: "Atlético de Madrid" },
            { group: "A", team1: "SE Palmeiras", time: "18:00", team2: "FC Porto" },
            { group: "C", team1: "Botafogo", time: "22:00", team2: "Seattle Sounders FC" }
        ]
    },
    {
        date: "Monday 16 June 2025",
        matches: [
            { group: "D", team1: "Chelsea FC", time: "15:00", team2: "Club León" },
            { group: "C", team1: "CA Boca Juniors", time: "18:00", team2: "SL Benfica" },
            { group: "D", team1: "CR Flamengo", time: "21:00", team2: "Espérance Sportive de Tunis" }
        ]
    },
    {
        date: "Tuesday 17 June 2025",
        matches: [
            { group: "F", team1: "Fluminense FC", time: "12:00", team2: "Borussia Dortmund" },
            { group: "E", team1: "CA River Plate", time: "15:00", team2: "Urawa Red Diamonds" },
            { group: "F", team1: "Ulsan HD", time: "18:00", team2: "Mamelodi Sundowns FC" },
            { group: "E", team1: "CF Monterrey", time: "21:00", team2: "FC Internazionale Milano" }
        ]
    },
    { 
        date: "Wednesday 18 June 2025", 
        matches: [ 
            { group: "G", team1: "Manchester City", time: "12:00", team2: "Wydad AC" }, 
            { group: "H", team1: "Real Madrid C. F.", time: "15:00", team2: "Al Hilal" }, 
            { group: "G", team1: "Juventus FC", time: "18:00", team2: "Al Ain FC" }, 
            { group: "H", team1: "CF Pachuca", time: "21:00", team2: "FC Salzburg" }
        ] 
    }, 
    { date: "Thursday 19 June 2025", 
        matches: [ 
            { group: "A", team1: "SE Palmeiras", time: "12:00", team2: "Al Ahly FC" }, 
            { group: "A", team1: "Inter Miami CF", time: "15:00", team2: "FC Porto" }, 
            { group: "B", team1: "Seattle Sounders FC", time: "18:00", team2: "Atlético de Madrid" }, 
            { group: "D", team1: "Club León", time: "20:00", team2: "Espérance Sportive de Tunis" }, 
            { group: "B", team1: "Paris Saint-Germain", time: "21:00", team2: "Botafogo" } 
        ]
    },
    { date: "Friday 20 June 2025", 
        matches: [ 
            { group: "C", team1: "SL Benfica", time: "12:00", team2: "Auckland City FC" }, 
            { group: "D", team1: "CR Flamengo", time: "14:00", team2: "Chelsea FC" }, 
            { group: "C", team1: "FC Bayern München", time: "21:00", team2: "CA Boca Juniors" } 
        ] 
    }, 
    { date: "Saturday 21 June 2025", 
        matches: [ 
            { group: "F", team1: "Mamelodi Sundowns FC", time: "12:00", team2: "Borussia Dortmund" }, 
            { group: "E", team1: "FC Internazionale Milano", time: "15:00", team2: "Urawa Red Diamonds" }, 
            { group: "F", team1: "Fluminense FC", time: "18:00", team2: "Ulsan HD" }, 
            { group: "E", team1: "CA River Plate", time: "21:00", team2: "CF Monterrey" } 
        ]
    },
    { date: "Sunday 22 June 2025", 
        matches: [ 
            { group: "G", team1: "Juventus FC", time: "12:00", team2: "Wydad AC" }, 
            { group: "H", team1: "Real Madrid C. F.", time: "15:00", team2: "CF Pachuca" }, 
            { group: "H", team1: "FC Salzburg", time: "18:00", team2: "Al Hilal FC" }, 
            { group: "G", team1: "Manchester City", time: "21:00", team2: "Al Ain FC" } 
        ] 
    }, 
    { date: "Monday 23 June 2025", 
        matches: [ 
            { group: "B", team1: "Seattle Sounders FC", time: "15:00", team2: "Paris Saint-Germain" }, 
            { group: "B", team1: "Atlético de Madrid", time: "15:00", team2: "Botafogo" }, 
            { group: "C", team1: "Auckland City FC", time: "20:00", team2: "CA Boca Juniors" }, 
            { group: "A", team1: "Inter Miami CF", time: "21:00", team2: "SE Palmeiras" }, 
            { group: "A", team1: "FC Porto", time: "21:00", team2: "Al Ahly FC" } 
        ] 
    },
    { date: "Tuesday 24 June 2025", 
        matches: [ 
            { group: "C", team1: "SL Benfica", time: "15:00", team2: "FC Bayern München" }, 
            { group: "D", team1: "Espérance Sportive de Tunis", time: "21:00", team2: "Chelsea FC" }, 
            { group: "D", team1: "Club León", time: "21:00", team2: "CR Flamengo" } 
        ] 
    }, 
    { date: "Wednesday 25 June 2025", 
        matches: [ 
            { group: "F", team1: "Borussia Dortmund", time: "15:00", team2: "Ulsan HD" }, 
            { group: "F", team1: "Mamelodi Sundowns FC", time: "15:00", team2: "Fluminense FC" }, 
            { group: "H", team1: "Al Hilal", time: "20:00", team2: "CF Pachuca" }, 
            { group: "E", team1: "Urawa Red Diamonds", time: "21:00", team2: "CF Monterrey" }, 
            { group: "E", team1: "FC Internazionale Milano", time: "21:00", team2: "CA River Plate" } 
        ]
    },
    { date: "Thursday 26 June 2025", 
        matches: [ 
            { group: "G", team1: "Wydad AC", time: "15:00", team2: "Al Ain FC" }, 
            { group: "G", team1: "Juventus FC", time: "15:00", team2: "Manchester City" }, 
            { group: "H", team1: "FC Salzburg", time: "21:00", team2: "Real Madrid C. F." } 
        ]
    }

];

const knockoutStageMatches = [
    {
        date: "Saturday 28 June 2025",
        matches: [
            { round: "Round of 16", team1: "1A", time: "12:00", team2: "2B" },
            { round: "Round of 16", team1: "1C", time: "16:00", team2: "2D" }
        ]
    },
    {
        date: "Sunday 29 June 2025",
        matches: [
            { round: "Round of 16", team1: "1B", time: "12:00", team2: "2A" },
            { round: "Round of 16", team1: "1D", time: "16:00", team2: "2C" }
        ]
    },
    {
        date: "Monday 30 June 2025",
        matches: [
            { round: "Round of 16", team1: "1E", time: "15:00", team2: "2F" },
            { round: "Round of 16", team1: "1G", time: "21:00", team2: "2H" }
        ]
    },
    {
        date: "Tuesday 01 July 2025",
        matches: [
            { round: "Round of 16", team1: "1H", time: "15:00", team2: "2G" },
            { round: "Round of 16", team1: "1F", time: "21:00", team2: "2E" }
        ]
    }
];

const quarterFinalMatches = [
    {
        date: "Friday 04 July 2025",
        matches: [
            { round: "Quarter-final", team1: "W49", time: "15:00", team2: "W50" },
            { round: "Quarter-final", team1: "W51", time: "21:00", team2: "W52" }
        ]
    },
    {
        date: "Saturday 05 July 2025",
        matches: [
            { round: "Quarter-final", team1: "W53", time: "12:00", team2: "W54" },
            { round: "Quarter-final", team1: "W55", time: "16:00", team2: "W56" }
        ]
    }
];

const semiFinalMatches = [
    {
        date: "Tuesday 08 July 2025",
        matches: [
            { round: "Semi-final", team1: "W57", time: "15:00", team2: "W58" }
        ]
    },
    {
        date: "Wednesday 09 July 2025",
        matches: [
            { round: "Semi-final", team1: "W59", time: "15:00", team2: "W60" }
        ]
    }
];

const finalMatch = [
    {
        date: "Sunday 13 July 2025",
        matches: [
            { round: "Final", team1: "W61", time: "15:00", team2: "W62" }
        ]
    }
];

export {
    teams,
    groupStageMatches,
    knockoutStageMatches, 
    quarterFinalMatches, 
    semiFinalMatches, 
    finalMatch,
};