const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/Thought',thoughtRoutes);
router.use('/User', UserRoutes);

module.exports = router;
