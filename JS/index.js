document.addEventListener('DOMContentLoaded', () => {

    function fetchData(){
        fetch('')
        .then(res => res.json())
        .then(data => renderPlayers(data))
    }

    function renderPlayers(){
        const li = document.querySelectorAll('li');
        const a = document.querySelectorAll('a');


        data.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
           <img class="player-image" src="${player.Image}"/>
           <h3 class="player-name">${player.Name}</h3>
           <h5 class="player-age">Age: ${player.Age}</h5>
           <h5 class="player-position">Position${player.Position}</h5>
           <h5 class="player-goals">Goals: ${player.Goals}</h5> 
           <h5 class="player-assist">Assist: ${player.Assist}</h5>
        `
        

        });
        

    }
    







})