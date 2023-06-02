const express = require('express');
const router = express.Router();
const { renderUploadImageForm, getImg } = require('../controllers/ssr_controller');

// apis
router.route('/uploads').get(renderUploadImageForm);
router.route('/get-img').get(getImg);

module.exports = router;