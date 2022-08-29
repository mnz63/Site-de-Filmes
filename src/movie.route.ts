import express, { Router } from 'express';
import getById from './get.movie';

const movieRoute = Router()

movieRoute.get('/:id', async (req, res) => {

    const id = parseInt(req.params.id);
    const movie = await getById(id);
    let titleAndSubtitle = movie.title?.split(':');
    const genres = movie.genres;

    const category =  genres?.map((genre: any) =>{
        return ' ' + genre.name
    });

    const time = movie.runtime/60;
    const rate = (movie.vote_average * 10).toFixed();
    const runtime = time.toString().slice(0, 4);
    const backdrop = movie.backdrop_path;


    let currentMovie = {
        id: movie.id,
        title: titleAndSubtitle?.[0],
        subTitle: titleAndSubtitle?.[1],
        category: category,
        release_date: movie.release_date,
        rate: rate,
        overview: movie.overview,
        background: `https://image.tmdb.org/t/p/original${backdrop}`,
        runtime: runtime,
    }

    res.render('movie', currentMovie)
})

export default movieRoute