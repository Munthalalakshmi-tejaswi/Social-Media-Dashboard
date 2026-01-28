const express = require('express');
const router = express.Router();

// Post routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all posts endpoint' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create post endpoint' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get post endpoint', postId: req.params.id });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update post endpoint', postId: req.params.id });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete post endpoint', postId: req.params.id });
});

module.exports = router;
