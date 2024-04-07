const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('This is all the users!')
});

router.get('/:username', (request, response) => {
    response.render('profile', { username: request.params.username });
});

module.exports = router;