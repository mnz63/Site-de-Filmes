const { match } = require('assert');
const express = require('express');
const path = require('path');
const app = express();
const getById = require('./get.movie')
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.static(path.join(__dirname, '../public')));
app.set("views", path.join(__dirname, '../views'))
app.set('view engine', 'ejs');

app.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const movie = await getById(id)
    let titleAndSubtitle = movie.title.split(':')
    const genres = movie.genres
    const time = movie.runtime/60

    let currentMovie = {
        id: movie.id,
        title: titleAndSubtitle[0],
        subTitle: titleAndSubtitle[1],
        category: genres.map(genre =>{
            return ' ' + genre.name
        }),
        release_date: movie.release_date,
        rate: Math.round(movie.vote_average)*10,
        overview: movie.overview,
        director: "Tadayoshi Yamamuro",
        background: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        runtime: time.toString().slice(0, 4)
    }

    res.render('movie', currentMovie)
})


app.listen(PORT, ()=>{
    console.log('runing')
})

module.exports = getById