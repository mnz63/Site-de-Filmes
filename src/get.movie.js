const fetch = require('cross-fetch')

function getById(id){
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec2c4a1cbbc963178f8f2453299eb6be&language=pt-BR`).then(res=> res.json())
}

module.exports = getById