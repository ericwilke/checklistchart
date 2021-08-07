const express = require('express')
const app = express()
const port = process.env.PORT || 3030

app.get('/', (req,res) => {
	res.type('text/plain')
	res.send('Checklist Chart App')
})

app.listen(port, () => console.log(
	`Express started on http://143.244.178.90:${port}; press Ctrl-C to terminate.`
	)
)
