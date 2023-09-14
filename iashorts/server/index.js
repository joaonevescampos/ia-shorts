import cors from 'cors'
import express from 'express'

import { donwload } from './download.js'


const app = express()
app.use(cors())

app.get('/summary/:id', (request, response) => {
    donwload(request.params.id)
    response.json({result: 'Download do video feito com sucesso!'})
})

app.listen(5173, () => console.log('Servidor funcionou'))