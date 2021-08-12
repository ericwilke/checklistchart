const express = require('express')
const fs = require('fs')
const hb = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3030

app.use(express.json())
app.engine('handlebars', hb({
	defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

//const TEMPLATES = JSON.parse(fs.readFileSync("./checklist_chart_data.json"))
const TEMPLATES = JSON.parse(fs.readFileSync("./template_data.json"))
console.log(TEMPLATES)

app.get('/', (req,res) => {
	res.type('text/plain')
	res.send('Checklist Chart App: Home Page')
})

app.get('/chestpain', (req,res) => {
	const chart = "chest pain"
	res.render('displayChart', {template: TEMPLATES})
})

app.listen(port, () => console.log(
	`Express started on http://143.244.178.90:${port}; press Ctrl-C to terminate.`
	)
)
