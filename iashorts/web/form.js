import { server } from './server.js'

const form = document.querySelector('.textarea')
const input = document.querySelector('#url')
const content = document.querySelector('#content')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const videoURL = input.value
    
    if(!videoURL.includes('shorts')){
        return content.textContent = 'Este vídeo não é um short.'
    }

    const [_, params] = videoURL.split('/shorts/')
    const [videoId] = params.split('?si')
    
    content.textContent = 'Obtendo texto do áudio...'

    const transcription = await server.get('/summary/' + videoId)

    content.textContent = transcription.data.result
})