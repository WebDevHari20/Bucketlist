const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const DB_PATH = path.join(__dirname, 'db.json');

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Initialize DB if it doesn't exist
function initDB() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ wishes: [], completed: [] }, null, 2));
    }
}

function readDB() {
    initDB();
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

function writeDB(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// GET all wishes
app.get('/api/wishes', (req, res) => {
    const db = readDB();
    res.json(db.wishes);
});

// POST a new wish
app.post('/api/wishes', (req, res) => {
    const db = readDB();
    const { emoji, title, description, category } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    const newWish = {
        id: 'wish-' + Date.now(),
        emoji: emoji || '💭',
        title,
        description,
        category: category || 'her-wish',
        accent: '#ff69b4',
        addedBy: 'her',
        createdAt: new Date().toISOString()
    };

    db.wishes.push(newWish);
    writeDB(db);
    res.status(201).json(newWish);
});

// DELETE a wish
app.delete('/api/wishes/:id', (req, res) => {
    const db = readDB();
    db.wishes = db.wishes.filter(w => w.id !== req.params.id);
    writeDB(db);
    res.json({ success: true });
});

// GET completed items
app.get('/api/completed', (req, res) => {
    const db = readDB();
    res.json(db.completed);
});

// POST toggle completed
app.post('/api/completed', (req, res) => {
    const db = readDB();
    const { id } = req.body;

    if (db.completed.includes(id)) {
        db.completed = db.completed.filter(i => i !== id);
    } else {
        db.completed.push(id);
    }

    writeDB(db);
    res.json(db.completed);
});

app.listen(PORT, () => {
    initDB();
    console.log(`\n  💕 Love Bucket List running at http://localhost:${PORT}\n`);
});
