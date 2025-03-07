const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("servidor iniciado")
})

const alunos = [];

//GET
app.get('/alunos', (req, res) => {
    res.status(200).send({alunos :alunos})
})

//GET by ID
app.get('/alunos/:id', (req, res) => {
    const aluno = alunos.find(x => x.id == req.params.id)
    res.status(200).send(aluno)
})

//POST
app.post('/alunos', (req, res) => {
    alunos.push(req.body)
    res.status(200).send("aluno cadastrado")
})

//PUT
app.put('/alunos/:id', (req, res) => {
    const aluno = alunos.find(x=> x.id == req.params.id)
    const IDAluno = alunos.indexOf(aluno)
    alunos[IDAluno] = req.body
    res.status(200).send("aluno atualizado com sucesso")
})

//DELETE
app.delete('/alunos/:id', (req, res) => {
    const aluno = alunos.find(x => x.id == req.params.id)
    const idAluno = alunos.indexOf(aluno)
    alunos.splice(idAluno, 1)
    res.status(200).send("aluno excluido com sucesso")
})