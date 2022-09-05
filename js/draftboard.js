const team1 = [
    {
        name: 'Jonathon Taylor',
        position: 'RB'
    },
    {
        name: 'Javonte Williams',
        position: 'RB'
    },
    {
        name: 'Mike Evans',
        position: 'WR'
    },
    {
        name: 'Marquise Brown',
        position: 'WR'
    },
    {
        name: 'AJ Dillon',
        position: 'RB'
    },
    {
        name: 'Rhamondre Stevenson',
        position: 'RB'
    },
    {
        name: 'Tom Brady',
        position: 'QB'
    },
    {
        name: 'Justin Tucker',
        position: 'K'
    },
    {
        name: 'Buffalo Bills',
        position: 'DEF'
    },
];

let team1html = document.querySelector('.team-1');

const displayTeam = (array) => {
    for (let i=0; i<array.length; i++) {
        return `<li>${array[i].name} - ${array[i].position}</li>`
    }
};

team1html.innerHTML += displayTeam(team1);

// for (let i=0; i<team1.length; i++) {
//     team1html.innerHTML += `<li>${team1[i].name} - ${team1[i].position}</li>`
// };