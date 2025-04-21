import express from 'express';


const app = express();
const port = 2900;


app.get('/', (req, resp) => {
    resp.send('Hello chief, How is it going with Node js COURSE 123!');
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})