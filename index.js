import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
mongoose.connect(`mongodb+srv://developerpauloricardo:developerpr@desenvolvimento.43kzr.mongodb.net/?retryWrites=true&w=majority&appName=desenvolvimento`);

const Lenda = mongoose.model('Lenda', {
    name: String,
    lenda: String,
    ano: String,
    personagem: String,
    nota: Number
})

app.get('/',  async (req, res) => {
    const lendas = await Lenda.find()
    return res.send(lendas)
})

app.post('/', async (req, res) => {
    const lenda =  new Lenda({
        name: req.body.name,
        lenda: req.body.lenda,
        ano: req.body.ano,
        personagem: req.body.personagem,
        nota: req.body.nota
    })

    await lenda.save()
    return res.send(lenda)
})

app.put('/:id', async (req, res) =>{
    const lenda = await Lenda.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        lenda: req.body.lenda,
        ano: req.body.ano,
        personagem: req.body.personagem,
        nota: req.body.nota
    },{
        new: true
    })

    return res.send(lenda)
})

app.delete('/:id', async (req,res) =>{
    const lenda = await Lenda.findByIdAndRemove(req.params.id)
    return res.send(lenda)
})

app.listen(3000, () => {
    console.log('Servidor rodando...')
})