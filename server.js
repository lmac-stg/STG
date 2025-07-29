// filepath: server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve your GeoJSON file at this endpoint
app.get('/your-backend-endpoint', (req, res) => {
    res.sendFile(path.join(__dirname, 'PointFileProjected.geojson'));
});

// Serve your index.html and other files
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});