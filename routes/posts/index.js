const express = require('express');
const router = express.Router();

router.get('/feed', (request, response) => {
    response.send('This is the home page of the posts.')
});

module.exports = router;