const express = require('express');
const app = express();
const PORT = 3001


app.get('/', (req, res) => {
 res.send('Hola mundo');
});

app.listen(PORT, () => {
 console.log(`listening on port ${PORT}`);
});

