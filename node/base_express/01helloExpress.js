const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

let server = app.listen(9001, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('host', host);
    console.log('port', port);
});
