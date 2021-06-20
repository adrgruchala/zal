const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World");
});

//const employeeRoutes = require('./src/routes/employee.routes')
const employeeRoutes = require('./routes/employee.routes')

app.use('/api/v1/books', employeeRoutes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

