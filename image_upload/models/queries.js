const insertImage = 'INSERT INTO uploaded_img (img_path) VALUES ($1)';
const getImageById = 'SELECT * FROM uploaded_img WHERE img_id = $1';

module.exports = {
    insertImage,
    getImageById,
}