import { flows } from './flow';
import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => res.send(
    flows.filter(flow => flow.keywords.includes(
        (req.query.q as string).toLowerCase())
    ))
)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
