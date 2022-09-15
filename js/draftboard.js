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

// const team1Div = document.getElementById('team-1').getElementsByTagName('ul')[0];

for (let i=0; i<team1.length; i++) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(`${team1[i].name} - ${team1[i].position}`);
    node.appendChild(textnode);
    document.getElementById('team-1').appendChild(node);
};

for (let i = 0; i < team1.length; i++) {
    const node = document.createElement('li');
    const textnode = document.createTextNode(`${team1[i].name} - ${team1[i].position}`);
    node.appendChild(textnode);
    document.getElementById('team-2').appendChild(node);
};