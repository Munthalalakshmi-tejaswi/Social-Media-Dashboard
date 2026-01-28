const express = require('express');
const router = express.Router();

// User routes
router.get('/:id', (req, res) => {
  res.json({ message: 'Get user endpoint', userId: req.params.id });
});

router.put('/:id', (req, res) => {
  res.json({ message: 'Update user endpoint', userId: req.params.id });
});

router.get('/', (req, res) => {
  res.json({ message: 'Get all users endpoint' });
});

module.exports = router;
