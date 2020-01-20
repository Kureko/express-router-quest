const express = require('express');
const fakeTags = require('../data/tags');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
    res.json(fakeTags);
  });

router.get('/', (req, res) => {
    // If we forget { mergeParams: true }, req.params.postId will be `undefined`
    const postId = Number(req.params.postId);
    // Keep only comments whose post_id matches the postId parameter
    const postTags = fakeTags.filter((tags) => tags.post_id === postId);
    res.json(postTags);
 });

module.exports = router;
 