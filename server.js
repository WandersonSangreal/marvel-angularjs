const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const workingDir = __dirname

app.use(express.static(workingDir));

app.get('/*', (request, response) => {
	response.sendFile(`${workingDir}/index.html`);
});

app.listen(PORT);
