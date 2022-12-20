document.addEventListener('DOMContentLoaded', () => {

    URL = 'https://abdiazizabdullahi.github.io/The-Champions-db.json/db.json'
  
  
  function fetchData(){
        fetch(URL)
        .then(res => res.json())
        .then(players => renderPlayers(players))
    }
    
    const body = document.body;

    const voteContainer = document.createElement('div');
    voteContainer.classList.add('container-p');

    const playerContainer = document.createElement('div');
    playerContainer.classList.add('container-p');

    const searchContainer = document.createElement('div');
    //searchContainer.classList.add('')

    const playerFrame = document.createElement('div');
    playerFrame.classList.add('player-frame');

    const voteFrame = document.createElement('div');
    voteFrame.classList.add('vote-frame');

    const searchFrame = document.createElement('div');
    searchFrame.classList.add('search-frame');

    const blog = document.getElementById('blog');
    const video = document.getElementById('video');

    const li1 = document.getElementById('players-list');
    const li2 = document.getElementById('voting'); 




    function renderPlayers(players){
        
        
        players.forEach( player => {
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
        playerFrame.appendChild(playerCard);

        
    playerContainer.appendChild(playerFrame)
        
        li1.addEventListener('click', () => {
          voteContainer.style.display = 'none'
          blog.style.display = 'none'
          video.style.display = 'none'
          loginDiv.style.display = 'none'
          searchContainer.style.display = 'none'

            //li1.appendChild(playerFrame);
            body.appendChild(playerContainer);
          playerContainer.style.display = 'block'
        })

        
        
        
        
        });
    }
    
    
    function fetchAwardData(){
        fetch(URL)
        .then(res => res.json())
        .then(players => renderAwards(players))
    } 
        
        
        
        
        function renderAwards(players){
            
            const voteDiv = document.getElementById('vote-header')
            voteFrame.appendChild(voteDiv)
            const newData = players.slice(0,4); //changed some staff
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

        
        voteContainer.appendChild(voteFrame)

        li2.addEventListener('click', () => {
          loginDiv.style.display = 'none'
          blog.style.display = 'none'
          video.style.display = 'none'
          playerContainer.style.display = 'none'
          searchContainer.style.display = 'none'

            //li2.appendChild(voteFrame);
          body.appendChild(voteContainer);
          voteContainer.style.display = 'block'
            });

        })
    
        
    
    }

    // Login page DOM manupulation
    const login = document.getElementById('login-btn');
    const loginDiv = document.getElementById('login-div');
    //login.appendChild(loginDiv);
    loginDiv.style.display = 'none'
    login.addEventListener('click', () => {
      voteContainer.style.display = 'none'
      blog.style.display = 'none'
      video.style.display = 'none'
      playerContainer.style.display = 'none'
      searchContainer.style.display = 'none'
      
      body.appendChild(loginDiv);
      loginDiv.style.display = 'block'
      
    })
    const loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click', () => {
      voteContainer.style.display = 'none'
      loginDiv.style.display = 'none'
      searchContainer.style.display = 'none'
      playerContainer.style.display = 'none'

      
      blog.style.display = 'block'
      video.style.display = 'block'
      
    })



  // Search function and fetching the data

  function fetchSearchData() {
    fetch(URL)
      .then(res => res.json())
      .then(data => searchPlayer(data));
  }
  
  function searchPlayer(data) {
    // Get the input and button elements
    const input = document.getElementById('input');
    const search = document.getElementById('button');
    const searchCard = document.createElement('div');
    searchCard.classList.add('search-card')
  
    search.addEventListener('click', () => {
      // Remove the existing elements
      // blog.remove();
      // video.remove();
      // //loginDiv.remove();
      // //playerContainer.remove();

      voteContainer.style.display = 'none'
      loginDiv.style.display = 'none'
      playerContainer.style.display = 'none'
      blog.style.display = 'none'
      video.style.display = 'none'

      searchCard.innerHTML = ''
      
  
      // Find the player in the data based on the input value
      const player = data.find(look => look.Name.toLowerCase() === input.value.toLowerCase());
  
      if (player) {
        // Create a new search card element and populate it with the player data
        
        searchCard.innerHTML = `
        <img class="player-image" src="${player.Image}"/>
        <h3 class="player-name font">${player.Name}</h3>
        <h5 class="player-age font">Age: ${player.Age}</h5>
        <h5 class="player-position font">Position: ${player.Position}</h5>
        <h5 class="player-goals font">Goals: ${player.Goals}</h5> 
        <h5 class="player-assist font">Assist: ${player.Assist}</h5>
        `;
  
        // Add the search card element to the page
        searchFrame.appendChild(searchCard);
        searchContainer.appendChild(searchFrame)
        body.appendChild(searchContainer);
        searchContainer.style.display = 'block'

      } else {
        searchCard.innerHTML = ` <h2 class='search-header' >Player Not Found</h2>`

        searchFrame.appendChild(searchCard);
        searchContainer.appendChild(searchFrame);
        body.appendChild(searchContainer);
        searchContainer.style.display = 'block'
      }
    });
  }
      
    fetchSearchData()
    fetchAwardData()
    fetchData()
    
})