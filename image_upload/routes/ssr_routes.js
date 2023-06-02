const express = require('express');
const router = express.Router();
const { uploadImg, getImg } = require('../controllers/ssr_controller');

// apis
router.route('/img-upload').get(uploadImg);
router.route('/get-img').get(getImg);

module.exports = router;