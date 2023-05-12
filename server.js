const {connectdb} = require('./connect');
const controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

connectdb()
    .then(()=>{console.log('db connected')})
    .catch((err)=>{console.log(err)});

app.post('/api/user', controller.insertUser);
app.post('/api/admin', controller.insertAdmin);
app.post('/api/numberplate', controller.insertNumplate);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening at post ${port}`)
})