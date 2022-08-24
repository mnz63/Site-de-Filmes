const url = "https://api.themoviedb.org/3/movie/650?api_key=ec2c4a1cbbc963178f8f2453299eb6be&language=pt-BR"
const imgUrl = "https://image.tmdb.org/t/p/original/"
const filmes = [550, 650, 750, 634649, 414906, 303857, 616037, 34433, 408220, 791373, 1359]
const filmes2 = [293660, 400160, 99861, 445962, 19995, 8587, 585, 346910, 892153, 675353]
const result = []
const result2 = []


function getFilmFirstSection(){
  for(const id of filmes){
    result.push(fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec2c4a1cbbc963178f8f2453299eb6be&language=pt-BR`)
    .then(res => res.json()))
  }
  Promise.all(result).then(res=>{
    createFirstSection(res)
  })
}

function getFilmSecondSection(){
  for(const id of filmes2){
    result2.push(fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec2c4a1cbbc963178f8f2453299eb6be&language=pt-BR`)
    .then(res => res.json()))
  }
  Promise.all(result2).then(res=>{
    createSecondSection(res)
  })
}


async function createSecondSection(response){
  const secondCardsContainer = document.getElementById("secondCardsContainer")
  const data = response

  data.map((filme)=>{
    secondCardsContainer.innerHTML +=`
    <div class="card-content">
      <div class="card-background">
        <div class="card-image">
          <a href="${filme.id}" title="${filme.title}">
            <img loading="lazy" src="https://image.tmdb.org/t/p/original/${filme.poster_path}" class="poster">
          </a>
        </div>
        <div class="content">
          <h2> 
           ${filme.title}
          </h2>
          <p>
            ${filme.release_date}
          </p>
        </div>
      </div>
    </div>`
  })
  
}

async function createFirstSection(response){
    const cardsContainer = document.getElementById("cardsContainer")
    const data = response

    data.map((filme)=>{
      cardsContainer.innerHTML +=`
      <div class="card-content">
        <div class="card-background">
          <div class="card-image">
            <a href="${filme.id}" title="${filme.title}">
              <img loading="lazy" src="https://image.tmdb.org/t/p/original/${filme.poster_path}" class="poster">
            </a>
          </div>
          <div class="content">
            <h2> 
             ${filme.title}
            </h2>
            <p>
              ${filme.release_date}
            </p>
          </div>
        </div>
      </div>`
    })
    console.log(data)
}


getFilmFirstSection()
getFilmSecondSection()

