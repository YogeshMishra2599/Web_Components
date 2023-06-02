const pool = require('../db/pg_config');
const queries = require('../models/queries');
const path = require('path');

const imgUpload = async (req, res, next) => { 
    
    const file = req.file;
    console.log('for debugging: ', file);

    if (!file) {
        return res.status(400).json({ success: false, details: 'Please select an image file' }); 
    }

    const { path } = file;
    try {
        const response = await pool.query(queries.insertImage, [path]);
        if (response.rowCount === 0) {
            return res.status(400).json({ success: true, details: 'Something went wrong, please try again later after sometime...' }); 
        }
        return res.status(200).json({ success: true, details: 'Image uploaded successfully' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, details: err });
    }
}

const getImg = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await pool.query(queries.getImageById, [id]);
        
        if (response.rows[0] === 0) {
            return res.status(400).json({ success: true, details: 'Requested resource does not exists...' }); 
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
    imgUpload,
    getImg,
}