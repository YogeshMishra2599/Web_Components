const express = require('express');
const router = express.Router();
const { handleImgUpload, getUploadedImage } = require('../controllers/api_controller');
const { uploadMiddleware } = require('../middleware/imgUpload');

// apis
router.route('/img-upload').post(uploadMiddleware.single('image'), handleImgUpload);
router.route('/get-img/:id').get(getUploadedImage);

module.exports = router;