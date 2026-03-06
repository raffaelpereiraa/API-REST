import app from './app.js'

// a nossa const port pode ser uma const node js, ou, a porta 3000
const PORT = process.env.PORT || 3000

//escutar a porta 3000
app.listen(PORT, () =>{
        console.log(`O servidor estar rodando no enredeço http://localhost:${PORT}`)
})