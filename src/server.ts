import express from 'express';
import path from 'path';
const app = express();
import cors from 'cors';
import movieRoute from './movie.route';
const PORT = process.env.PORT || 5000;


app.use(cors())
app.use(express.static(path.join(__dirname, '../public')));
app.set("views", path.join(__dirname, '../views'))
app.set('view engine', 'ejs');
app.use(movieRoute);


app.listen(PORT, ()=>{
    console.log('runing on port: '+PORT)
})
