const express = require('express')
const fs = require('fs')
const hb = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3030

const TEMPLATES = JSON.parse(fs.readFileSync("./template_data.json"))

//app.use(express.static(__dirname + '/'))
app.use(express.json())

// The getJSONData helper funtion sends the TEMPLATE data to a handlebars template.
// The data must be encoded in order to prevent characters destroying the javascript through injection.
app.engine('handlebars', hb({
	defaultLayout: 'main',
	helpers: {
		getJSONData: ()=> {
			return encodeURIComponent(JSON.stringify(TEMPLATES))
		}
	}
}))
app.set('view engine', 'handlebars')

app.get('/', (req,res) => {
	res.type('text/plain')
	res.send('Checklist Chart App: Home Page')
})

app.get('/chestpain', (req,res) => {
	// the "chest pain" chart is TEMPLATES.diagnoses[1]
	index = 0
	for (i=0; i < TEMPLATES.diagnoses.length; i++) {
		if (TEMPLATES.diagnoses[i].name == "chest pain") {
			index = i
		}
	}
	res.render('displayChart', {
		template: TEMPLATES.diagnoses[index]
		}
	)
})

app.get('/vertigo-syncope', (req,res) => {
	// the "chest pain" chart is TEMPLATES.diagnoses[1]
	index = 0
	for (i=0; i < TEMPLATES.diagnoses.length; i++) {
		if (TEMPLATES.diagnoses[i].name == "vertigo or syncope") {
			index = i
		}
	}
	res.render('displayChart', {
		template: TEMPLATES.diagnoses[index]
		}
	)
})

app.get('/headache', (req,res) => {
	// the "chest pain" chart is TEMPLATES.diagnoses[1]
	index = 0
	for (i=0; i < TEMPLATES.diagnoses.length; i++) {
		if (TEMPLATES.diagnoses[i].name == "headache") {
			index = i
		}
	}
	res.render('displayChart', {
		template: TEMPLATES.diagnoses[index]
		}
	)
})

app.get('/abdominalpain', (req,res) => {
	// the "chest pain" chart is TEMPLATES.diagnoses[1]
	index = 0
	for (i=0; i < TEMPLATES.diagnoses.length; i++) {
		if (TEMPLATES.diagnoses[i].name == "abdominal pain") {
			index = i
		}
	}
	res.render('displayChart', {
		template: TEMPLATES.diagnoses[index]
		}
	)
})

app.get('/backpain', (req,res) => {
	// the "chest pain" chart is TEMPLATES.diagnoses[1]
	index = 0
	for (i=0; i < TEMPLATES.diagnoses.length; i++) {
		if (TEMPLATES.diagnoses[i].name == "back pain") {
			index = i
		}
	}
	res.render('displayChart', {
		template: TEMPLATES.diagnoses[index]
		}
	)
})

app.listen(port, () => console.log(
	`Express started on http://143.244.178.90:${port}; press Ctrl-C to terminate.`
	)
)
