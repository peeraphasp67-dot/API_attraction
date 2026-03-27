const express = require('express');
const cors = require('cors');
const attractionRouter = require('./routes/attractions');

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

// ใช้งาน Router
app.use('/attractions', attractionRouter);

app.get('/', (req, res) => {
    res.json({ 
        message: 'Attraction API is online',
        database: 'Connected to TiDB Cloud',
        endpoints: ['/attractions', '/attractions/:id']
    });
});

// สำหรับรันบนเครื่องตนเอง
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`🚀 API is running at http://localhost:${port}`);
    });
}

module.exports = app;