const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
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
    req.body.id = uuidv4();
    notes.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, '../../Develop/db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    let newNotes = [];
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].id != req.params.id) {
           newNotes.push(notes[i]);
        } 
    }
    fs.writeFileSync(
        path.join(__dirname, '../../Develop/db/db.json'),
        JSON.stringify(newNotes, null, 2)
    );
    res.json(newNotes);
})

module.exports = router;