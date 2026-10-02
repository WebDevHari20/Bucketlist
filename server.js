const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const DB_PATH = path.join(__dirname, 'db.json');

// Middleware
app.use(express.json());

// Block access to private files
app.use((req, res, next) => {
    const blocked = ['/db.json', '/server.js', '/package.json', '/package-lock.json', '/.gitignore'];
    if (blocked.includes(req.path.toLowerCase())) {
        return res.status(404).send('Not found');
    }
    next();
});

// Serve static assets
app.use(express.static(__dirname));

// Initialize DB if it doesn't exist
function initDB() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ wishes: [], completed: [] }, null, 2));
    }
}

function readDB() {
    initDB();
    try {
        return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
    } catch (e) {
        return { wishes: [], completed: [] };
    }
}

function writeDB(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// GET all wishes
app.get('/api/wishes', (req, res) => {
    const db = readDB();
    res.json(db.wishes || []);
});

// POST a new wish
app.post('/api/wishes', (req, res) => {
    const db = readDB();
    const { emoji, title, description, category } = req.body;

    const trimmedTitle = typeof title === 'string' ? title.trim() : '';
    const trimmedDesc = typeof description === 'string' ? description.trim() : '';

    if (!trimmedTitle || !trimmedDesc) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    const newWish = {
        id: 'wish-' + Date.now(),
        emoji: emoji || '💭',
        title: trimmedTitle.slice(0, 80),
        description: trimmedDesc.slice(0, 500),
        category: category || 'her-wish',
        accent: '#c8b6ff',
        addedBy: 'her',
        createdAt: new Date().toISOString()
    };

    if (!Array.isArray(db.wishes)) db.wishes = [];
    db.wishes.push(newWish);
    writeDB(db);
    res.status(201).json(newWish);
});

// DELETE a wish
app.delete('/api/wishes/:id', (req, res) => {
    const db = readDB();
    const targetId = String(req.params.id);
    db.wishes = (db.wishes || []).filter(w => String(w.id) !== targetId);
    // Also remove from completed items if marked complete
    db.completed = (db.completed || []).filter(i => String(i) !== targetId);
    writeDB(db);
    res.json({ success: true });
});

// GET completed items
app.get('/api/completed', (req, res) => {
    const db = readDB();
    res.json(db.completed || []);
});

// POST toggle completed
app.post('/api/completed', (req, res) => {
    const db = readDB();
    const { id } = req.body;

    if (id === undefined || id === null) {
        return res.status(400).json({ error: 'ID is required' });
    }

    if (!Array.isArray(db.completed)) db.completed = [];

    const strId = String(id);
    const existingIndex = db.completed.findIndex(item => String(item) === strId);

    if (existingIndex !== -1) {
        db.completed.splice(existingIndex, 1);
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
