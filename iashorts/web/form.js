import {server} from './server'

const form = document.querySelector('.form')
const input = document.querySelector('#input')
const content = document.querySelector('#content')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
 

    const videoURL = input.value
    
    if(!videoURL.includes('shorts')){
        return (content.textContent = 'Esse vídeo não é um shorts. Por favor, cole apenas vídeos shorts.')
    }

    const [_, posShorts] = videoURL.split('/shorts/')
    const [idVideo] = posShorts.split('?si')
    
    content.textContent = 'Obtendo texto do áudio...'
    const transcription = await server.get('/summary/' + idVideo)

    content.textContent = transcription.data.result
})