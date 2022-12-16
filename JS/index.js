document.addEventListener('DOMContentLoaded', () => {

    function fetchData(){
        fetch('http://localhost:3000/players')
        .then(res => res.json())
        .then(data => renderPlayers(data));
    }

    function renderPlayers(data){
        const body = document.body
        const li2 = document.getElementById('players-list');
        const blog = document.getElementById('blog');
        const video = document.getElementById('video');
        const playerFrame = document.createElement('div');
        playerFrame.classList.add('frame');



        data.forEach( player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
           <img class="player-image" src="${player.Image}"/>
           <h3 class="player-name font">${player.Name}</h3>
           <h5 class="player-age font">Age: ${player.Age}</h5>
           <h5 class="player-position font">Position: ${player.Position}</h5>
           <h5 class="player-goals font">Goals: ${player.Goals}</h5> 
           <h5 class="player-assist font">Assist: ${player.Assist}</h5>
        `
        playerFrame.appendChild(playerCard)

        

        li2.addEventListener('click', () => {
            blog.remove();
            video.remove();
            li2.appendChild(playerFrame);
            body.appendChild(li2)
        })

        


        });

        


        

    }





    fetchData()
    







})