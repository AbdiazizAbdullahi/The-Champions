// Fetch URL
URL = 'https://abdiazizabdullahi.github.io/server/db.json'

document.addEventListener('DOMContentLoaded', () => {

// Body section
const body = document.body;

// Awards page elements 
const voteContainer = document.createElement('div');
voteContainer.classList.add('container-p');
const voteFrame = document.createElement('div');
voteFrame.classList.add('vote-frame');

// Players page elements
const playerContainer = document.createElement('div');
playerContainer.classList.add('container-p');
const playerFrame = document.createElement('div');
playerFrame.classList.add('player-frame');

// Search-bar elements 
const searchContainer = document.createElement('div');
const searchFrame = document.createElement('div');
searchFrame.classList.add('search-frame');

// Calling home page elements
const blog = document.getElementById('blog');
const video = document.getElementById('video');
const feedback = document.getElementById('feedback-card')

// Calling nav-bar elements
const li1 = document.getElementById('players-list');
const li2 = document.getElementById('voting');

// Feedback page elements



function fetchData(){  
  fetch(URL)
  .then(res => res.json())
  .then(object => { let data = object['players']
  renderPlayers(data)})
}

// Function that renders the players to screen
function renderPlayers(data){
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
  playerFrame.appendChild(playerCard);
  playerContainer.appendChild(playerFrame)


  li1.addEventListener('click', () => {
    voteContainer.style.display = 'none'
    blog.style.display = 'none'
    video.style.display = 'none'
    feedback.style.display = 'none'
    loginDiv.style.display = 'none'
    searchContainer.style.display = 'none'

    //li1.appendChild(playerFrame);
    body.appendChild(playerContainer);
    playerContainer.style.display = 'block'
  })
  })  
}  
    
    
function fetchAwardData(){
  fetch(URL)
  .then(res => res.json())
  .then(object => { const data = object['players']
  renderAwards(data)})
}

// Function to render Awards Nominee players
function renderAwards(data){
  const voteDiv = document.getElementById('vote-header')
  voteFrame.appendChild(voteDiv)
  const newData = data.slice(0,4); 
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

  // Votes counting
  const tally = document.createElement('div');
  tally.classList.add('tally');
  tally.innerHTML = 0;
  voteCard.appendChild(tally);
  
  // Vote button
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
    feedback.style.display = 'none'

    // Append vote container
    body.appendChild(voteContainer);
    voteContainer.style.display = 'block'
    });
  }); 
}

// Login page event listener
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
  feedback.style.display = 'none'
  
  body.appendChild(loginDiv);
  loginDiv.style.display = 'block'
  
})

// Eventlistener that returns you home page 
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', () => {
  voteContainer.style.display = 'none'
  loginDiv.style.display = 'none'
  searchContainer.style.display = 'none'
  playerContainer.style.display = 'none'
  feedback.style.display = 'none'
  blog.style.display = 'block'
  video.style.display = 'block'
})

// Event listener that returns you home page when clicked on the brand name
const flata = document.getElementById('flata');
flata.addEventListener('click', () => {
  voteContainer.style.display = 'none'
  loginDiv.style.display = 'none'
  searchContainer.style.display = 'none'
  playerContainer.style.display = 'none'
  feedback.style.display = 'none'

  blog.style.display = 'block'
  video.style.display = 'block'
})

// Event listener for the feedback form
const fbbtn = document.getElementById('fbbtn');
const fbform = document.getElementById('fbform');
feedback.style.display = 'none';
fbbtn.addEventListener('click', () => {
  // reset the form input
  fbform.reset();

  // alert the person
  alert('Thanks for the feedback!');
})

// Feedback page event listener
const fbpage = document.getElementById('fb-page');
fbpage.addEventListener('click', () => {
  voteContainer.style.display = 'none'
  blog.style.display = 'none'
  video.style.display = 'none'
  playerContainer.style.display = 'none'
  searchContainer.style.display = 'none'
  feedback.style.display = 'none'
  loginDiv.style.display = 'none'

  feedback.appendChild(fbform);
  body.appendChild(feedback);
  feedback.style.display = 'block'
})
  
// Search function and fetching the data

function fetchSearchData() {
  fetch(URL)
  .then(res => res.json())
  .then(object => {const data = object['players']
  searchPlayer(data)});
}
  
// Search function that finds a specific player
function searchPlayer(data) {
  // Get the input and button elements
  const input = document.getElementById('input');
  const search = document.getElementById('button');
  const searchCard = document.createElement('div');
  searchCard.classList.add('search-card')
  search.addEventListener('click', () => {
    voteContainer.style.display = 'none'
    loginDiv.style.display = 'none'
    playerContainer.style.display = 'none'
    blog.style.display = 'none'
    video.style.display = 'none'
    feedback.style.display = 'none'

    // Clear searchCard
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

      // Append search elements
      searchFrame.appendChild(searchCard);
      searchContainer.appendChild(searchFrame);
      body.appendChild(searchContainer);
      searchContainer.style.display = 'block'
    }
  });
}
      
fetchSearchData();
fetchAwardData();
fetchData();
});
    