const path = require('path');
const router = require('express').Router();

// Route to notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'));
});
// Route to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

module.exports = router;