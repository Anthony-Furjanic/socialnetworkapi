const router = require('express').Router();
const {

} = require('../../controllers/ThoughtController.js');

// /api/courses
router.route('/').get(getThought).post(createThought);


module.exports = router;
