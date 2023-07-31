const express = require('express');
const app = express();
const PORT = 3001
const picocolors = require('picocolors');


app.get('/', (req, res) => {
 res.send('Hola mundo');
});

app.listen(PORT, () => {
 console.log(picocolors.blue(`✔ Server running on port ${PORT}`));
});

