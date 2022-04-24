const fs = require("fs");
const path = require("path");
const router = require('express').Router();
const notes = require('../../Develop/db/db');

router.get('/notes', (req, res) => {
    let results = notes;
    if (results) {
        res.json(results);
    } else {
        res.json(404);
    }
    
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    notes.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, '../../Develop/db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(req.body);
});

module.exports = router;