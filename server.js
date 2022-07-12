const app = require('./src/app.js')

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`servidor rodando na porta: ${PORT}`))
