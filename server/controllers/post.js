const { models: { Post } } = require('../models');

module.exports = {

    create: async (req, res) => {
        if (req.body.title && req.body.postText && req.body.tag) {
            const { title, postText, tag } = req.body;

            await Post.create({
                title,
                postText,
                tag
            });

            res.render('post', { username });
        } else {
            res.send('Not added to the database!');
        }
    }

}