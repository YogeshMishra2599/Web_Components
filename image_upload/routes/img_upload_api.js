const express = require('express');
const router = express.Router();
const { imgUpload, getImg } = require('../controllers/img_upload_controller');
const { upload } = require('../middleware/imgUpload');

// apis
router.route('/img-upload').post(upload.single('image'), imgUpload);
router.route('/get-img/:id').get(getImg);

module.exports = router;