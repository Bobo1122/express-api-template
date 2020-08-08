const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.json({message: 'How are you doing?',})
});


module.exports = router;