document.addEventListener('DOMContentLoaded', () => {

    function fetchData(){
        fetch('http://localhost:3000/players')
        .then(res => res.json())
        .then(data => renderPlayers(data))
    }
    
    const body = document.body
    const playerFrame = document.createElement('div');
    playerFrame.classList.add('frame');
    const voteFrame = document.createElement('div');
    voteFrame.classList.add('vote-frame');
    const blog = document.getElementById('blog');
    const video = document.getElementById('video');




    function renderPlayers(data){
        
        const li1 = document.getElementById('players-list');
        
        

       



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

        

        li1.addEventListener('click', () => {
            blog.remove();
            video.remove();
            li1.appendChild(playerFrame);
            body.appendChild(li1)
        })


        
        
        
            



        });

        
       ;


        

    }
    
    
    function fetchAwardData(){
        fetch('http://localhost:3000/players')
        .then(res => res.json())
        .then(data => renderAwards(data))
    } 
        
        
        
        
        function renderAwards(data){
            const li2 = document.getElementById('voting');
            const voteDiv = document.getElementById('vote-header')
            voteFrame.appendChild(voteDiv)
            const newData = data.slice(0,4);
            console.log(newData)
            newData.forEach( vote => {
                const voteCard = document.createElement('div');
            voteCard.classList.add('vote-card');
            voteCard.innerHTML = `
           <img class="player-image" src="${vote.Image}"/>
           <h3 class="player-name font">${vote.Name}</h3>
           <h5 class="player-age font">Age: ${vote.Age}</h5>
           <h5 class="player-position font">Position: ${vote.Position}</h5>
           <h5 class="player-goals font">Goals: ${vote.Goals}</h5> 
           <h5 class="player-assist font">Assist: ${vote.Assist}</h5>
        `;
        voteFrame.appendChild(voteCard)

        
        const tally = document.createElement('div');
        tally.classList.add('tally');
        tally.innerHTML = 0;
        voteCard.appendChild(tally);
        
        const btn = document.createElement('button');
        btn.classList.add('vote-btn', 'font');
        btn.textContent = 'VOTE';
        
        btn.addEventListener('click', () => {
            tally.innerHTML++;
        });
        voteCard.appendChild(btn);

        li2.addEventListener('click', () => {
            blog.remove();
            video.remove();
            li2.appendChild(voteFrame);
            body.appendChild(li2);
            });

        })
    
        
    
    }



    fetchAwardData()
    fetchData()
    







})