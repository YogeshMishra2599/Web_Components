const pool = require('../db/pg_config');
const queries = require('../models/queries');
const path = require('path');

const handleImgUpload = async (req, res, next) => { 
    
    const file = req.file;
    console.log('for debugging: ', file);

    if (!file) {
        return res.status(400).json({ success: false, details: 'Please select an image file' }); 
    }

    const { path } = file;
    try {
        const response = await pool.query(queries.insertImage, [path]);
        if (response.rowCount === 0) {
            return res.status(400).json({ success: false, details: 'Something went wrong, please try again later after sometime...' }); 
        }
        return res.status(200).json({ success: true, details: 'Image uploaded successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, details: err });
    }
}

const getUploadedImage = async (req, res, next) => {
    console.log(req.params);
    const { id } = req.params;
    console.log(id);

    try {
        const response = await pool.query(queries.getImageById, [id]);
        console.log('for debugging: ', response);
                
        if (response.rowCount === 0) {
            return res.status(400).json({ success: false, details: `Can't find the specified resource; it is possible that it may not exist...` }); 
        }

        const img_path = response.rows[0].img_path;
        const rootDirectory = process.cwd();
        const img = path.join(rootDirectory, img_path);
        
        return res.status(200).sendFile(img);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, details: err });
    }
}

module.exports = {
    handleImgUpload,
    getUploadedImage,
}