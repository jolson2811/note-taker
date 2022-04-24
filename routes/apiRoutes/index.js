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

module.exports = router;