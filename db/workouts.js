const workouts = [
    { 
        id: 1, 
        name: "Impins din culcat cu haltera (Bench Press)", 
        muscle: "Piept", 
        logs: [
            { date: "10.06.2026", weight: "80", reps: "10" },
            { date: "10.06.2026", weight: "85", reps: "8" },
            { date: "14.06.2026", weight: "90", reps: "5" }
        ] 
    },
    { 
        id: 2, 
        name: "Genuflexiuni cu haltera (Squats)", 
        muscle: "Picioare", 
        logs: [
            { date: "08.06.2026", weight: "100", reps: "8" },
            { date: "08.06.2026", weight: "110", reps: "6" },
            { date: "12.06.2026", weight: "115", reps: "5" }
        ] 
    },
    { 
        id: 3, 
        name: "Indreptari conventionale (Deadlift)", 
        muscle: "Spate", 
        logs: [
            { date: "05.06.2026", weight: "140", reps: "5" },
            { date: "12.06.2026", weight: "150", reps: "3" }
        ] 
    },
    { 
        id: 4, 
        name: "Presa militara de la piept (Overhead Press)", 
        muscle: "Umeri", 
        logs: [
            { date: "09.06.2026", weight: "50", reps: "8" },
            { date: "13.06.2026", weight: "55", reps: "6" }
        ] 
    },
    { 
        id: 5, 
        name: "Flexii cu bara Z la banca Scott", 
        muscle: "Brate", 
        logs: [
            { date: "11.06.2026", weight: "30", reps: "12" },
            { date: "11.06.2026", weight: "35", reps: "10" }
        ] 
    },
    { 
        id: 6, 
        name: "Flotari la paralele cu greutate", 
        muscle: "Brate", 
        logs: [
            { date: "11.06.2026", weight: "15", reps: "10" },
            { date: "11.06.2026", weight: "20", reps: "8" }
        ] 
    },
    { 
        id: 7, 
        name: "Tractiuni la bara cu priza larga", 
        muscle: "Spate", 
        logs: [
            { date: "12.06.2026", weight: "0", reps: "12" },
            { date: "12.06.2026", weight: "10", reps: "8" }
        ] 
    },
    { 
        id: 8, 
        name: "Flari la cablu (Pec Deck)", 
        muscle: "Piept", 
        logs: [
            { date: "14.06.2026", weight: "25", reps: "15" }
        ] 
    },
    { 
        id: 9, 
        name: "Presa pentru picioare (Leg Press)", 
        muscle: "Picioare", 
        logs: [
            { date: "08.06.2026", weight: "200", reps: "12" }
        ] 
    },
    { 
        id: 10, 
        name: "Ridicari laterale cu gantere", 
        muscle: "Umeri", 
        logs: [
            { date: "13.06.2026", weight: "12", reps: "15" }
        ] 
    }
];

module.exports = workouts;