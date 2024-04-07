const express = require('express');
const router = express.Router();
const { post } = require('../../controllers');

router.get('/', (request, response) => {
    response.render('feed')
});

router.post('/', post.create);

module.exports = router;