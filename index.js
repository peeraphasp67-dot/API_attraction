const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

// นำเข้า Routes
const attractionsRouter = require('./routes/attractions');
app.use('/attractions', attractionsRouter);

app.get('/', (req, res) => {
    res.send('Football Stadium API is running!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});